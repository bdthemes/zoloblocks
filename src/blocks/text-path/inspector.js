/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { TextControl, SelectControl, ToggleControl, CardDivider, BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    NormalBGControl,
    ResDimensionsControl,
    BorderControl,
    BoxShadowControl,
    ImageAvatar,
    ImageSizes,
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    AdvancedOptions,
    ZoloPanelBody,
    LinkControl,
    ResAlignmentControl,
    SimpleRangeControl,
    TextStrokeControl,
    TabPanelControl,
} = window.zoloModule;

import objAttributes from './attributes';

import { TEXTPATHTYPO } from './constants/typoPrefixConstant';
import {
    TEXTPATH_ALIGN,
    TEXTPATH_SIZE,
    TEXT_PATH_STROKE,
    TEXT_WORD_SPACING,
    PATH_TEXT_SPACING,
    PATH_OPTION,
    CIRCLE_DURATION,
    CIRCLE_IMG_WIDTH,
    CIRCLE_IMG_HEIGHT,
    CIRCLE_IMAGE_BACKGROUND,
    CIRCLE_IMAGE_PADDING,
    CIRCLE_IMAGE_MARGIN,
    CIRCLE_IMAGE_BORDER,
    CIRCLE_IMAGE_BOX_SHADOW,
    CIRCLE_IMAGE_BORDER_RADIUS,
    PATH_THICKNESS,
} from './constants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';
import { applyFilters } from '@wordpress/hooks';

