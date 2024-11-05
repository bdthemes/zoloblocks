/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps, BlockContextProvider, store as blockEditorStore, } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
import { useEffect, useMemo } from '@wordpress/element';
import { useSelect, useDispatch, dispatch } from '@wordpress/data';
import { Spinner } from '@wordpress/components';
import { useEntityRecord, useEntityBlockEditor } from '@wordpress/core-data';

/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';
import BlockToolbar from './block-toolbar';

function LoopInnerBlocks({ classList, index, value: blocks }) {
    const innerBlocksProps = useInnerBlocksProps(
        { className: classnames('zolo-loop-item', 'inner', classList) },
        {
            templateLock: 'all',
            value: blocks,
            onChange: () => { },
            onInput: () => { },
            renderAppender: false,
        }
    );
    return <li {...innerBlocksProps} data-index={index} />;
}

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId, context } = props;
    const {
        uniqueId,
        preview,
        parentClasses,
        ref
    } = attributes;

    const { posts } = context;

    const blockProps = useBlockProps({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            'zolo-loop',
        ),
    });

    const { setBlockEditingMode, __unstableMarkLastChangeAsPersistent } = useDispatch(blockEditorStore);

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);


    useEffect(() => {
        const createLoopTemplate = async () => {
            if (!ref) {
                const { saveEntityRecord } = dispatch('core');

                try {
                    const newTemplate = await saveEntityRecord('postType', 'loop-template', {
                        status: 'publish',
                        title: `Loop Template ${Date.now()}`,
                    });

                    if (newTemplate?.id) {
                        setAttributes({ ref: newTemplate?.id });
                    } else {
                        console.error('Failed to create the loop template');
                    }

                } catch (error) {
                    console.error('Error while creating the loop template:', error);
                }
            }
        };

        createLoopTemplate();
    }, [ref]);

    const { record, hasResolved } = useEntityRecord(
        'postType',
        'loop-template',
        ref
    );

    const [blocks] = useEntityBlockEditor('postType', 'loop-template', {
        id: ref,
    });
    const isMissing = hasResolved && !record;

    const {
        onNavigateToEntityRecord,
        editingMode,
        innerBlocks
    } = useSelect(
        (select) => {
            const { getSettings, getBlockEditingMode } = select(blockEditorStore);
            return {
                onNavigateToEntityRecord: getSettings().onNavigateToEntityRecord,
                editingMode: getBlockEditingMode(clientId),
                innerBlocks: select('core/block-editor').getBlocks(clientId),
            };
        },
        [ref, clientId]
    );

    useEffect(() => {
        function setBlockEditMode(innerBlocks) {
            if (innerBlocks) {
                innerBlocks.forEach((block) => {
                    setBlockEditingMode(block.clientId, 'disabled');

                    if (block.innerBlocks) {
                        setBlockEditMode(block.innerBlocks);
                    }
                });
            }
        }

        setBlockEditMode(innerBlocks);

    }, [clientId, innerBlocks, setBlockEditingMode, editingMode]);


    const handleEditOriginal = () => {
        __unstableMarkLastChangeAsPersistent();
        onNavigateToEntityRecord({ postId: ref, postType: 'loop-template' })
    };

    const blockContexts = useMemo(
        () =>
            posts?.map((post) => ({
                postType: post.type,
                postId: post.id,
                classList: post.class_list ?? '',
            })),
        [posts]
    );

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.notice} alt={__('Loop Preview', 'zoloblocks')} />;
    }

    if (!posts) {
        return (
            <div {...blockProps}>
                <Spinner />
            </div>
        )
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            {hasResolved && !isMissing && (
                <BlockToolbar
                    recordId={ref}
                    handleEditOriginal={handleEditOriginal}
                    key={ref}
                />
            )}
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                {blockContexts &&
                    blockContexts.map((blockContext, index) => {
                        return (
                            <BlockContextProvider
                                key={blockContext?.postId}
                                value={blockContext}
                            >
                                {blockContext.postId && (
                                    <LoopInnerBlocks
                                        classList={blockContext?.classList}
                                        index={index}
                                        value={blocks}
                                    />
                                )}

                            </BlockContextProvider>
                        )
                    })}
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
