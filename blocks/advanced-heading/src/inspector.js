//wrodpress dependencies
import { InspectorControls } from '@wordpress/block-editor';
import {
    BaseControl,
    Button,
    ButtonGroup,
    PanelBody,
    TabPanel,
    TextControl,
    ToggleControl,
    SelectControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { doAction, applyFilters } from "@wordpress/hooks";

//internal dependencies controls
// import BackgroundControl from '../../../src/controls/background-control';
// import BorderControl from '../../../src/controls/border-control';
// import BoxShadowControl from '../../../src/controls/boxshadow-control';
// import ColorControl from '../../../src/controls/color-control';
// import ResDimensionsControl from '../../../src/controls/dimensions-control';
// import ResAlignmentControl from '../../../src/controls/res-alignment-control';
// import TypographyDropdown from '../../../src/controls/typography-control';

const {
    BackgroundControl,
    BorderControl,
    BoxShadowControl,
    ColorControl,
    ResDimensionsControl,
    ResAlignmentControl,
    TypographyDropdown
} = window.zoloModule;

//block attributes
import objAttributes from './attributes';

//block constants
import {
    STYLES,
    HEADING_ALIGNMENT,
    HEADING_TAG,
    SUB_TITLE_MARGIN,
    TITLE_MARGIN,
    WRAPPER_BG,
    WRAPPER_BORDER,
    WRAPPER_MARGIN,
    WRAPPER_PADDING,
    WRAPPER_SHADOW
} from './constants';
import { SUBTITLE_TYPOGRAPHY, TITLE_TYPOGRAPHY } from './constants/typoPrefixConstant';

const Inspector = ({ attributes, setAttributes }) => {

    const {
        resMode,
        //settings
        styles,
        titleText,
        subTitleText,
        titleTagName,
        subTitleTagName,
        showSubTitle,
        showSeparator,

        //design
        titleColor,
        subTitleColor,
    } = attributes;

    const resRequiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    return (
        <InspectorControls key="controls">
            <div className="zolo-panel-control">
                <TabPanel
                    className="zb-parent-tab-panel"
                    activeClass="active-tab"
                    // onSelect={onSelect}
                    tabs={[
                        {
                            name: 'settings',
                            title: 'Settings',
                            className: 'zb-tab settings',
                        },
                        {
                            name: 'design',
                            title: 'Design',
                            className: 'zb-tab design',
                        },
                        {
                            name: 'advanced',
                            title: 'Advanced',
                            className: 'zb-tab advanced',
                        },
                    ]}
                >
                    {(tab) => (
                        <div className={'zb-tab-controls' + tab.name}>
                            {tab.name === 'settings' && (
                                <>
                                    <PanelBody
                                        title={__('General', 'zolo-blocks')}
                                        initialOpen={true}
                                    >
                                        {/* Hook Test */}
                                        {doAction('zolo_ah_general_start_action', attributes)}
                                        {applyFilters('zolo_ah_general_start_filter', '', attributes, setAttributes)}

                                        <SelectControl
                                            label={__("Premade Styles", "zolo-blocks")}
                                            value={styles}
                                            options={applyFilters('zolo_ah_style_filter', STYLES) || STYLES}
                                            onChange={(selected) => console.log("styles: ", selected)}
                                        />
                                        <TextControl
                                            label={__('Title Text', 'zolo-blocks')}
                                            value={titleText}
                                            onChange={(titleText) => setAttributes({ titleText })}
                                        />

                                        <BaseControl label={__("Title Tag", "zolo-blocks")} >
                                            <ButtonGroup>
                                                {HEADING_TAG.map((item, key) => (
                                                    <Button
                                                        key={key}
                                                        variant={titleTagName === item.value ? 'primary' : 'secondary'}
                                                        onClick={() => setAttributes({ titleTagName: item.value })}
                                                    >
                                                        {item.label}
                                                    </Button>
                                                ))}
                                            </ButtonGroup>
                                        </BaseControl>

                                        <ToggleControl
                                            label={__('Show Sub TItle', 'zolo-blocks')}
                                            checked={showSubTitle}
                                            onChange={(showSubTitle) => setAttributes({ showSubTitle })}
                                        />

                                        <ToggleControl
                                            label={__('Show Separator', 'zolo-blocks')}
                                            checked={showSeparator}
                                            onChange={(showSeparator) => setAttributes({ showSeparator })}
                                        />

                                        {showSubTitle && (
                                            <>
                                                <TextControl
                                                    label={__('Sub Title Text', 'zolo-blocks')}
                                                    value={subTitleText}
                                                    onChange={(subTitleText) => setAttributes({ subTitleText })}
                                                />

                                                <BaseControl label={__("Sub Title Tag", "zolo-blocks")} >
                                                    <ButtonGroup>
                                                        {HEADING_TAG.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                variant={subTitleTagName === item.value ? 'primary' : 'secondary'}
                                                                onClick={() => setAttributes({ subTitleTagName: item.value })}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>
                                            </>
                                        )}

                                        {/* <ResRangeControl
											label={__(
												'Heading Width',
												'zolo-blocks'
											)}
											resRequiredProps={resRequiredProps}
											controlName={HEADING_WIDTH}
											min={0}
											max={500}
											step={1}
										/> */}

                                        <ResAlignmentControl
                                            label={__('Alignmet', 'zolo-blocks')}
                                            controlName={HEADING_ALIGNMENT}
                                            resRequiredProps={resRequiredProps}
                                            alignOptions={[
                                                {
                                                    label: 'Left',
                                                    value: 'left',
                                                },
                                                {
                                                    label: 'Center',
                                                    value: 'center',
                                                },
                                                {
                                                    label: 'Right',
                                                    value: 'right',
                                                },
                                                {
                                                    label: 'Justify',
                                                    value: 'justify',
                                                },
                                            ]}
                                        />


                                    </PanelBody>
                                </>
                            )}

                            {tab.name === 'design' && (
                                <>
                                    <PanelBody
                                        title={__('Title', 'zolo-blocks')}
                                        initialOpen={true}
                                    >
                                        <TypographyDropdown
                                            label="Typography"
                                            typoPrefixConstant={TITLE_TYPOGRAPHY}
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={titleColor}
                                            onChange={(val) => setAttributes({
                                                titleColor: val,
                                            })}
                                        />

                                        <ResDimensionsControl
                                            label={__('Margin', 'zolo-blocks')}
                                            controlName={TITLE_MARGIN}
                                            resRequiredProps={resRequiredProps}
                                        />

                                    </PanelBody>

                                    <PanelBody
                                        title={__('Sub Title', 'zolo-blocks')}
                                        initialOpen={false}
                                    >
                                        <TypographyDropdown
                                            label="Typography"
                                            typoPrefixConstant={SUBTITLE_TYPOGRAPHY}
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ColorControl
                                            label={__('Color', 'zolo-blocks')}
                                            color={subTitleColor}
                                            onChange={(val) => setAttributes({
                                                subTitleColor: val,
                                            })}
                                        />

                                        <ResDimensionsControl
                                            label={__('Margin', 'zolo-blocks')}
                                            controlName={SUB_TITLE_MARGIN}
                                            resRequiredProps={resRequiredProps}
                                        />

                                    </PanelBody>
                                </>
                            )}
                            {tab.name === 'advanced' && (
                                <>
                                    <PanelBody
                                        title={__('Wrapper Margin & Padding', 'zolo-blocks')}
                                        initialOpen={true}
                                    >
                                        <ResDimensionsControl
                                            label="Margin"
                                            controlName={WRAPPER_MARGIN}
                                            resRequiredProps={resRequiredProps}
                                        />

                                        <ResDimensionsControl
                                            label="Padding"
                                            controlName={WRAPPER_PADDING}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__('Background', 'zolo-blocks')}
                                        initialOpen={false}
                                    >
                                        <BackgroundControl
                                            controlName={WRAPPER_BG}
                                            resRequiredProps={resRequiredProps}
                                        />
                                    </PanelBody>

                                    <PanelBody
                                        title={__('Border & BoxShadow', 'zolo-blocks')}
                                        initialOpen={false}
                                    >
                                        <BorderControl
                                            label={__('Border', 'zolo-blocks')}
                                            controlName={WRAPPER_BORDER}
                                            resRequiredProps={resRequiredProps}
                                        />
                                        <BoxShadowControl
                                            controlName={WRAPPER_SHADOW}
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
    )
}

export default Inspector;
