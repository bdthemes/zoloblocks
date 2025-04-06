import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import Inspector from './inspector';
import './style.scss';

const { classArrayToStr, SidebarOpener } = window.zoloModule;

import Style from './styles';
import { useEffect } from '@wordpress/element';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const { uniqueId, parentClasses, heading, showImage, showLink } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} `, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <p>
                    {__('Change your blog post’s style with our dynamic single ', 'zoloblocks')}
                    <a onClick={(event) => event.preventDefault()} href="#">
                        {__(' post', 'zoloblocks')}
                    </a>
                    {__(' template. You can change all of your existing blog posts’ style at once from a single place.', 'zoloblocks')}
                </p>
                {showImage && (
                    <>
                        <p>
                            {__('Changing the ', 'zoloblocks')}
                            <a onClick={(event) => event.preventDefault()} href="#">
                                {__(' Image', 'zoloblocks')}
                            </a>
                            {__(
                                ' style in the post content, it will automatically update in your blog, making image management easier and faster.',
                                'zoloblocks'
                            )}
                        </p>
                        <figure className="wp-block-image size-full">
                            <img src={zoloPlaceholders?.placeholder} alt={__('image Placeholder', 'zoloblocks')} />
                            <figcaption class="wp-element-caption">{__('This is image caption', 'zoloblocks')}</figcaption>
                        </figure>
                    </>
                )}
                {heading && (
                    <>
                        <p>
                            {__('Changing the ', 'zoloblocks')}
                            <a onClick={(event) => event.preventDefault()} href="#">
                                {__(' heading', 'zoloblocks')}
                            </a>
                            {__(
                                ' style in the post content, it will automatically update in your blog, making heading management easier and faster.',
                                'zoloblocks'
                            )}
                        </p>
                        <h1 className="zolo-heading">{__('Post Global Heading H1', 'zoloblocks')}</h1>
                        <h2 className="zolo-heading">{__('Post Global Heading H2', 'zoloblocks')}</h2>
                        <h3 className="zolo-heading">{__('Post Global Heading H3', 'zoloblocks')}</h3>
                        <h4 className="zolo-heading">{__('Post Global Heading H4', 'zoloblocks')}</h4>
                        <h5 className="zolo-heading">{__('Post Global Heading H5', 'zoloblocks')}</h5>
                        <h6 className="zolo-heading">{__('Post Global Heading H6', 'zoloblocks')}</h6>
                    </>
                )}

                {showLink && (
                    <>
                        <p>
                            {__('Changing the ', 'zoloblocks')}
                            <a onClick={(event) => event.preventDefault()} href="#">
                                {__(' Link', 'zoloblocks')}
                            </a>
                            {__(
                                ' style in the post content, it will automatically update in your blog, making link management easier and faster.',
                                'zoloblocks'
                            )}
                        </p>
                        <div>
                            <a onClick={(event) => event.preventDefault()} href="#">
                                {__('Link Text', 'zoloblocks')}
                            </a>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
