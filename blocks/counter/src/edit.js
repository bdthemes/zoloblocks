/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, MediaUpload, RichText } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import CountUp from 'react-countup';
/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId } = props;
    const {
        preview,
        uniqueId,
        preset,
        parentClasses,
        hideIcon,
        hideTitle,
        hideCounter,
        hideSuffix,
        counterNumber,
        titleTag,
        counterSuffix,
        counterIcon,
        titleText,
        iconType,
        iconTypeImage,
        imageRes,
        counterDirection,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.counter} alt={__('Counter Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <BlockControls>
                {iconTypeImage && (
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        iconTypeImage: {
                                            id: media.id,
                                            url: media.url,
                                            alt: media.alt,
                                            sizes: media.sizes,
                                            caption: media.caption,
                                        },
                                    });
                                }}
                                allowedTypes={['image']}
                                value={iconTypeImage && iconTypeImage.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zoloblocks')}
                                        icon="update"
                                        onClick={open}
                                    />
                                )}
                            />
                            <ToolbarButton
                                className="components-toolbar__control"
                                label={__('Remove Photo', 'zoloblocks')}
                                icon="trash"
                                onClick={() => {
                                    setAttributes({
                                        iconTypeImage: null,
                                    });
                                }}
                            />
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls>
            <Style props={props} />
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <div class={`zolo-counter-wrap ${preset} ${counterDirection}`}>
                    <div class="zolo-counter-item">
                        {hideIcon && (
                            <div class="zolo-counter-icon">
                                {iconType === 'icon' ? (
                                    <DisplayZoloIcon icon={counterIcon} />
                                ) : (
                                    iconTypeImage && (
                                        <img
                                            src={
                                                iconTypeImage.sizes && iconTypeImage.sizes[imageRes]
                                                    ? iconTypeImage.sizes[imageRes].url
                                                    : iconTypeImage.url
                                            }
                                            alt={iconTypeImage.alt || titleText}
                                        />
                                    )
                                )}
                            </div>
                        )}

                        <div class="zolo-counter-inner-content">
                            {preset !== 'style-3' && (
                                <div class="zolo-counter-count">
                                    {hideCounter && (
                                        <>
                                            <span className="animated-counter">
                                                <CountUp end={counterNumber || '1000'} duration={3.2} />
                                            </span>
                                            {hideSuffix && <span className="zolo-counter-sub-text">{counterSuffix}</span>}
                                        </>
                                    )}
                                </div>
                            )}

                            {preset === 'style-3' && (
                                <div class="zolo-counter-count">
                                    {hideCounter && (
                                        <>
                                            <span className="animated-counter">
                                                <CountUp end={counterNumber || '1000'} duration={3.2} />
                                            </span>
                                            {hideSuffix && <span className="zolo-counter-sub-text">{counterSuffix}</span>}
                                        </>
                                    )}

                                    {hideTitle && (
                                        <RichText
                                            className={`zolo-counter-title`}
                                            tagName={titleTag}
                                            value={titleText}
                                            onChange={(text) =>
                                                setAttributes({
                                                    titleText: text,
                                                })
                                            }
                                        />
                                    )}
                                </div>
                            )}

                            {hideTitle && preset !== 'style-3' && (
                                <RichText
                                    className={`zolo-counter-title`}
                                    tagName={titleTag}
                                    value={titleText}
                                    onChange={(text) =>
                                        setAttributes({
                                            titleText: text,
                                        })
                                    }
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
