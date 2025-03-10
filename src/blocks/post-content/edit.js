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
    const { preview, uniqueId, parentClasses, styleTags, headingTags } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} `, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                {styleTags?.some((item) => item?.type === 'image') && (
                    <>
                        {/* <p>
                            {' '}
                            {__(
                                'Change your blog post’s style with our dynamic single post template. You can change all of your existing blog posts’ style at once from a single place. ',
                                'zoloblocks'
                            )}
                        </p> */}
                        <figure className="wp-block-image size-full">
                            <img src={zoloPlaceholders?.placeholder} alt={__('image Placeholder', 'zoloblocks')} />
                        </figure>
                    </>
                )}
                {styleTags?.some((item) => item?.type === 'heading' && headingTags.length > 0) && (
                    <>
                        <p>
                            {' '}
                            {__(
                                'Change your blog post’s style with our dynamic single post template. You can change all of your existing blog posts’ style at once from a single place. ',
                                'zoloblocks'
                            )}
                        </p>
                        <h2 className="zolo-heading">{__('Post Global Heading Content', 'zoloblocks')}</h2>
                    </>
                )}
                <p>
                    {__(
                        'Change your blog post’s style with our dynamic single post template. You can change all of your existing blog posts’ style at once from a single place. ',
                        'zoloblocks'
                    )}
                </p>
                {styleTags?.some((item) => item?.type === 'link') && (
                    <div>
                        <a onClick={(event) => event.preventDefault()} href="#">
                            {__('Link Text', 'zoloblocks')}
                        </a>
                    </div>
                )}
            </div>
        </>
    );
}
