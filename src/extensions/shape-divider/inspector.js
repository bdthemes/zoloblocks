const { ColorControl, ResRangeControl, TabPanelControl, ZoloPanelBody, ThumbsControl, PopoverControl } = window.zoloModule;
import { SHAPE_DIVIDER, TB_POSITION, TOP_WIDTH_SHAPE, TOP_HEIGHT_SHAPE, BOTTOM_WIDTH_SHAPE, BOTTOM_HEIGHT_SHAPE } from './constants';

import { __ } from '@wordpress/i18n';

import { CardDivider, ToggleControl } from '@wordpress/components';
import objAttributes from './attributes';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { resMode, shapeDivider } = attributes;
    const requiredProps = {
        resMode,
        attributes,
        setAttributes,
        objAttributes,
    };
    const toggleInvertTop =
        shapeDivider.top.type !== 'wavebrush' &&
        shapeDivider.top.type !== 'opacityFan' &&
        shapeDivider.top.type !== 'wavepattern' &&
        shapeDivider.top.type !== 'stilt' &&
        shapeDivider.top.type !== 'opacityTilt';

    const toggleInvertBottom =
        shapeDivider.bottom.type !== 'wavebrush' && shapeDivider.bottom.type !== 'opacityFan' && shapeDivider.bottom.type !== 'wavepattern';

    const showFlipTop =
        shapeDivider.top.type !== 'book' &&
        shapeDivider.top.type !== 'arrow' &&
        shapeDivider.top.type !== 'curve' &&
        shapeDivider.top.type !== 'split' &&
        shapeDivider.top.type !== 'waves' &&
        shapeDivider.top.type !== 'triangle' &&
        shapeDivider.top.type !== 'opacityFan';

    const showFlipBottom =
        shapeDivider.bottom.type !== 'book' &&
        shapeDivider.bottom.type !== 'arrow' &&
        shapeDivider.bottom.type !== 'curve' &&
        shapeDivider.bottom.type !== 'split' &&
        shapeDivider.bottom.type !== 'waves' &&
        shapeDivider.bottom.type !== 'triangle' &&
        shapeDivider.bottom.type !== 'opacityFan';

    return (
        <ZoloPanelBody title={__('Shape Divider', 'zoloblocks')} panelProps={panelProps} isNew={true}>
            <PopoverControl
                label={__('Shape', 'zoloblocks-pro')}
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path
                            d="M2 19.9893V2.99264C2 2.44013 2.43656 2 2.96407 2H21.0359C21.5725 2 22 2.4495 22 2.99264V17.0863C22 17.7699 21.3543 18.2475 20.7267 18.0321C19.0896 17.4609 16.0609 16.9833 12.7958 19.315C9.31241 21.7966 5.41064 23.117 2.3638 20.7853C2.12733 20.6073 2 20.2983 2 19.9986V19.9893Z"
                            stroke="#4D4D4D"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
            >
                <TabPanelControl
                    options={TB_POSITION}
                    normalComponents={
                        <>
                            <div className="zolo-shape-thumbs-top">
                                <ThumbsControl
                                    value={shapeDivider.top.type}
                                    options={SHAPE_DIVIDER}
                                    onChange={(selectedOption) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                top: {
                                                    ...shapeDivider.top,
                                                    type: selectedOption.value,
                                                    image: selectedOption.image,
                                                },
                                            },
                                        })
                                    }
                                />
                            </div>
                        </>
                    }
                    hoverComponents={
                        <>
                            <div className="zolo-shape-thumbs-bottom">
                                <ThumbsControl
                                    value={shapeDivider.bottom.type}
                                    options={SHAPE_DIVIDER}
                                    onChange={(selectedOption) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                bottom: {
                                                    ...shapeDivider.bottom,
                                                    type: selectedOption.value,
                                                    image: selectedOption.image,
                                                },
                                            },
                                        })
                                    }
                                />
                            </div>
                        </>
                    }
                />
            </PopoverControl>

            {shapeDivider?.top?.type !== 'none' && (
                <>
                    <div className="zolo-custom-heading" style={{ paddingTop: 0, border: 0 }}>
                        {__('Top Shape', 'zoloblocks')}
                    </div>
                    <TabPanelControl
                        options={[
                            {
                                value: 'normal',
                                label: __('Basic', 'zoloblocks'),
                            },
                            {
                                value: 'hover',
                                label: __('Advanced', 'zoloblocks'),
                            },
                        ]}
                        normalComponents={
                            <>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={shapeDivider.top.color}
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                top: {
                                                    ...shapeDivider.top,
                                                    color: value,
                                                },
                                            },
                                        })
                                    }
                                />
                                <CardDivider />
                                <ResRangeControl
                                    label={__('Width', 'zoloblocks')}
                                    controlName={TOP_WIDTH_SHAPE}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zoloblocks')}
                                    controlName={TOP_HEIGHT_SHAPE}
                                    requiredProps={requiredProps}
                                />
                            </>
                        }
                        hoverComponents={
                            <>
                                {showFlipTop && (
                                    <ToggleControl
                                        label={__('Flip', 'zoloblocks')}
                                        checked={shapeDivider.top.flip}
                                        onChange={(value) =>
                                            setAttributes({
                                                shapeDivider: {
                                                    ...shapeDivider,
                                                    top: {
                                                        ...shapeDivider.top,
                                                        flip: value,
                                                    },
                                                },
                                            })
                                        }
                                    />
                                )}
                                {toggleInvertTop && (
                                    <ToggleControl
                                        label={__('Invert', 'zoloblocks')}
                                        checked={shapeDivider.top.invert}
                                        onChange={(value) =>
                                            setAttributes({
                                                shapeDivider: {
                                                    ...shapeDivider,
                                                    top: {
                                                        ...shapeDivider.top,
                                                        invert: value,
                                                    },
                                                },
                                            })
                                        }
                                    />
                                )}

                                <ToggleControl
                                    label={__('Bring to Front', 'zoloblocks')}
                                    checked={shapeDivider.top.bringToFront}
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                top: {
                                                    ...shapeDivider.top,
                                                    bringToFront: value,
                                                },
                                            },
                                        })
                                    }
                                />
                            </>
                        }
                    />
                </>
            )}

            {shapeDivider.bottom.type === 'none' ? (
                <></>
            ) : (
                <>
                    <div className="zolo-custom-heading">{__('Bottom Shape', 'zoloblocks')}</div>
                    <TabPanelControl
                        options={[
                            {
                                value: 'normal',
                                label: __('Basic', 'zoloblocks'),
                            },
                            {
                                value: 'hover',
                                label: __('Advanced', 'zoloblocks'),
                            },
                        ]}
                        normalComponents={
                            <>
                                <ColorControl
                                    label={__('Color', 'zoloblocks')}
                                    color={shapeDivider.bottom.color}
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                bottom: {
                                                    ...shapeDivider.bottom,
                                                    color: value,
                                                },
                                            },
                                        })
                                    }
                                />
                                <CardDivider />
                                <ResRangeControl
                                    label={__('Width', 'zoloblocks')}
                                    controlName={BOTTOM_WIDTH_SHAPE}
                                    requiredProps={requiredProps}
                                />
                                <ResRangeControl
                                    label={__('Height', 'zoloblocks')}
                                    controlName={BOTTOM_HEIGHT_SHAPE}
                                    requiredProps={requiredProps}
                                    max={300}
                                />
                            </>
                        }
                        hoverComponents={
                            <>
                                {showFlipBottom && (
                                    <ToggleControl
                                        label={__('Flip', 'zoloblocks')}
                                        checked={shapeDivider.bottom.flip}
                                        onChange={(value) =>
                                            setAttributes({
                                                shapeDivider: {
                                                    ...shapeDivider,
                                                    bottom: {
                                                        ...shapeDivider.bottom,
                                                        flip: value,
                                                    },
                                                },
                                            })
                                        }
                                    />
                                )}

                                {toggleInvertBottom && (
                                    <ToggleControl
                                        label={__('Invert', 'zoloblocks')}
                                        checked={shapeDivider.bottom.invert}
                                        onChange={(value) =>
                                            setAttributes({
                                                shapeDivider: {
                                                    ...shapeDivider,
                                                    bottom: {
                                                        ...shapeDivider.bottom,
                                                        invert: value,
                                                    },
                                                },
                                            })
                                        }
                                    />
                                )}
                                <ToggleControl
                                    label={__('Bring to Front', 'zoloblocks')}
                                    checked={shapeDivider.bottom.bringToFront}
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                bottom: {
                                                    ...shapeDivider.bottom,
                                                    bringToFront: value,
                                                },
                                            },
                                        })
                                    }
                                />
                            </>
                        }
                    />
                </>
            )}
        </ZoloPanelBody>
    );
};

export default Inspector;
