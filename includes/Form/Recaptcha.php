<?php
/**
 * Google Recaptcha
 * 
 * @package Zoloblocks 
 */

namespace Zolo\Form;

use Zolo\Traits\SingletonTrait;

class Recaptcha {
    use SingletonTrait;

    /**
     * Constructor
     * @return void
     */
    public function __construct() {
        add_action( 'wp_enqueue_scripts', [ $this, 'zolo_recaptcha_script' ] );
        add_action( 'wp_footer', [ $this, 'zolo_recaptcha_handle_script' ] );
    }

    /**
     * Enqueue Recaptcha Script
     * @return void
     */
    public function zolo_recaptcha_script() {
        // check if form block is present
        if( has_block( 'zolo/form' ) ) {

            $enable_recaptcha = get_option('zolo_enable_recaptcha');

            if ($enable_recaptcha) {
                $recaptcha_url         = 'https://www.google.com/recaptcha/api.js';
                $recaptcha_site_key    = get_option('zolo_recaptcha_site_key');

                $recaptcha_url = add_query_arg(
                    [
                        'render' => $recaptcha_site_key
                    ],
                    'https://www.google.com/recaptcha/api.js' 
                );

                if( $recaptcha_site_key ){
                    wp_enqueue_script('zolo-recaptcha', $recaptcha_url, [], ZOLO_VERSION, true);
                }
                
            }
        }
    }

    /**
     * Handle Recaptcha
     * @return void
     */
    public function zolo_recaptcha_handle_script() {
            $enable_recaptcha   = get_option('zolo_enable_recaptcha');
            $recaptcha_site_key = get_option('zolo_recaptcha_site_key');

            if ( ! $enable_recaptcha || ! $recaptcha_site_key ) {
                return;
            }

        ?>
            <script>
                const zoloRecaptchaSiteKey = '<?php echo esc_html( $recaptcha_site_key ); ?>';
                function zoloRecaptchaCallback() {
                    const recaptchaElements = document.querySelectorAll('.zolo-contact-form');
                    if (recaptchaElements.length) {
                        recaptchaElements.forEach(function (element) {
                            let reCaptchaWrapper = element.querySelector('.zolo-gcaptcha-wrapper');

                            if( '<?php echo esc_html($recaptcha_api_version); ?>' === 'v2'  ) {
                                // create recaptcha widget for version 2
                                let reCaptchaPlaceholder = document.createElement('div');
                                reCaptchaPlaceholder.classList.add('zolo-gcaptcha-v2');
                                reCaptchaWrapper.appendChild(reCaptchaPlaceholder);
                                
                                grecaptcha.render(reCaptchaPlaceholder, {
                                    'sitekey': zoloRecaptchaSiteKey
                                }); 

                            }

                            if( '<?php echo esc_html($recaptcha_api_version); ?>' === 'v3' ) {

                                // create recaptcha widget for version 3
                                let reCaptchaV3 = document.createElement('input');
                                reCaptchaV3.setAttribute('type', 'hidden');
                                reCaptchaV3.setAttribute('name', 'zolo_recaptcha_v3');
                                reCaptchaV3.setAttribute('value', '');
                                reCaptchaWrapper.appendChild(reCaptchaV3);

                                grecaptcha.ready(function() {
                                    grecaptcha.execute(zoloRecaptchaSiteKey, {action: 'homepage'}).then(function(token) {
                                        reCaptchaV3.value = token;
                                    });
                                });
                            }

                        });
                    }
                }
            </script>
        <?php
    }
}

Recaptcha::getInstance();