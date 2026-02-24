import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import classnames from 'classnames';
import Inspector from './inspector';
import RenderView from './render-view';
import './style.scss';

const { Pagination, classArrayToStr, SidebarOpener, ZoloSpinner } = window.zoloModule;

import Style from './styles';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        postQuery,
        preset,
        page,
        paginationType,
        previousText,
        nextText,
        loadMoreText,
        showfeatureimg,
    } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId} zolo-post-featured-list-wrap zolo-post-${preset}`, classArrayToStr(parentClasses), {
            'list-grid': !showfeatureimg,
        }),
    });

    useEffect(() => {
        if (typeof postQuery === 'undefined') {
            setAttributes({
                postQuery: {
                    postType: 'post',
                    postExclude: [],
                    postPerPage: 6,
                    postOffset: 0,
                    postOrderby: 'date',
                    postOrder: 'desc',
                    postThumbnail: 'thumbnail',
                    showPagination: false,
                },
            });
        }
    }, []);

    const [postResults, setPostResults] = useState([]);
    const [dataSuccess, setDataSuccess] = useState(true);
    const [pageTotal, setPageTotal] = useState(0);

    useEffect(() => {
        let paginationLimit = 0;
        paginationLimit = postQuery?.postPerPage;

        const apiData = {
            zolo_nonce: zoloParams.zolo_nonce,
            attributes: attributes,
            postQuery: postQuery,
        };

        apiFetch({
            path: '/zolo/v1/posts',
            method: 'POST',
            data: apiData,
        })
            .then((response) => {
                if (response.success) {
                    setPostResults([...response.data.posts]);
                    setPageTotal(response.data.total_page);
                    setDataSuccess(response.success);
                } else {
                    setPostResults([]);
                    setPageTotal(0);
                    setDataSuccess(response.success);
                }
            })
            .catch((error) => console.log(error));
    }, [postQuery]);
    let content;

    if (preview) {
        return <img src={zoloParams.blocksPreview.postList} alt={__('Post List Preview', 'zoloblocks')} />;
    }

    if (Array.isArray(postResults) && postResults.length === 0) {
        content = (
            <>
                {dataSuccess ? (
                    <div className="zolo-spinner">
                        <ZoloSpinner />
                    </div>
                ) : (
                    <p>{__('No posts found.', 'zoloblocks')}</p>
                )}
            </>
        );
    } else {
        content = (
            <>
                <Style props={props} />
                <div {...blockProps}>
                    <SidebarOpener clientId={clientId} />
                    <RenderView attributes={attributes} setAttributes={setAttributes} postResults={postResults} />
                </div>
                {postQuery?.showPagination && pageTotal > 1 && (
                    <div className={`zolo-pagination-wrap ${uniqueId}`}>
                        {(paginationType === 'normal' || paginationType === 'number') && (
                            <Pagination
                                total={pageTotal}
                                current={page || 1}
                                prevText={previousText}
                                nextText={nextText}
                                onClickPage={(page) => setAttributes({ page })}
                            />
                        )}
                        {paginationType === 'button' && <a className="zolo-pagination-button">{loadMoreText}</a>}
                    </div>
                )}
            </>
        );
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            {content}
        </>
    );
}
