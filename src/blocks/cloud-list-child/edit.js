import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';
import classnames from 'classnames';
import Inspector from './inspector';


export default function Edit(props) {
    const { attributes, setAttributes, isSelected, context } = props;
    const { label, textColor, fontSize, bgColor, bgOutlineColor, bgOutlineThickness, tooltip, weight } = attributes;

    const weightEnabled = context?.['zolo/cloud-list/weightEnabled'] ?? false;
    const weightMode = context?.['zolo/cloud-list/weightMode'] ?? 'size';

    const itemRef = useRef(null);

    const blockProps = useBlockProps({
        className: classnames('zolo-cloud-list-item'),
        style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '4px',
            background: bgColor || (textColor ? `${textColor}22` : '#2b2d4222'),
            border: bgOutlineColor
                ? `${bgOutlineThickness || 1}px solid ${bgOutlineColor}`
                : `1px solid ${textColor || '#2b2d42'}44`,
            cursor: 'pointer',
            color: textColor || '#2b2d42',
            fontSize: fontSize ? `${fontSize}px` : '14px',
            fontWeight: 500,
            textDecoration: 'none',
        },
    });

    return (
        <>
            {isSelected && <Inspector {...props} weightEnabled={weightEnabled} weightMode={weightMode} />}
            <a {...blockProps} ref={useMergeRefs([blockProps.ref, itemRef])} href="#" onClick={(e) => e.preventDefault()} title={tooltip || undefined}>
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    style={{ flexShrink: 0 }}
                >
                    <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
                <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => setAttributes({ label: e.currentTarget.textContent.trim() || 'Tag Label' })}
                    onClick={(e) => e.preventDefault()}
                    style={{ outline: 'none', minWidth: '20px', display: 'inline-block' }}
                >
                    {label}
                </span>
            </a>
        </>
    );
}
