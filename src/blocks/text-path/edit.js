/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, ZoloToolbarButton, ZoloToolbarGroup, sanitizeUrl, sanitizeText } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

//SVG Component
import SvgComponent from './svg';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        textpathContent,
        textPathType,
        pathlink,
        textpathLength,
        textPathSpoint,
        circlePhoto,
        circlePhotoTitle,
        imageRes,
        showCircleImg,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

    const textPathLinkProps = {
        className: 'zolo-textpath',
        href: sanitizeUrl(pathlink?.url),
        rel: pathlink?.openInNewTab ? 'noreferrer noopener' : undefined,
        target: pathlink?.openInNewTab ? '_blank' : undefined,
        title: sanitizeText(textpathContent), 
        onClick: (e) => e.preventDefault(),
    };

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.textPath} alt={__('Text Path Preview', 'zoloblocks')} />;
    }

    const SvgComponentStyle = () => (
        <SvgComponent uniqueId={uniqueId} pathType={textPathType}>
            <text>
                <textPath
                    href={`#MyPath-${uniqueId}`} 
                    textLength={textpathLength ? textpathLength : 0}
                    startOffset={textPathSpoint ? 100 - textPathSpoint + '%' : 0 + '%'}
                >
                    <a {...textPathLinkProps}>
                        <tspan>{textpathContent && textpathContent}</tspan>
                    </a>
                </textPath>
            </text>
        </SvgComponent>
    );

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            {circlePhoto && (
                <BlockControls>
                    <>
                        <ZoloToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        circlePhoto: {
                                            id: media.id,
                                            url: media.url,
                                            alt: media.alt,
                                            sizes: media.sizes,
                                            caption: media.caption,
                                        },
                                    });
                                }}
                                allowedTypes={['image']}
                                value={circlePhoto && circlePhoto.id}
                                render={({ open }) => (
                                    <ZoloToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zoloblocks')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        </ZoloToolbarGroup>
                    </>
                </BlockControls>
            )}

            <Style props={props} />
            <div {...blockProps}>
                {textPathType !== 'circle' && <SvgComponentStyle />}

                {textPathType === 'circle' && (
                    <div className="zolo-circle-path-wrap">
                        <SvgComponentStyle />
                        {showCircleImg && circlePhoto.url !== '' && (
                            <div className="zolo-circle-image">
                                {circlePhoto ? (
                                    <img
                                        src={
                                            circlePhoto.sizes && circlePhoto.sizes[imageRes]
                                                ? circlePhoto.sizes[imageRes].url
                                                : circlePhoto.url
                                        }
                                        alt={circlePhoto.alt || circlePhotoTitle}
                                        className="zolo-img"
                                    />
                                ) : (
                                    <MediaPlaceholder
                                        onSelect={(media) =>
                                            setAttributes({
                                                circlePhoto: {
                                                    id: media.id,
                                                    url: media.url,
                                                    alt: media.alt,
                                                    sizes: media.sizes,
                                                    caption: media.caption,
                                                },
                                            })
                                        }
                                        allowedTypes={['image']}
                                        multiple={false}
                                        labels={{ title: __('Brand Photo', 'zoloblocks') }}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}


