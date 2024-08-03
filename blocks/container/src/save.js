import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;
import { applyFilters } from '@wordpress/hooks';

const Save = ({ attributes }) => {
    const panelProps = { attributes };
        const shapeDivider = applyFilters('zolo.extensions.render.shapeDivider', [], panelProps);
            const renderCursors = applyFilters('zolo.extensions.render.cursors', [], panelProps);

    const { uniqueId, isBlockRootParent, containerWidthType, contentWidthType, parentClasses, zoloId, containerWidth } = attributes;

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    uniqueId,
                    isBlockRootParent ? `${containerWidthType} zolo-root-container` : '',
                    'frontend',
                    `${containerWidth !== 'cw_none' ? containerWidth : ''}`,
                    classArrayToStr(parentClasses)
                ),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                <div className="zolo-container-inner-blocks-wrap">
                    {shapeDivider && shapeDivider.length > 0 && shapeDivider}
                    <InnerBlocks.Content />
                </div>
            ) : (
                <>
                    {shapeDivider && shapeDivider.length > 0 && shapeDivider}
                    <InnerBlocks.Content />
                </>
            )}
            {renderCursors && renderCursors}
        </div>
    );
};

export default Save;
