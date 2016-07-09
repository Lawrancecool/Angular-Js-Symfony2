<?php

namespace UserBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\SecurityContextInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use UserBundle\Form\UserType;
use UserBundle\Entity\User;

class UserController extends Controller
{
    /**
     * @Route("/", name="admin_demo")
     * @Template()
     */
    public function indexAction()
    {
        return $this->redirectToRoute('login');
    }
    /**
     * @Route("/admin_home_layout", name="admin_home_layout")
     * @Template()
     */
    public function layoutAction()
    {
        $user = $this->getUser();
        if($user==null)
        {
            return $this->redirectToRoute('login');
        }
        else
        {
            return $this->render('UserBundle:Layout:homelayout.html.twig');
        }


    }
    /**
     * @Route("/admin_home", name="admin_home")
     * @Template()
     */
    public function homeAction()
    {

        return $this->render('UserBundle:Admin:home.html.twig');
    }
    /**
     * @Route("/form_new", name="form_new")
     * @Template()
     */
    public function newformAction()
    {

        return $this->render('UserBundle:Default:demo.html.twig');
    }

    /**
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request)
    {
        $response = new JsonResponse();
        $user = $this->getUser();
        $session = $request->getSession();
        if( $this->container->get('security.context')->isGranted('IS_AUTHENTICATED_REMEMBERED') )
        {
            $user = $this->getUser();
            $userId = $user->getId();

            $response->setData(array('location' => '/loginsucess.adminhome','userid'=>$userId));
            return $response;
        }

        // get the login error if there is one
        if ($request->attributes->has(SecurityContextInterface::AUTHENTICATION_ERROR))
        {
            $error = $request->attributes->get(
                SecurityContextInterface::AUTHENTICATION_ERROR
            );
            $response->setData(array('errormsg' => 'Username and Password Mismatch!!!!'));
            return $response;
        }
        elseif (null !== $session && $session->has(SecurityContextInterface::AUTHENTICATION_ERROR))
        {
            $error = $session->get(SecurityContextInterface::AUTHENTICATION_ERROR);
            $session->remove(SecurityContextInterface::AUTHENTICATION_ERROR);
            $response->setData(array('errormsg' => 'Username and Password Mismatch!!!!'));
            return $response;
        }
        else
        {
            $error='';
        }



        return $this->render(
            'UserBundle:Admin:loginscreen.html.twig',
            array(
                'error'         => $error,
            )
        );
    }
    /**
     * @Route("/login_check", name="login_check")
     */
    public function logincheckAction(Request $request)
    {

    }
    /**
     * @Route("/logout", name="logout")
     */
    public function loginoutAction(Request $request)
    {

    }
    /**
     * @Route("/add_employee", name="add_employee")
     */
    public function registerAction(Request $request)
    {
        // 1) build the form

        $em = $this->getDoctrine()->getManager();
        $user = new User();
        $form = $this->createForm(UserType::class, $user);

        // 2) handle the submit (will only happen on POST)
        $form->handleRequest($request);
        if ($form->isSubmitted()) {

            // 3) Encode the password (you could also do this via Doctrine listener)
            $password = $this->get('security.password_encoder')
                ->encodePassword($user, $user->getPlainPassword());
            $user->setPassword($password);
            $user->setIsActive(true);
            // $user->setRoles($user->getRoles());

            // 4) save the User!
            $user->setUsername($user->getFname());
            $user->setRoleid(0);
            $em->persist($user);
            $em->flush();

            $response = new JsonResponse();
            $response->setData(array('location' => '/loginsucess.showusers'));
            return $response;
        }
        $alldesig = $em->getRepository('AdminBundle:Designation')->findAll();
        $alldept = $em->getRepository('AdminBundle:Department')->findAll();

        return $this->render(
            'UserBundle:Admin:register.html.twig',
            array('form' => $form->createView(),'designations'=>$alldesig,'departments'=>$alldept)
        );
    }
    /**
     * Displays a form to edit an existing User entity.
     *
     * @Route("/{id}/edit", name="user_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $users = $em->createQueryBuilder()
            ->select('a.id','a.username','a.email','a.isActive','a.roles','a.mobile','b.name AS deptname','b.id As deptid','c.name AS designame','c.id As desigid')
            ->from('UserBundle:User', 'a')
            ->join('AdminBundle:Department', 'b','WITH', 'b.id = a.deptid')
            ->join('AdminBundle:Designation', 'c','WITH', 'c.id = a.desigid')
            ->andwhere('a.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getResult();
        $response=new JsonResponse();
        $response->setData(array('userlist'=>$users));
        return $response;
    }
    /**
     * Displays a form to edit an existing User entity.
     *
     * @Route("/{userid}/userstatus_change", name="user_status_change")
     * @Method({"GET", "POST"})
     */
    public function userstatus_changeAction(Request $request,$userid)
    {
        // $deleteForm = $this->createDeleteForm($user);
        $response=new JsonResponse();
        try
        {
            $em = $this->getDoctrine()->getManager();
            $user = $em->getRepository('UserBundle:User')->find($userid);
            $userstatus=$user->getIsActive();

            if($userstatus==true)
            {
                $user->setIsActive(false);
                $response->setData(array('status_inactive'=>'User Deactived..'));
            }
            else
            {
                $user->setIsActive(true);
                $response->setData(array('status_active'=>'User Activated..'));
            }
            $em->flush();
            return $response;
        }
        catch(\Exception $e){
            $info = $e->getMessage();
            $response->setData(array('status_msg'=>'userupdate'));
            return $response;

        }
    }
    /**
     * @Route("/show_user_template", name="show_user_template")
     * @Template()
     */
    public function user_list_templateAction()
    {
        return $this->render('UserBundle:Admin:listallusers.html.twig');
    }
    /**
     * Creates a form to delete a User entity.
     *
     * @param User $user The User entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(User $user)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('user_delete', array('id' => $user->getId())))
            ->setMethod('DELETE')
            ->getForm()
            ;
    }
    /**
     * @Route("/add_employee_new", name="createuser")
     */
    public function add_registerAction(Request $request)
    {
        // 1) build the form
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $em = $this->getDoctrine()->getManager();
        $parmeters=$request->request->get('reg');
        //$password = $this->get('security.password_encoder')
        //   ->encodePassword($user, $parmeters['password']);
        $user->setPassword( $parmeters['password']);
        $user->setEmail($parmeters['email']);
        $newdeptid = $em->getRepository('AdminBundle:Department')->findOneBy(array('id' => $parmeters['dept']));
        $desigid = $em->getRepository('AdminBundle:Designation')->findOneBy(array('id' => $parmeters['desigid']));
        $user->setDeptid($newdeptid);
        $user->setDesigid($desigid);
        $user->setMobile($parmeters['phone']);
        $user->setUsername($parmeters['fname']);
        $user->setFname($parmeters['fname']);
        $user->setLname($parmeters['lname']);
        // $user->setRoles($user->getRoles());

        $em->persist($user);
        $em->flush();
        $response = new JsonResponse();
        $response->setData(array('location' => '/loginsucess.addemployee'));
        return $response;
    }
}
