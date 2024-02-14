import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId, presets, CountDate, itemsLabels, itemsVisibility, toggleLabels, layout } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div
                className={`zolo-countdown-wrap ${presets ? presets : `zolo-countdown-style-1`} ${layout == 'flex' ? 'flex' : 'grid'}`}
                data-countdate={CountDate}
                data-itemsVisibility={JSON.stringify(itemsVisibility)}
                data-itemsLabels={JSON.stringify(itemsLabels)}
                data-toggleLabels={toggleLabels}
            ></div>
        </div>
    );
};

export default Save;
