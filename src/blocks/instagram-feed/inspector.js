import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import objAttributes from './attributes';
import { IG_COLUMNS, IG_GAP } from './constants';

const LAYOUT_OPTIONS = [
    { label: __('Grid', 'zoloblocks'), value: 'grid' },
    { label: __('Masonry', 'zoloblocks'), value: 'masonry' },
    { label: __('Carousel', 'zoloblocks'), value: 'carousel' },
];

const IMAGE_RATIO_OPTIONS = [
    { label: __('Square', 'zoloblocks'), value: 'square' },
    { label: __('Portrait', 'zoloblocks'), value: 'portrait' },
    { label: __('Landscape', 'zoloblocks'), value: 'landscape' },
    { label: __('Original', 'zoloblocks'), value: 'original' },
];

const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloTextControl,
    ZoloRangeControl,
    HeaderTabs,
    ZoloPanelBody,
    ResGapControl,
    ResCounterControl,
    AdvancedOptions,
    ZoloResponsive,
    getResponsiveValue,
    createResponsiveValue,
    ZoloDualRangeUnit,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes } = props;

    const [isApiConfigured, setIsApiConfigured] = useState(false);

    useEffect(() => {
        wp.apiFetch({ path: '/wp/v2/settings' })
            .then((settings) => {
                const accessToken = settings.zolo_instagram_access_token || '';
                setIsApiConfigured(!!accessToken);
            })
            .catch(() => {
                setIsApiConfigured(false);
            });
    }, []);

    const requiredProps = {
        resMode: attributes.resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/instagram-feed"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        {!isApiConfigured && (
                            <ZoloPanelBody title={__('Instagram API Settings', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                <div className="components-notice is-info" style={{ 
                                    padding: '16px', 
                                    background: 'linear-gradient(135deg, #fef3f2 0%, #fff5f5 100%)', 
                                    borderLeft: '4px solid #E1306C', 
                                    borderRadius: '4px',
                                    margin: '0 0 20px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="url(#instagram-gradient)" style={{ flexShrink: 0, marginTop: '2px' }}>
                                            <defs>
                                                <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                                                    <stop offset="0%" style={{ stopColor: '#f09433', stopOpacity: 1 }} />
                                                    <stop offset="25%" style={{ stopColor: '#e6683c', stopOpacity: 1 }} />
                                                    <stop offset="50%" style={{ stopColor: '#dc2743', stopOpacity: 1 }} />
                                                    <stop offset="75%" style={{ stopColor: '#cc2366', stopOpacity: 1 }} />
                                                    <stop offset="100%" style={{ stopColor: '#bc1888', stopOpacity: 1 }} />
                                                </linearGradient>
                                            </defs>
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ margin: '0 0 8px', fontWeight: '600', fontSize: '14px', color: '#1e293b', lineHeight: '1.4' }}>
                                                {__('Configure Instagram API', 'zoloblocks')}
                                            </p>
                                            <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
                                                {__('Connect your Instagram account to display live feeds. Configure your access token in the API Settings.', 'zoloblocks')}
                                            </p>
                                            <a 
                                                href={`${window.location.origin}/wp-admin/admin.php?page=zoloblocks#apiSettings`} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                style={{ 
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    gap: '6px',
                                                    padding: '8px 16px',
                                                    background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                                                    color: '#ffffff',
                                                    textDecoration: 'none',
                                                    borderRadius: '4px',
                                                    fontSize: '13px',
                                                    fontWeight: '500',
                                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                                    boxShadow: '0 2px 4px rgba(225, 48, 108, 0.2)'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.transform = 'translateY(-2px)';
                                                    e.target.style.boxShadow = '0 4px 8px rgba(225, 48, 108, 0.3)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.transform = 'translateY(0)';
                                                    e.target.style.boxShadow = '0 2px 4px rgba(225, 48, 108, 0.2)';
                                                }}
                                            >
                                                {__('Go to API Settings', 'zoloblocks')}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Layout Settings', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-flex-col-control">
                                <ZoloSelectControl
                                    label={__('Layout Type', 'zoloblocks')}
                                    value={attributes.layoutType}
                                    options={LAYOUT_OPTIONS}
                                    onChange={(value) => setAttributes({ layoutType: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloRangeControl
                                    label={__('Posts Per Page', 'zoloblocks')}
                                    value={attributes.postsPerPage}
                                    onChange={(value) => setAttributes({ postsPerPage: value })}
                                    min={1}
                                    max={30}
                                />
                            </div>
                            {(attributes.layoutType === 'grid' || attributes.layoutType === 'masonry') && (
                                <ResCounterControl
                                    label={__('Columns', 'zoloblocks')}
                                    controlName={IG_COLUMNS}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={6}
                                    defaults={{
                                        deskRange: 3,
                                        tabRange: 2,
                                        mobRange: 1,
                                    }}
                                />
                            )}
                            <div className="zolo-flex-col-control">
                                <ZoloSelectControl
                                    label={__('Image Ratio', 'zoloblocks')}
                                    value={attributes.imageRatio}
                                    options={IMAGE_RATIO_OPTIONS}
                                    onChange={(value) => setAttributes({ imageRatio: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloRangeControl
                                    label={__('Cache Duration (hours)', 'zoloblocks')}
                                    value={attributes.cacheExpiration / 3600}
                                    onChange={(value) => setAttributes({ cacheExpiration: value * 3600 })}
                                    min={1}
                                    max={72}
                                    step={1}
                                />
                            </div>
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Header Settings', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Header', 'zoloblocks')}
                                    checked={attributes.showHeader}
                                    onChange={(value) => setAttributes({ showHeader: value })}
                                />
                            </div>
                            {attributes.showHeader && (
                                <>
                                    <div className="zolo-flex-col-control">
                                        <ZoloToggleControl
                                            label={__('Show Username', 'zoloblocks')}
                                            checked={attributes.showUsername}
                                            onChange={(value) => setAttributes({ showUsername: value })}
                                        />
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <ZoloToggleControl
                                            label={__('Show Followers', 'zoloblocks')}
                                            checked={attributes.showFollowers}
                                            onChange={(value) => setAttributes({ showFollowers: value })}
                                        />
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <ZoloToggleControl
                                            label={__('Show Bio', 'zoloblocks')}
                                            checked={attributes.showBio}
                                            onChange={(value) => setAttributes({ showBio: value })}
                                        />
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <ZoloToggleControl
                                            label={__('Show Follow Button', 'zoloblocks')}
                                            checked={attributes.showFollowButton}
                                            onChange={(value) => setAttributes({ showFollowButton: value })}
                                        />
                                    </div>
                                    {attributes.showFollowButton && (
                                        <div className="zolo-flex-col-control">
                                            <ZoloTextControl
                                                label={__('Follow Button Text', 'zoloblocks')}
                                                value={attributes.followButtonText}
                                                onChange={(value) => setAttributes({ followButtonText: value })}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Post Settings', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Caption', 'zoloblocks')}
                                    checked={attributes.showCaption}
                                    onChange={(value) => setAttributes({ showCaption: value })}
                                />
                            </div>
                            {attributes.showCaption && (
                                <div className="zolo-flex-col-control">
                                    <ZoloRangeControl
                                        label={__('Caption Length', 'zoloblocks')}
                                        value={attributes.captionLength}
                                        onChange={(value) => setAttributes({ captionLength: value })}
                                        min={50}
                                        max={500}
                                    />
                                </div>
                            )}
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Likes', 'zoloblocks')}
                                    checked={attributes.showLikes}
                                    onChange={(value) => setAttributes({ showLikes: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Comments', 'zoloblocks')}
                                    checked={attributes.showComments}
                                    onChange={(value) => setAttributes({ showComments: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Open in New Tab', 'zoloblocks')}
                                    checked={attributes.openInNewTab}
                                    onChange={(value) => setAttributes({ openInNewTab: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Enable Lightbox', 'zoloblocks')}
                                    checked={attributes.enableLightbox}
                                    onChange={(value) => setAttributes({ enableLightbox: value })}
                                />
                            </div>
                            {attributes.enableLightbox && (
                                <>
                                    <div className="zolo-flex-col-control">
                                        <ZoloSelectControl
                                            label={__('Animation', 'zoloblocks')}
                                            value={attributes.entranceAnimation}
                                            onChange={(value) => setAttributes({ entranceAnimation: value })}
                                            options={[
                                                { label: __('Zoom', 'zoloblocks'), value: 'zolo-zoom-in' },
                                                { label: __('Newspaper', 'zoloblocks'), value: 'zolo-newspaper' },
                                                { label: __('Move Horizontal', 'zoloblocks'), value: 'zolo-move-horizontal' },
                                                { label: __('Move Top', 'zoloblocks'), value: 'zolo-move-form-top' },
                                                { label: __('3d Unfold', 'zoloblocks'), value: 'zolo-3d-unfold' },
                                                { label: __('Zoom Out', 'zoloblocks'), value: 'zolo-zoom-out' },
                                            ]}
                                        />
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <ZoloToggleControl
                                            label={__('Show Thumbnails', 'zoloblocks')}
                                            checked={attributes.showLightboxThumb}
                                            onChange={(value) => setAttributes({ showLightboxThumb: value })}
                                        />
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <ZoloRangeControl
                                            label={__('Caption Text Size', 'zoloblocks')}
                                            value={attributes.lightboxCaptionSize}
                                            onChange={(value) => setAttributes({ lightboxCaptionSize: value })}
                                            min={10}
                                            max={40}
                                            step={1}
                                        />
                                    </div>
                                </>
                            )}
                        </ZoloPanelBody>

                        {attributes.layoutType === 'carousel' && (
                            <ZoloPanelBody title={__('Carousel Settings', 'zoloblocks')} panelProps={props}>
                                <ResCounterControl
                                    label={__('Slides Per View', 'zoloblocks')}
                                    controlName={IG_COLUMNS}
                                    requiredProps={requiredProps}
                                    min={1}
                                    max={6}
                                    defaults={{
                                        deskRange: 3,
                                        tabRange: 2,
                                        mobRange: 1,
                                    }}
                                />
                                <div className="zolo-flex-col-control">
                                    <ZoloToggleControl
                                        label={__('Autoplay', 'zoloblocks')}
                                        checked={attributes.carouselAutoplay}
                                        onChange={(value) => setAttributes({ carouselAutoplay: value })}
                                    />
                                </div>
                                {attributes.carouselAutoplay && (
                                    <div className="zolo-flex-col-control">
                                        <ZoloRangeControl
                                            label={__('Autoplay Speed (ms)', 'zoloblocks')}
                                            value={attributes.carouselSpeed}
                                            onChange={(value) => setAttributes({ carouselSpeed: value })}
                                            min={1000}
                                            max={10000}
                                            step={100}
                                        />
                                    </div>
                                )}
                                <div className="zolo-flex-col-control">
                                    <ZoloToggleControl
                                        label={__('Loop', 'zoloblocks')}
                                        checked={attributes.carouselLoop}
                                        onChange={(value) => setAttributes({ carouselLoop: value })}
                                    />
                                </div>
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Spacing', 'zoloblocks')} stylePanel={true} firstOpen={true} panelProps={props}>
                            <ZoloResponsive left='30px'>
                                <ZoloDualRangeUnit
                                    label={__('Gap', 'zoloblocks')}
                                    dualLabel={[__('Column Gap', 'zoloblocks'), __('Row Gap', 'zoloblocks')]}
                                    value={getResponsiveValue(attributes, 'flexGap')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue(attributes, 'flexGap', value));
                                    }}
                                    units={{
                                        px: { max: 200, min: 0, step: 1 },
                                        rem: { max: 10, min: 0, step: 0.1 },
                                        em: { max: 10, min: 0, step: 0.1 },
                                    }}
                                />
                            </ZoloResponsive>
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/instagram-feed"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
