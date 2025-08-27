import { useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
const { DisplayZoloIcon, sanitizeUrl } = window.zoloModule;
const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, addSubmenu, url, label, id, kind, type, title, subMenuIndicator } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, 'zolo-navigation-item', {
            'has-megamenu': attributes?.addSubmenu && attributes?.submenuType === 'megamenu',
            'has-submenu': attributes?.addSubmenu && attributes?.submenuType === 'dropdown',
        }),
        'data-id': id,
        'data-type': type,
        'data-kind': kind,
    });

    const innerBlocksProps = useInnerBlocksProps.save({
        className: classnames('zolo-navigation-submenu-wrapper'),
    });

    return (
        <li {...blockProps}>
            <a href={sanitizeUrl(url)} title={title} className="zolo-navigation-link">
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
