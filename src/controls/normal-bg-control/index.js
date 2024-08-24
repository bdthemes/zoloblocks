import { MediaUpload } from '@wordpress/block-editor';
import {
    BaseControl,
    Button,
    ButtonGroup,
    RangeControl,
    SelectControl,
    ToggleControl,
    Dropdown,
    TextareaControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { BACKGROUND_TYPES } from '../../global/constants';
import ColorControl from '../color-control';
import GradientControl from '../gradient-control';
import ImageAvatar from '../image-avatar';
import UnitBtn from '../unit-btn';
import WithResDeviceBtn from '../with-res-device-btn';
import ResetBtn from '../reset-btn';

const NormalBGControl = ({ label = '', controlName, requiredProps, noMainBGImg = false }) => {
    const { setAttributes, attributes, resMode } = requiredProps;
    const {
        //attributes for background type normal start
        [`${controlName}backgroundType`]: backgroundType,
        [`${controlName}backgroundColor`]: backgroundColor,
        [`${controlName}customGradient`]: customGradient,
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
                        {label || __('Background', 'zoloblocks')}
                    </label>
                    <Dropdown
                        className="zolo-background-control-popover-dropdown"
                        contentClassName="zolo-background-control-popover"
                        popoverProps={{ placement: 'bottom-start' }}
                        renderToggle={({ isOpen, onToggle }) => (
                            <div className="zolo-flex">
                                {((backgroundColor && backgroundColor !== '') ||
                                    (bgImageURL && bgImageURL !== '') ||
                                    backgroundType !== 'classic') && (
                                    <ResetBtn
                                        onReset={() => {
                                            setAttributes({
                                                [`${controlName}backgroundType`]: 'classic',
                                                [`${controlName}backgroundColor`]: '',
                                                [`${controlName}gradientColor`]: 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
                                                [`${controlName}bgImageURL`]: '',
                                            });
                                        }}
                                    />
                                )}

                                <button onClick={onToggle} aria-expanded={isOpen} className="zolo-panel-opener-btn">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x={9} y={9} width={12} height={12} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
                                        <path
                                            d="M9 15H5C3.89543 15 3 14.1046 3 13V5C3 3.89543 3.89543 3 5 3H13C14.1046 3 15 3.89543 15 5V9"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                </button>
                            </div>
                        )}
                        renderContent={() => (
                            <>
                                <BaseControl label={__('Background Type', 'zoloblocks')}>
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
                                            label={__('Background Color', 'zoloblocks')}
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
                                                                    label={__('Upload Image', 'zoloblocks')}
                                                                    icon="format-image"
                                                                    onClick={open}
                                                                />
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
                                                                <WithResDeviceBtn
                                                                    requiredProps={requiredProps}
                                                                    label="Position"
                                                                    noResetBtn={true}
                                                                >
                                                                    <SelectControl
                                                                        value={bgImgPos}
                                                                        options={[
                                                                            {
                                                                                label: __('Default', 'zoloblocks'),
                                                                                value: '',
                                                                            },
                                                                            {
                                                                                label: __('Center Center', 'zoloblocks'),
                                                                                value: 'center center',
                                                                            },
                                                                            {
                                                                                label: __('Center Left', 'zoloblocks'),
                                                                                value: 'center left',
                                                                            },
                                                                            {
                                                                                label: __('Center Right', 'zoloblocks'),
                                                                                value: 'center right',
                                                                            },
                                                                            {
                                                                                label: __('Top Center', 'zoloblocks'),
                                                                                value: 'top center',
                                                                            },
                                                                            {
                                                                                label: __('Top Left', 'zoloblocks'),
                                                                                value: 'top left',
                                                                            },
                                                                            {
                                                                                label: __('Top Right', 'zoloblocks'),
                                                                                value: 'top right',
                                                                            },
                                                                            {
                                                                                label: __('Bottom Center', 'zoloblocks'),
                                                                                value: 'bottom center',
                                                                            },
                                                                            {
                                                                                label: __('Bottom Left', 'zoloblocks'),
                                                                                value: 'bottom left',
                                                                            },
                                                                            {
                                                                                label: __('Bottom Right', 'zoloblocks'),
                                                                                value: 'bottom right',
                                                                            },
                                                                            {
                                                                                label: __('Custom', 'zoloblocks'),
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
                                                                                    [`${controlName}bgImgcustomPosXUnit`]:
                                                                                        bgImgcustomPosXUnit,
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
                                                                                    [`${controlName}bgImgcustomPosYUnit`]:
                                                                                        bgImgcustomPosYUnit,
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
                                                                            label: __('Default', 'zoloblocks'),
                                                                            value: '',
                                                                        },
                                                                        {
                                                                            label: __('Scroll', 'zoloblocks'),
                                                                            value: 'scroll',
                                                                        },
                                                                        {
                                                                            label: __('Fixed', 'zoloblocks'),
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

                                                                <WithResDeviceBtn
                                                                    requiredProps={requiredProps}
                                                                    label="Repeat"
                                                                    noResetBtn={true}
                                                                >
                                                                    <SelectControl
                                                                        value={bgImgRepeat}
                                                                        options={[
                                                                            {
                                                                                label: __('Default', 'zoloblocks'),
                                                                                value: '',
                                                                            },
                                                                            {
                                                                                label: __('No-repeat', 'zoloblocks'),
                                                                                value: 'no-repeat',
                                                                            },
                                                                            {
                                                                                label: __('Repeat', 'zoloblocks'),
                                                                                value: 'repeat',
                                                                            },
                                                                            {
                                                                                label: __('Repeat-x', 'zoloblocks'),
                                                                                value: 'repeat-x',
                                                                            },
                                                                            {
                                                                                label: __('Repeat-y', 'zoloblocks'),
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

                                                                <WithResDeviceBtn
                                                                    requiredProps={requiredProps}
                                                                    label="Size"
                                                                    noResetBtn={true}
                                                                >
                                                                    <SelectControl
                                                                        value={backgroundSize}
                                                                        options={[
                                                                            {
                                                                                label: __('Default', 'zoloblocks'),
                                                                                value: '',
                                                                            },
                                                                            {
                                                                                label: __('Auto', 'zoloblocks'),
                                                                                value: 'auto',
                                                                            },
                                                                            {
                                                                                label: __('Cover', 'zoloblocks'),
                                                                                value: 'cover',
                                                                            },
                                                                            {
                                                                                label: __('Contain', 'zoloblocks'),
                                                                                value: 'contain',
                                                                            },
                                                                            {
                                                                                label: __('Custom', 'zoloblocks'),
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
                                                                                    [`${controlName}bgImgCustomSizeUnit`]:
                                                                                        bgImgCustomSizeUnit,
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
                                                                <WithResDeviceBtn
                                                                    requiredProps={requiredProps}
                                                                    label="Position"
                                                                    noResetBtn={true}
                                                                >
                                                                    <SelectControl
                                                                        value={TABbgImgPos}
                                                                        options={[
                                                                            {
                                                                                label: __('Default', 'zoloblocks'),
                                                                                value: '',
                                                                            },
                                                                            {
                                                                                label: __('Center Center', 'zoloblocks'),
                                                                                value: 'center center',
                                                                            },
                                                                            {
                                                                                label: __('Center Left', 'zoloblocks'),
                                                                                value: 'center left',
                                                                            },
                                                                            {
                                                                                label: __('Center Right', 'zoloblocks'),
                                                                                value: 'center right',
                                                                            },
                                                                            {
                                                                                label: __('Top Center', 'zoloblocks'),
                                                                                value: 'top center',
                                                                            },
                                                                            {
                                                                                label: __('Top Left', 'zoloblocks'),
                                                                                value: 'top left',
                                                                            },
                                                                            {
                                                                                label: __('Top Right', 'zoloblocks'),
                                                                                value: 'top right',
                                                                            },
                                                                            {
                                                                                label: __('Bottom Center', 'zoloblocks'),
                                                                                value: 'bottom center',
                                                                            },
                                                                            {
                                                                                label: __('Bottom Left', 'zoloblocks'),
                                                                                value: 'bottom left',
                                                                            },
                                                                            {
                                                                                label: __('Bottom Right', 'zoloblocks'),
                                                                                value: 'bottom right',
                                                                            },
                                                                            {
                                                                                label: __('Custom', 'zoloblocks'),
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
                                                                                        [`TAB${controlName}bgImgcustomPosX`]:
                                                                                            TABbgImgcustomPosX,
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
                                                                                        [`TAB${controlName}bgImgcustomPosY`]:
                                                                                            TABbgImgcustomPosY,
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
                                                                            label: __('Default', 'zoloblocks'),
                                                                            value: '',
                                                                        },
                                                                        {
                                                                            label: __('Scroll', 'zoloblocks'),
                                                                            value: 'scroll',
                                                                        },
                                                                        {
                                                                            label: __('Fixed', 'zoloblocks'),
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

                                                                <WithResDeviceBtn
                                                                    requiredProps={requiredProps}
                                                                    label="Repeat"
                                                                    noResetBtn={true}
                                                                >
                                                                    <SelectControl
                                                                        value={TABbgImgRepeat}
                                                                        options={[
                                                                            {
                                                                                label: __('Default', 'zoloblocks'),
                                                                                value: '',
                                                                            },
                                                                            {
                                                                                label: __('No-repeat', 'zoloblocks'),
                                                                                value: 'no-repeat',
                                                                            },
                                                                            {
                                                                                label: __('Repeat', 'zoloblocks'),
                                                                                value: 'repeat',
                                                                            },
                                                                            {
                                                                                label: __('Repeat-x', 'zoloblocks'),
                                                                                value: 'repeat-x',
                                                                            },
                                                                            {
                                                                                label: __('Repeat-y', 'zoloblocks'),
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

                                                                <WithResDeviceBtn
                                                                    requiredProps={requiredProps}
                                                                    label="Size"
                                                                    noResetBtn={true}
                                                                >
                                                                    <SelectControl
                                                                        value={TABbackgroundSize}
                                                                        options={[
                                                                            {
                                                                                label: __('Default', 'zoloblocks'),
                                                                                value: '',
                                                                            },
                                                                            {
                                                                                label: __('Auto', 'zoloblocks'),
                                                                                value: 'auto',
                                                                            },
                                                                            {
                                                                                label: __('Cover', 'zoloblocks'),
                                                                                value: 'cover',
                                                                            },
                                                                            {
                                                                                label: __('Contain', 'zoloblocks'),
                                                                                value: 'contain',
                                                                            },
                                                                            {
                                                                                label: __('Custom', 'zoloblocks'),
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
                                                                                        [`TAB${controlName}bgImgCustomSize`]:
                                                                                            TABbgImgCustomSize,
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
                                                                <WithResDeviceBtn
                                                                    requiredProps={requiredProps}
                                                                    label="Position"
                                                                    noResetBtn={true}
                                                                >
                                                                    <SelectControl
                                                                        value={MOBbgImgPos}
                                                                        options={[
                                                                            {
                                                                                label: __('Default', 'zoloblocks'),
                                                                                value: '',
                                                                            },
                                                                            {
                                                                                label: __('Center Center', 'zoloblocks'),
                                                                                value: 'center center',
                                                                            },
                                                                            {
                                                                                label: __('Center Left', 'zoloblocks'),
                                                                                value: 'center left',
                                                                            },
                                                                            {
                                                                                label: __('Center Right', 'zoloblocks'),
                                                                                value: 'center right',
                                                                            },
                                                                            {
                                                                                label: __('Top Center', 'zoloblocks'),
                                                                                value: 'top center',
                                                                            },
                                                                            {
                                                                                label: __('Top Left', 'zoloblocks'),
                                                                                value: 'top left',
                                                                            },
                                                                            {
                                                                                label: __('Top Right', 'zoloblocks'),
                                                                                value: 'top right',
                                                                            },
                                                                            {
                                                                                label: __('Bottom Center', 'zoloblocks'),
                                                                                value: 'bottom center',
                                                                            },
                                                                            {
                                                                                label: __('Bottom Left', 'zoloblocks'),
                                                                                value: 'bottom left',
                                                                            },
                                                                            {
                                                                                label: __('Bottom Right', 'zoloblocks'),
                                                                                value: 'bottom right',
                                                                            },
                                                                            {
                                                                                label: __('Custom', 'zoloblocks'),
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
                                                                                        [`MOB${controlName}bgImgcustomPosX`]:
                                                                                            MOBbgImgcustomPosX,
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
                                                                                        [`MOB${controlName}bgImgcustomPosY`]:
                                                                                            MOBbgImgcustomPosY,
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
                                                                            label: __('Default', 'zoloblocks'),
                                                                            value: '',
                                                                        },
                                                                        {
                                                                            label: __('Scroll', 'zoloblocks'),
                                                                            value: 'scroll',
                                                                        },
                                                                        {
                                                                            label: __('Fixed', 'zoloblocks'),
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

                                                                <WithResDeviceBtn
                                                                    requiredProps={requiredProps}
                                                                    label="Repeat"
                                                                    noResetBtn={true}
                                                                >
                                                                    <SelectControl
                                                                        value={MOBbgImgRepeat}
                                                                        options={[
                                                                            {
                                                                                label: __('Default', 'zoloblocks'),
                                                                                value: '',
                                                                            },
                                                                            {
                                                                                label: __('No-repeat', 'zoloblocks'),
                                                                                value: 'no-repeat',
                                                                            },
                                                                            {
                                                                                label: __('Repeat', 'zoloblocks'),
                                                                                value: 'repeat',
                                                                            },
                                                                            {
                                                                                label: __('Repeat-x', 'zoloblocks'),
                                                                                value: 'repeat-x',
                                                                            },
                                                                            {
                                                                                label: __('Repeat-y', 'zoloblocks'),
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

                                                                <WithResDeviceBtn
                                                                    requiredProps={requiredProps}
                                                                    label="Size"
                                                                    noResetBtn={true}
                                                                >
                                                                    <SelectControl
                                                                        value={MOBbackgroundSize}
                                                                        options={[
                                                                            {
                                                                                label: __('Default', 'zoloblocks'),
                                                                                value: '',
                                                                            },
                                                                            {
                                                                                label: __('Auto', 'zoloblocks'),
                                                                                value: 'auto',
                                                                            },
                                                                            {
                                                                                label: __('Cover', 'zoloblocks'),
                                                                                value: 'cover',
                                                                            },
                                                                            {
                                                                                label: __('Contain', 'zoloblocks'),
                                                                                value: 'contain',
                                                                            },
                                                                            {
                                                                                label: __('Custom', 'zoloblocks'),
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
                                                                                        [`MOB${controlName}bgImgCustomSize`]:
                                                                                            MOBbgImgCustomSize,
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
                                    <>
                                        <ToggleControl
                                            label={__('Add Custom Gradient', 'zoloblocks')}
                                            checked={customGradient}
                                            onChange={() =>
                                                setAttributes({
                                                    [`${controlName}customGradient`]: !customGradient,
                                                    [`${controlName}gradientColor`]: '',
                                                })
                                            }
                                        />
                                        {customGradient && (
                                            <TextareaControl
                                                help={
                                                    <>
                                                        {__('Add your gradient color here. Get Sample', 'zoloblocks')}
                                                        <a
                                                            href="https://csspro.com/css-gradients/"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {__('CSS Gradients', 'zoloblocks')}
                                                        </a>
                                                    </>
                                                }
                                                label={__('Custom Gradient', 'zoloblocks')}
                                                onChange={(v) =>
                                                    setAttributes({
                                                        [`${controlName}gradientColor`]: v,
                                                    })
                                                }
                                                value={gradientColor}
                                            />
                                        )}
                                        {!customGradient && (
                                            <GradientControl
                                                label={__('Gradient Color', 'zoloblocks')}
                                                value={gradientColor}
                                                onChange={(newVal) =>
                                                    setAttributes({
                                                        [`${controlName}gradientColor`]: newVal,
                                                    })
                                                }
                                            />
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    />
                </div>
            </div>
        </>
    );
};

export default NormalBGControl;
