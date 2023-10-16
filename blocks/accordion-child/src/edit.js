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
const { classArrayToStr, DisplayIcon } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

/**
 * Edit Function
 */

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, context } = props;
    const { uniqueId, collapseIcon, expandIcon, title, titleTag, parentClasses } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, classArrayToStr(parentClasses)),
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
                <div className="zolo-accordion-wrapper">
                    <div className="accordion-head">
                        <RichText
                            tagName={titleTag}
                            className="accordion-title"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder={__('Title', 'zolo-blocks')}
                        />
                        <button className="accordion-toggle" aria-label="Toggle">
                            <div className="collapsed-mode">{collapseIcon && <DisplayIcon icon={collapseIcon} />}</div>
                            <div className="expanded-mode">{expandIcon && <DisplayIcon icon={expandIcon} />}</div>
                        </button>
                    </div>
                    <div className="accordion-body">
                        <div className="accordion-body-inner">
                            <InnerBlocks />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
