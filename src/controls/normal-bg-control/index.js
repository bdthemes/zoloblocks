import { MediaUpload } from '@wordpress/block-editor';
import { BaseControl, Button, ButtonGroup, RangeControl, SelectControl, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { BACKGROUND_TYPES } from '../../global/constants';
import ColorControl from '../color-control';
import GradientControl from '../gradient-control';
import ImageAvatar from '../image-avatar';
import UnitBtn from '../unit-btn';
import WithResDeviceBtn from '../with-res-device-btn';

const NormalBGControl = ({ controlName, requiredProps, noMainBGImg = false }) => {
    const { setAttributes, attributes, resMode } = requiredProps;
    const [displayPanel, setDisplayPanel] = useState(false);

    const {
        //attributes for background type normal start
        [`${controlName}backgroundType`]: backgroundType,
        [`${controlName}backgroundColor`]: backgroundColor,
        [`${controlName}gradientColor`]: gradientColor,

        [`${controlName}bgImageURL`]: bgImageURL,
        [`${controlName}bgImageID`]: bgImageID,
        [`${controlName}bgImgAttachment`]: bgImgAttachment,

        [`${controlName}backgroundSize`]: backgroundSize,
        [`${controlName}bgImgCustomSize`]: bgImgCustomSize,
        [`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit,
        [`${controlName}bgImgPos`]: bgImgPos,
        [`${controlName}bgImgcustomPosX`]: bgImgcustomPosX,
        [`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit,
        [`${controlName}bgImgcustomPosY`]: bgImgcustomPosY,
        [`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit,
        [`${controlName}bgImgRepeat`]: bgImgRepeat,

        [`TAB${controlName}backgroundSize`]: TABbackgroundSize,
        [`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize,
        [`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit,
        [`TAB${controlName}bgImgPos`]: TABbgImgPos,
        [`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX,
        [`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit,
        [`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY,
        [`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit,
        [`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat,

        [`MOB${controlName}backgroundSize`]: MOBbackgroundSize,
        [`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize,
        [`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit,
        [`MOB${controlName}bgImgPos`]: MOBbgImgPos,
        [`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX,
        [`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit,
        [`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY,
        [`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit,
        [`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat,
    } = attributes;

    return (
        <>
            <div className="zolo-control-container zolo-border-control">
                <div className="zolo-control-flex">
                    <label className="zolo-control-label" htmlFor="zolo-control-label">
                        {__('Background', 'zolo-blocks')}
                    </label>
                    <button onClick={() => setDisplayPanel(true)} className="zolo-panel-opener-btn">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="4.63635" y="4.63635" width="14.7273" height="14.7273" rx="0.2" stroke="#4D4D4D" strokeWidth="1.5" />
                            <rect x={3} y={3} width="3.27273" height="3.27273" rx="0.2" fill="white" stroke="#4D4D4D" strokeWidth="1.5" />
                            <rect
                                x="17.7273"
                                y={3}
                                width="3.27273"
                                height="3.27273"
                                rx="0.2"
                                fill="white"
                                stroke="#4D4D4D"
                                strokeWidth="1.5"
                            />
                            <rect
                                x={3}
                                y="17.7273"
                                width="3.27273"
                                height="3.27273"
                                rx="0.2"
                                fill="white"
                                stroke="#4D4D4D"
                                strokeWidth="1.5"
                            />
                            <rect
                                x="17.7273"
                                y="17.7273"
                                width="3.27273"
                                height="3.27273"
                                rx="0.2"
                                fill="white"
                                stroke="#4D4D4D"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </button>
                </div>
                {displayPanel && (
                    <Popover
                        className="zolo-background-control-popover"
                        position="bottom left"
                        onFocusOutside={() => setDisplayPanel(false)}
                    >
                        <BaseControl label={__('Background Type', 'zolo-blocks')}>
                            <ButtonGroup>
                                {BACKGROUND_TYPES.map(({ value, label }) => (
                                    <Button
                                        variant={backgroundType === value ? 'primary' : 'secondary'}
                                        onClick={() =>
                                            setAttributes({
                                                [`${controlName}backgroundType`]: value,
                                            })
                                        }
                                    >
                                        {label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        </BaseControl>

                        {backgroundType === 'classic' && (
                            <>
                                <ColorControl
                                    label={__('Background Color', 'zolo-blocks')}
                                    color={backgroundColor}
                                    onChange={(backgroundColor) =>
                                        setAttributes({
                                            [`${controlName}backgroundColor`]: backgroundColor,
                                        })
                                    }
                                />

                                {noMainBGImg === false && (
                                    <>
                                        <MediaUpload
                                            onSelect={(media) =>
                                                setAttributes({
                                                    [`${controlName}bgImageURL`]: media.url,
                                                    [`${controlName}bgImageID`]: media.id,
                                                })
                                            }
                                            type="image"
                                            value={bgImageID}
                                            render={({ open }) =>
                                                !bgImageURL && (
                                                    <>
                                                        <Button
                                                            className="zb-bg-control-img-btn components-button"
                                                            label={__('Upload Image', 'zolo-blocks')}
                                                            icon="format-image"
                                                            onClick={open}
                                                        />
                                                        <span
                                                            style={{
                                                                padding: '10px 0',
                                                                display: 'block',
                                                            }}
                                                        ></span>
                                                    </>
                                                )
                                            }
                                        />

                                        {bgImageURL && (
                                            <>
                                                <ImageAvatar
                                                    imageUrl={bgImageURL}
                                                    imageId={bgImageID}
                                                    onDeleteImage={() =>
                                                        setAttributes({
                                                            [`${controlName}bgImageURL`]: null,
                                                        })
                                                    }
                                                    onEditImage={(url, id) =>
                                                        setAttributes({
                                                            [`${controlName}bgImageURL`]: url,
                                                            [`${controlName}bgImageID`]: id,
                                                        })
                                                    }
                                                />

                                                {resMode === 'Desktop' && (
                                                    <>
                                                        <WithResDeviceBtn requiredProps={requiredProps} label="Position">
                                                            <SelectControl
                                                                value={bgImgPos}
                                                                options={[
                                                                    {
                                                                        label: __('Default', 'zolo-blocks'),
                                                                        value: '',
                                                                    },
                                                                    {
                                                                        label: __('Center Center', 'zolo-blocks'),
                                                                        value: 'center center',
                                                                    },
                                                                    {
                                                                        label: __('Center Left', 'zolo-blocks'),
                                                                        value: 'center left',
                                                                    },
                                                                    {
                                                                        label: __('Center Right', 'zolo-blocks'),
                                                                        value: 'center right',
                                                                    },
                                                                    {
                                                                        label: __('Top Center', 'zolo-blocks'),
                                                                        value: 'top center',
                                                                    },
                                                                    {
                                                                        label: __('Top Left', 'zolo-blocks'),
                                                                        value: 'top left',
                                                                    },
                                                                    {
                                                                        label: __('Top Right', 'zolo-blocks'),
                                                                        value: 'top right',
                                                                    },
                                                                    {
                                                                        label: __('Bottom Center', 'zolo-blocks'),
                                                                        value: 'bottom center',
                                                                    },
                                                                    {
                                                                        label: __('Bottom Left', 'zolo-blocks'),
                                                                        value: 'bottom left',
                                                                    },
                                                                    {
                                                                        label: __('Bottom Right', 'zolo-blocks'),
                                                                        value: 'bottom right',
                                                                    },
                                                                    {
                                                                        label: __('Custom', 'zolo-blocks'),
                                                                        value: 'custom',
                                                                    },
                                                                ]}
                                                                onChange={(bgImgPos) =>
                                                                    setAttributes({
                                                                        [`${controlName}bgImgPos`]: bgImgPos,
                                                                    })
                                                                }
                                                            />
                                                        </WithResDeviceBtn>

                                                        {bgImgPos === 'custom' && (
                                                            <>
                                                                <UnitBtn
                                                                    selectedUnit={bgImgcustomPosXUnit}
                                                                    unitTypes={[
                                                                        {
                                                                            label: 'px',
                                                                            value: 'px',
                                                                        },
                                                                        {
                                                                            label: 'em',
                                                                            value: 'em',
                                                                        },
                                                                        {
                                                                            label: '%',
                                                                            value: '%',
                                                                        },
                                                                    ]}
                                                                    onClick={(bgImgcustomPosXUnit) =>
                                                                        setAttributes({
                                                                            [`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit,
                                                                        })
                                                                    }
                                                                />

                                                                <WithResDeviceBtn requiredProps={requiredProps} label="X Position">
                                                                    <RangeControl
                                                                        value={bgImgcustomPosX}
                                                                        min={-2000}
                                                                        max={2000}
                                                                        onChange={(bgImgcustomPosX) =>
                                                                            setAttributes({
                                                                                [`${controlName}bgImgcustomPosX`]: bgImgcustomPosX,
                                                                            })
                                                                        }
                                                                    />
                                                                </WithResDeviceBtn>

                                                                <UnitBtn
                                                                    selectedUnit={bgImgcustomPosYUnit}
                                                                    unitTypes={[
                                                                        {
                                                                            label: 'px',
                                                                            value: 'px',
                                                                        },
                                                                        {
                                                                            label: 'em',
                                                                            value: 'em',
                                                                        },
                                                                        {
                                                                            label: '%',
                                                                            value: '%',
                                                                        },
                                                                    ]}
                                                                    onClick={(bgImgcustomPosYUnit) =>
                                                                        setAttributes({
                                                                            [`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit,
                                                                        })
                                                                    }
                                                                />

                                                                <WithResDeviceBtn requiredProps={requiredProps} label="Y Position">
                                                                    <RangeControl
                                                                        value={bgImgcustomPosY}
                                                                        min={-2000}
                                                                        max={2000}
                                                                        step={bgImgcustomPosYUnit === 'px' ? 1 : 0.1}
                                                                        onChange={(bgImgcustomPosY) =>
                                                                            setAttributes({
                                                                                [`${controlName}bgImgcustomPosY`]: bgImgcustomPosY,
                                                                            })
                                                                        }
                                                                    />
                                                                </WithResDeviceBtn>
                                                            </>
                                                        )}

                                                        <SelectControl
                                                            label="Attachment"
                                                            value={bgImgAttachment}
                                                            options={[
                                                                {
                                                                    label: __('Default', 'zolo-blocks'),
                                                                    value: '',
                                                                },
                                                                {
                                                                    label: __('Scroll', 'zolo-blocks'),
                                                                    value: 'scroll',
                                                                },
                                                                {
                                                                    label: __('Fixed', 'zolo-blocks'),
                                                                    value: 'fixed',
                                                                },
                                                            ]}
                                                            onChange={(bgImgAttachment) =>
                                                                setAttributes({
                                                                    [`${controlName}bgImgAttachment`]: bgImgAttachment,
                                                                })
                                                            }
                                                        />

                                                        {bgImgAttachment === 'fixed' && (
                                                            <p
                                                                style={{
                                                                    marginTop: '-10px',
                                                                    paddingBottom: '10px',
                                                                }}
                                                            >
                                                                <i>Note: Attachment Fixed works only on desktop.</i>
                                                            </p>
                                                        )}

                                                        <WithResDeviceBtn requiredProps={requiredProps} label="Repeat">
                                                            <SelectControl
                                                                value={bgImgRepeat}
                                                                options={[
                                                                    {
                                                                        label: __('Default', 'zolo-blocks'),
                                                                        value: '',
                                                                    },
                                                                    {
                                                                        label: __('No-repeat', 'zolo-blocks'),
                                                                        value: 'no-repeat',
                                                                    },
                                                                    {
                                                                        label: __('Repeat', 'zolo-blocks'),
                                                                        value: 'repeat',
                                                                    },
                                                                    {
                                                                        label: __('Repeat-x', 'zolo-blocks'),
                                                                        value: 'repeat-x',
                                                                    },
                                                                    {
                                                                        label: __('Repeat-y', 'zolo-blocks'),
                                                                        value: 'repeat-y',
                                                                    },
                                                                ]}
                                                                onChange={(bgImgRepeat) =>
                                                                    setAttributes({
                                                                        [`${controlName}bgImgRepeat`]: bgImgRepeat,
                                                                    })
                                                                }
                                                            />
                                                        </WithResDeviceBtn>

                                                        <WithResDeviceBtn requiredProps={requiredProps} label="Size">
                                                            <SelectControl
                                                                value={backgroundSize}
                                                                options={[
                                                                    {
                                                                        label: __('Default', 'zolo-blocks'),
                                                                        value: '',
                                                                    },
                                                                    {
                                                                        label: __('Auto', 'zolo-blocks'),
                                                                        value: 'auto',
                                                                    },
                                                                    {
                                                                        label: __('Cover', 'zolo-blocks'),
                                                                        value: 'cover',
                                                                    },
                                                                    {
                                                                        label: __('Contain', 'zolo-blocks'),
                                                                        value: 'contain',
                                                                    },
                                                                    {
                                                                        label: __('Custom', 'zolo-blocks'),
                                                                        value: 'custom',
                                                                    },
                                                                ]}
                                                                onChange={(backgroundSize) =>
                                                                    setAttributes({
                                                                        [`${controlName}backgroundSize`]: backgroundSize,
                                                                    })
                                                                }
                                                            />
                                                        </WithResDeviceBtn>

                                                        {backgroundSize === 'custom' && (
                                                            <>
                                                                <UnitBtn
                                                                    selectedUnit={bgImgCustomSizeUnit}
                                                                    unitTypes={[
                                                                        {
                                                                            label: 'px',
                                                                            value: 'px',
                                                                        },
                                                                        {
                                                                            label: 'em',
                                                                            value: 'em',
                                                                        },
                                                                        {
                                                                            label: '%',
                                                                            value: '%',
                                                                        },
                                                                    ]}
                                                                    onClick={(bgImgCustomSizeUnit) =>
                                                                        setAttributes({
                                                                            [`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit,
                                                                        })
                                                                    }
                                                                />

                                                                <WithResDeviceBtn requiredProps={requiredProps} label="Width">
                                                                    <RangeControl
                                                                        value={bgImgCustomSize}
                                                                        min={0}
                                                                        max={bgImgCustomSizeUnit === 'px' ? 2000 : 100}
                                                                        step={bgImgCustomSizeUnit === 'px' ? 1 : 0.1}
                                                                        onChange={(bgImgCustomSize) =>
                                                                            setAttributes({
                                                                                [`${controlName}bgImgCustomSize`]: bgImgCustomSize,
                                                                            })
                                                                        }
                                                                    />
                                                                </WithResDeviceBtn>
                                                            </>
                                                        )}
                                                    </>
                                                )}

                                                {resMode === 'Tablet' && (
                                                    <>
                                                        <WithResDeviceBtn requiredProps={requiredProps} label="Position">
                                                            <SelectControl
                                                                value={TABbgImgPos}
                                                                options={[
                                                                    {
                                                                        label: __('Default', 'zolo-blocks'),
                                                                        value: '',
                                                                    },
                                                                    {
                                                                        label: __('Center Center', 'zolo-blocks'),
                                                                        value: 'center center',
                                                                    },
                                                                    {
                                                                        label: __('Center Left', 'zolo-blocks'),
                                                                        value: 'center left',
                                                                    },
                                                                    {
                                                                        label: __('Center Right', 'zolo-blocks'),
                                                                        value: 'center right',
                                                                    },
                                                                    {
                                                                        label: __('Top Center', 'zolo-blocks'),
                                                                        value: 'top center',
                                                                    },
                                                                    {
                                                                        label: __('Top Left', 'zolo-blocks'),
                                                                        value: 'top left',
                                                                    },
                                                                    {
                                                                        label: __('Top Right', 'zolo-blocks'),
                                                                        value: 'top right',
                                                                    },
                                                                    {
                                                                        label: __('Bottom Center', 'zolo-blocks'),
                                                                        value: 'bottom center',
                                                                    },
                                                                    {
                                                                        label: __('Bottom Left', 'zolo-blocks'),
                                                                        value: 'bottom left',
                                                                    },
                                                                    {
                                                                        label: __('Bottom Right', 'zolo-blocks'),
                                                                        value: 'bottom right',
                                                                    },
                                                                    {
                                                                        label: __('Custom', 'zolo-blocks'),
                                                                        value: 'custom',
                                                                    },
                                                                ]}
                                                                onChange={(TABbgImgPos) =>
                                                                    setAttributes({
                                                                        [`TAB${controlName}bgImgPos`]: TABbgImgPos,
                                                                    })
                                                                }
                                                            />
                                                        </WithResDeviceBtn>

                                                        {TABbgImgPos === 'custom' && (
                                                            <>
                                                                <UnitBtn
                                                                    selectedUnit={TABbgImgcustomPosXUnit}
                                                                    unitTypes={[
                                                                        {
                                                                            label: 'px',
                                                                            value: 'px',
                                                                        },
                                                                        {
                                                                            label: 'em',
                                                                            value: 'em',
                                                                        },
                                                                        {
                                                                            label: '%',
                                                                            value: '%',
                                                                        },
                                                                    ]}
                                                                    onClick={(TABbgImgcustomPosXUnit) =>
                                                                        setAttributes({
                                                                            [`TAB${controlName}bgImgcustomPosXUnit`]:
                                                                                TABbgImgcustomPosXUnit,
                                                                        })
                                                                    }
                                                                />

                                                                <WithResDeviceBtn requiredProps={requiredProps} label="X Position">
                                                                    <RangeControl
                                                                        value={TABbgImgcustomPosX}
                                                                        min={0}
                                                                        max={TABbgImgcustomPosXUnit === 'px' ? 2000 : 100}
                                                                        onChange={(TABbgImgcustomPosX) =>
                                                                            setAttributes({
                                                                                [`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX,
                                                                            })
                                                                        }
                                                                    />
                                                                </WithResDeviceBtn>

                                                                <UnitBtn
                                                                    selectedUnit={TABbgImgcustomPosYUnit}
                                                                    unitTypes={[
                                                                        {
                                                                            label: 'px',
                                                                            value: 'px',
                                                                        },
                                                                        {
                                                                            label: 'em',
                                                                            value: 'em',
                                                                        },
                                                                        {
                                                                            label: '%',
                                                                            value: '%',
                                                                        },
                                                                    ]}
                                                                    onClick={(TABbgImgcustomPosYUnit) =>
                                                                        setAttributes({
                                                                            [`TAB${controlName}bgImgcustomPosYUnit`]:
                                                                                TABbgImgcustomPosYUnit,
                                                                        })
                                                                    }
                                                                />

                                                                <WithResDeviceBtn requiredProps={requiredProps} label="Y Position">
                                                                    <RangeControl
                                                                        value={TABbgImgcustomPosY}
                                                                        min={0}
                                                                        max={TABbgImgcustomPosYUnit === 'px' ? 2000 : 100}
                                                                        step={TABbgImgcustomPosYUnit === 'px' ? 1 : 0.1}
                                                                        onChange={(TABbgImgcustomPosY) =>
                                                                            setAttributes({
                                                                                [`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY,
                                                                            })
                                                                        }
                                                                    />
                                                                </WithResDeviceBtn>
                                                            </>
                                                        )}

                                                        <SelectControl
                                                            label="Attachment"
                                                            value={bgImgAttachment}
                                                            options={[
                                                                {
                                                                    label: __('Default', 'zolo-blocks'),
                                                                    value: '',
                                                                },
                                                                {
                                                                    label: __('Scroll', 'zolo-blocks'),
                                                                    value: 'scroll',
                                                                },
                                                                {
                                                                    label: __('Fixed', 'zolo-blocks'),
                                                                    value: 'fixed',
                                                                },
                                                            ]}
                                                            onChange={(bgImgAttachment) =>
                                                                setAttributes({
                                                                    [`${controlName}bgImgAttachment`]: bgImgAttachment,
                                                                })
                                                            }
                                                        />

                                                        {bgImgAttachment === 'fixed' && (
                                                            <p
                                                                style={{
                                                                    marginTop: '-10px',
                                                                    paddingBottom: '10px',
                                                                }}
                                                            >
                                                                <i>Note: Attachment Fixed works only on desktop.</i>
                                                            </p>
                                                        )}

                                                        <WithResDeviceBtn requiredProps={requiredProps} label="Repeat">
                                                            <SelectControl
                                                                value={TABbgImgRepeat}
                                                                options={[
                                                                    {
                                                                        label: __('Default', 'zolo-blocks'),
                                                                        value: '',
                                                                    },
                                                                    {
                                                                        label: __('No-repeat', 'zolo-blocks'),
                                                                        value: 'no-repeat',
                                                                    },
                                                                    {
                                                                        label: __('Repeat', 'zolo-blocks'),
                                                                        value: 'repeat',
                                                                    },
                                                                    {
                                                                        label: __('Repeat-x', 'zolo-blocks'),
                                                                        value: 'repeat-x',
                                                                    },
                                                                    {
                                                                        label: __('Repeat-y', 'zolo-blocks'),
                                                                        value: 'repeat-y',
                                                                    },
                                                                ]}
                                                                onChange={(TABbgImgRepeat) =>
                                                                    setAttributes({
                                                                        [`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat,
                                                                    })
                                                                }
                                                            />
                                                        </WithResDeviceBtn>

                                                        <WithResDeviceBtn requiredProps={requiredProps} label="Size">
                                                            <SelectControl
                                                                value={TABbackgroundSize}
                                                                options={[
                                                                    {
                                                                        label: __('Default', 'zolo-blocks'),
                                                                        value: '',
                                                                    },
                                                                    {
                                                                        label: __('Auto', 'zolo-blocks'),
                                                                        value: 'auto',
                                                                    },
                                                                    {
                                                                        label: __('Cover', 'zolo-blocks'),
                                                                        value: 'cover',
                                                                    },
                                                                    {
                                                                        label: __('Contain', 'zolo-blocks'),
                                                                        value: 'contain',
                                                                    },
                                                                    {
                                                                        label: __('Custom', 'zolo-blocks'),
                                                                        value: 'custom',
                                                                    },
                                                                ]}
                                                                onChange={(TABbackgroundSize) =>
                                                                    setAttributes({
                                                                        [`TAB${controlName}backgroundSize`]: TABbackgroundSize,
                                                                    })
                                                                }
                                                            />
                                                        </WithResDeviceBtn>

                                                        {TABbackgroundSize === 'custom' && (
                                                            <>
                                                                <UnitBtn
                                                                    selectedUnit={TABbgImgCustomSizeUnit}
                                                                    unitTypes={[
                                                                        {
                                                                            label: 'px',
                                                                            value: 'px',
                                                                        },
                                                                        {
                                                                            label: 'em',
                                                                            value: 'em',
                                                                        },
                                                                        {
                                                                            label: '%',
                                                                            value: '%',
                                                                        },
                                                                    ]}
                                                                    onClick={(TABbgImgCustomSizeUnit) =>
                                                                        setAttributes({
                                                                            [`TAB${controlName}bgImgCustomSizeUnit`]:
                                                                                TABbgImgCustomSizeUnit,
                                                                        })
                                                                    }
                                                                />

                                                                <WithResDeviceBtn requiredProps={requiredProps} label="Width">
                                                                    <RangeControl
                                                                        value={TABbgImgCustomSize}
                                                                        min={0}
                                                                        max={TABbgImgCustomSizeUnit === 'px' ? 2000 : 100}
                                                                        step={TABbgImgCustomSizeUnit === 'px' ? 1 : 0.1}
                                                                        onChange={(TABbgImgCustomSize) =>
                                                                            setAttributes({
                                                                                [`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize,
                                                                            })
                                                                        }
                                                                    />
                                                                </WithResDeviceBtn>
                                                            </>
                                                        )}
                                                    </>
                                                )}

                                                {resMode === 'Mobile' && (
                                                    <>
                                                        <WithResDeviceBtn requiredProps={requiredProps} label="Position">
                                                            <SelectControl
                                                                value={MOBbgImgPos}
                                                                options={[
                                                                    {
                                                                        label: __('Default', 'zolo-blocks'),
                                                                        value: '',
                                                                    },
                                                                    {
                                                                        label: __('Center Center', 'zolo-blocks'),
                                                                        value: 'center center',
                                                                    },
                                                                    {
                                                                        label: __('Center Left', 'zolo-blocks'),
                                                                        value: 'center left',
                                                                    },
                                                                    {
                                                                        label: __('Center Right', 'zolo-blocks'),
                                                                        value: 'center right',
                                                                    },
                                                                    {
                                                                        label: __('Top Center', 'zolo-blocks'),
                                                                        value: 'top center',
                                                                    },
                                                                    {
                                                                        label: __('Top Left', 'zolo-blocks'),
                                                                        value: 'top left',
                                                                    },
                                                                    {
                                                                        label: __('Top Right', 'zolo-blocks'),
                                                                        value: 'top right',
                                                                    },
                                                                    {
                                                                        label: __('Bottom Center', 'zolo-blocks'),
                                                                        value: 'bottom center',
                                                                    },
                                                                    {
                                                                        label: __('Bottom Left', 'zolo-blocks'),
                                                                        value: 'bottom left',
                                                                    },
                                                                    {
                                                                        label: __('Bottom Right', 'zolo-blocks'),
                                                                        value: 'bottom right',
                                                                    },
                                                                    {
                                                                        label: __('Custom', 'zolo-blocks'),
                                                                        value: 'custom',
                                                                    },
                                                                ]}
                                                                onChange={(MOBbgImgPos) =>
                                                                    setAttributes({
                                                                        [`MOB${controlName}bgImgPos`]: MOBbgImgPos,
                                                                    })
                                                                }
                                                            />
                                                        </WithResDeviceBtn>

                                                        {MOBbgImgPos === 'custom' && (
                                                            <>
                                                                <UnitBtn
                                                                    selectedUnit={MOBbgImgcustomPosXUnit}
                                                                    unitTypes={[
                                                                        {
                                                                            label: 'px',
                                                                            value: 'px',
                                                                        },
                                                                        {
                                                                            label: 'em',
                                                                            value: 'em',
                                                                        },
                                                                        {
                                                                            label: '%',
                                                                            value: '%',
                                                                        },
                                                                    ]}
                                                                    onClick={(MOBbgImgcustomPosXUnit) =>
                                                                        setAttributes({
                                                                            [`MOB${controlName}bgImgcustomPosXUnit`]:
                                                                                MOBbgImgcustomPosXUnit,
                                                                        })
                                                                    }
                                                                />

                                                                <WithResDeviceBtn requiredProps={requiredProps} label="X Position">
                                                                    <RangeControl
                                                                        value={MOBbgImgcustomPosX}
                                                                        min={0}
                                                                        max={MOBbgImgcustomPosXUnit === 'px' ? 2000 : 100}
                                                                        onChange={(MOBbgImgcustomPosX) =>
                                                                            setAttributes({
                                                                                [`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX,
                                                                            })
                                                                        }
                                                                    />
                                                                </WithResDeviceBtn>

                                                                <UnitBtn
                                                                    selectedUnit={MOBbgImgcustomPosYUnit}
                                                                    unitTypes={[
                                                                        {
                                                                            label: 'px',
                                                                            value: 'px',
                                                                        },
                                                                        {
                                                                            label: 'em',
                                                                            value: 'em',
                                                                        },
                                                                        {
                                                                            label: '%',
                                                                            value: '%',
                                                                        },
                                                                    ]}
                                                                    onClick={(MOBbgImgcustomPosYUnit) =>
                                                                        setAttributes({
                                                                            [`MOB${controlName}bgImgcustomPosYUnit`]:
                                                                                MOBbgImgcustomPosYUnit,
                                                                        })
                                                                    }
                                                                />

                                                                <WithResDeviceBtn requiredProps={requiredProps} label="Y Position">
                                                                    <RangeControl
                                                                        value={MOBbgImgcustomPosY}
                                                                        min={0}
                                                                        max={MOBbgImgcustomPosYUnit === 'px' ? 2000 : 100}
                                                                        step={MOBbgImgcustomPosYUnit === 'px' ? 1 : 0.1}
                                                                        onChange={(MOBbgImgcustomPosY) =>
                                                                            setAttributes({
                                                                                [`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY,
                                                                            })
                                                                        }
                                                                    />
                                                                </WithResDeviceBtn>
                                                            </>
                                                        )}

                                                        <SelectControl
                                                            label="Attachment"
                                                            value={bgImgAttachment}
                                                            options={[
                                                                {
                                                                    label: __('Default', 'zolo-blocks'),
                                                                    value: '',
                                                                },
                                                                {
                                                                    label: __('Scroll', 'zolo-blocks'),
                                                                    value: 'scroll',
                                                                },
                                                                {
                                                                    label: __('Fixed', 'zolo-blocks'),
                                                                    value: 'fixed',
                                                                },
                                                            ]}
                                                            onChange={(bgImgAttachment) =>
                                                                setAttributes({
                                                                    [`${controlName}bgImgAttachment`]: bgImgAttachment,
                                                                })
                                                            }
                                                        />

                                                        {bgImgAttachment === 'fixed' && (
                                                            <p
                                                                style={{
                                                                    marginTop: '-10px',
                                                                    paddingBottom: '10px',
                                                                }}
                                                            >
                                                                <i>Note: Attachment Fixed works only on desktop.</i>
                                                            </p>
                                                        )}

                                                        <WithResDeviceBtn requiredProps={requiredProps} label="Repeat">
                                                            <SelectControl
                                                                value={MOBbgImgRepeat}
                                                                options={[
                                                                    {
                                                                        label: __('Default', 'zolo-blocks'),
                                                                        value: '',
                                                                    },
                                                                    {
                                                                        label: __('No-repeat', 'zolo-blocks'),
                                                                        value: 'no-repeat',
                                                                    },
                                                                    {
                                                                        label: __('Repeat', 'zolo-blocks'),
                                                                        value: 'repeat',
                                                                    },
                                                                    {
                                                                        label: __('Repeat-x', 'zolo-blocks'),
                                                                        value: 'repeat-x',
                                                                    },
                                                                    {
                                                                        label: __('Repeat-y', 'zolo-blocks'),
                                                                        value: 'repeat-y',
                                                                    },
                                                                ]}
                                                                onChange={(MOBbgImgRepeat) =>
                                                                    setAttributes({
                                                                        [`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat,
                                                                    })
                                                                }
                                                            />
                                                        </WithResDeviceBtn>

                                                        <WithResDeviceBtn requiredProps={requiredProps} label="Size">
                                                            <SelectControl
                                                                value={MOBbackgroundSize}
                                                                options={[
                                                                    {
                                                                        label: __('Default', 'zolo-blocks'),
                                                                        value: '',
                                                                    },
                                                                    {
                                                                        label: __('Auto', 'zolo-blocks'),
                                                                        value: 'auto',
                                                                    },
                                                                    {
                                                                        label: __('Cover', 'zolo-blocks'),
                                                                        value: 'cover',
                                                                    },
                                                                    {
                                                                        label: __('Contain', 'zolo-blocks'),
                                                                        value: 'contain',
                                                                    },
                                                                    {
                                                                        label: __('Custom', 'zolo-blocks'),
                                                                        value: 'custom',
                                                                    },
                                                                ]}
                                                                onChange={(MOBbackgroundSize) =>
                                                                    setAttributes({
                                                                        [`MOB${controlName}backgroundSize`]: MOBbackgroundSize,
                                                                    })
                                                                }
                                                            />
                                                        </WithResDeviceBtn>

                                                        {MOBbackgroundSize === 'custom' && (
                                                            <>
                                                                <UnitBtn
                                                                    selectedUnit={MOBbgImgCustomSizeUnit}
                                                                    unitTypes={[
                                                                        {
                                                                            label: 'px',
                                                                            value: 'px',
                                                                        },
                                                                        {
                                                                            label: 'em',
                                                                            value: 'em',
                                                                        },
                                                                        {
                                                                            label: '%',
                                                                            value: '%',
                                                                        },
                                                                    ]}
                                                                    onClick={(MOBbgImgCustomSizeUnit) =>
                                                                        setAttributes({
                                                                            [`MOB${controlName}bgImgCustomSizeUnit`]:
                                                                                MOBbgImgCustomSizeUnit,
                                                                        })
                                                                    }
                                                                />

                                                                <WithResDeviceBtn requiredProps={requiredProps} label="Width">
                                                                    <RangeControl
                                                                        value={MOBbgImgCustomSize}
                                                                        min={0}
                                                                        max={MOBbgImgCustomSizeUnit === 'px' ? 2000 : 100}
                                                                        step={MOBbgImgCustomSizeUnit === 'px' ? 1 : 0.1}
                                                                        onChange={(MOBbgImgCustomSize) =>
                                                                            setAttributes({
                                                                                [`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize,
                                                                            })
                                                                        }
                                                                    />
                                                                </WithResDeviceBtn>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </>
                                )}
                            </>
                        )}

                        {backgroundType === 'gradient' && (
                            <GradientControl
                                label={__('Gradient Color', 'zolo-blocks')}
                                value={gradientColor}
                                onChange={(newVal) =>
                                    setAttributes({
                                        [`${controlName}gradientColor`]: newVal,
                                    })
                                }
                            />
                        )}
                    </Popover>
                )}
            </div>
        </>
    );
};

export default NormalBGControl;
