import { __ } from '@wordpress/i18n';
import SingleProduct from './single-product';

const FooterWrapper = () => {
    return (
        <div className="zolo-welcome-footer-info-wrap">
            <div className="zolo-welcome-footer-info-item">
                <div>
                    <h2 className="zolo-welcome-footer-info-title">{__('Missing Any Feature?', 'zoloblocks')}</h2>
                    <p className="zolo-welcome-footer-info-text">
                        {__('You found a new feature for Zoloblock? Great! Please share with us so we can add it to the product.', 'zoloblocks')}
                    </p>
                    <p className="zolo-welcome-footer-info-text">
                        {__('It might take a while to receive the features in the next updates.', 'zoloblocks')}
                    </p>
                </div>
                <div>
                    <a
                        href="https://feedback.zoloblocks.com/b/dvdyy2v9/feature-ideas/idea/new"
                        target="_blank"
                        className="zolo-welcome-page-btn zolo-secondary-btn"
                    >
                        {__('Request Feature', 'zoloblocks')}

                        <svg
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                            >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                            />
                        </svg>
                    </a>
                </div>
                <img src={zoloBlocks.idea} alt="Zolo Blocks Idea" />
            </div>
            <div className="zolo-welcome-footer-info-item">
                <h2 className="zolo-welcome-footer-info-title">{__('Try Popular Addons by Us', 'zoloblocks')}</h2>
                <p className="zolo-welcome-footer-info-text">
                    {__('Want to give it a shot with our promising addon lineup for Elementor? We guarantee a solid user experience. Try and judge yourself.', 'zoloblocks')}
                </p>
                <div className="zolo-welcome-footer-product-btn">
                    <SingleProduct
                        btnClass="zolo-ep-btn"
                        btnText="Element Pack"
                        btnUrl="https://wordpress.org/plugins/bdthemes-element-pack-lite/"
                        btnTitle={__(
                            "Element Pack Lite provides more than 50+ essential elements for everyday applications to simplify the whole web building process. It's Free! Download it.",
                            'zoloblocks'
                        )}
                    />

                    <SingleProduct
                        btnClass="zolo-ps-btn"
                        btnText="Prime Slider"
                        btnUrl="https://wordpress.org/plugins/bdthemes-prime-slider-lite/"
                        btnTitle={__(
                            "The revolutionary slider builder addon for Elementor with next-gen superb interface. It's Free! Download it.",
                            'zoloblocks'
                        )}
                    />

                    <SingleProduct
                        btnClass="zolo-upk-btn"
                        btnText="Ultimate Post Kit"
                        btnUrl="https://wordpress.org/plugins/ultimate-post-kit/"
                        btnTitle={__(
                            "Best blogging addon for building quality blogging website with fine-tuned features and widgets. It's Free! Download it.",
                            'zoloblocks'
                        )}
                    />

                    <SingleProduct
                        btnClass="zolo-usk-btn"
                        btnText="Ultimate Store Kit"
                        btnUrl="https://wordpress.org/plugins/ultimate-store-kit/"
                        btnTitle={__(
                            "The only eCommmerce addon for answering all your online store design problems in one package. It's Free! Download it.",
                            'zoloblocks'
                        )}
                    />

                    <SingleProduct
                        btnClass="zolo-pg-btn"
                        btnText="Pixel Gallery"
                        btnUrl="https://wordpress.org/plugins/pixel-gallery/"
                        btnTitle={__(
                            "Pixel Gallery provides more than 30+ essential elements for everyday applications to simplify the whole web building process. It's Free! Download it.",
                            'zoloblocks'
                        )}
                    />

                    <SingleProduct
                        btnClass="zolo-live-copy-btn"
                        btnText="Live Copy Paste"
                        btnUrl="https://wordpress.org/plugins/live-copy-paste/"
                        btnTitle={__(
                            "Superfast cross-domain copy-paste mechanism for WordPress websites with true UI copy experience. It's Free! Download it.",
                            'zoloblocks'
                        )}
                    />
                </div>
                <img src={zoloBlocks.product} alt="BDThemes Products" />
            </div>
        </div>
    );
};

export default FooterWrapper;
