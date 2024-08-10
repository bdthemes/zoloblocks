<?php
namespace Zolo\Admin;

use Zolo\Traits\SingletonTrait;

/**
 * Author block admin
 */
class Author {
	use SingletonTrait;

	/**
	 * Construct method
	 */
	public function __construct() {
		add_filter( 'user_contactmethods', [ $this,'user_contact_social_link' ] );
	}

	/**
	 * User profile contact social link
	 *
	 * @param array   $methods .
	 * @param boolean $core .
	 * @return mixed
	 */
	public function user_contact_social_link( $methods, $core = false ) {

		if ( $core ) {
			$methods['email'] = __( 'Email', 'zoloblocks' );
			$methods['url']   = __( 'Website', 'zoloblocks' );
		}

		$methods['facebook']  = __( 'Facebook', 'zoloblocks' );
		$methods['twitter']   = __( 'Twitter', 'zoloblocks' );
		$methods['linkedin']  = __( 'LinkedIn', 'zoloblocks' );
		$methods['github']    = __( 'GitHub', 'zoloblocks' );
		$methods['wordpress'] = __( 'WordPress', 'zoloblocks' );
		$methods['dribbble']  = __( 'Dribbble', 'zoloblocks' );

		return $methods;
	}
}
