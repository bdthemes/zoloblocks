import { MediaUpload } from '@wordpress/block-editor';
import { Button, RangeControl, SelectControl, ToggleControl, TextareaControl, CardDivider } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { TEXT_GRADIENT_TYPES } from '../../global/constants';
import ColorControl from '../color-control';
import GradientControl from '../gradient-control';
import ImageAvatar from '../image-avatar';
import UnitBtn from '../unit-btn';
import WithResDeviceBtn from '../with-res-device-btn';
import ResetBtn from '../reset-btn';
import IconicBtnGroup from '../iconic-btn-group';
import PopoverControl from '../popover-control';
import { ColorPalette } from '@wordpress/block-editor';

const TextGradientControl = ({ label = '', controlName, requiredProps, noMainBGImg = false, defaultColor="",onChangeDefault= null }) => {
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
        titleColor,
        textGradientColorgradientColor,
    } = attributes;

    return (
        <PopoverControl
            label={__('Color', 'zoloblocks-pro')}
            // icon={'format-color-fill'}
            // hasValue={gradientColor || customGradient || gradientColor !== '' || customGradient !== false}
            onReset={() => {
                setAttributes({
                    [`${controlName}customGradient`]: false,
                    [`${controlName}gradientColor`]: '',
                });
            }}
            hasStyle={true}
            applyStyle={
                backgroundType === 'gradient'
                    ? textGradientColorgradientColor
                    : backgroundType === 'classic'
                      ? defaultColor
                      : backgroundType === 'image'
                        ? 'url(' + bgImageURL + ')'
                        : ''
            }
        >
            <div className="zolo-control-container zolo-border-control">
                <div className="zolo-flex-col-control-tab">
                    <IconicBtnGroup
                        // label={__('Color', 'zoloblocks')}
                        value={backgroundType}
                        onChange={(newVal) =>
                            setAttributes({
                                [`${controlName}backgroundType`]: newVal,
                            })
                        }
                        options={TEXT_GRADIENT_TYPES}
                    />
                </div>
                {backgroundType === 'image' && (
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
                                    onEditImage={(media) => {
                                        setAttributes({
                                            [`${controlName}bgImageURL`]: media.url,
                                            [`${controlName}bgImageID`]: media.id,
                                        });
                                    }}
                                />

                                {resMode === 'Desktop' && (
                                    <>
                                        <div className="zolo-popup-flex-row-control">
                                            <WithResDeviceBtn requiredProps={requiredProps} label="Position" noResetBtn={true}>
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
                                        </div>

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
                                                <div className="zolo-flex-col-control zolo-text-gradient-label">
                                                    <WithResDeviceBtn requiredProps={requiredProps} label="X Position">
                                                        <RangeControl
                                                            className="zolo-range-control-tooltip"
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
                                                </div>

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
                                                <div className="zolo-flex-col-control zolo-text-gradient-label">
                                                    <WithResDeviceBtn requiredProps={requiredProps} label="Y Position">
                                                        <RangeControl
                                                            className="zolo-range-control-tooltip"
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
                                                </div>
                                            </>
                                        )}

                                        <SelectControl
                                            className="zolo-flex-pop-row-control"
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
                                        <div className="zolo-popup-flex-row-control">
                                            <WithResDeviceBtn requiredProps={requiredProps} label="Repeat" noResetBtn={true}>
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
                                        </div>

                                        <div className="zolo-popup-flex-row-control">
                                            <WithResDeviceBtn requiredProps={requiredProps} label="Size" noResetBtn={true}>
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
                                        </div>

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
                                                <div className="zolo-flex-col-control zolo-text-gradient-label">
                                                    <WithResDeviceBtn requiredProps={requiredProps} label="Width">
                                                        <RangeControl
                                                            className="zolo-range-control-tooltip"
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
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}

                                {resMode === 'Tablet' && (
                                    <>
                                        <div className="zolo-popup-flex-row-control">
                                            <WithResDeviceBtn requiredProps={requiredProps} label="Position" noResetBtn={true}>
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
                                        </div>

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
                                                            [`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit,
                                                        })
                                                    }
                                                />
                                                <div className="zolo-flex-col-control zolo-text-gradient-label">
                                                    <WithResDeviceBtn requiredProps={requiredProps} label="X Position">
                                                        <RangeControl
                                                            className="zolo-range-control-tooltip"
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
                                                </div>

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
                                                            [`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit,
                                                        })
                                                    }
                                                />
                                                <div className="zolo-flex-col-control zolo-text-gradient-label">
                                                    <WithResDeviceBtn requiredProps={requiredProps} label="Y Position">
                                                        <RangeControl
                                                            className="zolo-range-control-tooltip"
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
                                                </div>
                                            </>
                                        )}

                                        <SelectControl
                                            className="zolo-flex-pop-row-control"
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
                                        <div className="zolo-popup-flex-row-control">
                                            <WithResDeviceBtn requiredProps={requiredProps} label="Repeat" noResetBtn={true}>
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
                                        </div>
                                        <div className="zolo-popup-flex-row-control">
                                            <WithResDeviceBtn requiredProps={requiredProps} label="Size" noResetBtn={true}>
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
                                        </div>

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
                                                            [`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit,
                                                        })
                                                    }
                                                />
                                                <div className="zolo-flex-col-control zolo-text-gradient-label">
                                                    <WithResDeviceBtn requiredProps={requiredProps} label="Width">
                                                        <RangeControl
                                                            className="zolo-range-control-tooltip"
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
                                                </div>
                                            </>
                                        )}
                                    </>
                                )}

                                {resMode === 'Mobile' && (
                                    <>
                                        <div className="zolo-popup-flex-row-control">
                                            <WithResDeviceBtn requiredProps={requiredProps} label="Position" noResetBtn={true}>
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
                                        </div>

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
                                                            [`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit,
                                                        })
                                                    }
                                                />

                                                <div className="zolo-flex-col-control zolo-text-gradient-label">
                                                    <WithResDeviceBtn requiredProps={requiredProps} label="X Position">
                                                        <RangeControl
                                                            className="zolo-range-control-tooltip"
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
                                                </div>

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
                                                            [`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit,
                                                        })
                                                    }
                                                />

                                                <div className="zolo-flex-col-control zolo-text-gradient-label">
                                                    <WithResDeviceBtn requiredProps={requiredProps} label="Y Position">
                                                        <RangeControl
                                                            className="zolo-range-control-tooltip"
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
                                                </div>
                                            </>
                                        )}

                                        <SelectControl
                                            className="zolo-flex-pop-row-control"
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
                                        <div className="zolo-popup-flex-row-control">
                                            <WithResDeviceBtn requiredProps={requiredProps} label="Repeat" noResetBtn={true}>
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
                                        </div>

                                        <div className="zolo-popup-flex-row-control">
                                            <WithResDeviceBtn requiredProps={requiredProps} label="Size" noResetBtn={true}>
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
                                        </div>

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
                                                            [`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit,
                                                        })
                                                    }
                                                />
                                                <div className="zolo-flex-col-control zolo-text-gradient-label">
                                                    <WithResDeviceBtn requiredProps={requiredProps} label="Width">
                                                        <RangeControl
                                                            className="zolo-range-control-tooltip"
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
                                                </div>
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
                                        <a href="https://csspro.com/css-gradients/" target="_blank" rel="noopener noreferrer">
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
                {backgroundType === 'classic' && (
                    <ColorPalette
                        label={__('Color', 'zoloblocks')}
                        value={defaultColor}
                        onChange={onChangeDefault}
                        enableAlpha={true}
                    />
                )}
            </div>
        </PopoverControl>
    );
};

export default TextGradientControl;
