import { RichText, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId, preset, progressH, barTitleToggle, barpercentToggle, progressText, progressTextTag } =
        attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, `${preset ? preset : 'style-1'}`, classArrayToStr(parentClasses)),
    });

    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            <div className="zolo-progress-bars-wrap">
                <div className="zolo-progress-bar_item active">
                    <div className="zolo-progress-bar_content">
                        {barTitleToggle && (
                            <RichText.Content value={progressText} tagName={progressTextTag} className="zolo-progress-bar__title" />
                        )}
                        {barpercentToggle && <div className="zolo-progress-bar_percent">{progressH}</div>}
                    </div>
                    <div className="zolo-progress-bar__progress">
                        <div className="zolo-progress-bar__progress-bar" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;
