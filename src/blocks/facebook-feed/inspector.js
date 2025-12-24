import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import objAttributes from './attributes';
import { LAYOUT_OPTIONS, FB_COLUMNS, FB_GAP } from './constants';

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
        facebookPageId,
        facebookAccessToken,
        cacheExpiration,
        layoutType,
        postsPerPage,
        showAvatar,
        showAuthor,
        showDate,
        showContent,
        contentLength,
        showReadMore,
        readMoreText,
        showReactions,
        showComments,
        showShares,
        carouselAutoplay,
        carouselSpeed,
        carouselLoop,
        resMode,
    } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const showApiNotice = !facebookPageId || !facebookAccessToken;

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/facebook-feed"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('Facebook API Settings', 'zoloblocks')} panelProps={props} firstOpen={true}>
                            <div className="zolo-flex-col-control">
                                <ZoloTextControl
                                    label={__('Facebook Page ID or Username', 'zoloblocks')}
                                    value={facebookPageId}
                                    onChange={(value) => setAttributes({ facebookPageId: value })}
                                    help={__('Enter your Facebook Page ID or username (e.g., "Meta" or "123456789")', 'zoloblocks')}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloTextControl
                                    label={__('Facebook Access Token', 'zoloblocks')}
                                    type="password"
                                    value={facebookAccessToken}
                                    onChange={(value) => setAttributes({ facebookAccessToken: value })}
                                    help={__('Get your access token from Facebook Graph API Explorer', 'zoloblocks')}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloRangeControl
                                    label={__('Cache Expiration (seconds)', 'zoloblocks')}
                                    value={cacheExpiration}
                                    onChange={(value) => setAttributes({ cacheExpiration: Number(value) })}
                                    min={300}
                                    max={86400}
                                    step={60}
                                    help={__('How long to cache Facebook posts', 'zoloblocks')}
                                />
                            </div>
                            {showApiNotice && (
                                <p className="components-notice is-warning" style={{ padding: '10px', background: '#f0f0f1', borderLeft: '4px solid #dba617', margin: '10px 0' }}>
                                    {__('Please configure Facebook Page ID and Access Token to display live posts.', 'zoloblocks')}
                                </p>
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
                                    label={__('Posts Per Page', 'zoloblocks')}
                                    value={postsPerPage}
                                    onChange={(value) => setAttributes({ postsPerPage: value })}
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

                        <ZoloPanelBody title={__('Post Elements', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Avatar', 'zoloblocks')}
                                    checked={showAvatar}
                                    onChange={(value) => setAttributes({ showAvatar: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Author', 'zoloblocks')}
                                    checked={showAuthor}
                                    onChange={(value) => setAttributes({ showAuthor: value })}
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
                                    label={__('Show Content', 'zoloblocks')}
                                    checked={showContent}
                                    onChange={(value) => setAttributes({ showContent: value })}
                                />
                            </div>
                            {showContent && (
                                <>
                                    <div className="zolo-flex-col-control">
                                        <ZoloRangeControl
                                            label={__('Content Length (0 for full)', 'zoloblocks')}
                                            value={contentLength}
                                            onChange={(value) => setAttributes({ contentLength: value })}
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

                        <ZoloPanelBody title={__('Engagement', 'zoloblocks')} panelProps={props}>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Reactions', 'zoloblocks')}
                                    checked={showReactions}
                                    onChange={(value) => setAttributes({ showReactions: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Comments Count', 'zoloblocks')}
                                    checked={showComments}
                                    onChange={(value) => setAttributes({ showComments: value })}
                                />
                            </div>
                            <div className="zolo-flex-col-control">
                                <ZoloToggleControl
                                    label={__('Show Shares Count', 'zoloblocks')}
                                    checked={showShares}
                                    onChange={(value) => setAttributes({ showShares: value })}
                                />
                            </div>
                        </ZoloPanelBody>
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Layout', 'zoloblocks')} stylePanel={true} firstOpen={true} panelProps={props}>
                            {(layoutType === 'grid' || layoutType === 'masonry') && (
                                <ResCounterControl
                                    label={__('Columns', 'zoloblocks')}
                                    controlName={FB_COLUMNS}
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

                            <ResGapControl
                                label={__('Gap', 'zoloblocks')}
                                controlName={FB_GAP}
                                requiredProps={requiredProps}
                                max={100}
                            />
                        </ZoloPanelBody>
                    </>
                }
                advanceTab={
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
