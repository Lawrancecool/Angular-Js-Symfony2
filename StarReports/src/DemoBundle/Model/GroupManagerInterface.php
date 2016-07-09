<?php

/**
 * Created by PhpStorm.
 * User: lawrance
 * Date: 2/6/16
 * Time: 1:14 PM
 */

namespace DemoBundle\Model;

/**
 * Interface to be implemented by group managers. This adds an additional level
 * of abstraction between your application, and the actual repository.
 *
 * All changes to groups should happen through this interface.
 *
 */
interface GroupManagerInterface
{
    /**
     * Returns an empty group instance.
     *
     * @param string $name
     *
     * @return GroupInterface
     */
    public function createGroup($name);

    /**
     * Deletes a group.
     *
     * @param GroupInterface $group
     *
     * @return void
     */
    public function deleteGroup(GroupInterface $group);

    /**
     * Finds one group by the given criteria.
     *
     * @param array $criteria
     *
     * @return GroupInterface
     */
    public function findGroupBy(array $criteria);

    /**
     * Finds a group by name.
     *
     * @param string $name
     *
     * @return GroupInterface
     */
    public function findGroupByName($name);

    /**
     * Returns a collection with all user instances.
     *
     * @return \Traversable
     */
    public function findGroups();

    /**
     * Returns the group's fully qualified class name.
     *
     * @return string
     */
    public function getClass();

    /**
     * Updates a group.
     *
     * @param GroupInterface $group
     *
     * @return void
     */
    public function updateGroup(GroupInterface $group);
}
