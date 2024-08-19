import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal Dependencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

export default function Save(props) {
    const { attributes } = props;

    const {
        uniqueId,
        parentClasses,
        lightboxType,
        imagePoster,
        posterIcon,
        imageSize,
        posterIconToggle,
        buttonText,
        enableHeading,
        enableSubHeading,
        buttonHeadingText,
        buttonIcon,
    } = attributes;

    const options = {
        uniqueId,
        lightboxType,
        enableSubHeading,
        buttonHeadingText,
        enableHeading,
        buttonText,
        buttonIcon,
        imagePoster,
        posterIcon,
        imageSize,
        posterIconToggle,
    };
    const blocksProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), `zolo-lightbox-${lightboxType}`),
        'data-options': JSON.stringify(options),
    });

    return (
        <div {...blocksProps}></div>
    );
}
