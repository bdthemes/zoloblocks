<?php

namespace Zolo\Form;

use Zolo\Traits\SingletonTrait;

// Exit if accessed directly.
if (! defined('ABSPATH')) {
    exit;
}

if (! class_exists('Recaptcha')) {

    /**
     * Class Recaptcha
     */
    class Recaptcha {

        use SingletonTrait;

        /**
         * Constructor
         * @return void
         */
        public function __construct() {
            add_filter('render_block', [$this, 'zolo_form_recaptcha'], 10, 2);
            add_action('wp_enqueue_scripts', [$this, 'zolo_recaptcha_script']);
            add_action('wp_head', [$this, 'zolo_recaptcha_handle_script']);
        }

        /**
         * Zolo Form ReCaptcha
         */
        public function zolo_form_recaptcha($block_content, $block) {
            if ('zolo/form' === $block['blockName']) {
                $enable_recaptcha = get_option('zolo_enable_recaptcha');

                if ($enable_recaptcha) {
                    $recaptcha_site_key = get_option('zolo_recaptcha_site_key');
                    if (! $recaptcha_site_key) {
                        $recaptcha_site_key = '6LcJ9KQaAAAAAABZz9Zz9Zz9Zz9Zz9Zz9Zz9Zz9';
                    }
                    $block_content = str_replace('<button', '<button data-sitekey="' . $recaptcha_site_key . '"', $block_content);
                }
            }

            return $block_content;
        }

        /**
         * Enqueue Recaptcha Script
         * @return void
         */
        public function zolo_recaptcha_script() {
            if (has_block('zolo/form')) {
                $enable_recaptcha = get_option('zolo_enable_recaptcha');
                if ($enable_recaptcha) {
                    $recaptcha_site_key = get_option('zolo_recaptcha_site_key');
                    if (! $recaptcha_site_key) {
                        $recaptcha_site_key = '6LcJ9KQaAAAAAABZz9Zz9Zz9Zz9Zz9Zz9Zz9Zz9';
                    }
                    if ($recaptcha_site_key) {
                        wp_enqueue_script('zolo-recaptcha', 'https://www.google.com/recaptcha/api.js', [], ZOLO_VERSION, false);
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
            if (! $enable_recaptcha || ! $recaptcha_site_key) {
                return;
            }
?>
            <script>
                function zoloFormSubmit(e) {
                    let o = document.querySelectorAll(".zolo-contact-form");
                    o.length > 0 && o.forEach(function(o) {
                        let r = o.dataset.formId,
                            s = o.parentNode.querySelector(".zolo-form-msg"),
                            t = o.parentNode.querySelector(".zolo-msg-desc"),
                            n = o.parentNode.querySelector(".zolo-msg-close");
                        if (new Pristine(o).validate()) {
                            let a = new FormData(o),
                                l = [...a.entries()];
                            l.push(["formId", r]), l.push(["g-recaptcha-response", e]), l.push(["nonce", zoloSettings.zolo_nonce]);
                            let c = l.reduce((e, [o, r]) => (e[o] = "file" === o ? r.name : r, e), {}),
                                i = JSON.stringify(c),
                                d = new XMLHttpRequest;
                            d.open("POST", zoloSettings.ajaxurl, !0), d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), d.onreadystatechange = function() {
                                if (d.readyState === XMLHttpRequest.DONE) {
                                    if (200 === d.status) {
                                        let e = JSON.parse(d.responseText),
                                            {
                                                recaptchaStatus: r,
                                                recaptchaFailMessage: a,
                                                validationStatus: l,
                                                validationMessage: c,
                                                successStatus: i,
                                                successMessage: f,
                                                failStatus: m,
                                                failMessage: u,
                                                nonceValidationFail: p
                                            } = e;
                                        r && (t.innerHTML = a, s.classList.add("zolo-form-error-msg", "show")), (l || p) && (t.innerHTML = c, s.classList.add("zolo-form-error-msg", "show")), i && (t.innerHTML = f, s.classList.add("zolo-form-success-msg", "show")), m && (t.innerHTML = u, s.classList.add("zolo-form-error-msg", "show")), o.reset(), setTimeout(() => {
                                            t.innerHTML = "", s.classList.remove("validation-error", "success", "fail", "show")
                                        }, 5e3), n.addEventListener("click", function() {
                                            t.innerHTML = "", s.classList.remove("validation-error", "success", "fail", "show")
                                        })
                                    } else console.error("Error:", d.statusText)
                                }
                            }, d.send("action=send_form_data&formData=" + encodeURIComponent(i))
                        }
                    })
                }
            </script>
<?php
        }
    }
}
