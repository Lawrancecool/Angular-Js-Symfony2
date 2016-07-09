<?php

/**
 * Created by PhpStorm.
 * User: lawrance
 * Date: 2/6/16
 * Time: 1:14 PM
 */

namespace DemoBundle\Model;


abstract class GroupManager implements GroupManagerInterface
{
    /**
     * {@inheritDoc}
     */
    public function createGroup($name)
    {
        $class = $this->getClass();

        return new $class($name);
    }
    /**
     * {@inheritDoc}
     */
    public function findGroupByName($name)
    {
        return $this->findGroupBy(array('name' => $name));
    }
}
