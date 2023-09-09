import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TabPanel, TextControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import {
    PRESETS,
    GRID_COLUMNS,
    COLUMNS_GAP,
    THUMBNAIL_HEIGHT,
    COLUMN_PADDING,
    COLUMN_BG,
    COLUMN_BORDER,
    COLUMN_BORDER_RADIUS,
    COLUMN_SHADOW,
    CONTAINER_MARGIN,
    CONTAINER_PADDING,
} from './constants';

import { HEADING, THUMBNAIL_SIZE } from '../../../src/global/constants';

const { ResDimensionsControl, QueryControl, ResRangeControl, RangeResetControl, NormalBGControl, BorderControl, BoxShadowControl } =
    window.zoloModule;

function Inspector({ attributes, setAttributes }) {
    const {
        preset,
        resMode,
        showThumbnail,
        thumbnailSize,
        showTitle,
        titleTag,
        showExcerpt,
        excerptindicator,
        showReadMore,
        readMoreBtnText,
        showCategory,
        showAuthor,
        showMeta,
    } = attributes;

    const resRequiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    const changePremade = (selected) => {
        setAttributes({ preset: selected });
        // switch (selected) {
        // 	case 'default':
        // 		setAttributes({
        // 			showTestimonialMessage: false,
        // 		});
        // 		break;
        // 	case 'style-1':
        // 		setAttributes({
        // 			showTestimonialMessage: false,
        // 		});
        // 		break;
        // 	case 'style-2':
        // 		setAttributes({
        // 			showTestimonialMessage: false,
        // 		});
        // 		break;
        // 	default:
        // 		setAttributes({
        // 			showTestimonialMessage: false,
        // 		});
        // 		break;
        // }
    };

    return (
        <InspectorControls key="controls">
            <div className="zolo-panel-control">
                <TabPanel
                    className="zolo-parent-tab-panel"
                    activeClass="active-tab"
                    tabs={[
                        {
                            name: 'settings',
                            title: __('Settings', 'zolo-blocks'),
                            className: 'zolo-tab settings',
                        },
                        {
                            name: 'design',
                            title: __('Design', 'zolo-blocks'),
                            className: 'zolo-tab design',
                        },
                        {
                            name: 'advanced',
                            title: __('Advanced', 'zolo-blocks'),
                            className: 'zolo-tab advanced',
                        },
                    ]}
                >
                    {(tab) => (
                        <div className={'zolo-tab-controls' + tab.name}>
                            {tab.name === 'settings' && (
                                <>
                                    <PanelBody title={__('Query', 'zolo-blocks')} initialOpen={true}>
                                        <QueryControl attributes={attributes} setAttributes={setAttributes} />
                                    </PanelBody>

                                    <PanelBody title={__('Layout Style', 'zolo-blocks')} initialOpen={false}>
                                        <SelectControl
                                            label={__('Preset Designs', 'zolo-blocks')}
                                            value={preset}
                                            options={PRESETS}
                                            onChange={(selected) => changePremade(selected)}
                                        />
                                        <ResRangeControl
                                            label={__('Columns', 'zolo-blocks')}
                                            controlName={GRID_COLUMNS}
                                            resRequiredProps={resRequiredProps}
                                            max={4}
                                            min={1}
                                            step={1}
                                            noUnits={true}
                                        />
                                        <ResRangeControl
                                            label={__('Columns Gap', 'zolo-blocks')}
                                            controlName={COLUMNS_GAP}
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ToggleControl
                                            label={__('Show Thumbnail', 'zolo-blocks')}
                                            checked={showThumbnail}
                                            onChange={(showThumbnail) => setAttributes({ showThumbnail })}
                                        />
                                        <ResRangeControl
                                            label={__('Thumbnail Height', 'zolo-blocks')}
                                            controlName={THUMBNAIL_HEIGHT}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <SelectControl
                                            label={__('Thumbnail Image Size', 'zolo-blocks')}
                                            value={thumbnailSize}
                                            options={THUMBNAIL_SIZE}
                                            onChange={(selected) => changePremade(selected)}
                                        />

                                        <ToggleControl
                                            label={__('Show Title', 'zolo-blocks')}
                                            checked={showTitle}
                                            onChange={(showTitle) => setAttributes({ showTitle })}
                                        />
                                        <SelectControl
                                            label={__('Title Tag', 'zolo-blocks')}
                                            value={titleTag}
                                            options={HEADING}
                                            onChange={(titleTag) => setAttributes({ titleTag })}
                                        />
                                        <RangeResetControl
                                            label={__('Title Words', 'zolo-blocks')}
                                            controlName={'titleWords'}
                                            resRequiredProps={resRequiredProps}
                                            min={1}
                                            max={100}
                                            step={1}
                                        />

                                        <ToggleControl
                                            label={__('Show Excerpt', 'zolo-blocks')}
                                            checked={showExcerpt}
                                            onChange={(showExcerpt) => setAttributes({ showExcerpt })}
                                        />
                                        <RangeResetControl
                                            label={__('Excerpt Words', 'zolo-blocks')}
                                            controlName={'excerptWords'}
                                            resRequiredProps={resRequiredProps}
                                            min={1}
                                            max={100}
                                            step={1}
                                        />
                                        <TextControl
                                            label={__(' Expansion Indicator', 'zolo-blocks')}
                                            value={excerptindicator}
                                            onChange={(excerptindicator) => setAttributes({ excerptindicator })}
                                        />

                                        <ToggleControl
                                            label={__('Show Read More Button', 'zolo-blocks')}
                                            checked={showReadMore}
                                            onChange={(showReadMore) => setAttributes({ showReadMore })}
                                        />
                                        {showReadMore && (
                                            <TextControl
                                                label={__('Button Text', 'zolo-blocks')}
                                                value={readMoreBtnText}
                                                onChange={(readMoreBtnText) => setAttributes({ readMoreBtnText })}
                                            />
                                        )}

                                        <ToggleControl
                                            label={__('Show Category', 'zolo-blocks')}
                                            checked={showCategory}
                                            onChange={(showCategory) => setAttributes({ showCategory })}
                                        />
                                        <ToggleControl
                                            label={__('Show Author', 'zolo-blocks')}
                                            checked={showAuthor}
                                            onChange={(showAuthor) => setAttributes({ showAuthor })}
                                        />
                                        <ToggleControl
                                            label={__('Show Meta', 'zolo-blocks')}
                                            checked={showMeta}
                                            onChange={(showMeta) => setAttributes({ showMeta })}
                                        />
                                    </PanelBody>
                                </>
                            )}

                            {tab.name === 'design' && (
                                <>
                                    <PanelBody title={__('Grid Columns', 'zolo-blocks')} initialOpen={true}>
                                        <ResDimensionsControl
                                            label={__('Padding', 'zolo-blocks')}
                                            controlName={COLUMN_PADDING}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <NormalBGControl resRequiredProps={resRequiredProps} controlName={COLUMN_BG} noMainBGImg={true} />
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={COLUMN_BORDER}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Border Radius', 'zolo-blocks')}
                                            controlName={COLUMN_BORDER_RADIUS}
                                            resRequiredProps={resRequiredProps}
                                            forBorderRadius={true}
                                        />
                                        <BoxShadowControl controlName={COLUMN_SHADOW} resRequiredProps={resRequiredProps} />
                                    </PanelBody>
                                    <PanelBody title={__('Image', 'zolo-blocks')} initialOpen={false}></PanelBody>
                                    <PanelBody title={__('Title', 'zolo-blocks')} initialOpen={false}></PanelBody>
                                    <PanelBody title={__('Excerpt', 'zolo-blocks')} initialOpen={false}></PanelBody>
                                    <PanelBody title={__('Meta', 'zolo-blocks')} initialOpen={false}></PanelBody>
                                </>
                            )}

                            {tab.name === 'advanced' && (
                                <>
                                    <PanelBody title={__('Spacing', 'zolo-blocks')} initialOpen={false}>
                                        <ResDimensionsControl
                                            label={__('Margin', 'zolo-blocks')}
                                            controlName={CONTAINER_MARGIN}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <ResDimensionsControl
                                            label={__('Padding', 'zolo-blocks')}
                                            controlName={CONTAINER_PADDING}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>
                                </>
                            )}
                        </div>
                    )}
                </TabPanel>
            </div>
        </InspectorControls>
    );
}

export default Inspector;
