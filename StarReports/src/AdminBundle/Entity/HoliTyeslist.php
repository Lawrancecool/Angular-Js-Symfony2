<?php

namespace AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * HoliTyeslist
 *
 * @ORM\Table(name="holiday_type")
 * @ORM\Entity(repositoryClass="AdminBundle\Repository\HoliTyeslistRepository")
 */
class HoliTyeslist
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
     * @ORM\Column(name="typeslist", type="string", length=255)
     */
    private $typeslist;


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
     * Set typeslist
     *
     * @param string $typeslist
     *
     * @return HoliTyeslist
     */
    public function setTypeslist($typeslist)
    {
        $this->typeslist = $typeslist;

        return $this;
    }

    /**
     * Get typeslist
     *
     * @return string
     */
    public function getTypeslist()
    {
        return $this->typeslist;
    }
}

