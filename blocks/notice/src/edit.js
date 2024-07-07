/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';
import classNames from 'classnames';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId } = props;
    const {
        uniqueId,
        preview,
        preset,
        parentClasses,
        titleTag,
        mainIcon,
        iconType,
        iconTypeImage,
        iconBoxTitle,
        iconBoxDescription,
        imageRes,
        iconBoxDirection,
        // animation
        animationType,
        animationPositionOne,
        animationPositionTwo,
        //notice
        dismissible,
        enableIcon,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    const blockProps = useBlockProps({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            'zolo-block-advanced-icon-box',
            preset,
            `${preset === 'style-2' ? iconBoxDirection : ''}`,
            `${(preset === 'style-1' || preset === 'style-2') && animationType ? `animation-${animationType}` : ''}`
        ),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.iconBox} alt={__('Icon Box Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls>
                {iconTypeImage && (
                    <Fragment>
                        <ToolbarGroup>
                            {iconType === 'image' && (
                                <MediaUpload
                                    onSelect={(media) => {
                                        setAttributes({
                                            iconTypeImage: media,
                                        });
                                    }}
                                    allowedTypes={['image']}
                                    value={iconTypeImage && iconTypeImage.id}
                                    render={({ open }) => (
                                        <ToolbarButton
                                            className="components-toolbar__control"
                                            label={__('Replace Photo', 'zoloblocks')}
                                            icon="edit"
                                            onClick={open}
                                        />
                                    )}
                                />
                            )}
                        </ToolbarGroup>
                    </Fragment>
                )}
            </BlockControls>
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <div
                    className={classNames(
                        'zolo-block-item',
                        `${(preset === 'style-1' || preset === 'style-2') && animationType === 'style-1' ? `animation-${animationPositionOne}` : ''}`,
                        `${(preset === 'style-1' || preset === 'style-2') && animationType === 'style-2' ? `animation-${animationPositionTwo}` : ''}`
                    )}
                    data-id={uniqueId}
                >
                    {enableIcon && (
                        <div className={`zolo-block-icon-wrap`}>
                            {iconType == 'icon' ? (
                                <DisplayZoloIcon icon={mainIcon} />
                            ) : iconTypeImage ? (
                                <>
                                    <img
                                        src={
                                            iconTypeImage.sizes && iconTypeImage.sizes[imageRes]
                                                ? iconTypeImage.sizes[imageRes].url
                                                : iconTypeImage.url
                                        }
                                        alt={iconTypeImage.alt || 'Team Member'}
                                    />
                                </>
                            ) : (
                                <MediaPlaceholder
                                    icon="format-image"
                                    labels={{
                                        title: __('Add Photo', 'zoloblocks'),
                                        instructions: '',
                                    }}
                                    onSelect={(media) => {
                                        setAttributes({
                                            iconTypeImage: media,
                                        });
                                    }}
                                    accept="image/*"
                                    allowedTypes={['image']}
                                />
                            )}
                        </div>
                    )}

                    <div className="zolo-block-body-content">
                        <RichText
                            className={`zolo-block-title`}
                            tagName={titleTag}
                            value={iconBoxTitle}
                            onChange={(text) =>
                                setAttributes({
                                    iconBoxTitle: text,
                                })
                            }
                            placeholder={__('The Title Goes Here', 'zoloblocks')}
                        />
                        {dismissible && <span className={`${enableIcon == false ? `zolo-notice-closed` : ''} zolo-notice-dismiss`} />}
                        <RichText
                            className={`zolo-block-desc`}
                            tagName="div"
                            value={iconBoxDescription}
                            onChange={(text) =>
                                setAttributes({
                                    iconBoxDescription: text,
                                })
                            }
                            placeholder={__('The Description Goes Here..', 'zoloblocks')}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
