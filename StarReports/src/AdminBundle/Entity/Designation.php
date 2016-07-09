<?php

namespace AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Designation
 *
 * @ORM\Table(name="designation")
 * @ORM\Entity(repositoryClass="AdminBundle\Repository\DesignationRepository")
 */
class Designation
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     */
    private $name;

    /**
     * @var int
     *
     * @ORM\Column(name="number_employees", type="integer", nullable=true)
     */
    private $numberEmployee;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Designation
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return int
     */
    public function getNumberEmployee()
    {
        return $this->numberEmployee;
    }

    /**
     * @param int $numberEmployee
     */
    public function setNumberEmployee($numberEmployee)
    {
        $this->numberEmployee = $numberEmployee;
    }


}

