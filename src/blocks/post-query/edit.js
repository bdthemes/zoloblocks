/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps, BlockContextProvider } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { Spinner } from '@wordpress/components';
import { addQueryArgs } from '@wordpress/url';
import { useInstanceId } from '@wordpress/compose';

/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr, SidebarOpener } = window.zoloModule;

import Inspector from './inspector';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId, context } = props;
    const {
        uniqueId,
        preview,
        parentClasses,
        query,
        queryId
    } = attributes;

    const {
        templateSlug,
        previewPostType
    } = context;

    const { inherit } = query || {};

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const instanceId = useInstanceId(Edit);

    const blockProps = useBlockProps({
        className: classnames(
            uniqueId,
            classArrayToStr(parentClasses),
            'zolo-post-query',
        ),
    });

    const innerBlocksProps = useInnerBlocksProps({}, {
        template: [
            ['zolo/loop', {}],
        ],
    });

    const { postsPerPage } = useSelect(
        (select) => {
            const { getSettings } = select(blockEditorStore);
            return {
                postsPerPage: getSettings()?.postsPerPage,
            };
        },
        [clientId, context]
    );

    const getInheritPosts = async () => {
        let query = {
            per_page: postsPerPage,
        };
        let postType = 'posts';

        // Fetch template category if the template slug starts with 'category-'
        let templateCategory;
        if (templateSlug?.startsWith('category-')) {
            try {
                const categoryResponse = await apiFetch({
                    path: addQueryArgs('/wp/v2/categories', {
                        context: 'view',
                        per_page: 1,
                        _fields: 'id',
                        slug: templateSlug.replace('category-', ''),
                    }),
                });
                templateCategory = categoryResponse;
            } catch (error) {
                console.error('Error fetching template category:', error);
            }
        }

        // Change the post type or set category query based on the template slug
        if (templateSlug?.startsWith('archive-')) {
            query.type = templateSlug.replace('archive-', '');
            postType = query.type;
        } else if (templateCategory && templateCategory.length > 0) {
            query.categories = templateCategory[0]?.id;
        }

        // Set the post type from the preview if available
        if (previewPostType) {
            query.type = previewPostType;
        }

        try {
            // Fetch posts based on the constructed query
            const posts = await apiFetch({
                path: addQueryArgs(`/wp/v2/${postType}`, query),
            });
            setPosts(posts);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setIsLoading(false); // Ensure loading state is always reset
        }
    };

    const fetchPosts = async (query) => {
        try {
            setIsLoading(true);
    
            const response = await apiFetch({
                path: '/zolo/v1/post-query',
                method: 'POST',
                data: query, // Send query data in the body for POST
            });
    
            if(response){
                setPosts(response);
            }

            setIsLoading(false);
            
        } catch (error) {
            console.error('Error fetching posts:', error);
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };
    

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            if (inherit) {
                await getInheritPosts();
            } else {
                await fetchPosts(query);
            }
        };

        fetchData();

        // Clean up function
        return () => {
            setIsLoading(false); // Reset loading state when the component is unmounted or dependencies change
        };
    }, [query, templateSlug, previewPostType]);

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.notice} alt={__('Post Query Preview', 'zoloblocks')} />;
    }

    if (isLoading) {
        return (
            <div {...blockProps}>
                <Spinner />
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <>
                {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
                <div {...blockProps}>
                    <p>{__('No posts found.', 'zoloblocks')}</p>
                </div>
            </>
        )
    }

    const blockContext = {
        posts,
        queryId,
    }
    

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                {
                    blockContext && (
                        <BlockContextProvider
                            key={instanceId}
                            value={blockContext}
                        >
                            <div {...innerBlocksProps}></div>
                        </BlockContextProvider>
                    )
                }
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
