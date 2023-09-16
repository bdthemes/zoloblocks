<?php

namespace Zolo\Blocks;

abstract class PostBlock
{
    protected static $default_attributes = array(
        'titleTag' => 'h2',
        'showTitle' => true,
        'showThumbnail' => true,
        'showAuthor' => true,
        'showMeta' => true,
        'showCategory' => true
    );

    abstract public function get_default_attributes();

    public function wordcount($phrase, $max_words)
    {
        $phrase_array = explode(' ', $phrase);
        if (count($phrase_array) > $max_words && $max_words >= 0) {
            $phrase = implode(' ', array_slice($phrase_array, 0, $max_words));
        }
        return strip_shortcodes($phrase);
    }
}
