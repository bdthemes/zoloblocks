const { ColorControl, ResRangeControl, TabPanelControl, ZoloPanelBody, ThumbsControl, PopoverControl } = window.zoloModule;
import { SHAPE_DIVIDER, TB_POSITION, TOP_WIDTH_SHAPE, TOP_HEIGHT_SHAPE, BOTTOM_WIDTH_SHAPE, BOTTOM_HEIGHT_SHAPE } from './constants';

import { __ } from '@wordpress/i18n';

import { CardDivider, SelectControl, ToggleControl } from '@wordpress/components';
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.809 2.494C3.08275 2.494 2.494 3.08275 2.494 3.809V13.731C2.494 14.4573 3.08275 15.046 3.809 15.046H7.54453C7.41431 14.8676 7.43335 14.6159 7.5976 14.4594C7.77631 14.289 8.05925 14.2958 8.22957 14.4746L8.77419 15.046H10.0196L7.43922 12.3872C7.26729 12.2101 7.27152 11.9271 7.44867 11.7551C7.62583 11.5832 7.90882 11.5874 8.08076 11.7646L11.2655 15.046H12.5624L7.58654 9.96256C7.41386 9.78614 7.41689 9.50313 7.59331 9.33044C7.76973 9.15775 8.05274 9.16078 8.22542 9.3372L13.8078 15.0403C14.1449 15.0091 14.4451 14.8507 14.66 14.6134L7.96584 7.83407C7.79239 7.6584 7.79418 7.37538 7.96984 7.20193C8.14551 7.02847 8.42853 7.03026 8.60198 7.20593L15 13.6854V12.4675L10.775 8.19109C10.6015 8.01547 10.6032 7.73245 10.7788 7.55895C10.9545 7.38544 11.2375 7.38716 11.411 7.56277L15 11.1955V9.86035L13.2023 8.04444C13.0286 7.86899 13.0301 7.58597 13.2055 7.41229C13.381 7.23861 13.664 7.24004 13.8377 7.41548L15 8.58961V3.809C15 3.08275 14.4113 2.494 13.685 2.494H3.809ZM16.2269 14.928C16.3661 14.633 16.4554 14.31 16.484 13.9696L21.038 18.5791C21.2115 18.7547 21.4945 18.7564 21.6702 18.5829C21.8458 18.4094 21.8475 18.1264 21.674 17.9508L16.494 12.7077V11.3695L21.1843 16.1074C21.358 16.2829 21.641 16.2843 21.8165 16.1106C21.9919 15.9369 21.9933 15.6539 21.8197 15.4785L16.494 10.0988V8.65511L21.0337 13.3806C21.2048 13.5587 21.4877 13.5643 21.6658 13.3933C21.8438 13.2223 21.8495 12.9393 21.6784 12.7613L16.5474 7.42028C16.5306 7.4028 16.5128 7.38697 16.494 7.37282V3.809C16.494 2.25763 15.2364 1 13.685 1H3.809C2.25763 1 1 2.25763 1 3.809V13.731C1 15.2824 2.25763 16.54 3.809 16.54H8.96305L14.2194 22.0553C14.3897 22.234 14.6727 22.2408 14.8514 22.0705C15.0301 21.9002 15.0369 21.6173 14.8666 21.4385L10.198 16.54H11.4696L16.8252 22.0582C16.9972 22.2354 17.2801 22.2396 17.4573 22.0677C17.6345 21.8957 17.6387 21.6127 17.4668 21.4356L12.7154 16.54H13.685C13.7938 16.54 13.9013 16.5338 14.0069 16.5218L19.1445 21.7706C19.3172 21.947 19.6002 21.95 19.7767 21.7773C19.9531 21.6046 19.9561 21.3216 19.7834 21.1452L14.9712 16.2289C15.2475 16.0864 15.497 15.8993 15.7104 15.6773L21.4698 21.5101C21.6433 21.6857 21.9263 21.6875 22.102 21.5141C22.2776 21.3406 22.2794 21.0576 22.106 20.8819L16.2269 14.928ZM7.45274 19.4453C7.63204 19.2756 7.91496 19.2834 8.08465 19.4627L9.95565 21.4397C10.1253 21.6191 10.1175 21.902 9.93824 22.0717C9.75894 22.2414 9.47602 22.2336 9.30633 22.0543L7.43533 20.0773C7.26564 19.8979 7.27343 19.615 7.45274 19.4453ZM8.37781 17.1676C8.20584 16.9905 7.92285 16.9863 7.74573 17.1583C7.56861 17.3302 7.56443 17.6132 7.7364 17.7904L11.7084 21.8814C11.8804 22.0585 12.1634 22.0627 12.3405 21.8907C12.5176 21.7187 12.5218 21.4357 12.3498 21.2586L8.37781 17.1676ZM18.8891 7.40893C18.7118 7.23714 18.4289 7.24162 18.2571 7.41892C18.0853 7.59622 18.0898 7.87921 18.2671 8.05099L21.1911 10.884C21.3684 11.0558 21.6514 11.0513 21.8231 10.874C21.9949 10.6967 21.9904 10.4137 21.8131 10.2419L18.8891 7.40893Z"
                            fill="#4D4D4D"
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
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                top: {
                                                    ...shapeDivider.top,
                                                    type: value,
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
                                    onChange={(value) =>
                                        setAttributes({
                                            shapeDivider: {
                                                ...shapeDivider,
                                                bottom: {
                                                    ...shapeDivider.bottom,
                                                    type: value,
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
                                label: __('Normal', 'zoloblocks'),
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
                                label: __('Normal', 'zoloblocks'),
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
