import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon, DynamicTag } = window.zoloModule;

export default function save(props) {
    const { attributes } = props
    const {
        uniqueId,
        parentClasses,
        iconLink,
        isLinkable,
        // settings
        mainIcon,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses))
    });

    return (
        <div {...blockProps} data-cdivs="type: waves, decor: lines">
            <div className="section section-bg" >
                <div className="row">
                    <div className="col">
                        <h2>Example title</h2>
                    </div>
                </div>

            </div>
        </div>
    );
}
