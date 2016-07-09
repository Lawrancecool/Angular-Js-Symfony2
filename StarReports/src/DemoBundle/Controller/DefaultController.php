<?php

namespace DemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\SecurityContextInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use UserBundle\Form\UserType;

class DefaultController extends Controller
{

    /**
     * @Route("/demo1", name="demo1")
     * @Template()
     */
    public function demo1Action()
    {
        return $this->render('DemoBundle:Default:demo1.html.twig');
    }
    /**
     * @Route("/demo2", name="demo2")
     * @Template()
     */
    public function demo2Action()
    {
        return $this->render('DemoBundle:Default:demo2.html.twig');
    }
}
