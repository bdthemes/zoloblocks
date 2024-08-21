import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import Inspector from './inspector';
import './style.scss';
const { classArrayToStr } = window.zoloModule;

const Edit = (props) => {
    const { attributes, setAttributes, isSelected, clientId } = props;
    const {
        uniqueId,
        preview,
        parentClasses,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames('zolo-megamenu', uniqueId, classArrayToStr(parentClasses)),
    });

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: classnames('zolo-megamenu-content'),
        },
        {
            allowedBlocks: ['zolo/container'],
            template: [
                ['zolo/container'],
            ],
        }
    );

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.heading} alt={__('Heading Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <div {...blockProps}>
                <div {...innerBlocksProps}></div>
            </div>
        </>
    );
};

export default Edit;
