<?php

namespace OCA\EHR\Controller;

use OCP\AppFramework\Controller;
use OCP\IRequest;
use OCP\ILogger;

use OCA\EHR\Service\MailService;

/**
 * Class MailController
 *
 * @package OCA\EHR\Controller
 */
class MailController extends Controller {
    public function __construct(ILogger $logger, string $AppName, IRequest $request, MailService $service) {
        parent::__construct($AppName, $request);
        $this->logger = $logger;
        $this->service = $service;
    }

    /**
     * @NoAdminRequired
     * @NoCSRFRequired
     */
	public function requestdata(string $fromName, string $to, string $body) {
	    return $this->service->sendRequestDataMail($fromName, $to, $body);
    }
}
