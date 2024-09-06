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
        className: classnames(uniqueId, 'zolo-navmenu-item', {
            'has-megamenu': attributes?.addSubmenu && attributes?.submenuType === 'megamenu',
            'has-submenu': attributes?.addSubmenu && attributes?.submenuType === 'dropdown',
        }),
    });

    const innerBlocksProps = useInnerBlocksProps.save({
        className: classnames('zolo-navmenu-submenu-wrapper'),
    });

    return (
        <li {...blockProps}>
            <a href={url} data-id={id} data-kind={kind} data-type={type} title={title} className="zolo-navmenu-link">
                <RichText.Content tagName="span" value={title || label} />
                {
                    addSubmenu ? <button className="zolo-submenu-arrow" aria-label='Submenu Arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fillRule="evenodd" clipRule="evenodd" d="M0 9.6c0-0.205 0.078-0.409 0.234-0.566 0.312-0.312 0.819-0.312 1.131 0l13.834 13.834 13.834-13.834c0.312-0.312 0.819-0.312 1.131 0s0.312 0.819 0 1.131l-14.4 14.4c-0.312 0.312-0.819 0.312-1.131 0l-14.4-14.4c-0.156-0.156-0.234-0.361-0.234-0.566z"></path></svg>
                    </button> : null
                }
            </a>
            {
                addSubmenu ? <div {...innerBlocksProps}></div> : null
            }
        </li>
    );
};

export default Save;
