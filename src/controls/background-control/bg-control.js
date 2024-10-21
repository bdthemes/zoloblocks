import { MediaUpload } from '@wordpress/block-editor';
import {
    BaseControl,
    Button,
    ButtonGroup,
    RangeControl,
    SelectControl,
    TabPanel,
    TextareaControl,
    ToggleControl,
    TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { BACKGROUND_TYPES, NORMAL_HOVER } from '../../global/constants';
import ColorControl from '../color-control';
import GradientControl from '../gradient-control';
import ImageAvatar from '../image-avatar';
import UnitBtn from '../unit-btn';
import WithResDeviceBtn from '../with-res-device-btn';
import { applyFilters } from '@wordpress/hooks';

const BGControl = (props) => {
    const { controlName, requiredProps, noMainBGImg, video } = props;
    const { setAttributes, attributes, resMode } = requiredProps;
    const backgroundParallax = applyFilters('zolo.extensions.controls.backgroundParallax', [], controlName, requiredProps);
    const backgroundVideo = applyFilters('zolo.extensions.controls.backgroundVideo', [], requiredProps);
    const {
        [`${controlName}bg_hoverType`]: bg_hoverType,

        //attributes for background type normal start
        [`${controlName}backgroundType`]: backgroundType,
        [`${controlName}backgroundColor`]: backgroundColor,
        [`${controlName}gradientColor`]: gradientColor,
        [`${controlName}customGradient`]: customGradient,

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

        //  attributes for bg_hoverType hover start  ⬇
        [`hov_${controlName}backgroundType`]: hov_backgroundType,
        [`hov_${controlName}backgroundColor`]: hov_backgroundColor,
        [`hov_${controlName}gradientColor`]: hov_gradientColor,
        [`hov_${controlName}bgImageURL`]: hov_bgImageURL,
        [`hov_${controlName}bgImageID`]: hov_bgImageID,
        [`hov_${controlName}bgImgAttachment`]: hov_bgImgAttachment,

        [`hov_${controlName}backgroundSize`]: hov_backgroundSize,
        [`hov_${controlName}bgImgCustomSize`]: hov_bgImgCustomSize,
        [`hov_${controlName}bgImgCustomSizeUnit`]: hov_bgImgCustomSizeUnit,
        [`hov_${controlName}bgImgPos`]: hov_bgImgPos,
        [`hov_${controlName}bgImgcustomPosX`]: hov_bgImgcustomPosX,
        [`hov_${controlName}bgImgcustomPosXUnit`]: hov_bgImgcustomPosXUnit,
        [`hov_${controlName}bgImgcustomPosY`]: hov_bgImgcustomPosY,
        [`hov_${controlName}bgImgcustomPosYUnit`]: hov_bgImgcustomPosYUnit,
        [`hov_${controlName}bgImgRepeat`]: hov_bgImgRepeat,

        [`hov_TAB${controlName}backgroundSize`]: hov_TABbackgroundSize,
        [`hov_TAB${controlName}bgImgCustomSize`]: hov_TABbgImgCustomSize,
        [`hov_TAB${controlName}bgImgCustomSizeUnit`]: hov_TABbgImgCustomSizeUnit,
        [`hov_TAB${controlName}bgImgPos`]: hov_TABbgImgPos,
        [`hov_TAB${controlName}bgImgcustomPosX`]: hov_TABbgImgcustomPosX,
        [`hov_TAB${controlName}bgImgcustomPosXUnit`]: hov_TABbgImgcustomPosXUnit,
        [`hov_TAB${controlName}bgImgcustomPosY`]: hov_TABbgImgcustomPosY,
        [`hov_TAB${controlName}bgImgcustomPosYUnit`]: hov_TABbgImgcustomPosYUnit,
        [`hov_TAB${controlName}bgImgRepeat`]: hov_TABbgImgRepeat,

        [`hov_MOB${controlName}backgroundSize`]: hov_MOBbackgroundSize,
        [`hov_MOB${controlName}bgImgCustomSize`]: hov_MOBbgImgCustomSize,
        [`hov_MOB${controlName}bgImgCustomSizeUnit`]: hov_MOBbgImgCustomSizeUnit,
        [`hov_MOB${controlName}bgImgPos`]: hov_MOBbgImgPos,
        [`hov_MOB${controlName}bgImgcustomPosX`]: hov_MOBbgImgcustomPosX,
        [`hov_MOB${controlName}bgImgcustomPosXUnit`]: hov_MOBbgImgcustomPosXUnit,
        [`hov_MOB${controlName}bgImgcustomPosY`]: hov_MOBbgImgcustomPosY,
        [`hov_MOB${controlName}bgImgcustomPosYUnit`]: hov_MOBbgImgcustomPosYUnit,
        [`hov_MOB${controlName}bgImgRepeat`]: hov_MOBbgImgRepeat,
    } = attributes;

    return (
        <>
            <BaseControl>
                <TabPanel
                    className="zolo-tab-panel"
                    activeClass="active-tab"
                    tabs={NORMAL_HOVER.map(({ value, label }) => ({
                        name: value,
                        title: label,
                        className: `zolo-tab ${value}`,
                    }))}
                >
                    {(tab) => {
                        if ('normal' === tab.name) {
                            return (
                                <>
                                    <BaseControl label={__('Background Type', 'zoloblocks')}>
                                        <ButtonGroup>
                                            {BACKGROUND_TYPES.map(({ value, label }) => (
                                                <Button
                                                    key={value}
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
                                            {video && (
                                                <Button
                                                    key="video"
                                                    variant={backgroundType === 'video' ? 'primary' : 'secondary'}
                                                    onClick={() =>
                                                        setAttributes({
                                                            [`${controlName}backgroundType`]: 'video',
                                                        })
                                                    }
                                                >
                                                    {__('Video', 'zoloblocks')}
                                                </Button>
                                            )}
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
                                                        onSelect={({ url, id }) =>
                                                            setAttributes({
                                                                [`${controlName}bgImageURL`]: url,
                                                                [`${controlName}bgImageID`]: id,
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
                                                                onEditImage={({ id, url }) => {
                                                                    setAttributes({
                                                                        [`${controlName}bgImageURL`]: url,
                                                                        [`${controlName}bgImageID`]: id,
                                                                    });
                                                                }}
                                                            />
                                                            {resMode === 'Desktop' && (
                                                                <>
                                                                    <WithResDeviceBtn
                                                                        requiredProps={requiredProps}
                                                                        label={__('Position', 'zoloblocks')}
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

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('X Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={bgImgcustomPosX}
                                                                                    min={-2000}
                                                                                    max={2000}
                                                                                    onChange={(bgImgcustomPosX) =>
                                                                                        setAttributes({
                                                                                            [`${controlName}bgImgcustomPosX`]:
                                                                                                bgImgcustomPosX,
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

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Y Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={bgImgcustomPosY}
                                                                                    min={-2000}
                                                                                    max={2000}
                                                                                    step={bgImgcustomPosYUnit === 'px' ? 1 : 0.1}
                                                                                    onChange={(bgImgcustomPosY) =>
                                                                                        setAttributes({
                                                                                            [`${controlName}bgImgcustomPosY`]:
                                                                                                bgImgcustomPosY,
                                                                                        })
                                                                                    }
                                                                                />
                                                                            </WithResDeviceBtn>
                                                                        </>
                                                                    )}

                                                                    <SelectControl
                                                                        label={__('Attachment', 'zoloblocks')}
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
                                                                        label={__('Repeat', 'zoloblocks')}
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
                                                                        label={__('Size', 'zoloblocks')}
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

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Width', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={bgImgCustomSize}
                                                                                    min={0}
                                                                                    max={bgImgCustomSizeUnit === 'px' ? 2000 : 100}
                                                                                    step={bgImgCustomSizeUnit === 'px' ? 1 : 0.1}
                                                                                    onChange={(bgImgCustomSize) =>
                                                                                        setAttributes({
                                                                                            [`${controlName}bgImgCustomSize`]:
                                                                                                bgImgCustomSize,
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
                                                                        label={__('Position', 'zoloblocks')}
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

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('X Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
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

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Y Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
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
                                                                        label={__('Attachment')}
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
                                                                        label={__('Repeat', 'zoloblocks')}
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
                                                                        label={__('Size', 'zoloblocks')}
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

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Width', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
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
                                                                        label={__('Position', 'zoloblocks')}
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

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('X Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
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

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Y Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
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
                                                                        label={__('Attachment', 'zoloblocks')}
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
                                                                        label={__('Repeat', 'zoloblocks')}
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
                                                                        label={__('Size', 'zoloblocks')}
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

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Width', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
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
                                                            {/* {backgroundParallax && backgroundParallax} */}
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
                                    {backgroundType === 'video' && (
                                        <>
                                            {backgroundVideo && backgroundVideo}
                                        </>
                                    )}
                                </>
                            );
                        } else {
                            return (
                                <>
                                    <BaseControl label={__('Background Type', 'zoloblocks')}>
                                        <ButtonGroup>
                                            {BACKGROUND_TYPES.map(
                                                ({ value, label }) => (
                                                    <Button
                                                        key={value}
                                                        variant={backgroundType === value ? 'primary' : 'secondary'}
                                                        onClick={() =>
                                                            setAttributes({
                                                                [`${controlName}backgroundType`]: value,
                                                            })
                                                        }
                                                    >
                                                        {label}
                                                    </Button>
                                                )
                                            )}
                                        </ButtonGroup>
                                    </BaseControl>

                                    {hov_backgroundType === 'classic' && (
                                        <>
                                            <ColorControl
                                                label={__('Background Color', 'zoloblocks')}
                                                color={hov_backgroundColor}
                                                onChange={(newVal) =>
                                                    setAttributes({
                                                        [`hov_${controlName}backgroundColor`]: newVal,
                                                    })
                                                }
                                            />

                                            {noMainBGImg === false && (
                                                <>
                                                    <MediaUpload
                                                        onSelect={({ url, id }) =>
                                                            setAttributes({
                                                                [`hov_${controlName}bgImageURL`]: url,
                                                                [`hov_${controlName}bgImageID`]: id,
                                                            })
                                                        }
                                                        type="image"
                                                        value={hov_bgImageID}
                                                        render={({ open }) =>
                                                            !hov_bgImageURL && (
                                                                <>
                                                                    <Button
                                                                        className="zb-bg-control-img-btn components-button"
                                                                        label={__('Upload Image', 'zoloblocks')}
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

                                                    {hov_bgImageURL && (
                                                        <>
                                                            <ImageAvatar
                                                                imageUrl={hov_bgImageURL}
                                                                onDeleteImage={() =>
                                                                    setAttributes({
                                                                        [`hov_${controlName}bgImageURL`]: null,
                                                                    })
                                                                }
                                                            />

                                                            {resMode === 'Desktop' && (
                                                                <>
                                                                    <WithResDeviceBtn
                                                                        requiredProps={requiredProps}
                                                                        label={__('Position', 'zoloblocks')}
                                                                        noResetBtn={true}
                                                                    >
                                                                        <SelectControl
                                                                            value={hov_bgImgPos}
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
                                                                            onChange={(hov_bgImgPos) =>
                                                                                setAttributes({
                                                                                    [`hov_${controlName}bgImgPos`]: hov_bgImgPos,
                                                                                })
                                                                            }
                                                                        />
                                                                    </WithResDeviceBtn>

                                                                    {hov_bgImgPos === 'custom' && (
                                                                        <>
                                                                            <UnitBtn
                                                                                selectedUnit={hov_bgImgcustomPosXUnit}
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
                                                                                onClick={(hov_bgImgcustomPosXUnit) =>
                                                                                    setAttributes({
                                                                                        [`hov_${controlName}bgImgcustomPosXUnit`]:
                                                                                            hov_bgImgcustomPosXUnit,
                                                                                    })
                                                                                }
                                                                            />

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('X Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={hov_bgImgcustomPosX}
                                                                                    min={-2000}
                                                                                    max={2000}
                                                                                    onChange={(hov_bgImgcustomPosX) =>
                                                                                        setAttributes({
                                                                                            [`hov_${controlName}bgImgcustomPosX`]:
                                                                                                hov_bgImgcustomPosX,
                                                                                        })
                                                                                    }
                                                                                />
                                                                            </WithResDeviceBtn>

                                                                            <UnitBtn
                                                                                selectedUnit={hov_bgImgcustomPosYUnit}
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
                                                                                onClick={(hov_bgImgcustomPosYUnit) =>
                                                                                    setAttributes({
                                                                                        [`hov_${controlName}bgImgcustomPosYUnit`]:
                                                                                            hov_bgImgcustomPosYUnit,
                                                                                    })
                                                                                }
                                                                            />

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Y Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={hov_bgImgcustomPosY}
                                                                                    min={-2000}
                                                                                    max={2000}
                                                                                    step={hov_bgImgcustomPosYUnit === 'px' ? 1 : 0.1}
                                                                                    onChange={(hov_bgImgcustomPosY) =>
                                                                                        setAttributes({
                                                                                            [`hov_${controlName}bgImgcustomPosY`]:
                                                                                                hov_bgImgcustomPosY,
                                                                                        })
                                                                                    }
                                                                                />
                                                                            </WithResDeviceBtn>
                                                                        </>
                                                                    )}

                                                                    <SelectControl
                                                                        label={__('Attachment', 'zoloblocks')}
                                                                        value={hov_bgImgAttachment}
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
                                                                        onChange={(hov_bgImgAttachment) =>
                                                                            setAttributes({
                                                                                [`hov_${controlName}bgImgAttachment`]: hov_bgImgAttachment,
                                                                            })
                                                                        }
                                                                    />

                                                                    {hov_bgImgAttachment === 'fixed' && (
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
                                                                        label={__('Repeat', 'zoloblocks')}
                                                                        noResetBtn={true}
                                                                    >
                                                                        <SelectControl
                                                                            value={hov_bgImgRepeat}
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
                                                                            onChange={(hov_bgImgRepeat) =>
                                                                                setAttributes({
                                                                                    [`hov_${controlName}bgImgRepeat`]: hov_bgImgRepeat,
                                                                                })
                                                                            }
                                                                        />
                                                                    </WithResDeviceBtn>

                                                                    <WithResDeviceBtn
                                                                        requiredProps={requiredProps}
                                                                        label={__('Size', 'zoloblocks')}
                                                                        noResetBtn={true}
                                                                    >
                                                                        <SelectControl
                                                                            value={hov_backgroundSize}
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
                                                                            onChange={(hov_backgroundSize) =>
                                                                                setAttributes({
                                                                                    [`hov_${controlName}backgroundSize`]:
                                                                                        hov_backgroundSize,
                                                                                })
                                                                            }
                                                                        />
                                                                    </WithResDeviceBtn>

                                                                    {hov_backgroundSize === 'custom' && (
                                                                        <>
                                                                            <UnitBtn
                                                                                selectedUnit={hov_bgImgCustomSizeUnit}
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
                                                                                onClick={(hov_bgImgCustomSizeUnit) =>
                                                                                    setAttributes({
                                                                                        [`hov_${controlName}bgImgCustomSizeUnit`]:
                                                                                            hov_bgImgCustomSizeUnit,
                                                                                    })
                                                                                }
                                                                            />

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Width', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={hov_bgImgCustomSize}
                                                                                    min={0}
                                                                                    max={hov_bgImgCustomSizeUnit === 'px' ? 2000 : 100}
                                                                                    step={hov_bgImgCustomSizeUnit === 'px' ? 1 : 0.1}
                                                                                    onChange={(hov_bgImgCustomSize) =>
                                                                                        setAttributes({
                                                                                            [`hov_${controlName}bgImgCustomSize`]:
                                                                                                hov_bgImgCustomSize,
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
                                                                        label={__('Position', 'zoloblocks')}
                                                                        noResetBtn={true}
                                                                    >
                                                                        <SelectControl
                                                                            value={hov_TABbgImgPos}
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
                                                                            onChange={(hov_TABbgImgPos) =>
                                                                                setAttributes({
                                                                                    [`hov_TAB${controlName}bgImgPos`]: hov_TABbgImgPos,
                                                                                })
                                                                            }
                                                                        />
                                                                    </WithResDeviceBtn>

                                                                    {hov_TABbgImgPos === 'custom' && (
                                                                        <>
                                                                            <UnitBtn
                                                                                selectedUnit={hov_TABbgImgcustomPosXUnit}
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
                                                                                onClick={(hov_TABbgImgcustomPosXUnit) =>
                                                                                    setAttributes({
                                                                                        [`hov_TAB${controlName}bgImgcustomPosXUnit`]:
                                                                                            hov_TABbgImgcustomPosXUnit,
                                                                                    })
                                                                                }
                                                                            />

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('X Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={hov_TABbgImgcustomPosX}
                                                                                    min={0}
                                                                                    max={hov_TABbgImgcustomPosXUnit === 'px' ? 2000 : 100}
                                                                                    onChange={(hov_TABbgImgcustomPosX) =>
                                                                                        setAttributes({
                                                                                            [`hov_TAB${controlName}bgImgcustomPosX`]:
                                                                                                hov_TABbgImgcustomPosX,
                                                                                        })
                                                                                    }
                                                                                />
                                                                            </WithResDeviceBtn>

                                                                            <UnitBtn
                                                                                selectedUnit={hov_TABbgImgcustomPosYUnit}
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
                                                                                onClick={(hov_TABbgImgcustomPosYUnit) =>
                                                                                    setAttributes({
                                                                                        [`hov_TAB${controlName}bgImgcustomPosYUnit`]:
                                                                                            hov_TABbgImgcustomPosYUnit,
                                                                                    })
                                                                                }
                                                                            />

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Y Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={hov_TABbgImgcustomPosY}
                                                                                    min={0}
                                                                                    max={hov_TABbgImgcustomPosYUnit === 'px' ? 2000 : 100}
                                                                                    step={hov_TABbgImgcustomPosYUnit === 'px' ? 1 : 0.1}
                                                                                    onChange={(hov_TABbgImgcustomPosY) =>
                                                                                        setAttributes({
                                                                                            [`hov_TAB${controlName}bgImgcustomPosY`]:
                                                                                                hov_TABbgImgcustomPosY,
                                                                                        })
                                                                                    }
                                                                                />
                                                                            </WithResDeviceBtn>
                                                                        </>
                                                                    )}

                                                                    <SelectControl
                                                                        label={__('Attachment', 'zoloblocks')}
                                                                        value={hov_bgImgAttachment}
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
                                                                        onChange={(hov_bgImgAttachment) =>
                                                                            setAttributes({
                                                                                [`hov_${controlName}bgImgAttachment`]: hov_bgImgAttachment,
                                                                            })
                                                                        }
                                                                    />

                                                                    {hov_bgImgAttachment === 'fixed' && (
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
                                                                        label={__('Repeat', 'zoloblocks')}
                                                                        noResetBtn={true}
                                                                    >
                                                                        <SelectControl
                                                                            value={hov_TABbgImgRepeat}
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
                                                                            onChange={(hov_TABbgImgRepeat) =>
                                                                                setAttributes({
                                                                                    [`hov_TAB${controlName}bgImgRepeat`]:
                                                                                        hov_TABbgImgRepeat,
                                                                                })
                                                                            }
                                                                        />
                                                                    </WithResDeviceBtn>

                                                                    <WithResDeviceBtn
                                                                        requiredProps={requiredProps}
                                                                        label={__('Size', 'zoloblocks')}
                                                                        noResetBtn={true}
                                                                    >
                                                                        <SelectControl
                                                                            value={hov_TABbackgroundSize}
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
                                                                            onChange={(hov_TABbackgroundSize) =>
                                                                                setAttributes({
                                                                                    [`hov_TAB${controlName}backgroundSize`]:
                                                                                        hov_TABbackgroundSize,
                                                                                })
                                                                            }
                                                                        />
                                                                    </WithResDeviceBtn>

                                                                    {hov_TABbackgroundSize === 'custom' && (
                                                                        <>
                                                                            <UnitBtn
                                                                                selectedUnit={hov_TABbgImgCustomSizeUnit}
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
                                                                                onClick={(hov_TABbgImgCustomSizeUnit) =>
                                                                                    setAttributes({
                                                                                        [`hov_TAB${controlName}bgImgCustomSizeUnit`]:
                                                                                            hov_TABbgImgCustomSizeUnit,
                                                                                    })
                                                                                }
                                                                            />

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Width', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={hov_TABbgImgCustomSize}
                                                                                    min={0}
                                                                                    max={hov_TABbgImgCustomSizeUnit === 'px' ? 2000 : 100}
                                                                                    step={hov_TABbgImgCustomSizeUnit === 'px' ? 1 : 0.1}
                                                                                    onChange={(hov_TABbgImgCustomSize) =>
                                                                                        setAttributes({
                                                                                            [`hov_TAB${controlName}bgImgCustomSize`]:
                                                                                                hov_TABbgImgCustomSize,
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
                                                                        label={__('Position', 'zoloblocks')}
                                                                        noResetBtn={true}
                                                                    >
                                                                        <SelectControl
                                                                            value={hov_MOBbgImgPos}
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
                                                                            onChange={(hov_MOBbgImgPos) =>
                                                                                setAttributes({
                                                                                    [`hov_MOB${controlName}bgImgPos`]: hov_MOBbgImgPos,
                                                                                })
                                                                            }
                                                                        />
                                                                    </WithResDeviceBtn>

                                                                    {hov_MOBbgImgPos === 'custom' && (
                                                                        <>
                                                                            <UnitBtn
                                                                                selectedUnit={hov_MOBbgImgcustomPosXUnit}
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
                                                                                onClick={(hov_MOBbgImgcustomPosXUnit) =>
                                                                                    setAttributes({
                                                                                        [`hov_MOB${controlName}bgImgcustomPosXUnit`]:
                                                                                            hov_MOBbgImgcustomPosXUnit,
                                                                                    })
                                                                                }
                                                                            />

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('X Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={hov_MOBbgImgcustomPosX}
                                                                                    min={0}
                                                                                    max={hov_MOBbgImgcustomPosXUnit === 'px' ? 2000 : 100}
                                                                                    onChange={(hov_MOBbgImgcustomPosX) =>
                                                                                        setAttributes({
                                                                                            [`hov_MOB${controlName}bgImgcustomPosX`]:
                                                                                                hov_MOBbgImgcustomPosX,
                                                                                        })
                                                                                    }
                                                                                />
                                                                            </WithResDeviceBtn>

                                                                            <UnitBtn
                                                                                selectedUnit={hov_MOBbgImgcustomPosYUnit}
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
                                                                                onClick={(hov_MOBbgImgcustomPosYUnit) =>
                                                                                    setAttributes({
                                                                                        [`hov_MOB${controlName}bgImgcustomPosYUnit`]:
                                                                                            hov_MOBbgImgcustomPosYUnit,
                                                                                    })
                                                                                }
                                                                            />

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Y Position', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={hov_MOBbgImgcustomPosY}
                                                                                    min={0}
                                                                                    max={hov_MOBbgImgcustomPosYUnit === 'px' ? 2000 : 100}
                                                                                    step={hov_MOBbgImgcustomPosYUnit === 'px' ? 1 : 0.1}
                                                                                    onChange={(hov_MOBbgImgcustomPosY) =>
                                                                                        setAttributes({
                                                                                            [`hov_MOB${controlName}bgImgcustomPosY`]:
                                                                                                hov_MOBbgImgcustomPosY,
                                                                                        })
                                                                                    }
                                                                                />
                                                                            </WithResDeviceBtn>
                                                                        </>
                                                                    )}

                                                                    <SelectControl
                                                                        label={__('Attachment', 'zoloblocks')}
                                                                        value={hov_bgImgAttachment}
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
                                                                        onChange={(hov_bgImgAttachment) =>
                                                                            setAttributes({
                                                                                [`hov_${controlName}bgImgAttachment`]: hov_bgImgAttachment,
                                                                            })
                                                                        }
                                                                    />

                                                                    {hov_bgImgAttachment === 'fixed' && (
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
                                                                        label={__('Repeat', 'zoloblocks')}
                                                                        noResetBtn={true}
                                                                    >
                                                                        <SelectControl
                                                                            value={hov_MOBbgImgRepeat}
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
                                                                            onChange={(hov_MOBbgImgRepeat) =>
                                                                                setAttributes({
                                                                                    [`hov_MOB${controlName}bgImgRepeat`]:
                                                                                        hov_MOBbgImgRepeat,
                                                                                })
                                                                            }
                                                                        />
                                                                    </WithResDeviceBtn>

                                                                    <WithResDeviceBtn
                                                                        requiredProps={requiredProps}
                                                                        label={__('Size', 'zoloblocks')}
                                                                        noResetBtn={true}
                                                                    >
                                                                        <SelectControl
                                                                            value={hov_MOBbackgroundSize}
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
                                                                            onChange={(hov_MOBbackgroundSize) =>
                                                                                setAttributes({
                                                                                    [`hov_MOB${controlName}backgroundSize`]:
                                                                                        hov_MOBbackgroundSize,
                                                                                })
                                                                            }
                                                                        />
                                                                    </WithResDeviceBtn>

                                                                    {hov_MOBbackgroundSize === 'custom' && (
                                                                        <>
                                                                            <UnitBtn
                                                                                selectedUnit={hov_MOBbgImgCustomSizeUnit}
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
                                                                                onClick={(hov_MOBbgImgCustomSizeUnit) =>
                                                                                    setAttributes({
                                                                                        [`hov_MOB${controlName}bgImgCustomSizeUnit`]:
                                                                                            hov_MOBbgImgCustomSizeUnit,
                                                                                    })
                                                                                }
                                                                            />

                                                                            <WithResDeviceBtn
                                                                                requiredProps={requiredProps}
                                                                                label={__('Width', 'zoloblocks')}
                                                                                noResetBtn={true}
                                                                            >
                                                                                <RangeControl
                                                                                    value={hov_MOBbgImgCustomSize}
                                                                                    min={0}
                                                                                    max={hov_MOBbgImgCustomSizeUnit === 'px' ? 2000 : 100}
                                                                                    step={hov_MOBbgImgCustomSizeUnit === 'px' ? 1 : 0.1}
                                                                                    onChange={(hov_MOBbgImgCustomSize) =>
                                                                                        setAttributes({
                                                                                            [`hov_MOB${controlName}bgImgCustomSize`]:
                                                                                                hov_MOBbgImgCustomSize,
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

                                    {hov_backgroundType === 'gradient' && (
                                        <GradientControl
                                            label={__('Gradient Color', 'zoloblocks')}
                                            value={hov_gradientColor}
                                            onChange={(newVal) =>
                                                setAttributes({
                                                    [`hov_${controlName}gradientColor`]: newVal,
                                                })
                                            }
                                        />
                                    )}
                                </>
                            );
                        }
                    }}
                </TabPanel>
            </BaseControl>
        </>
    );
};

export default BGControl;
