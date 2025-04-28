import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import classnames from 'classnames';
import Inspector from './inspector';
import RenderView from './render-view';
import './style.scss';

const { Pagination, classArrayToStr, SidebarOpener } = window.zoloModule;

import Style from './styles';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        postQuery,
        preset,
        postTitleAnimation,
        page,
        paginationType,
        loadMoreText,
        previousText,
        nextText,
        pageTotal,
    } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(
            className,
            `${uniqueId} zolo-post-grid-wrap zolo-post-${preset}`,
            classArrayToStr(parentClasses),
            postTitleAnimation
        ),
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
                    postThumbnail: '',
                    showPagination: false,
                },
            });
        }
    }, []);

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.postGrid} alt={__('Post Grid Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <RenderView attributes={attributes} setAttributes={setAttributes} />
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
