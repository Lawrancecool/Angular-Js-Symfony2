<?php

/**
 * Created by PhpStorm.
 * User: lawrance
 * Date: 2/6/16
 * Time: 1:24 PM
 */
namespace UserBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use UserBundle\Entity\User;

class LoadUserData implements FixtureInterface
{
    public function load(ObjectManager $manager)
    {
        $admin = new User();
        $admin->setUsername('admin');
        $admin->setPassword('test');
        $admin->setRoles(array('ROLE_ADMIN'));
        $admin->setEmail('admin@gmail.com');
        $admin->setLname('test1');
        $admin->setFname('test2');
        $admin->setMobile(9790584839);
        $admin->setRoleid(1);


        $manager->persist($admin);

        $manager->flush();
    }
}