import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr } = window.zoloModule;

export default function Save(props) {
    const { attributes } = props;

    const { 
        uniqueId, 
        parentClasses,

    } = attributes;

    const blocksProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <>
            <div {...blocksProps}>
                <div className="zolo-video-wrapper">
                   Save
                </div>
            </div>
        </>
    );
}
