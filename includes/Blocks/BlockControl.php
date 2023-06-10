<?php

namespace Zolo\Blocks;

use Zolo\Blocks\PostGrid;
use Zolo\Traits\SingletonTrait;

class BlockControl
{
    use SingletonTrait;

    public function __construct()
    {
        new PostGrid();
    }
}
