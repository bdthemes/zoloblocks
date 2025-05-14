import { useBlockProps } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import classnames from 'classnames';
import Inspector from './inspector';
import './style.scss';
import MetaItem from './meta-item';
import Style from './styles';
import { MetaIcon } from './meta-icon';
import { __ } from '@wordpress/i18n';

const { classArrayToStr, SidebarOpener } = window.zoloModule;

export default function Edit(props) {
    const {
        attributes,
        setAttributes,
        className,
        isSelected,
        clientId,
        context: { postType, postId },
    } = props;

    const { uniqueId, parentClasses, metaData, separatorStyle, customSeparator } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} ${separatorStyle}`, classArrayToStr(parentClasses)),
    });

    useEffect(() => {
        if (!Array.isArray(metaData)) {
            setAttributes({
                metaData: [
                    { id: 1, type: 'author', link: true, showIcon: 'icon', icon: MetaIcon.author },
                    { id: 2, type: 'date', link: true, showIcon: 'icon', icon: MetaIcon.date },
                ],
            });
        }
    }, [metaData, setAttributes]);

    const post = useSelect((select) => select('core').getEditedEntityRecord('postType', postType, postId), [postType, postId]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />

                {Array.isArray(metaData) && metaData.length > 0 ? (
                    metaData.map((meta, index) => (
                        <React.Fragment key={meta.id}>
                            <MetaItem meta={meta} post={post} />
                            {index < metaData.length - 1 && (
                                <span className="zolo-separator">{separatorStyle === 'separator-custom' && customSeparator}</span>
                            )}
                        </React.Fragment>
                    ))
                ) : (
                    <p>{__('No metadata available', 'zoloblocks')}</p>
                )}
            </div>
        </>
    );
}
