/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl, TextControl, RangeControl, SelectControl, Draggable } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
    ResAlignmentControl,
    ResRangeControl,
    ColorControl,
    TypographyDropdown,
    HeaderTabs,
    TabPanelControl,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloPanelBody,
} = window.zoloModule;

import objAttributes from './attributes';

import { TITLE_TYPO } from './constants/typoPrefixConstant';
import { STAR_SIZE, TITLE_GAP, ITEMS_ALIGN } from './constants';

import { FLEX_HORIZONTAL_OPTIONS, HEADING, ICON_POSITIONS } from '../../../src/global/constants';

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        disableDefaultUI,
        fullscreenControl,
        draggable,
        mapTypeControl,
        zoomControl,
        scrollwheel,
        scaleControl,
        streetViewControl,
        rotateControl,
        location,
        zoom,
        mapType,
        language,
        height,
        latitude,
        longitude,
        rating,
        showTitle,
        title,
        titleTag,
        titleColor,
        titlePosition,
        activeStarColor,
        inactiveStarColor,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zolo-blocks')} firstOpen={true} panelProps={props}>
                            <TextControl
                                label={__('Location', 'zolo-blocks')}
                                help={__('Type the specified location name that you want to display on the map.', 'zolo-blocks')}
                                value={location}
                                placeholder={__('Enter the Location Name', 'zolo-blocks')}
                                onChange={(location) => {
                                    console.log(location);
                                    setAttributes({ location });
                                }}
                            />
                            <TextControl
                                label={__('Latitude', 'zolo-blocks')}
                                placeholder={__('37.7749', 'zolo-blocks')}
                                value={latitude}
                                onChange={(latitude) => setAttributes({ latitude })}
                            />
                            <TextControl
                                label={__('Longitude', 'zolo-blocks')}
                                placeholder={__('-122.4194', 'zolo-blocks')}
                                value={longitude}
                                onChange={(longitude) => setAttributes({ longitude })}
                            />
                            <RangeControl
                                label={__('Zoom Level', 'zolo-blocks')}
                                help={__(
                                    'Set the initial zoom level of the map. The higher the value will be the more zoomed in the map',
                                    'zolo-blocks'
                                )}
                                value={zoom}
                                onChange={(zoom) => setAttributes({ zoom })}
                                min={1}
                                max={21}
                            />
                            <SelectControl
                                label={__('Map View Type', 'zolo-blocks')}
                                help={__(
                                    'Set the type of map to be displayed, such as road map, satellite imagery, or terrain.',
                                    'zolo-blocks'
                                )}
                                value={mapType}
                                options={[
                                    {
                                        label: __('Roadmap', 'zolo-blocks'),
                                        value: 'roadmap',
                                    },
                                    {
                                        label: __('Satellite', 'zolo-blocks'),
                                        value: 'satellite',
                                    },
                                    {
                                        label: __('Hybrid', 'zolo-blocks'),
                                        value: 'hybrid',
                                    },
                                    {
                                        label: __('Terrain', 'zolo-blocks'),
                                        value: 'terrain',
                                    },
                                ]}
                                onChange={(mapType) => {
                                    setAttributes({ mapType });
                                }}
                            />
                            <SelectControl
                                label={__('Select Language for your maps', 'zolo-blocks')}
                                help={__(
                                    'Select the language of the map interface. such as for English select English or French select French',
                                    'zolo-blocks'
                                )}
                                value={language}
                                options={[
                                    {
                                        value: 'af',
                                        label: __('Afrikaans', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'sq',
                                        label: __('Albanian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'am',
                                        label: __('Amharic', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ar',
                                        label: __('Arabic', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'hy',
                                        label: __('Armenian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'az',
                                        label: __('Azerbaijani', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'eu',
                                        label: __('Basque', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'be',
                                        label: __('Belarusian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'bn',
                                        label: __('Bengali', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'bs',
                                        label: __('Bosnian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'bg',
                                        label: __('Bulgarian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'my',
                                        label: __('Burmese', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ca',
                                        label: __('Catalan', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'zh',
                                        label: __('Chinese', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'hr',
                                        label: __('Croatian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'cs',
                                        label: __('Czech', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'da',
                                        label: __('Danish', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'nl',
                                        label: __('Dutch', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'en',
                                        label: __('English', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'et',
                                        label: __('Estonian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'fa',
                                        label: __('Farsi', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'fi',
                                        label: __('Finnish', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'fr',
                                        label: __('French', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'gl',
                                        label: __('Galician', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ka',
                                        label: __('Georgian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'de',
                                        label: __('German', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'el',
                                        label: __('Greek', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'gu',
                                        label: __('Gujarati', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'iw',
                                        label: __('Hebrew', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'hi',
                                        label: __('Hindi', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'hu',
                                        label: __('Hungarian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'is',
                                        label: __('Icelandic', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'id',
                                        label: __('Indonesian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'it',
                                        label: __('Italian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ja',
                                        label: __('Japanese', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'kn',
                                        label: __('Kannada', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'kk',
                                        label: __('Kazakh', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'km',
                                        label: __('Khmer', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ko',
                                        label: __('Korean', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ky',
                                        label: __('Kyrgyz', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'lo',
                                        label: __('Lao', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'lv',
                                        label: __('Latvian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'lt',
                                        label: __('Lithuanian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'mk',
                                        label: __('Macedonian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ms',
                                        label: __('Malay', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ml',
                                        label: __('Malayalam', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'mr',
                                        label: __('Marathi', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'mn',
                                        label: __('Mongolian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ne',
                                        label: __('Nepali', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'no',
                                        label: __('Norwegian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'pl',
                                        label: __('Polish', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'pt',
                                        label: __('Portuguese', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'pa',
                                        label: __('Punjabi', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ro',
                                        label: __('Romanian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ru',
                                        label: __('Russian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'sr',
                                        label: __('Serbian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'si',
                                        label: __('Sinhalese', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'sk',
                                        label: __('Slovak', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'sl',
                                        label: __('Slovenian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'es',
                                        label: __('Spanish', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'sw',
                                        label: __('Swahili', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'sv',
                                        label: __('Swedish', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ta',
                                        label: __('Tamil', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'te',
                                        label: __('Telugu', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'th',
                                        label: __('Thai', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'tr',
                                        label: __('Turkish', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'uk',
                                        label: __('Ukrainian', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'ur',
                                        label: __('Urdu', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'uz',
                                        label: __('Uzbek', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'vi',
                                        label: __('Vietnamese', 'zolo-blocks'),
                                    },
                                    {
                                        value: 'zu',
                                        label: __('Zulu', 'zolo-blocks'),
                                    },
                                ]}
                                onChange={(language) => {
                                    setAttributes({ language });
                                }}
                            />
                            <ToggleControl
                                label={__('Enable Draggable', 'zolo-blocks')}
                                checked={draggable}
                                onChange={(draggable) => setAttributes({ draggable })}
                            />
                            <ToggleControl
                                label={__('Disable Default UI', 'zolo-blocks')}
                                checked={disableDefaultUI}
                                onChange={(disableDefaultUI) => setAttributes({ disableDefaultUI })}
                            />

                            {disableDefaultUI && (
                                <>
                                    <ToggleControl
                                        label={__('Enable Fullscreen Control', 'zolo-blocks')}
                                        checked={fullscreenControl}
                                        onChange={(fullscreenControl) => setAttributes({ fullscreenControl })}
                                    />
                                    <ToggleControl
                                        label={__('Enable Map Type Control', 'zolo-blocks')}
                                        checked={mapTypeControl}
                                        onChange={(mapTypeControl) => setAttributes({ mapTypeControl })}
                                    />
                                    <ToggleControl
                                        label={__('Enable Zoom Control', 'zolo-blocks')}
                                        checked={zoomControl}
                                        onChange={(zoomControl) => setAttributes({ zoomControl })}
                                    />
                                    <ToggleControl
                                        label={__('Enable Scrollwheel', 'zolo-blocks')}
                                        checked={scrollwheel}
                                        onChange={(scrollwheel) => setAttributes({ scrollwheel })}
                                    />
                                    <ToggleControl
                                        label={__('Enable Scale Control', 'zolo-blocks')}
                                        checked={scaleControl}
                                        onChange={(scaleControl) => setAttributes({ scaleControl })}
                                    />
                                    <ToggleControl
                                        label={__('Enable Rotate Control', 'zolo-blocks')}
                                        checked={rotateControl}
                                        onChange={(rotateControl) => setAttributes({ rotateControl })}
                                    />
                                    <ToggleControl
                                        label={__('Enable Street View Control', 'zolo-blocks')}
                                        checked={streetViewControl}
                                        onChange={(streetViewControl) => setAttributes({ streetViewControl })}
                                    />
                                    {/*

                               */}
                                </>
                            )}
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Rating', 'zolo-blocks')} panelProps={props}>
                            <RangeControl
                                label={__('Rating', 'zolo-blocks')}
                                value={rating}
                                onChange={(v) => setAttributes({ rating: v })}
                                min={1}
                                max={5}
                                step={0.1}
                            />
                        </ZoloPanelBody>
                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zolo-blocks')} panelProps={props}>
                                <TextControl
                                    label={__('Text', 'zolo-blocks')}
                                    value={title}
                                    onChange={(v) => setAttributes({ title: v })}
                                    placeholder={__('Enter title', 'zolo-blocks')}
                                />
                                <SelectControl
                                    label={__('Select Tag', 'zolo-blocks')}
                                    value={titleTag}
                                    options={HEADING}
                                    onChange={(v) => {
                                        setAttributes({ titleTag: v });
                                    }}
                                />
                                <IconicBtnGroup
                                    label={__('Position', 'zolo-blocks')}
                                    value={titlePosition}
                                    onChange={(value) =>
                                        setAttributes({
                                            titlePosition: value,
                                        })
                                    }
                                    options={ICON_POSITIONS}
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Star', 'zolo-blocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <RangeControl
                                label={__('Height', 'zolo-blocks')}
                                help={__('Specifies the height of the map in pixels.', 'zolo-blocks')}
                                value={height}
                                onChange={(height) => setAttributes({ height })}
                                min={200}
                                max={1200}
                            />
                            {/* <ResRangeControl
                                label={__('Height', 'zolo-blocks')}
                                help={__('Specifies the height of the map in pixels.', 'zolo-blocks')}
                                controlName={height}
                                requiredProps={requiredProps}
                                min={200}
                                max={1200}
                            /> */}
                        </ZoloPanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
