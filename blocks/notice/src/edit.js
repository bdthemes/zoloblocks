/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
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
        //notice
        dismissible,
        enableIcon,
        showTitle,
        showText,
        noticeType,
        infoDefaultIcon,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            'zolo-block-notice',
            preset,
            noticeType,
            `${preset === 'style-1' ? iconBoxDirection : ''}`
        ),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.notice} alt={__('Notice Preview', 'zoloblocks')} />;
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
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <div
                    className={classNames(
                        'zolo-block-item',
                        `${(preset === 'style-1' || preset === 'style-2') && ''}`,
                        `${(preset === 'style-1' || preset === 'style-2') && ''}`
                    )}
                    data-id={uniqueId}
                >
                    {enableIcon && (
                        <div className="zolo-block-icon-wrap">
                            {iconType == 'icon' ? (
                                <DisplayZoloIcon
                                    icon={
                                        mainIcon ||
                                        (noticeType == 'info' && infoDefaultIcon.info) ||
                                        (noticeType == 'success' && infoDefaultIcon.success) ||
                                        (noticeType == 'warning' && infoDefaultIcon.warning) ||
                                        (noticeType == 'danger' && infoDefaultIcon.danger)
                                    }
                                />
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
                        {showTitle && (
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
                        )}
                        {showText && (
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
                        )}
                    </div>
                    {dismissible && (
                        <button className="zolo-notice-dismiss">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
