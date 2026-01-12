import { TabPanel, Panel, PanelBody, __experimentalVStack as VStack, Flex, FlexItem, FlexBlock, TextControl, RangeControl } from '@wordpress/components';
import FontPicker from '../../controls/typography-control/fontPicker';
import ZoloShadowControl from '../../controls/zolo-shadow-control';
import { fontWeightOptions, borderStyles, overflowOptions, backgroundTypes, whiteSpaceOptions, displayOptions, positionOptions, floatOptions, clearOptions, verticalAlignOptions, gridLayoutTypeOptions } from './utils';
import { __ } from '@wordpress/i18n';
import { reset, formatUppercase, formatLowercase, formatCapitalize, formatItalic, formatBold, formatUnderline, formatStrikethrough } from '@wordpress/icons';
import { SVG, Path, Rect } from '@wordpress/components';

// Flex Direction Icons
const rowIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Path d="M4 11h16v2H4z"/><Path d="M16 7l4 5-4 5z"/></SVG>;
const rowReverseIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Path d="M4 11h16v2H4z"/><Path d="M8 7L4 12l4 5z"/></SVG>;
const columnIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Path d="M11 4v16h2V4z"/><Path d="M7 16l5 4 5-4z"/></SVG>;
const columnReverseIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Path d="M11 4v16h2V4z"/><Path d="M7 8l5-4 5 4z"/></SVG>;

// Flex Align Icons
const alignStartIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="4" width="16" height="2"/><Rect x="7" y="9" width="10" height="10" fillOpacity="0.3"/></SVG>;
const alignCenterIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="11" width="16" height="2"/><Rect x="7" y="7" width="10" height="10" fillOpacity="0.3"/></SVG>;
const alignEndIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="18" width="16" height="2"/><Rect x="7" y="5" width="10" height="10" fillOpacity="0.3"/></SVG>;
const alignStretchIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="4" width="16" height="2"/><Rect x="4" y="18" width="16" height="2"/><Rect x="7" y="8" width="10" height="8" fillOpacity="0.3"/></SVG>;

// Flex Justify Icons
const justifyStartIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="4" width="2" height="16"/><Rect x="9" y="7" width="4" height="10" fillOpacity="0.3"/><Rect x="15" y="7" width="4" height="10" fillOpacity="0.3"/></SVG>;
const justifyCenterIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="11" y="4" width="2" height="16"/><Rect x="5" y="7" width="4" height="10" fillOpacity="0.3"/><Rect x="15" y="7" width="4" height="10" fillOpacity="0.3"/></SVG>;
const justifyEndIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="18" y="4" width="2" height="16"/><Rect x="5" y="7" width="4" height="10" fillOpacity="0.3"/><Rect x="11" y="7" width="4" height="10" fillOpacity="0.3"/></SVG>;
const justifySpaceBetweenIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="4" width="2" height="16"/><Rect x="18" y="4" width="2" height="16"/><Rect x="8" y="7" width="3" height="10" fillOpacity="0.3"/><Rect x="13" y="7" width="3" height="10" fillOpacity="0.3"/></SVG>;
const justifySpaceAroundIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="5" y="7" width="5" height="10" fillOpacity="0.3"/><Rect x="14" y="7" width="5" height="10" fillOpacity="0.3"/></SVG>;

// Flex Wrap Icons
const noWrapIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="10" width="16" height="4" fillOpacity="0.3"/></SVG>;
const wrapIcon = <SVG width="24" height="24" viewBox="0 0 24 24"><Rect x="4" y="6" width="8" height="4" fillOpacity="0.3"/><Rect x="4" y="14" width="6" height="4" fillOpacity="0.3"/><Path d="M16 8h4v2h-4z"/><Path d="M18 6l3 4-3 4z"/></SVG>;

