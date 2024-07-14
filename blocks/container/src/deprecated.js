import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;
import attributes from './attributes';

const deprecated = {
    attributes: {
        ...attributes,
        containerWidthType: {
            type: 'string',
            default: 'alignfull',
        },
        contentWidthType: {
            type: 'string',
            default: 'alignwide',
        },
        zolo_ContainerGapGap: {
            type: 'number',
            default: 20,
        },
        zolo_ContainerGapUnit: {
            type: 'string',
            default: 'px',
        },
        zolo_ContainerWidthRange: {
            type: 'number',
            default: 100,
        },
        zolo_ContentWidthRange: {
            type: 'number',
            default: 1200,
        },
        zolo_ContentWidthUnit: {
            type: 'string',
            default: 'px',
        },
        FlexAlignZRPAlign: {
            type: 'string',
            default: 'center',
        },
        FlexDirectionZRPAlign: {
            type: 'string',
            default: 'row',
        },
        FlexJustifyZRPAlign: {
            type: 'string',
            default: 'center',
        },
        FlexWrapZRPAlign: {
            type: 'string',
            default: 'nowrap',
        },
    },
    save({ attributes }) {
        const { uniqueId, isBlockRootParent, containerWidthType, contentWidthType, parentClasses, zoloId } = attributes;

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
                        <InnerBlocks.Content />
                    </div>
                ) : (
                    <InnerBlocks.Content />
                )}
            </div>
        );
    },
};

export default deprecated;
