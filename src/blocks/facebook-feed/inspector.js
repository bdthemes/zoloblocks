import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';
import objAttributes from './attributes';
import { LAYOUT_OPTIONS } from './constants';

const {
    ZoloSelectControl,
    ZoloToggleControl,
    ZoloTextControl,
    ZoloRangeControl,
    HeaderTabs,
    ZoloPanelBody,
    CounterControl,
    ZoloDualRangeUnit,
    ZoloResponsive,
    AdvancedOptions,
    getResponsiveValue,
    createResponsiveValue,
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes, block } = props;

    const [isApiConfigured, setIsApiConfigured] = useState(false);

    useEffect(() => {
        wp.apiFetch({ path: '/wp/v2/settings' })
            .then((settings) => {
                const pageId = settings.zolo_facebook_page_id || '';
                const accessToken = settings.zolo_facebook_access_token || '';
                setIsApiConfigured(!!(pageId && accessToken));
            })
            .catch(() => {
                setIsApiConfigured(false);
            });
    }, []);

    const requiredProps = useMemo(() => ({
        resMode: attributes.resMode,
        setAttributes,
        attributes,
        objAttributes,
    }), [attributes.resMode, setAttributes, attributes, objAttributes]);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/facebook-feed"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        {!isApiConfigured && (
                            <ZoloPanelBody title={__('Facebook API Settings', 'zoloblocks')} panelProps={props} firstOpen={true}>
                                <div className="components-notice is-info" style={{ 
                                    padding: '16px', 
                                    background: 'linear-gradient(135deg, #e7f5fe 0%, #f0f9ff 100%)', 
                                    borderLeft: '4px solid #1877f2', 
                                    borderRadius: '4px',
                                    margin: '0 0 20px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877f2" style={{ flexShrink: 0, marginTop: '2px' }}>
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                        <div style={{ flex: 1 }}>
                                            <p style={{ margin: '0 0 8px', fontWeight: '600', fontSize: '14px', color: '#1e293b', lineHeight: '1.4' }}>
                                                {__('Configure Facebook API', 'zoloblocks')}
                                            </p>
                                            <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
                                                {__('Connect your Facebook page to display live feeds. Configure your credentials in the API Settings.', 'zoloblocks')}
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
                                                    background: '#1877f2',
                                                    color: '#ffffff',
                                                    textDecoration: 'none',
                                                    borderRadius: '4px',
                                                    fontSize: '13px',
                                                    fontWeight: '500',
                                                    transition: 'background 0.2s',
                                                    boxShadow: '0 2px 4px rgba(24, 119, 242, 0.2)'
                                                }}
                                                onMouseEnter={(e) => e.target.style.background = '#0c63d4'}
                                                onMouseLeave={(e) => e.target.style.background = '#1877f2'}
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
                                    max={50}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloRangeControl
                                    label={__('Cache Duration (hours)', 'zoloblocks')}
                                    value={attributes.cacheDuration}
                                    onChange={(value) => setAttributes({ cacheDuration: value })}
                                    min={1}
                                    max={168}
                                    help={__('How long to cache posts before fetching new ones', 'zoloblocks')}
                                />
                            </div>
                        </ZoloPanelBody>

                        {attributes.layoutType === 'carousel' && (
                            <ZoloPanelBody title={__('Carousel Settings', 'zoloblocks')} panelProps={props}>
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

                        <ZoloPanelBody title={__('Post Elements', 'zoloblocks')} panelProps={props}>
                            {attributes.layoutType === 'gallery' && (
                                <div className="zolo-flex-col-control">
                                    <ZoloToggleControl
                                        label={__('Gallery Card Clickable', 'zoloblocks')}
                                        checked={attributes.galleryCardClickable}
                                        onChange={(value) => setAttributes({ galleryCardClickable: value })}
                                    />
                                </div>
                            )}
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Avatar', 'zoloblocks')}
                                    checked={attributes.showAvatar}
                                    onChange={(value) => setAttributes({ showAvatar: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Author', 'zoloblocks')}
                                    checked={attributes.showAuthor}
                                    onChange={(value) => setAttributes({ showAuthor: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Date', 'zoloblocks')}
                                    checked={attributes.showDate}
                                    onChange={(value) => setAttributes({ showDate: value })}
                                />
                            </div>
                            {attributes.layoutType !== 'gallery' && (
                                <>
                                    <div className="zolo-flex-col-control">
                                        <ZoloToggleControl
                                            label={__('Show Facebook Icon', 'zoloblocks')}
                                            checked={attributes.showFacebookIcon}
                                            onChange={(value) => setAttributes({ showFacebookIcon: value })}
                                        />
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <ZoloToggleControl
                                            label={__('Show Content', 'zoloblocks')}
                                            checked={attributes.showContent}
                                            onChange={(value) => setAttributes({ showContent: value })}
                                        />
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <ZoloToggleControl
                                            label={__('Show Image', 'zoloblocks')}
                                            checked={attributes.showImage}
                                            onChange={(value) => setAttributes({ showImage: value })}
                                        />
                                    </div>
                                    {attributes.showContent && (
                                        <>
                                            <div className="zolo-flex-col-control">
                                                <ZoloRangeControl
                                                    label={__('Content Length (0 for full)', 'zoloblocks')}
                                                    value={attributes.contentLength}
                                                    onChange={(value) => setAttributes({ contentLength: value })}
                                                    min={0}
                                                    max={500}
                                                />
                                            </div>
                                            <div className="zolo-flex-col-control">
                                                <ZoloToggleControl
                                                    label={__('Show Read More', 'zoloblocks')}
                                                    checked={attributes.showReadMore}
                                                    onChange={(value) => setAttributes({ showReadMore: value })}
                                                />
                                            </div>
                                            {attributes.showReadMore && (
                                                <div className="zolo-flex-col-control">
                                                    <ZoloTextControl
                                                        label={__('Read More Text', 'zoloblocks')}
                                                        value={attributes.readMoreText}
                                                        onChange={(value) => setAttributes({ readMoreText: value })}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>

                        {attributes.layoutType !== 'gallery' && (
                            <ZoloPanelBody title={__('Engagement', 'zoloblocks')} panelProps={props}>
                                <div className="zolo-flex-col-control">
                                    <ZoloToggleControl
                                        label={__('Show Reactions', 'zoloblocks')}
                                        checked={attributes.showReactions}
                                        onChange={(value) => setAttributes({ showReactions: value })}
                                    />
                                </div>
                                <div className="zolo-flex-col-control">
                                    <ZoloToggleControl
                                        label={__('Show Comments Count', 'zoloblocks')}
                                        checked={attributes.showComments}
                                        onChange={(value) => setAttributes({ showComments: value })}
                                    />
                                </div>
                                <div className="zolo-flex-col-control">
                                    <ZoloToggleControl
                                        label={__('Show Shares Count', 'zoloblocks')}
                                        checked={attributes.showShares}
                                        onChange={(value) => setAttributes({ showShares: value })}
                                    />
                                </div>
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Layout', 'zoloblocks')} stylePanel={true} firstOpen={true} panelProps={props}>
                            {(attributes.layoutType === 'grid' || attributes.layoutType === 'masonry' || attributes.layoutType === 'carousel') && (
                                <ZoloResponsive left='60px'>
                                    <CounterControl
                                        label={__('Columns', 'zoloblocks')}
                                        value={getResponsiveValue(attributes, 'fbColumns')}
                                        onChange={(value) => setAttributes(createResponsiveValue(attributes, 'fbColumns', value))}
                                        min={1}
                                        max={6}
                                    />
                                </ZoloResponsive>
                            )}

                            <ZoloResponsive left='30px'>
                                <ZoloDualRangeUnit
                                    label={__('Gap', 'zoloblocks')}
                                    dualLabel={[__('Column Gap', 'zoloblocks'), __('Row Gap', 'zoloblocks')]}
                                    value={getResponsiveValue(attributes, 'fbGap')}
                                    onChange={(value) => {
                                        setAttributes(createResponsiveValue(attributes, 'fbGap', value));
                                    }}
                                    units={{
                                        px: { max: 200, min: 0, step: 1 },
                                        rem: { max: 10, min: 0, step: 0.1 },
                                        em: { max: 10, min: 0, step: 0.1 },
                                        '%': { max: 100, min: 0, step: 1 },
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
                            block="zolo/facebook-feed"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