const StyleControls = ({ value, onChange }) => {
    const { ZoloRangeUnit, ZoloResponsive, ZoloSelectControl, useDeviceType, ZoloChoose, ColorControl, GradientControl, ZoloMediaUpload } = window.zoloModule;
    const device = useDeviceType();

    return (
        <TabPanel
            className="zb-class-manager-tab-panel"
            tabs={[
                {
                    name: 'style',
                    title: 'Style'
                },
                {
                    name: 'advanced',
                    title: 'Advanced'
                },
            ]}
        >
            {(tab) => {
                if ('style' === tab.name) {
                    return (
                        <Panel>
                            <PanelBody title="Typography" initialOpen={false}>
                                <VStack>
                                    <Flex>
                                        <FlexBlock>
                                            <FontPicker
                                                label="Font Family"
                                                value={value?.typography?.fontFamily}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        typography: {
                                                            ...value?.typography,
                                                            fontFamily: newValue
                                                        }
                                                    })
                                                }}
                                            />
                                        </FlexBlock>
                                        <FlexItem>
                                            <ZoloSelectControl
                                                label="Font Weight"
                                                value={value?.typography?.fontWeight}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        typography: {
                                                            ...value?.typography,
                                                            fontWeight: newValue
                                                        }
                                                    })
                                                }}
                                                options={fontWeightOptions}
                                            />
                                        </FlexItem>
                                    </Flex>
                                    <ZoloResponsive left="62px">
                                        <ZoloRangeUnit
                                            label="Font Size"
                                            value={value?.typography?.fontSize?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    typography: {
                                                        ...value?.typography,
                                                        fontSize: {
                                                            ...value?.typography?.fontSize,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                            units={{
                                                px: { max: 200, step: 1 },
                                                em: { max: 10, step: 0.1 },
                                                rem: { max: 10, step: 0.1 },
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloResponsive left="98px">
                                        <ZoloRangeUnit
                                            label="Letter Spacing"
                                            value={value?.typography?.letterSpacing?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    typography: {
                                                        ...value?.typography,
                                                        letterSpacing: {
                                                            ...value?.typography?.letterSpacing,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                            units={{
                                                px: { max: 100, step: 1 },
                                                em: { max: 5, step: 0.01 },
                                                rem: { max: 5, step: 0.01 },
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloResponsive left="74px">
                                        <ZoloRangeUnit
                                            label="Line Height"
                                            value={value?.typography?.lineHeight?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    typography: {
                                                        ...value?.typography,
                                                        lineHeight: {
                                                            ...value?.typography?.lineHeight,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                            units={{
                                                px: { max: 100, step: 1 },
                                                em: { max: 5, step: 0.01 },
                                                rem: { max: 5, step: 0.01 },
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloChoose
                                        label={__('Text Transform', 'zoloblocks')}
                                        value={value?.typography?.textTransform}
                                        onChange={(newValue) => {
                                            onChange({
                                                typography: {
                                                    ...value?.typography,
                                                    textTransform: newValue
                                                }
                                            })
                                        }}
                                        isDeselectable={true}
                                        options={[
                                            { label: 'None', value: 'none', icon: reset },
                                            { label: 'Uppercase', value: 'uppercase', icon: formatUppercase },
                                            { label: 'Lowercase', value: 'lowercase', icon: formatLowercase },
                                            { label: 'Capitalize', value: 'capitalize', icon: formatCapitalize },
                                        ]}
                                    />
                                    <Flex>
                                        <FlexItem>
                                            <ZoloChoose
                                                label={__('Font Style', 'zoloblocks')}
                                                value={value?.typography?.fontStyle}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        typography: {
                                                            ...value?.typography,
                                                            fontStyle: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={[
                                                    { label: 'Normal', value: 'normal', icon: reset },
                                                    { label: 'Italic', value: 'italic', icon: formatItalic },
                                                    { label: 'Bold', value: 'bold', icon: formatBold },
                                                ]}
                                            />
                                        </FlexItem>
                                        <FlexItem>
                                            <ZoloChoose
                                                label={__('Text Decoration', 'zoloblocks')}
                                                value={value?.typography?.textDecoration}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        typography: {
                                                            ...value?.typography,
                                                            textDecoration: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={[
                                                    { label: 'None', value: 'none', icon: reset },
                                                    { label: 'Underline', value: 'underline', icon: formatUnderline },
                                                    { label: 'Strikethrough', value: 'strikethrough', icon: formatStrikethrough },
                                                ]}
                                            />
                                        </FlexItem>
                                    </Flex>
                                </VStack>
                            </PanelBody>
                            <PanelBody title={__('Color', 'zoloblocks')} initialOpen={false}>
                                <VStack>
                                    <ColorControl 
                                        label={__('Text Color', 'zoloblocks')}
                                        color={value?.colors?.textColor}
                                        onChange={(newValue) => {
                                            onChange({
                                                colors: {
                                                    ...value?.colors,
                                                    textColor: newValue
                                                }
                                            })
                                        }}
                                    />
                                    <ZoloChoose
                                        label={__('Background Type', 'zoloblocks')}
                                        value={value?.background?.type}
                                        onChange={(newValue) => {
                                            onChange({
                                                background: {
                                                    ...value?.background,
                                                    type: newValue
                                                }
                                            })
                                        }}
                                        isDeselectable={true}
                                        options={backgroundTypes}
                                    />
                                    {value?.background?.type === 'color' && (
                                        <ColorControl 
                                            label={__('Background Color', 'zoloblocks')}
                                            color={value?.background?.color}
                                            onChange={(newValue) => {
                                                onChange({
                                                    background: {
                                                        ...value?.background,
                                                        color: newValue
                                                    }
                                                })
                                            }}
                                        />
                                    )}
                                    {value?.background?.type === 'gradient' && (
                                        <GradientControl 
                                            label={__('Background Gradient', 'zoloblocks')}
                                            value={value?.background?.gradient}
                                            onChange={(newValue) => {
                                                onChange({
                                                    background: {
                                                        ...value?.background,
                                                        gradient: newValue
                                                    }
                                                })
                                            }}
                                        />
                                    )}
                                    {value?.background?.type === 'image' && (
                                        <>
                                            <ZoloMediaUpload
                                                label={__('Upload Image', 'zoloblocks')}
                                                onValue={{
                                                    id: value?.background?.imageId,
                                                    url: value?.background?.imageUrl
                                                }}
                                                onSelect={(media) => {
                                                    if (media) {
                                                        onChange({
                                                            background: {
                                                                ...value?.background,
                                                                imageUrl: media.url,
                                                                imageId: media.id
                                                            }
                                                        })
                                                    } else {
                                                        onChange({
                                                            background: {
                                                                ...value?.background,
                                                                imageUrl: '',
                                                                imageId: ''
                                                            }
                                                        })
                                                    }
                                                }}
                                            />
                                            {value?.background?.imageUrl && (
                                                <>
                                                    <ZoloResponsive left="115px">
                                                        <ZoloRangeUnit
                                                            label="Background Size"
                                                            value={value?.background?.size?.[device]}
                                                            onChange={(newValue) => {
                                                                onChange({
                                                                    background: {
                                                                        ...value?.background,
                                                                        size: {
                                                                            ...value?.background?.size,
                                                                            [device]: newValue
                                                                        }
                                                                    }
                                                                })
                                                            }}
                                                            units={{
                                                                px: { min: 0, max: 2000, step: 1 },
                                                                '%': { min: 0, max: 200, step: 1 },
                                                                auto: { min: 0, max: 0, step: 0 },
                                                            }}
                                                        />
                                                    </ZoloResponsive>
                                                    <ZoloChoose
                                                        label={__('Background Repeat', 'zoloblocks')}
                                                        value={value?.background?.repeat}
                                                        onChange={(newValue) => {
                                                            onChange({
                                                                background: {
                                                                    ...value?.background,
                                                                    repeat: newValue
                                                                }
                                                            })
                                                        }}
                                                        isDeselectable={true}
                                                        options={[
                                                            { label: __('Yes', 'zoloblocks'), value: 'repeat' },
                                                            { label: __('X', 'zoloblocks'), value: 'repeat-x' },
                                                            { label: __('Y', 'zoloblocks'), value: 'repeat-y' },
                                                            { label: __('No', 'zoloblocks'), value: 'no-repeat' },
                                                        ]}
                                                    />
                                                    <ZoloSelectControl
                                                        label="Background Position"
                                                        value={value?.background?.position}
                                                        onChange={(newValue) => {
                                                            onChange({
                                                                background: {
                                                                    ...value?.background,
                                                                    position: newValue
                                                                }
                                                            })
                                                        }}
                                                        options={[
                                                            { label: __('Default', 'zoloblocks'), value: '' },
                                                            { label: __('Center Center', 'zoloblocks'), value: 'center center' },
                                                            { label: __('Center Left', 'zoloblocks'), value: 'center left' },
                                                            { label: __('Center Right', 'zoloblocks'), value: 'center right' },
                                                            { label: __('Top Center', 'zoloblocks'), value: 'top center' },
                                                            { label: __('Top Left', 'zoloblocks'), value: 'top left' },
                                                            { label: __('Top Right', 'zoloblocks'), value: 'top right' },
                                                            { label: __('Bottom Center', 'zoloblocks'), value: 'bottom center' },
                                                            { label: __('Bottom Left', 'zoloblocks'), value: 'bottom left' },
                                                            { label: __('Bottom Right', 'zoloblocks'), value: 'bottom right' },
                                                        ]}
                                                    />
                                                    <ZoloChoose
                                                        label={__('Background Attachment', 'zoloblocks')}
                                                        value={value?.background?.attachment}
                                                        onChange={(newValue) => {
                                                            onChange({
                                                                background: {
                                                                    ...value?.background,
                                                                    attachment: newValue
                                                                }
                                                            })
                                                        }}
                                                        isDeselectable={true}
                                                        options={[
                                                            { label: __('Default', 'zoloblocks'), value: '' },
                                                            { label: __('Scroll', 'zoloblocks'), value: 'scroll' },
                                                            { label: __('Fixed', 'zoloblocks'), value: 'fixed' },
                                                        ]}
                                                    />
                                                </>
                                            )}
                                        </>
                                    )}
                                </VStack>
                            </PanelBody>
                            <PanelBody title={__('Text Shadow', 'zoloblocks')} initialOpen={false}>
                                <ZoloShadowControl
                                    type="text"
                                    label={__('Text Shadow', 'zoloblocks')}
                                    onValue={{
                                        shadowUnit: value?.textShadow?.unit || 'px',
                                        shadowColor: value?.textShadow?.color || '',
                                        hShadow: value?.textShadow?.horizontal?.Desktop ? parseInt(value.textShadow.horizontal.Desktop) : '',
                                        vShadow: value?.textShadow?.vertical?.Desktop ? parseInt(value.textShadow.vertical.Desktop) : '',
                                        blur: value?.textShadow?.blur?.Desktop ? parseInt(value.textShadow.blur.Desktop) : '',
                                    }}
                                    onSelect={(shadowData) => {
                                        onChange({
                                            textShadow: {
                                                unit: shadowData.shadowUnit,
                                                color: shadowData.shadowColor,
                                                horizontal: {
                                                    ...value?.textShadow?.horizontal,
                                                    Desktop: shadowData.hShadow !== '' ? shadowData.hShadow + (shadowData.shadowUnit || 'px') : ''
                                                },
                                                vertical: {
                                                    ...value?.textShadow?.vertical,
                                                    Desktop: shadowData.vShadow !== '' ? shadowData.vShadow + (shadowData.shadowUnit || 'px') : ''
                                                },
                                                blur: {
                                                    ...value?.textShadow?.blur,
                                                    Desktop: shadowData.blur !== '' ? shadowData.blur + (shadowData.shadowUnit || 'px') : ''
                                                },
                                            }
                                        });
                                    }}
                                />
                            </PanelBody>
                            <PanelBody title={__('Stroke', 'zoloblocks')} initialOpen={false}>
                                <VStack>
                                    <ColorControl 
                                        label={__('Color', 'zoloblocks')}
                                        color={value?.stroke?.color}
                                        onChange={(newValue) => {
                                            onChange({
                                                stroke: {
                                                    ...value?.stroke,
                                                    color: newValue
                                                }
                                            })
                                        }}
                                    />
                                    <ZoloResponsive left="62px">
                                        <ZoloRangeUnit
                                            label="Width"
                                            value={value?.stroke?.width?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    stroke: {
                                                        ...value?.stroke,
                                                        width: {
                                                            ...value?.stroke?.width,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                            units={{
                                                px: { min: 0, max: 50, step: 1 },
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloResponsive left="90px">
                                        <ZoloRangeUnit
                                            label="Dasharray"
                                            value={value?.stroke?.dasharray?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    stroke: {
                                                        ...value?.stroke,
                                                        dasharray: {
                                                            ...value?.stroke?.dasharray,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                            units={{
                                                px: { min: 0, max: 100, step: 1 },
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <RangeControl
                                        label={__('Opacity', 'zoloblocks')}
                                        value={value?.stroke?.opacity || 1}
                                        onChange={(newValue) => {
                                            onChange({
                                                stroke: {
                                                    ...value?.stroke,
                                                    opacity: newValue
                                                }
                                            })
                                        }}
                                        min={0}
                                        max={1}
                                        step={0.01}
                                    />
                                    <ZoloChoose
                                        label={__('Linecap', 'zoloblocks')}
                                        value={value?.stroke?.linecap}
                                        onChange={(newValue) => {
                                            onChange({
                                                stroke: {
                                                    ...value?.stroke,
                                                    linecap: newValue
                                                }
                                            })
                                        }}
                                        isDeselectable={true}
                                        options={[
                                            { label: 'Butt', value: 'butt' },
                                            { label: 'Round', value: 'round' },
                                            { label: 'Square', value: 'square' },
                                            { label: 'Unset', value: 'unset' },
                                        ]}
                                    />
                                    <ZoloChoose
                                        label={__('Linejoin', 'zoloblocks')}
                                        value={value?.stroke?.linejoin}
                                        onChange={(newValue) => {
                                            onChange({
                                                stroke: {
                                                    ...value?.stroke,
                                                    linejoin: newValue
                                                }
                                            })
                                        }}
                                        isDeselectable={true}
                                        options={[
                                            { label: 'Miter', value: 'miter' },
                                            { label: 'Round', value: 'round' },
                                            { label: 'Bevel', value: 'bevel' },
                                            { label: 'Unset', value: 'unset' },
                                        ]}
                                    />
                                </VStack>
                            </PanelBody>
                            <PanelBody title={__('Border', 'zoloblocks')} initialOpen={false}>
                                <VStack>
                                    <ZoloSelectControl
                                        label="Border Style"
                                        value={value?.border?.style}
                                        onChange={(newValue) => {
                                            onChange({
                                                border: {
                                                    ...value?.border,
                                                    style: newValue
                                                }
                                            })
                                        }}
                                        options={borderStyles}
                                    />
                                    {value?.border?.style && value?.border?.style !== 'none' && (
                                        <>
                                            <ColorControl 
                                                label={__('Border Color', 'zoloblocks')}
                                                color={value?.border?.color}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        border: {
                                                            ...value?.border,
                                                            color: newValue
                                                        }
                                                    })
                                                }}
                                            />
                                            <ZoloResponsive left="85px">
                                                <ZoloRangeUnit
                                                    label="Border Width"
                                                    value={value?.border?.width?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            border: {
                                                                ...value?.border,
                                                                width: {
                                                                    ...value?.border?.width,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    units={{
                                                        px: { min: 0, max: 50, step: 1 },
                                                        em: { min: 0, max: 5, step: 0.1 },
                                                    }}
                                                />
                                            </ZoloResponsive>
                                            <ZoloResponsive left="95px">
                                                <ZoloRangeUnit
                                                    label="Border Radius"
                                                    value={value?.border?.radius?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            border: {
                                                                ...value?.border,
                                                                radius: {
                                                                    ...value?.border?.radius,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    units={{
                                                        px: { min: 0, max: 200, step: 1 },
                                                        '%': { min: 0, max: 100, step: 1 },
                                                        em: { min: 0, max: 20, step: 0.1 },
                                                    }}
                                                />
                                            </ZoloResponsive>
                                        </>
                                    )}
                                </VStack>
                            </PanelBody>
                            <PanelBody title={__('Box Shadow', 'zoloblocks')} initialOpen={false}>
                                <ZoloShadowControl
                                    type="box"
                                    label={__('Box Shadow', 'zoloblocks')}
                                    onValue={{
                                        shadowType: value?.boxShadow?.type || 'outset',
                                        shadowUnit: value?.boxShadow?.unit || 'px',
                                        shadowColor: value?.boxShadow?.color || '#7C7C7C',
                                        hOffset: parseInt(value?.boxShadow?.horizontal?.Desktop) || 0,
                                        vOffset: parseInt(value?.boxShadow?.vertical?.Desktop) || 0,
                                        blur: parseInt(value?.boxShadow?.blur?.Desktop) || 0,
                                        spread: parseInt(value?.boxShadow?.spread?.Desktop) || 0,
                                    }}
                                    onSelect={(shadowData) => {
                                        onChange({
                                            boxShadow: {
                                                type: shadowData.shadowType,
                                                unit: shadowData.shadowUnit,
                                                color: shadowData.shadowColor,
                                                horizontal: {
                                                    ...value?.boxShadow?.horizontal,
                                                    Desktop: shadowData.hOffset + (shadowData.shadowUnit || 'px')
                                                },
                                                vertical: {
                                                    ...value?.boxShadow?.vertical,
                                                    Desktop: shadowData.vOffset + (shadowData.shadowUnit || 'px')
                                                },
                                                blur: {
                                                    ...value?.boxShadow?.blur,
                                                    Desktop: shadowData.blur + (shadowData.shadowUnit || 'px')
                                                },
                                                spread: {
                                                    ...value?.boxShadow?.spread,
                                                    Desktop: shadowData.spread + (shadowData.shadowUnit || 'px')
                                                },
                                            }
                                        });
                                    }}
                                />
                            </PanelBody>
                            <PanelBody title={__('Overflow', 'zoloblocks')} initialOpen={false}>
                                <VStack>
                                    <ZoloChoose
                                        label="Overflow X"
                                        value={value?.overflow?.overflowX}
                                        onChange={(newValue) => {
                                            onChange({
                                                overflow: {
                                                    ...value?.overflow,
                                                    overflowX: newValue
                                                }
                                            })
                                        }}
                                        isDeselectable={true}
                                        options={overflowOptions}
                                    />
                                    <ZoloChoose
                                        label="Overflow Y"
                                        value={value?.overflow?.overflowY}
                                        onChange={(newValue) => {
                                            onChange({
                                                overflow: {
                                                    ...value?.overflow,
                                                    overflowY: newValue
                                                }
                                            })
                                        }}
                                        isDeselectable={true}
                                        options={overflowOptions}
                                    />
                                    <ZoloSelectControl
                                        label="White Space"
                                        value={value?.overflow?.whiteSpace}
                                        onChange={(newValue) => {
                                            onChange({
                                                overflow: {
                                                    ...value?.overflow,
                                                    whiteSpace: newValue
                                                }
                                            })
                                        }}
                                        options={whiteSpaceOptions}
                                    />
                                </VStack>
                            </PanelBody>
                        </Panel>
                    )
                } else if ('advanced' === tab.name) {
                    return (
                        <Panel>
                            <PanelBody title={__('Layout', 'zoloblocks')} initialOpen={false}>
                                <VStack>
                                    <ZoloResponsive left="62px">
                                        <ZoloRangeUnit
                                            label="Padding"
                                            value={value?.layout?.padding?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    layout: {
                                                        ...value?.layout,
                                                        padding: {
                                                            ...value?.layout?.padding,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                            units={{
                                                px: { min: 0, max: 500, step: 1 },
                                                '%': { min: 0, max: 100, step: 1 },
                                                em: { min: 0, max: 50, step: 0.1 },
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloResponsive left="62px">
                                        <ZoloRangeUnit
                                            label="Margin"
                                            value={value?.layout?.margin?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    layout: {
                                                        ...value?.layout,
                                                        margin: {
                                                            ...value?.layout?.margin,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                            units={{
                                                px: { min: -500, max: 500, step: 1 },
                                                '%': { min: -100, max: 100, step: 1 },
                                                em: { min: -50, max: 50, step: 0.1 },
                                                auto: { min: 0, max: 0, step: 0 },
                                            }}
                                        />
                                    </ZoloResponsive>
                                </VStack>
                            </PanelBody>
                            <PanelBody title={__('Display', 'zoloblocks')} initialOpen={false}>
                                <VStack>
                                    <ZoloChoose
                                        label={__('Layout Type', 'zoloblocks')}
                                        value={value?.display}
                                        onChange={(newValue) => {
                                            onChange({
                                                display: newValue
                                            })
                                        }}
                                        isDeselectable={true}
                                        options={displayOptions}
                                    />
                                    {value?.display === 'flex' && (
                                        <>
                                            <ZoloChoose
                                                label={__('Direction', 'zoloblocks')}
                                                value={value?.flex?.direction}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        flex: {
                                                            ...value?.flex,
                                                            direction: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={[
                                                    { label: 'Row', value: 'row', icon: rowIcon },
                                                    { label: 'Row Reverse', value: 'row-reverse', icon: rowReverseIcon },
                                                    { label: 'Column', value: 'column', icon: columnIcon },
                                                    { label: 'Column Reverse', value: 'column-reverse', icon: columnReverseIcon },
                                                ]}
                                            />
                                            <ZoloChoose
                                                label={__('Align', 'zoloblocks')}
                                                value={value?.flex?.alignItems}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        flex: {
                                                            ...value?.flex,
                                                            alignItems: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={[
                                                    { label: 'Start', value: 'flex-start', icon: alignStartIcon },
                                                    { label: 'Center', value: 'center', icon: alignCenterIcon },
                                                    { label: 'End', value: 'flex-end', icon: alignEndIcon },
                                                    { label: 'Stretch', value: 'stretch', icon: alignStretchIcon },
                                                ]}
                                            />
                                            <ZoloChoose
                                                label={__('Justify', 'zoloblocks')}
                                                value={value?.flex?.justifyContent}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        flex: {
                                                            ...value?.flex,
                                                            justifyContent: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={[
                                                    { label: 'Start', value: 'flex-start', icon: justifyStartIcon },
                                                    { label: 'Center', value: 'center', icon: justifyCenterIcon },
                                                    { label: 'End', value: 'flex-end', icon: justifyEndIcon },
                                                    { label: 'Space Between', value: 'space-between', icon: justifySpaceBetweenIcon },
                                                    { label: 'Space Around', value: 'space-around', icon: justifySpaceAroundIcon },
                                                ]}
                                            />
                                            <ZoloResponsive left="95px">
                                                <ZoloRangeUnit
                                                    label="Column Gap"
                                                    value={value?.flex?.columnGap?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            flex: {
                                                                ...value?.flex,
                                                                columnGap: {
                                                                    ...value?.flex?.columnGap,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    units={{
                                                        px: { min: 0, max: 200, step: 1 },
                                                        em: { min: 0, max: 20, step: 0.1 },
                                                        rem: { min: 0, max: 20, step: 0.1 },
                                                    }}
                                                />
                                            </ZoloResponsive>
                                            <ZoloResponsive left="62px">
                                                <ZoloRangeUnit
                                                    label="Row Gap"
                                                    value={value?.flex?.rowGap?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            flex: {
                                                                ...value?.flex,
                                                                rowGap: {
                                                                    ...value?.flex?.rowGap,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    units={{
                                                        px: { min: 0, max: 200, step: 1 },
                                                        em: { min: 0, max: 20, step: 0.1 },
                                                        rem: { min: 0, max: 20, step: 0.1 },
                                                    }}
                                                />
                                            </ZoloResponsive>
                                            <ZoloChoose
                                                label={__('Flex Wrap', 'zoloblocks')}
                                                value={value?.flex?.flexWrap}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        flex: {
                                                            ...value?.flex,
                                                            flexWrap: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={[
                                                    { label: 'No Wrap', value: 'nowrap', icon: noWrapIcon },
                                                    { label: 'Wrap', value: 'wrap', icon: wrapIcon },
                                                ]}
                                            />
                                        </>
                                    )}
                                    {value?.display === 'block' && (
                                        <>
                                            <ZoloChoose
                                                label={__('Float', 'zoloblocks')}
                                                value={value?.block?.float}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        block: {
                                                            ...value?.block,
                                                            float: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={floatOptions}
                                            />
                                            <ZoloChoose
                                                label={__('Clear', 'zoloblocks')}
                                                value={value?.block?.clear}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        block: {
                                                            ...value?.block,
                                                            clear: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={clearOptions}
                                            />
                                            <ZoloChoose
                                                label={__('Overflow', 'zoloblocks')}
                                                value={value?.block?.overflow}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        block: {
                                                            ...value?.block,
                                                            overflow: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={overflowOptions}
                                            />
                                        </>
                                    )}
                                    {value?.display === 'grid' && (
                                        <>
                                            <ZoloChoose
                                                label={__('Grid Layout Type', 'zoloblocks')}
                                                value={value?.grid?.layoutType}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        grid: {
                                                            ...value?.grid,
                                                            layoutType: newValue
                                                        }
                                                    })
                                                }}
                                                isDeselectable={true}
                                                options={gridLayoutTypeOptions}
                                            />
                                            <TextControl
                                                label={__('COLUMNS', 'zoloblocks')}
                                                type="number"
                                                value={value?.grid?.columns}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        grid: {
                                                            ...value?.grid,
                                                            columns: newValue
                                                        }
                                                    })
                                                }}
                                                min={0}
                                                step={1}
                                            />
                                            <ZoloResponsive left="95px">
                                                <ZoloRangeUnit
                                                    label="Column Gap"
                                                    value={value?.grid?.columnGap?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            grid: {
                                                                ...value?.grid,
                                                                columnGap: {
                                                                    ...value?.grid?.columnGap,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    units={{
                                                        px: { min: 0, max: 200, step: 1 },
                                                        em: { min: 0, max: 20, step: 0.1 },
                                                        rem: { min: 0, max: 20, step: 0.1 },
                                                    }}
                                                />
                                            </ZoloResponsive>
                                            <ZoloResponsive left="62px">
                                                <ZoloRangeUnit
                                                    label="Row Gap"
                                                    value={value?.grid?.rowGap?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            grid: {
                                                                ...value?.grid,
                                                                rowGap: {
                                                                    ...value?.grid?.rowGap,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    units={{
                                                        px: { min: 0, max: 200, step: 1 },
                                                        em: { min: 0, max: 20, step: 0.1 },
                                                        rem: { min: 0, max: 20, step: 0.1 },
                                                    }}
                                                />
                                            </ZoloResponsive>
                                        </>
                                    )}
                                    {value?.display === 'inline' && (
                                        <>
                                            <ZoloSelectControl
                                                label={__('Vertical Align', 'zoloblocks')}
                                                value={value?.inline?.verticalAlign}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        inline: {
                                                            ...value?.inline,
                                                            verticalAlign: newValue
                                                        }
                                                    })
                                                }}
                                                options={verticalAlignOptions}
                                            />
                                            <ZoloSelectControl
                                                label={__('White Space', 'zoloblocks')}
                                                value={value?.inline?.whiteSpace}
                                                onChange={(newValue) => {
                                                    onChange({
                                                        inline: {
                                                            ...value?.inline,
                                                            whiteSpace: newValue
                                                        }
                                                    })
                                                }}
                                                options={whiteSpaceOptions}
                                            />
                                        </>
                                    )}
                                </VStack>
                            </PanelBody>
                            <PanelBody title={__('Position', 'zoloblocks')} initialOpen={false}>
                                <VStack>
                                    <ZoloChoose
                                        label="Position"
                                        value={value?.position?.type}
                                        onChange={(newValue) => {
                                            onChange({
                                                position: {
                                                    ...value?.position,
                                                    type: newValue
                                                }
                                            })
                                        }}
                                        isDeselectable={true}
                                        options={positionOptions}
                                    />
                                    {value?.position?.type && value?.position?.type !== '' && value?.position?.type !== 'static' && (
                                        <>
                                            <ZoloResponsive left="62px">
                                                <ZoloRangeUnit
                                                    label="Top"
                                                    value={value?.position?.top?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            position: {
                                                                ...value?.position,
                                                                top: {
                                                                    ...value?.position?.top,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    units={{
                                                        px: { min: -2000, max: 2000, step: 1 },
                                                        '%': { min: -100, max: 100, step: 1 },
                                                        auto: { min: 0, max: 0, step: 0 },
                                                    }}
                                                />
                                            </ZoloResponsive>
                                            <ZoloResponsive left="62px">
                                                <ZoloRangeUnit
                                                    label="Right"
                                                    value={value?.position?.right?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            position: {
                                                                ...value?.position,
                                                                right: {
                                                                    ...value?.position?.right,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    units={{
                                                        px: { min: -2000, max: 2000, step: 1 },
                                                        '%': { min: -100, max: 100, step: 1 },
                                                        auto: { min: 0, max: 0, step: 0 },
                                                    }}
                                                />
                                            </ZoloResponsive>
                                            <ZoloResponsive left="62px">
                                                <ZoloRangeUnit
                                                    label="Bottom"
                                                    value={value?.position?.bottom?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            position: {
                                                                ...value?.position,
                                                                bottom: {
                                                                    ...value?.position?.bottom,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    units={{
                                                        px: { min: -2000, max: 2000, step: 1 },
                                                        '%': { min: -100, max: 100, step: 1 },
                                                        auto: { min: 0, max: 0, step: 0 },
                                                    }}
                                                />
                                            </ZoloResponsive>
                                            <ZoloResponsive left="62px">
                                                <ZoloRangeUnit
                                                    label="Left"
                                                    value={value?.position?.left?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            position: {
                                                                ...value?.position,
                                                                left: {
                                                                    ...value?.position?.left,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    units={{
                                                        px: { min: -2000, max: 2000, step: 1 },
                                                        '%': { min: -100, max: 100, step: 1 },
                                                        auto: { min: 0, max: 0, step: 0 },
                                                    }}
                                                />
                                            </ZoloResponsive>
                                        </>
                                    )}
                                </VStack>
                            </PanelBody>
                        </Panel>
                    )
                }
            }}
        </TabPanel>
    )
}

export default StyleControls;