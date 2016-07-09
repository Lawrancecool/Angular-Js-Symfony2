<?php
/**
 * Created by PhpStorm.
 * User: lawrance
 * Date: 27/6/16
 * Time: 11:20 AM
 */

namespace UserBundle\Listener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\FilterResponseEvent;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Security\Core\SecurityContextInterface;

class AddUserInfoHeaderListener implements EventSubscriberInterface {

    private $securityContext;

    public function __construct(SecurityContextInterface $securityContext) {
        $this->securityContext = $securityContext;
    }

    public function onKernelResponse(FilterResponseEvent $event) {
        if (HttpKernelInterface::MASTER_REQUEST !== $event->getRequestType()) {
            return;
        }

        $response = $event->getResponse();
        $request = $event->getRequest();

        $session = $request->getSession();
        $userLanguage = $request->headers->get('accept-language');
        $userLanguage = explode(',', $userLanguage);

        $isLogin = ($session->get('isLogin')) ? $session->get('isLogin') : '';

       /* if ($this->securityContext->getToken() != null ) {*/
            $token = $this->securityContext->getToken();

            if( $this->securityContext->isGranted('IS_AUTHENTICATED_REMEMBERED') )            {
                $user = $this->securityContext->getToken()->getUser();
                $response->headers->set('X-UserId', $token->getUser()->getId());
                $response->headers->set('X-Username', $token->getUser()->getUsername());
                $response->headers->set('X-SessionId', crypt('cs4' . $session->getId() . 'end', '1234567890987654321'));
                $response->headers->set('X-UserTimezone', $request->headers->get('Timezone'));
            }
    }

    public static function getSubscribedEvents()
    {
        return array(
            KernelEvents::RESPONSE => array('onKernelResponse', -128),
        );
    }
}
