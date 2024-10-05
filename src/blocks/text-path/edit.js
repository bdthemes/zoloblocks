/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, MediaUpload } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { handleUniqueId, classArrayToStr } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
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

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });

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
                    <a
                        className="zolo-textpath"
                        href={pathlink && pathlink.url}
                        rel={pathlink && pathlink.openInNewTab && 'noreferrer noopener'}
                        target={pathlink && pathlink.openInNewTab && '_blank'}
                        title={textpathContent}
                    >
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
                    <Fragment>
                        <ToolbarGroup>
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
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zoloblocks')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        </ToolbarGroup>
                    </Fragment>
                </BlockControls>
            )}

            <Style props={props} />
            <div {...blockProps}>
                {textPathType !== 'circle' && textPathType !== 'triangle' && textPathType !== 'rectangle' && textPathType !== 'polygon' && (
                    <SvgComponentStyle />
                )}

                {textPathType === 'circle' || textPathType === 'triangle' || textPathType === 'rectangle' || textPathType === 'polygon' ? (
                    <div className="zolo-circle-path-wrap">
                        <SvgComponentStyle />
                        {showCircleImg && (
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
                ) : null}
            </div>
        </>
    );
}
