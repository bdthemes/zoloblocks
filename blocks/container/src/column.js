import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';

/**
 * Register column block
 */
registerBlockType('zolo/column', {
    title: __('Column', 'zolo-blocks'),
    description: __('Single column block', 'zolo-blocks'),
    category: 'zolo-blocks',
    icon: {
        src: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M11 5H5V19H11V5ZM13 5V19H19V5H13ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" />
            </svg>
        ),
    },
    parent: ['zolo/container'],
    attributes: {
        uniqueId: {
            type: 'string',
        },
        width: {
            type: 'number',
        },
    },
    edit: ({ attributes, clientId }) => {
        const { width } = attributes;

        const id = 'block-' + clientId;

        const innerBlocksProps = useInnerBlocksProps(useBlockProps(), {
            templateLock: false,
            renderAppender: InnerBlocks.ButtonBlockAppender,
        });

        return (
            <Fragment>
                <style>
                    {`
                        #${id} {
                            width: ${width}%;
                        }
                        #${id}.block-editor-block-list__layout {
                            width: 100%;
                            display: block;
                        }
                    `}
                </style>
                <div {...innerBlocksProps} />
            </Fragment>
        );
    },
    save: ({ attributes }) => {
        const { width } = attributes;
        return (
            <div {...useBlockProps.save()}>
                <InnerBlocks.Content />
            </div>
        );
    },
});
