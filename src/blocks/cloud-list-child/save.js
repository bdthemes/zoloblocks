import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';

const Save = (props) => {
    const { attributes } = props;
    const { label, link, textColor, fontSize, bgColor, bgOutlineColor, bgOutlineThickness, tooltip, weight } = attributes;

    const url = link?.url || '#';
    const openInNewTab = link?.openInNewTab || false;

    const blockProps = useBlockProps.save({
        className: classnames('zolo-cloud-list-item'),
    });

    const rel = openInNewTab ? 'noopener noreferrer' : undefined;
    const target = openInNewTab ? '_blank' : undefined;

    const itemStyle = {};
    if (textColor) itemStyle.color = textColor;
    if (bgColor) itemStyle.backgroundColor = bgColor;

    return (
        <a
            {...blockProps}
            href={url || '#'}
            target={target}
            rel={rel}
            title={tooltip || undefined}
            style={Object.keys(itemStyle).length ? itemStyle : undefined}
            {...((fontSize || weight) ? { 'data-weight': fontSize || weight } : {})}
            {...(bgOutlineColor ? { 'data-bg-outline': bgOutlineColor } : {})}
            {...(bgOutlineThickness ? { 'data-bg-outline-thickness': bgOutlineThickness } : {})}
        >
            {label}
        </a>
    );
};

export default Save;
