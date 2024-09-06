import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classnames from 'classnames';


const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId),
    });

    const innerBlockProps = useInnerBlocksProps.save({ className: classnames('zolo-navmenu-submenu-items') });

    return (
        <div {...blockProps}>
            <ul {...innerBlockProps}></ul>
        </div>
    );
};

export default Save;
