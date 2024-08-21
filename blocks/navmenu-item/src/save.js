import { useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        addSubmenu,
        url,
        label,
        id,
        kind,
        type,
        title,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, 'zolo-navmenu-item'),
    });

    const innerBlocksProps = useInnerBlocksProps.save({
        className: classnames('zolo-navmenu-submenu-wrapper'),
    });

    return (
        <li {...blockProps}>
            <a href={url} data-id={id} data-kind={kind} data-type={type} title={title}>
                <RichText.Content tagName="span" value={title || label} />
            </a>
            {
                addSubmenu ? <div {...innerBlocksProps}></div> : null
            }
        </li>
    );
};

export default Save;
