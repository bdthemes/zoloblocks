<?php

namespace Zolo\Blocks;

use Zolo\Blocks\PostGrid;
use Zolo\Traits\SingletonTrait;
use Zolo\API\GetPostsV1;

class BlockControl
{
    use SingletonTrait;

    public function __construct()
    {
        new GetPostsV1();
        new PostGrid();
    }
}
