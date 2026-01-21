import { TabPanel, Panel, PanelBody, __experimentalVStack as VStack, Flex, FlexItem, FlexBlock } from '@wordpress/components';
import FontPicker from '../../controls/typography-control/fontPicker';
import { fontWeightOptions, overflowOptions, backgroundTypes, whiteSpaceOptions, displayOptions, positionOptions, floatOptions, clearOptions, verticalAlignOptions, gridLayoutTypeOptions } from './utils';
import { __ } from '@wordpress/i18n';
import { reset, formatUppercase, formatLowercase, formatCapitalize, formatItalic, formatBold, formatUnderline, formatStrikethrough } from '@wordpress/icons';
import {
    rowIcon,
    rowReverseIcon,
    columnIcon,
    columnReverseIcon,
    alignStartIcon,
    alignCenterIcon,
    alignEndIcon,
    alignStretchIcon,
    justifyStartIcon,
    justifyCenterIcon,
    justifyEndIcon,
    justifySpaceBetweenIcon,
    justifySpaceAroundIcon,
    noWrapIcon,
    wrapIcon
} from './icons';



const StyleControls = ({ value, onChange }) => {
    const { ZoloRangeUnit, ZoloResponsive, ZoloSelectControl, useDeviceType, ZoloChoose, ColorControl, GradientControl, ZoloMediaUpload, ZoloShadowControl, ZoloBorder, ZoloBoxControl, ZoloRangeControl, ZoloDualRangeUnit } = window.zoloModule;
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
                                                value={{
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
                                                    <ZoloResponsive>
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
                                    value={value?.textShadow}
                                    excludesControls={['spread', 'inset']}
                                    onChange={(shadowData) => {
                                        onChange({
                                            textShadow: shadowData
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
                                    <ZoloResponsive>
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
                                    <ZoloResponsive>
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
                                    <ZoloRangeControl
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
                                <>
                                    <ZoloBorder
                                        label={__('Border', 'zoloblocks')}
                                        value={value?.border}
                                        onChange={(newValue) => {
                                            onChange({
                                                border: newValue
                                            })
                                        }}
                                    />
                                    <ZoloResponsive left='98px'>
                                        <ZoloBoxControl
                                            label={__('Border Radius', 'zoloblocks')}
                                            value={value?.borderRadius?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    borderRadius: {
                                                        ...value?.borderRadius,
                                                        [device]: newValue
                                                    }
                                                })
                                            }}
                                        />
                                    </ZoloResponsive>
                                </>
                            </PanelBody>
                            <PanelBody title={__('Box Shadow', 'zoloblocks')} initialOpen={false}>
                                <ZoloShadowControl
                                    label={__('Box Shadow', 'zoloblocks')}
                                    value={value?.boxShadow}
                                    onChange={(shadowData) => {
                                        onChange({
                                            boxShadow: shadowData
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
                                    <ZoloResponsive left='55px'>
                                        <ZoloBoxControl
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
                                        />
                                    </ZoloResponsive>
                                    <ZoloResponsive left='48px'>
                                        <ZoloBoxControl
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
                                            <ZoloResponsive>
                                                <ZoloChoose
                                                    label={__('Direction', 'zoloblocks')}
                                                    value={value?.flex?.direction?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            flex: {
                                                                ...value?.flex,
                                                                direction: {
                                                                    ...value?.flex?.direction,
                                                                    [device]: newValue
                                                                }
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
                                            </ZoloResponsive>
                                            <ZoloResponsive>
                                                <ZoloChoose
                                                    label={__('Align', 'zoloblocks')}
                                                    value={value?.flex?.alignItems?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            flex: {
                                                                ...value?.flex,
                                                                alignItems: {
                                                                    ...value?.flex?.alignItems,
                                                                    [device]: newValue
                                                                }
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
                                            </ZoloResponsive>
                                            <ZoloResponsive>
                                                <ZoloChoose
                                                    label={__('Justify', 'zoloblocks')}
                                                    value={value?.flex?.justifyContent?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            flex: {
                                                                ...value?.flex,
                                                                justifyContent: {
                                                                    ...value?.flex?.justifyContent,
                                                                    [device]: newValue
                                                                }
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
                                            </ZoloResponsive>
                                            <ZoloResponsive left='28px'>
                                                <ZoloDualRangeUnit
                                                    label="Gap"
                                                    dualLabel={[__('Row Gap', 'zoloblocks'), __('Column Gap', 'zoloblocks')]}
                                                    value={value?.flex?.gap?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            flex: {
                                                                ...value?.flex,
                                                                gap: {
                                                                    ...value?.flex?.gap,
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
                                            <ZoloResponsive>
                                                <ZoloChoose
                                                    label={__('Flex Wrap', 'zoloblocks')}
                                                    value={value?.flex?.flexWrap?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            flex: {
                                                                ...value?.flex,
                                                                flexWrap: {
                                                                    ...value?.flex?.flexWrap,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    isDeselectable={true}
                                                    options={[
                                                        { label: 'No Wrap', value: 'nowrap', icon: noWrapIcon },
                                                        { label: 'Wrap', value: 'wrap', icon: wrapIcon },
                                                    ]}
                                                />
                                            </ZoloResponsive>
                                        </>
                                    )}
                                    {value?.display === 'block' && (
                                        <>
                                            <ZoloResponsive>
                                                <ZoloChoose
                                                    label={__('Float', 'zoloblocks')}
                                                    value={value?.block?.float?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            block: {
                                                                ...value?.block,
                                                                float: {
                                                                    ...value?.block?.float,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    isDeselectable={true}
                                                    options={floatOptions}
                                                />
                                            </ZoloResponsive>
                                            <ZoloResponsive>
                                                <ZoloChoose
                                                    label={__('Clear', 'zoloblocks')}
                                                    value={value?.block?.clear?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            block: {
                                                                ...value?.block,
                                                                clear: {
                                                                    ...value?.block?.clear,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    isDeselectable={true}
                                                    options={clearOptions}
                                                />
                                            </ZoloResponsive>
                                            <ZoloResponsive>
                                                <ZoloChoose
                                                    label={__('Overflow', 'zoloblocks')}
                                                    value={value?.block?.overflow?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            block: {
                                                                ...value?.block,
                                                                overflow: {
                                                                    ...value?.block?.overflow,
                                                                    [device]: newValue
                                                                }
                                                            }
                                                        })
                                                    }}
                                                    isDeselectable={true}
                                                    options={overflowOptions}
                                                />
                                            </ZoloResponsive>
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
                                            {
                                                value?.grid?.layoutType == 'auto' && (
                                                    <ZoloResponsive>
                                                        <ZoloRangeUnit
                                                            label={__('Min Column Width', 'zoloblocks')}
                                                            value={value?.grid?.minColumnWidth?.[device]}
                                                            onChange={(newValue) => {
                                                                onChange({
                                                                    grid: {
                                                                        ...value?.grid,
                                                                        minColumnWidth: {
                                                                            ...value?.grid?.minColumnWidth,
                                                                            [device]: newValue
                                                                        }
                                                                    }
                                                                })
                                                            }}
                                                            units={{
                                                                px: { min: 0, max: 1000, step: 1 },
                                                                em: { min: 0, max: 50, step: 0.1 },
                                                                rem: { min: 0, max: 50, step: 0.1 },
                                                            }}
                                                        />
                                                    </ZoloResponsive>
                                                )
                                            }
                                            {
                                                value?.grid?.layoutType !== 'auto' && (
                                                    <ZoloResponsive left='60px'>
                                                        <ZoloRangeControl
                                                            label={__('COLUMNS', 'zoloblocks')}
                                                            value={value?.grid?.columns?.[device]}
                                                            onChange={(newValue) => {
                                                                onChange({
                                                                    grid: {
                                                                        ...value?.grid,
                                                                        columns: {
                                                                            ...value?.grid?.columns,
                                                                            [device]: newValue
                                                                        }
                                                                    }
                                                                })
                                                            }}
                                                            min={0}
                                                            step={1}
                                                            max={12}
                                                        />
                                                    </ZoloResponsive>
                                                )
                                            }
                                            <ZoloResponsive left='28px'>
                                                <ZoloDualRangeUnit
                                                    label="Gap"
                                                    dualLabel={['Row Gap', 'Column Gap']}
                                                    value={value?.grid?.gap?.[device]}
                                                    onChange={(newValue) => {
                                                        onChange({
                                                            grid: {
                                                                ...value?.grid,
                                                                gap: {
                                                                    ...value?.grid?.gap,
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
                            <PanelBody title={__('Size', 'zoloblocks')} initialOpen={false}>
                                <VStack>
                                    <ZoloResponsive>
                                        <ZoloRangeUnit
                                            label="Width"
                                            value={value?.size?.width?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    size: {
                                                        ...value?.size,
                                                        width: {
                                                            ...value?.size?.width,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloResponsive>
                                        <ZoloRangeUnit
                                            label="Minimum Width"
                                            value={value?.size?.minWidth?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    size: {
                                                        ...value?.size,
                                                        minWidth: {
                                                            ...value?.size?.minWidth,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloResponsive>
                                        <ZoloRangeUnit
                                            label="Maximum Width"
                                            value={value?.size?.maxWidth?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    size: {
                                                        ...value?.size,
                                                        maxWidth: {
                                                            ...value?.size?.maxWidth,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloResponsive>
                                        <ZoloRangeUnit
                                            label="Height"
                                            value={value?.size?.height?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    size: {
                                                        ...value?.size,
                                                        height: {
                                                            ...value?.size?.height,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloResponsive>
                                        <ZoloRangeUnit
                                            label="Minimum Height"
                                            value={value?.size?.minHeight?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    size: {
                                                        ...value?.size,
                                                        minHeight: {
                                                            ...value?.size?.minHeight,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                        />
                                    </ZoloResponsive>
                                    <ZoloResponsive>
                                        <ZoloRangeUnit
                                            label="Maximum Height"
                                            value={value?.size?.maxHeight?.[device]}
                                            onChange={(newValue) => {
                                                onChange({
                                                    size: {
                                                        ...value?.size,
                                                        maxHeight: {
                                                            ...value?.size?.maxHeight,
                                                            [device]: newValue
                                                        }
                                                    }
                                                })
                                            }}
                                        />
                                    </ZoloResponsive>
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
                                            <ZoloResponsive>
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
                                            <ZoloResponsive>
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
                                            <ZoloResponsive>
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
                                            <ZoloResponsive>
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