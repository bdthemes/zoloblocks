<?php

/**
 * ZoloBlocks Pro Enqueues.
 */

namespace Zolo\Extensions;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (!defined('ABSPATH')) exit;

class ExtensionsLoader {
    use SingletonTrait;

    public function __construct() {
        $this->load_classes();
    }

    public function load_classes() {
        Particles::getInstance();
        BackgroundVideo::getInstance();
        AI::getInstance();
        ExportPattern::getInstance();
        ImportPattern::getInstance();
        ShapeDivider::getInstance();
    }
}
