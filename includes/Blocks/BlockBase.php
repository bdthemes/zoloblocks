<?php

namespace Zolo\Blocks;

abstract class BlockBase
{
    protected $frontend_styles  = ['zolo-blocks-frontend-style'];
    protected $frontend_scripts = [];

    abstract public function get_name();

    public function __construct()
    {
        add_action('init', [$this, 'register_block']);
    }

    abstract public function register_block();

    public function load_frontend_styles()
    {
        if (empty($this->frontend_styles)) {
            return;
        }

        foreach ($this->frontend_styles as $handle) {
            wp_enqueue_style($handle);
        }
    }

    public function load_frontend_scripts()
    {
        if (empty($this->frontend_scripts)) {
            return;
        }

        foreach ($this->frontend_scripts as $handle) {
            wp_enqueue_script($handle);
        }
    }

    public function load_scripts()
    {

        $this->frontend_styles = apply_filters("zolo_frontend_styles/{$this->get_name()}", $this->frontend_styles);
        $this->frontend_scripts = apply_filters("zolo_frontend_scripts/{$this->get_name()}", $this->frontend_scripts);

        $this->load_frontend_styles();
        $this->load_frontend_scripts();
    }

    public function get_block_path($name)
    {
        $path = ZOLO_DIR_PATH . 'blocks/' . $name;
        return $path;
    }
}
