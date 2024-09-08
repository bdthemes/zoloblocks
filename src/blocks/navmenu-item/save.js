import { useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
const { DisplayZoloIcon } = window.zoloModule;
const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, addSubmenu, url, label, id, kind, type, title, subMenuIndicator } = attributes;

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
                {addSubmenu ? (
                    <button className="zolo-submenu-arrow" aria-label="Submenu Arrow">
                        <DisplayZoloIcon icon={subMenuIndicator} />
                    </button>
                ) : null}
            </a>
            {addSubmenu ? <div {...innerBlocksProps}></div> : null}
        </li>
    );
};

export default Save;
