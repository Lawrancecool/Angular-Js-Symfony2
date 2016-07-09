<?php
/**
 * Created by PhpStorm.
 * User: lawrance
 * Date: 11/6/16
 * Time: 9:24 PM
 */

namespace DemoBundle\Entity;


use Doctrine\ORM\Mapping as ORM;
use DemoBundle\Model\User as BaseUser;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;



    public function __construct()
    {
        parent::__construct();
        // your own logic
    }
}
