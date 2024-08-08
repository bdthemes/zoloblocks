import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId, progressPie, progPieMultiColor } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    const options = {
        progressPie,
        progPieMultiColor,
    };
    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            data-settings={JSON.stringify(options)}
        ></div>
    );
};

export default Save;
