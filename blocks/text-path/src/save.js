import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId, textpathContent, textPathType, pathlink, textpathLength } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            data-textpathcontent={textpathContent}
            data-textpathtype={textPathType}
            data-pathlink={pathlink}
            data-textpathlength={textpathLength}
            data-uniqueid={uniqueId}
        ></div>
    );
};

export default Save;
