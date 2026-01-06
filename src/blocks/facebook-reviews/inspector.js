import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import objAttributes from './attributes';
import { LAYOUT_OPTIONS, FB_REVIEWS_COLUMNS, FB_REVIEWS_GAP } from './constants';

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
} = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        layoutType,
        reviewsPerPage,
        showAvatar,
        showReviewerName,
        showDate,
        showRating,
        showRecommendation,
        showReviewText,
        reviewTextLength,
        showReadMore,
        readMoreText,
        showHeader,
        headerTitle,
        showWriteReviewBtn,
        writeReviewBtnText,
        writeReviewBtnUrl,
        showHeaderRating,
        carouselAutoplay,
        carouselSpeed,
        carouselLoop,
        resMode,
    } = attributes;

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

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes: objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/facebook-reviews"
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
                                                {__('Connect your Facebook page to display reviews. Configure your credentials in the API Settings.', 'zoloblocks')}
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

                        <ZoloPanelBody title={__('Header Settings', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Header', 'zoloblocks')}
                                    checked={showHeader}
                                    onChange={(value) => setAttributes({ showHeader: value })}
                                />
                            </div>
                            {showHeader && (
                                <>
                                    <div className="zolo-flex-col-control">
                                        <ZoloToggleControl
                                            label={__('Show Rating in Header', 'zoloblocks')}
                                            checked={showHeaderRating}
                                            onChange={(value) => setAttributes({ showHeaderRating: value })}
                                        />
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <ZoloToggleControl
                                            label={__('Show Write a Review Button', 'zoloblocks')}
                                            checked={showWriteReviewBtn}
                                            onChange={(value) => setAttributes({ showWriteReviewBtn: value })}
                                        />
                                    </div>
                                    {showWriteReviewBtn && (
                                        <>
                                            <div className="zolo-flex-col-control">
                                                <ZoloTextControl
                                                    label={__('Button URL', 'zoloblocks')}
                                                    value={writeReviewBtnUrl}
                                                    onChange={(value) => setAttributes({ writeReviewBtnUrl: value })}
                                                    help={__('Leave empty to use Facebook page reviews URL', 'zoloblocks')}
                                                />
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>

                        <ZoloPanelBody title={__('Layout Settings', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-flex-col-control">
                                <ZoloSelectControl
                                    label={__('Layout Type', 'zoloblocks')}
                                    value={layoutType}
                                    options={LAYOUT_OPTIONS}
                                    onChange={(value) => setAttributes({ layoutType: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloRangeControl
                                    label={__('Reviews Per Page', 'zoloblocks')}
                                    value={reviewsPerPage}
                                    onChange={(value) => setAttributes({ reviewsPerPage: value })}
                                    min={1}
                                    max={50}
                                />
                            </div>
                        </ZoloPanelBody>

                        {layoutType === 'carousel' && (
                            <ZoloPanelBody title={__('Carousel Settings', 'zoloblocks')} panelProps={props}>
                                <div className="zolo-flex-col-control">
                                    <ZoloToggleControl
                                        label={__('Autoplay', 'zoloblocks')}
                                        checked={carouselAutoplay}
                                        onChange={(value) => setAttributes({ carouselAutoplay: value })}
                                    />
                                </div>
                                {carouselAutoplay && (
                                    <div className="zolo-flex-col-control">
                                        <ZoloRangeControl
                                            label={__('Autoplay Speed (ms)', 'zoloblocks')}
                                            value={carouselSpeed}
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
                                        checked={carouselLoop}
                                        onChange={(value) => setAttributes({ carouselLoop: value })}
                                    />
                                </div>
                            </ZoloPanelBody>
                        )}

                        <ZoloPanelBody title={__('Review Elements', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Avatar', 'zoloblocks')}
                                    checked={showAvatar}
                                    onChange={(value) => setAttributes({ showAvatar: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Reviewer Name', 'zoloblocks')}
                                    checked={showReviewerName}
                                    onChange={(value) => setAttributes({ showReviewerName: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Date', 'zoloblocks')}
                                    checked={showDate}
                                    onChange={(value) => setAttributes({ showDate: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Rating', 'zoloblocks')}
                                    checked={showRating}
                                    onChange={(value) => setAttributes({ showRating: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Recommendation Badge', 'zoloblocks')}
                                    checked={showRecommendation}
                                    onChange={(value) => setAttributes({ showRecommendation: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Review Text', 'zoloblocks')}
                                    checked={showReviewText}
                                    onChange={(value) => setAttributes({ showReviewText: value })}
                                />
                            </div>
                            {showReviewText && (
                                <>
                                    <div className="zolo-flex-col-control">
                                        <ZoloRangeControl
                                            label={__('Text Length (0 for full)', 'zoloblocks')}
                                            value={reviewTextLength}
                                            onChange={(value) => setAttributes({ reviewTextLength: value })}
                                            min={0}
                                            max={500}
                                        />
                                    </div>
                                    <div className="zolo-flex-col-control">
                                        <ZoloToggleControl
                                            label={__('Show Read More', 'zoloblocks')}
                                            checked={showReadMore}
                                            onChange={(value) => setAttributes({ showReadMore: value })}
                                        />
                                    </div>
                                    {showReadMore && (
                                        <div className="zolo-flex-col-control">
                                            <ZoloTextControl
                                                label={__('Read More Text', 'zoloblocks')}
                                                value={readMoreText}
                                                onChange={(value) => setAttributes({ readMoreText: value })}
                                            />
                                        </div>
                                    )}
                                </>
                            )}
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Layout', 'zoloblocks')} stylePanel={true} firstOpen={true} panelProps={props}>
                            <ResCounterControl
                                label={__('Columns', 'zoloblocks')}
                                controlName={FB_REVIEWS_COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={6}
                                defaults={{
                                    deskRange: 3,
                                    tabRange: 2,
                                    mobRange: 1,
                                }}
                            />

                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={FB_REVIEWS_GAP}
                                requiredProps={requiredProps}
                                max={100}
                            />
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/facebook-reviews"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
