<?php

namespace AdminBundle\Controller;

use AdminBundle\Entity\Department;
use AdminBundle\Entity\Designation;
use AdminBundle\Entity\Holiday;
use AdminBundle\Form\DepartmentType;
use AdminBundle\Form\DesignationType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class AdminController extends Controller
{
    /**
     * @Route("/adddept", name="add_dept")
     * @Template()
     */
    public function adddeptAction(Request $request)
    {
        $response = new JsonResponse();
        $dept = new Department();
        $form = $this->createForm(DepartmentType::class, $dept);

        // 2) handle the submit (will only happen on POST)
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            $dept->setNumberEmployees(0);
            $em->persist($dept);
            $em->flush();
            $response->setData(array('location' => '/loginsucess.showalldept'));
            return $response;

        }

        return $this->render(
            'AdminBundle:Department:new.html.twig',
            array('form' => $form->createView())
        );
    }

    /**
     * @Route("/showalldept", name="showall_dept")
     * @Template()
     */
    public function showall_deptAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $alldept = $em->getRepository('AdminBundle:Department')->findAll();

        return $this->render('AdminBundle:Department:index.html.twig', array(
            'departments' => $alldept,
        ));
    }

    /**
     * @Route("/adddesig", name="adddesig")
     * @Template()
     */
    public function adddesigAction(Request $request)
    {
        $response = new JsonResponse();
        $desig = new Designation();
        $form = $this->createForm(DesignationType::class, $desig);

        // 2) handle the submit (will only happen on POST)
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            $desig->setNumberEmployee(0);
            $em->persist($desig);
            $em->flush();
            $response->setData(array('location' => '/loginsucess.showall_desig'));
            return $response;

        }

        return $this->render(
            'AdminBundle:Designation:new.html.twig',
            array('form' => $form->createView())
        );
    }

    /**
     * @Route("/showalldesig", name="showall_desig")
     * @Template()
     */
    public function showall_desigAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $alldesig = $em->getRepository('AdminBundle:Designation')->findAll();

        return $this->render('AdminBundle:Designation:index.html.twig', array(
            'designations' => $alldesig,
        ));
    }

    /**
     * @Route("/showall_user", name="showall_user")
     * @Template()
     */
    public function showall_userAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $users = $em->createQueryBuilder()
            ->select('a.id','a.username','a.email','a.isActive','a.roles','a.mobile','b.name AS deptname','c.name AS designame')
            ->from('UserBundle:User', 'a')
            ->join('AdminBundle:Department', 'b','WITH', 'b.id = a.deptid')
            ->join('AdminBundle:Designation', 'c','WITH', 'c.id = a.desigid')
            ->where('a.roleid = :rolestatus')
            ->setParameter('rolestatus', 0)
            ->getQuery()
            ->getResult();
        $response=new JsonResponse();
        $response->setData(array('userlist'=>$users));
        return $response;
    }
    /**
     * @Route("/{userid}/edit_user", name="edit_user")
     * @Template()
     */
    public function edit_userAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $users = $em->createQueryBuilder()
            ->select('a')
            ->from('UserBundle:User', 'a')
            ->where('a.roleid = :rolestatus')
            ->setParameter('rolestatus', 0)
            ->getQuery()
            ->getResult();
        $response = new JsonResponse();
        $response->setData(array($users));
        return $this->render('UserBundle:Admin:listallusers.html.twig', array(
            'users' => $users,
        ));
    }

    /**
     * @Route("/showall_holiday", name="showall_holiday")
     * @Template()
     */
    public function showall_holidayAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
       // $holidays = $em->getRepository('AdminBundle:Holiday')->findAll();
        $holidays = $em->createQueryBuilder()
            ->select('a.typeslist', 'b.description','b.dates','b.weekday')
            ->from('AdminBundle:HoliTyeslist', 'a')
            ->join('AdminBundle:Holiday', 'b', 'WITH', 'b.holiday_types = a.id')
            ->getQuery()
            ->getResult();
        return $this->render('AdminBundle:Holiday:index.html.twig', array(
            'holidays' => $holidays,
        ));
    }

    /**
     * @Route("/newholiday", name="newholiday")
     * @Template()
     */
    public function newholidayAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $holidays_type = $em->createQueryBuilder()
            ->select('a.id','a.typeslist')
            ->from('AdminBundle:HoliTyeslist', 'a')
            ->getQuery()
            ->getResult();
        return $this->render('AdminBundle:Holiday:new.html.twig', array(
            'holidays_type' => $holidays_type,
        ));
    }

    /**
     * @Route("/addnewholiday", name="addnewholiday")
     * @Template()
     */
    public function addnewholidayAction(Request $request)
    {
        $response = new JsonResponse();
        $holidayobject = new Holiday();
        $holidays = $request->request->get('holiday');
        $em = $this->getDoctrine()->getManager();
        $holidayobject->setDescription($holidays['description']);
        $objectholiday_type = $em->getRepository('AdminBundle:HoliTyeslist')->findOneBy(array('id' => $holidays['holiday_type']));
        $holidayobject->setHolidayTypes($objectholiday_type);
        $sdates = $holidays['sdate'];
        $enddate = $holidays['enddate'];
        $weekdays=array();
        $dates=array();
        if($enddate!="")
        {

            $from_date = new \DateTime($sdates);
            $to_date = new \DateTime($enddate);

            for ($date = $from_date; $date <= $to_date; $date->modify('+1 day'))
            {
                $result = $date->format('Y-m-d H:i:s');
                $finaldate=$date->format('d-m-Y');
                $weekdaysname=date("l", strtotime($result));
                array_push($weekdays,$weekdaysname);
                array_push($dates,$finaldate);

            }
        }
        else
        {
            $from_date = new \DateTime($sdates);
            $to_date = new \DateTime($sdates);
            for ($date = $from_date; $date <= $to_date; $date->modify('+1 day'))
            {
                $result = $date->format('Y-m-d H:i:s');
                $finaldate=$date->format('d-m-Y');
                $weekdaysname=date("l", strtotime($result));
                array_push($weekdays,$weekdaysname);
                array_push($dates,$finaldate);
            }

        }

        $holidayobject->setDates(implode(',',$dates));
        $holidayobject->setWeekday(implode(',',$weekdays));
        $em->persist($holidayobject);
        $em->flush();
        $response->setData(array('location' => '/loginsucess.showall_holiday'));
        return $response;

    }
}
