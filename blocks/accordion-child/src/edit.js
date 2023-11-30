/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, context } = props;
    const { uniqueId, collapseIcon, expandIcon, title, titleTag, parentClasses } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(uniqueId, 'zolo-accordion-item ac', classArrayToStr(parentClasses)),
    });

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            collapseIcon: context['zolo/collapseIcon'],
            expandIcon: context['zolo/expandIcon'],
            titleTag: context['zolo/titleTag'],
        });
    }, [context]);
    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />

            <div {...blockProps}>
                <button type="button" className="ac-trigger zolo-accordion-head-item">
                    <RichText
                        tagName={titleTag}
                        className="zolo-accordion-head-title"
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                        placeholder={__('Accordion Title', 'zolo-blocks')}
                    />
                    <div className="zolo-accordion-toggle">
                        <div className="zolo-accordion-collapsed-mode">{collapseIcon && <DisplayZoloIcon icon={collapseIcon} />}</div>
                        <div className="zolo-accordion-expanded-mode">{expandIcon && <DisplayZoloIcon icon={expandIcon} />}</div>
                    </div>
                </button>
                <div className="zolo-accordion-panel ac-panel">
                    <div className="zolo-accordion-inner">
                        <InnerBlocks template={[['core/paragraph', { placeholder: 'Accordion Content' }]]} />
                    </div>
                </div>
            </div>
        </>
    );
}
