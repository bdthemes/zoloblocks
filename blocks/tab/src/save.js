import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, zoloId, tabId, tabParentId } = attributes;

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
                className="tab__content-item"
                id={`tab-content-${tabId}`}
                data-tab-id={tabId}
                data-tab-parent-id={tabParentId}
                role="tabpanel"
                aria-labelledby={`tab-title-${tabId}`}
                aria-hidden={tabId === '1' ? 'false' : 'true'}
            >
                <InnerBlocks.Content />
            </div>
        </div>
    );
};

export default Save;
