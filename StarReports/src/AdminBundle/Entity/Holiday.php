<?php

namespace AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Holiday
 *
 * @ORM\Table(name="holiday")
 * @ORM\Entity(repositoryClass="AdminBundle\Repository\HolidayRepository")
 */
class Holiday
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")y
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255)
     */
    private $description;
    /**
     * @var \string
     *
     * @ORM\Column(name="dates", type="string")
     */
    private $dates ;
    /**
     * @var \string
     *
     * @ORM\Column(name="weekday", type="string")
     */
    private $weekday;

    /**
     * @var string
     * @ORM\ManyToOne(targetEntity="AdminBundle\Entity\HoliTyeslist")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="holiday_types", referencedColumnName="id")
     * })
     */
    private $holiday_types;


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
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return string
     */
    public function getDates()
    {
        return $this->dates;
    }

    /**
     * @param string $dates
     */
    public function setDates($dates)
    {
        $this->dates = $dates;
    }

    /**
     * @return string
     */
    public function getWeekday()
    {
        return $this->weekday;
    }

    /**
     * @param string $weekday
     */
    public function setWeekday($weekday)
    {
        $this->weekday = $weekday;
    }

    /**
     * @return string
     */
    public function getHolidayTypes()
    {
        return $this->holiday_types;
    }

    /**
     * @param string $holiday_types
     */
    public function setHolidayTypes($holiday_types)
    {
        $this->holiday_types = $holiday_types;
    }



}

