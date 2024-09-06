<?php

return apply_filters('zolo_extensions_list_data', [
    'floating_animation' => [
        'name'             => 'floating_animation',
        'metadata'         => trailingslashit(ZOLO_DIR_PATH) . 'extensions/floating_animations/block.json',
        'frontend-styles'  => ['zolo-fontawesome', 'zolo-block-common-style'],
        'frontend-scripts' => false
    ],
]);
