import { RichText, useBlockProps } from '@wordpress/block-editor';
const { classArrayToStr } = window.zoloModule;
import classnames from 'classnames';

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div {...blockProps}>
            <div className="zb-btn-group">
                <button className="zb-btn zb-facebook">
                    <span className="zb-btn-label">Facebook</span>
                    <span className="zb-btn-count">5</span>
                </button>
                <div className="zb-btn-separator">
                    <span>Or</span>
                </div>
                <button className="zb-btn zb-tiktok">
                    <span className="zb-btn-label">Tiktok</span>
                </button>
            </div>
        </div>
    );
};

export default Save;
