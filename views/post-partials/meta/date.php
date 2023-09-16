<?php

$date = '';

if (!empty($settings['showMeta'])) {
    $date .= sprintf(
        '<div class="zolo-post-date">
            <div class="zolo-post-dateTime">
                %1$s
                <span>,</span>
                %2$s %3$s
            </div>
        </div>',
        $result->date,
        $result->reading_time,
        __('Min Read', 'zolo-blocks')
    );
}

return $date;
