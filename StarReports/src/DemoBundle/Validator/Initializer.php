<?php

/*
 * This file is part of the FOSUserBundle package.
 *
 * (c) FriendsOfSymfony <http://friendsofsymfony.github.com/>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace DemoBundle\Validator;

use DemoBundle\Model\UserInterface;
use DemoBundle\Model\UserManagerInterface;
use Symfony\Component\Validator\ObjectInitializerInterface;

/**
 * Automatically updates the canonical fields before validation.
 *
 * @author Christophe Coevoet <stof@notk.org>
 */
class Initializer implements ObjectInitializerInterface
{
    private $userManager;

    public function __construct(UserManagerInterface $userManager)
    {
        $this->userManager = $userManager;
    }

    public function initialize($object)
    {
        if ($object instanceof UserInterface) {
            $this->userManager->updateCanonicalFields($object);
        }
    }
}
