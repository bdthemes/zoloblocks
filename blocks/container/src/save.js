import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;
import { applyFilters } from '@wordpress/hooks';

const Save = ({ attributes }) => {
    console.log('attributes', attributes);
    const panelProps = { attributes };
    const { uniqueId, isBlockRootParent, containerWidthType, contentWidthType, parentClasses, zoloId } = attributes;
        const renderShapeDivider = applyFilters('zolo.blocks.styleTab.renderShapeDivider', [], 'zolo/container', panelProps);

    return (
        <div
            {...useBlockProps.save({
                className: classnames(
                    uniqueId,
                    isBlockRootParent ? `${containerWidthType} zolo-root-container` : '',
                    'frontend',
                    classArrayToStr(parentClasses)
                ),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {isBlockRootParent && 'alignfull' === containerWidthType && 'alignwide' === contentWidthType ? (
                <div className="zolo-container-inner-blocks-wrap">
                    {renderShapeDivider && renderShapeDivider.length > 0 && renderShapeDivider}
                    <InnerBlocks.Content />
                </div>
            ) : (
                <InnerBlocks.Content />
            )}
        </div>
    );
};

export default Save;
