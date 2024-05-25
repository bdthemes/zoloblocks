//WordPress dependencies
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
//external dependencies
// import classnames from 'classnames';
// //internal dependencies
// import Inspector from './inspector';
// import Style from './style';
import './style.scss';

const Edit = (props) => {
    const { attributes, setAttributes, isSelected } = props;
    const {} = attributes;

    //block wrapper class
    const blockProps = useBlockProps();
    return (
        <>
            {/* {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />} */}
            {/* <Style props={props} /> */}
            <div {...blockProps}>Test Block Editor</div>
        </>
    );
};

export default Edit;
