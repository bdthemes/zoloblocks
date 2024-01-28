/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;
const { DynamicTag } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, context } = props;
    const {
        preview,
        uniqueId,
        preset,
        parentClasses,
        mediaType,
        mediaText,
        image,
        headingTag,
        fancyTitle,
        fancyListText,
        fancyIcon,
        imageToggle,
        titleToggle,
        textToggle,
        iconToggle,
        dscTag,
        fancyLinkToggle,
        fancyLink,
        imageRes,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses), preset),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.cta} alt={__('Call to Action Preview', 'zolo-blocks')} />;
    }

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            preset: context['zolo/preset'],
            titleToggle: context['zolo/titleToggle'],
            textToggle: context['zolo/textToggle'],
            imageToggle: context['zolo/imageToggle'],
            iconToggle: context['zolo/iconToggle'],
            mediaType: context['zolo/mediaType'],
        });
    }, [context]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <BlockControls></BlockControls>
            <DynamicTag
                tagName={fancyLinkToggle ? 'a' : 'div'}
                {...blockProps}
                {...(fancyLinkToggle && {
                    href: fancyLink.url,
                    ...(fancyLink.openInNewTab && {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        title: fancyTitle,
                    }),
                })}
            >
                <div className="zb-fancy-list-content">
                    {imageToggle && (
                        <>
                            {mediaType === 'image' && image && (
                                <div className="zb-fancy-list-image">
                                    <img
                                        src={image.sizes && image.sizes[imageRes] ? image.sizes[imageRes].url : image.url}
                                        alt={image.url || fancyTitle}
                                    />
                                </div>
                            )}
                            {mediaType === 'text' && <div className="zb-fancy-list-number">{mediaText}</div>}
                        </>
                    )}

                    <div className="zb-fancy-list-inner-content">
                        {titleToggle == true && (
                            <RichText
                                tagName={headingTag}
                                className="zb-fancy-list-title"
                                value={fancyTitle}
                                onChange={(v) => setAttributes({ fancyTitle: v })}
                                placeholder={__('Title Here', 'zolo-block')}
                            />
                        )}
                        {textToggle == true && (
                            <RichText
                                tagName={dscTag}
                                className="zb-fancy-list-text"
                                value={fancyListText}
                                onChange={(v) => setAttributes({ fancyListText: v })}
                                placeholder={__('Description Here', 'zolo-block')}
                            />
                        )}
                    </div>
                </div>
                {iconToggle == true && <div className="zb-fancy-icon">{fancyIcon && <DisplayZoloIcon icon={fancyIcon} />}</div>}
            </DynamicTag>
        </>
    );
}