function Inspector(props) {
    const { attributes, setAttributes, block } = props;
    const {
        resMode,
        textpathContent,
        textPathType,
        pathlink,
        textpathLength,
        textPathSpoint,
        textPathShow,
        textpathRotate,
        textPathColor,
        pathColor,
        textPathHoverColor,
        textPathTypeCircle,
        circleAnimationDuration,
        circlePhoto,
        imageRes,
        showCircleImg,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    // css filter
    const cssFilters = applyFilters('zolo.extensions.controls.cssFilters', [], block, props);

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/textarea"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <TextControl
                                label={__('Text', 'zoloblocks')}
                                value={textpathContent}
                                onChange={(v) => setAttributes({ textpathContent: v })}
                            />
                            <SelectControl
                                label={__('Path Type', 'zoloblocks')}
                                value={textPathType}
                                options={applyFilters('zolo.presets.TextPath', PATH_OPTION)}
                                onChange={(v) => setAttributes({ textPathType: v })}
                            />
                            <div className="zolo-custom-heading">{__('Show/hide elements', 'zoloblocks')}</div>
                            {textPathType === 'circle' && (
                                <ToggleControl
                                    label={__('Image', 'zoloblocks')}
                                    checked={showCircleImg}
                                    onChange={() => setAttributes({ showCircleImg: !showCircleImg })}
                                />
                            )}

                            <ToggleControl
                                label={__('Show Path', 'zoloblocks')}
                                checked={textPathShow}
                                onChange={() => setAttributes({ textPathShow: !textPathShow })}
                            />

                            {textPathType === 'circle' && (
                                <>
                                    <ToggleControl
                                        label={__('Animation Circle', 'zoloblocks')}
                                        checked={textPathTypeCircle}
                                        onChange={() => setAttributes({ textPathTypeCircle: !textPathTypeCircle })}
                                    />

                                    {textPathTypeCircle && (
                                        <>
                                            <SelectControl
                                                label={__('Direction', 'zoloblocks')}
                                                value={circleAnimationDuration.direction}
                                                options={[
                                                    { label: __('Clockwise', 'zoloblocks'), value: 'clockwise' },
                                                    { label: __('Counter Clockwise', 'zoloblocks'), value: 'counter-clockwise' },
                                                ]}
                                                onChange={(value) => {
                                                    setAttributes({
                                                        circleAnimationDuration: {
                                                            ...circleAnimationDuration,
                                                            direction: value,
                                                        },
                                                    });
                                                }}
                                            />
                                            <SimpleRangeControl
                                                label={__('Duration (ms)', 'zoloblocks-pro')}
                                                value={circleAnimationDuration.duration}
                                                onChange={(value) => {
                                                    setAttributes({
                                                        circleAnimationDuration: {
                                                            ...circleAnimationDuration,
                                                            duration: value,
                                                        },
                                                    });
                                                }}
                                                onReset={() =>
                                                    setAttributes({
                                                        circleAnimationDuration: {
                                                            ...circleAnimationDuration,
                                                            duration: 10000,
                                                        },
                                                    })
                                                }
                                                min={100}
                                                step={100}
                                                max={20000}
                                                noUnits={true}
                                            />
                                        </>
                                    )}
                                    <CardDivider />
                                </>
                            )}

                            <div className="zolo-flex-col-control">
                                <SimpleRangeControl
                                    label={__('Staring Points', 'zoloblocks')}
                                    onChange={(v) => setAttributes({ textPathSpoint: v })}
                                    value={textPathSpoint}
                                    onReset={() => setAttributes({ textPathSpoint: '' })}
                                    min={1}
                                    max={100}
                                    step={1}
                                    noUnits={true}
                                />
                            </div>
                            <LinkControl
                                label={__('URL', 'zoloblocks')}
                                value={pathlink}
                                onChange={(value) => setAttributes({ pathlink: value })}
                            />
                            <ResAlignmentControl
                                label={__('Alignment', 'zoloblocks')}
                                controlName={TEXTPATH_ALIGN}
                                requiredProps={requiredProps}
                                alignOptions={DEFAULT_ALIGNS}
                            />
                        </ZoloPanelBody>
                        {showCircleImg && textPathType == 'circle' && (
                            <ZoloPanelBody title={__('Image', 'zoloblocks')} panelProps={props}>
                                <BaseControl label={__('Select', 'zoloblocks')} className="zolo-flex-col-control">
                                    {circlePhoto?.id ? (
                                        <>
                                            <ImageAvatar
                                                imageUrl={circlePhoto && circlePhoto.url}
                                                onDeleteImage={() =>
                                                    setAttributes({
                                                        circlePhoto: {
                                                            id: '',
                                                            url: '',
                                                        },
                                                    })
                                                }
                                                imageId={circlePhoto && circlePhoto.id}
                                                onEditImage={(media) =>
                                                    setAttributes({
                                                        circlePhoto: media,
                                                    })
                                                }
                                            />
                                            <ImageSizes
                                                label={__('Resolution', 'zoloblocks')}
                                                value={imageRes}
                                                onChange={(value) =>
                                                    setAttributes({
                                                        imageRes: value,
                                                    })
                                                }
                                            />
                                        </>
                                    ) : (
                                        <MediaUpload
                                            onSelect={(media) => {
                                                setAttributes({
                                                    circlePhoto: media,
                                                });
                                            }}
                                            allowedTypes={['image']}
                                            value={circlePhoto && circlePhoto.id}
                                            render={({ open }) => (
                                                <Button className="zolo-image-upload-btn" onClick={open}>
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                    >
                                                        <path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408" />
                                                    </svg>
                                                    {__(' Upload Photo', 'zoloblocks')}
                                                </Button>
                                            )}
                                        />
                                    )}
                                </BaseControl>
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Text Path', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            {textPathShow && (
                                <>
                                    <div className="zolo-custom-heading">{__('Path', 'zoloblocks')}</div>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={pathColor}
                                        onChange={(value) =>
                                            setAttributes({
                                                pathColor: value,
                                            })
                                        }
                                    />
                                    <ResRangeControl
                                        label={__('Thikness', 'zoloblocks')}
                                        controlName={PATH_THICKNESS}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={100}
                                        step={1}
                                    />
                                </>
                            )}
                            <TabPanelControl
                                normalComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={textPathColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textPathColor: value,
                                                })
                                            }
                                        />
                                        <TypographyDropdown
                                            label={__('Typography', 'zoloblocks')}
                                            typoPrefixConstant={TEXTPATHTYPO}
                                            requiredProps={requiredProps}
                                            max={36}
                                        />
                                        <CardDivider />
                                        <ResRangeControl
                                            label={__('Size', 'zoloblocks')}
                                            controlName={TEXTPATH_SIZE}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={1000}
                                            step={1}
                                        />
                                        <div className="zolo-flex-col-control">
                                            <SimpleRangeControl
                                                label={__('Rotate', 'zoloblocks')}
                                                onChange={(v) => setAttributes({ textpathRotate: v })}
                                                value={textpathRotate}
                                                onReset={() => setAttributes({ textpathRotate: '' })}
                                                min={1}
                                                max={360}
                                                step={1}
                                                noUnits={true}
                                            />
                                        </div>
                                        <CardDivider />
                                        <div className="zolo-flex-col-control">
                                            <SimpleRangeControl
                                                label={__('Length', 'zoloblocks')}
                                                onChange={(v) => setAttributes({ textpathLength: v })}
                                                value={textpathLength}
                                                onReset={() => setAttributes({ textpathLength: '' })}
                                                min={1}
                                                max={1000}
                                                step={1}
                                                noUnits={true}
                                            />
                                        </div>
                                        <TextStrokeControl
                                            controlName={TEXT_PATH_STROKE}
                                            requiredProps={requiredProps}
                                            enableTransition={false}
                                        />
                                        <ResRangeControl
                                            label={__('Word Spacing', 'zoloblocks')}
                                            controlName={TEXT_WORD_SPACING}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={35}
                                            step={1}
                                        />
                                        <ResRangeControl
                                            label={__('Spacing', 'zoloblocks')}
                                            controlName={PATH_TEXT_SPACING}
                                            requiredProps={requiredProps}
                                            min={0}
                                            max={35}
                                            step={1}
                                        />
                                    </>
                                }
                                hoverComponents={
                                    <>
                                        <ColorControl
                                            label={__('Color', 'zoloblocks')}
                                            color={textPathHoverColor}
                                            onChange={(value) =>
                                                setAttributes({
                                                    textPathHoverColor: value,
                                                })
                                            }
                                        />
                                    </>
                                }
                            />
                        </ZoloPanelBody>

                        {showCircleImg && textPathType === 'circle' && (
                            <>
                                <ZoloPanelBody title={__('Image', 'zoloblocks')} firstOpen={false} stylePanel={true} panelProps={props}>
                                    <ResRangeControl
                                        label={__('Size', 'zoloblocks')}
                                        controlName={CIRCLE_IMG_HEIGHT}
                                        requiredProps={requiredProps}
                                        min={0}
                                        max={1000}
                                    />
                                    <CardDivider />

                                    <NormalBGControl
                                        requiredProps={requiredProps}
                                        controlName={CIRCLE_IMAGE_BACKGROUND}
                                        noMainBGImg={false}
                                    />
                                    <ResDimensionsControl
                                        label={__('Padding', 'zoloblocks')}
                                        controlName={CIRCLE_IMAGE_PADDING}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />

                                    <ResDimensionsControl
                                        label={__('Margin', 'zoloblocks')}
                                        controlName={CIRCLE_IMAGE_MARGIN}
                                        requiredProps={requiredProps}
                                        forBorderRadius={false}
                                    />

                                    <CardDivider />
                                    <BorderControl
                                        label={__('Border', 'zoloblocks')}
                                        controlName={CIRCLE_IMAGE_BORDER}
                                        requiredProps={requiredProps}
                                    />
                                    <BoxShadowControl
                                        controlName={CIRCLE_IMAGE_BOX_SHADOW}
                                        requiredProps={requiredProps}
                                        enableTransition={false}
                                    />
                                    <ResDimensionsControl
                                        label={__('Border Radius', 'zoloblocks')}
                                        controlName={CIRCLE_IMAGE_BORDER_RADIUS}
                                        requiredProps={requiredProps}
                                        forBorderRadius={true}
                                    />
                                    <CardDivider />
                                    {cssFilters && cssFilters.length > 0 && cssFilters}
                                </ZoloPanelBody>
                            </>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/textpath"
                        />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
