/**
 * Internal depencencies
 */
const { classArrayToStr } = window.zoloModule;

import classnames from 'classnames';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, preset, zoloId, beforeImage, afterImage, comparisonOptions } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(preset, uniqueId, classArrayToStr(parentClasses), comparisonOptions?.slidePositon),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div
                className="beaf-slider"
                data-comparisonoptions={JSON.stringify(comparisonOptions)}
                data-beforeimage={JSON.stringify(beforeImage)}
                data-afterimage={JSON.stringify(afterImage)}
            ></div>
        </div>
    );
};

export default Save;
