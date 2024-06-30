/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, context } = props;
    const {
        uniqueId,
        parentClasses,
        brandPhoto,
    } = attributes;

    // block props
    const blockProps = useBlockProps({
        className: classnames(className, `zb-brand-item ${uniqueId} ${brandPhoto ? 'has-photo' : ''}`, classArrayToStr(parentClasses)),
    });

    /**
     * context
     */
    useEffect(() => {
        setAttributes({
            preset: context['zolo/preset'],
            brandNameVisible: context['zolo/brandNameVisible'],
            brandLabelVisible: context['zolo/brandLabelVisible'],
            enableLogoLink: context['zolo/enableLogoLink'],
            logoLinkType: context['zolo/logoLinkType'],
        });
    }, [context]);

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            {brandPhoto && (
                <BlockControls>
                    <Fragment></Fragment>
                </BlockControls>
            )}
            <Style props={props} />
            <div {...blockProps}>
                <>menu</>
            </div>
        </>
    );
}
