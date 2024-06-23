import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr, } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses,  zoloId,textpathContent ,textPathType} =
        attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), ),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
             <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                {/* to hide the path, it is usually wrapped in a <defs> element */}
                {/* <defs> */}
                <path
                    id="MyPath"
                    fill="none"
                    stroke="red"
                    d={textPathType && textPathType}
                />
                {/* </defs> */}
                <text>
                    <textPath href="#MyPath">{textpathContent && textpathContent}</textPath>
                </text>
            </svg>
        </div>
    );
};

export default Save;
