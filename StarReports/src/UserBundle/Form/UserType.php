<?php

namespace UserBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('username')
            ->add('lname')
            ->add('fname')
            ->add('password','password')
            ->add('email')
            ->add('isActive')
            ->add('mobile')
            ->add('plainPassword','password')
            ->add('roles')
            ->add('desigid','entity', array(
                'required' => true,
                'class' => 'AdminBundle\Entity\Designation',
                'property' => 'name',
                'query_builder' => function($er){
                    return $er  -> createQueryBuilder('a');
                },
                'empty_value' =>'--Select--', ))
            ->add('deptid','entity', array(
                'required' => true,
                'class' => 'AdminBundle\Entity\Department',
                'property' => 'name',
                'query_builder' => function($er){
                    return $er  -> createQueryBuilder('a');
                },
                'empty_value' =>'--Select--', ))
        ;
    }
    
    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'UserBundle\Entity\User'
        ));
    }
}
