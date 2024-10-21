<?php

namespace Zolo\Blocks;

/**
 * Post block main class
 */
abstract class PostBlock {
	/**
	 * Default attributes
	 *
	 * @var array
	 */
	protected static $default_attributes = [
		'titleTag'      => 'h2',
		'titleWords'    => '',
		'showTitle'     => true,
		'showThumbnail' => true,
		'showAuthor'    => true,
		'showMeta'      => true,
		'showCategory'  => true,
		'parentClasses' => [],
		'postQuery'     => [],
		'uniqueId'      => '',
		'zoloId'        => '',
	];

	/**
	 * Get default attributes abstract function
	 *
	 * @return mixed
	 */
	abstract public function get_default_attributes();
}
