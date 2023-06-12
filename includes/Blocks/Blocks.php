<?php

return apply_filters( 'zolo_blocks_list_data', [
    'advanced-button' => [
        'name'             => 'advanced-button',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/advanced-button/block.json',
        'frontend-styles'  => ['zolo-fontawesome'],
        'frontend-scripts' => ['zolo-advanced-button-frontend']
    ],
    'advanced-heading' => [
        'name'             => 'advanced-heading',
        'metadata'         => trailingslashit( ZOLO_DIR_PATH ) . 'blocks/advanced-heading/block.json',
        'frontend-styles'  => ['zolo-fontawesome'],
        'frontend-scripts' => false
    ]
]);
