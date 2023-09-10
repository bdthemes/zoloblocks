<?php

$date = '';

if (!empty($settings['showMeta'])) {
    $date .= sprintf(
        '<div class="zolo-post-date">
            <div class="zolo-post-dateTime">
                %1$s
                <span>,</span>
                %2$s
            </div>
        </div>',
        $result->date,
        $reading_time = 1,
    );
}

return $date;
