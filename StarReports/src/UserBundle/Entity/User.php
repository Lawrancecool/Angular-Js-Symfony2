<?php

namespace UserBundle\Entity;

use AdminBundle\Entity\Department;
use AdminBundle\Entity\Designation;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Table(name="app_users")
 * @ORM\Entity(repositoryClass="UserBundle\Entity\UserRepository")
 */
class User implements UserInterface, \Serializable
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=25, unique=true)
     */
    private $username;
    /**
     * @ORM\Column(type="string", length=25, unique=false)
     */
    private $lname;
    /**
     * @ORM\Column(type="string", length=25, unique=false)
     */
    private $fname;

    /**
     * @ORM\Column(type="string", length=64)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=60, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(name="is_active", type="boolean", unique=false)
     */
    private $isActive;
    /**
     * @var integer
     *
     * @ORM\Column(name="mobile", type="integer", unique=false)
     */
    private $mobile;
    /**
     * @var integer
     *
     * @ORM\Column(name="roleid", type="integer", length=75, unique=false)
     */
    private $roleid;
    /**
     * @ORM\Column(type="array")
     */
    private $roles = array();
    /**
     * @Assert\NotBlank()
     * @Assert\Length(max=4096)
     */
    private $plainPassword;
    /**
     * @var string
     * @ORM\ManyToOne(targetEntity="AdminBundle\Entity\Designation")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="desigid", referencedColumnName="id")
     * })
     */
    private $desigid;
    /**
     * @var string
     * @ORM\ManyToOne(targetEntity="AdminBundle\Entity\Department")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="deptid", referencedColumnName="id")
     * })
     */
    private $deptid;

    public function __construct()
    {
        $this->isActive = true;
// may not be needed, see section on salt below
// $this->salt = md5(uniqid(null, true));
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function getSalt()
    {
// you *may* need a real salt depending on your encoder
// see section on salt below
        return null;
    }

    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @return mixed
     */
    public function getRoles()
    {
        $roles = $this->roles;
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    /**
     * @param mixed $roles
     */
    public function setRoles($roles)
    {
        $roles = $this->roles;
        $roles[] = 'ROLE_USER';
        $this->roles = $roles;
    }


    public function eraseCredentials()
    {
    }

    /** @see \Serializable::serialize() */
    public function serialize()
    {
        return serialize(array(
            $this->id,
            $this->username,
            $this->password,
// see section on salt below
// $this->salt,
        ));
    }

    /** @see \Serializable::unserialize() */
    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->username,
            $this->password,
// see section on salt below
// $this->salt
            ) = unserialize($serialized);
    }


    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * @return mixed
     */
    public function getIsActive()
    {
        return $this->isActive;
    }

    /**
     * @param mixed $isActive
     */
    public function setIsActive($isActive)
    {
        $this->isActive = $isActive;
    }

    /**
     * @param mixed $username
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * @return mixed
     */
    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    /**
     * @param mixed $plainPassword
     */
    public function setPlainPassword($plainPassword)
    {
        $this->plainPassword = $plainPassword;
    }

    /**
     * @return string
     */
    public function getDeptid()
    {
        return $this->deptid;
    }


    /**
     * Set $deptid
     *
     * @param string $deptid
     * @return Department
     */
    public function setDeptid($deptid)
    {
        $this->deptid = $deptid;
    }

    /**
     * @return string
     */
    public function getDesigid()
    {
        return $this->desigid;
    }


    /**
     * Set $desigid
     *
     * @param string $desigid
     * @return Designation
     */
    public function setDesigid($desigid)
    {
        $this->desigid = $desigid;
    }


    /**
     * @return mixed
     */
    public function getMobile()
    {
        return $this->mobile;
    }

    /**
     * @param mixed $mobile
     */
    public function setMobile($mobile)
    {
        $this->mobile = $mobile;
    }

    /**
     * @return mixed
     */
    public function getLname()
    {
        return $this->lname;
    }

    /**
     * @param mixed $lname
     */
    public function setLname($lname)
    {
        $this->lname = $lname;
    }

    /**
     * @return mixed
     */
    public function getFname()
    {
        return $this->fname;
    }

    /**
     * @param mixed $fname
     */
    public function setFname($fname)
    {
        $this->fname = $fname;
    }

    /**
     * @return mixed
     */
    public function getRoleid()
    {
        return $this->roleid;
    }

    /**
     * @param mixed $roleid
     */
    public function setRoleid($roleid)
    {
        $this->roleid = $roleid;
    }




}
