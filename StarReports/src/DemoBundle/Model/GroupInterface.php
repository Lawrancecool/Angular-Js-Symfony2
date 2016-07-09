<?php

/**
 * Created by PhpStorm.
 * User: lawrance
 * Date: 2/6/16
 * Time: 1:14 PM
 */

namespace DemoBundle\Model;

interface GroupInterface
{
    /**
     * @param string $role
     *
     * @return self
     */
    public function addRole($role);

    /**
     * @return integer
     */
    public function getId();

    /**
     * @return string
     */
    public function getName();

    /**
     * @param string $role
     *
     * @return boolean
     */
    public function hasRole($role);

    /**
     * @return array
     */
    public function getRoles();

    /**
     * @param string $role
     *
     * @return self
     */
    public function removeRole($role);

    /**
     * @param string $name
     *
     * @return self
     */
    public function setName($name);

    /**
     * @param array $roles
     *
     * @return self
     */
    public function setRoles(array $roles);
}
