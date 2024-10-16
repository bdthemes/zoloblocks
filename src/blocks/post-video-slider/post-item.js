import { RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { videoLinkRender } from './helpers';
const { DynamicTag } = window.zoloModule;
export default function PostItem({ post, attributes, videoLink }) {
    const {
        showTitle,
        titleWords,
        titleTag,
        showExcerpt,
        excerptWords,
        excerptindicator,
        showCategory,
        showAuthor,
        showDate,
        showMeta,
        metaSeparator,
        authorPrefix,
    } = attributes;

    const titleLimitWords = titleWords > 0 ? post.title.trim().split(' ', titleWords).join(' ') : post.title;
    const excerptLimitWords = excerptWords > 0 ? post.excerpt.trim().split(' ', excerptWords).join(' ') : post.excerpt;

    const categoriesHtml = post.categories.length > 0 && (
        <ul className="zolo-post-category">
            {post.categories.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
        </ul>
    );

    const author = (
        <div className="zolo-post-author-name">
            <span>{authorPrefix || __('By ', 'zoloblocks')}</span>
            <a href="#" className="zolo-post-author-link" dangerouslySetInnerHTML={{ __html: post.author }} />
        </div>
    );

    const date = <div className="zolo-post-date">{post.date}</div>;

    const dateRTimeHtml = <div className="zolo-post-dateTime">{date}</div>;

    const videoSource = videoLink ? videoLinkRender(videoLink) : false;

    return (
        <div className="zolo-item swiper-slide">
            <div className="zolo-post-image-wrap">
                {post.thumbnail ? (
                    <span dangerouslySetInnerHTML={{ __html: post.thumbnail }} />
                ) : (
                    <img src={zoloPlaceholders.placeholder} alt={__('Thumbnail Placeholder', 'zoloblocks')} />
                )}

                {videoSource && (
                    <>
                        <div className="zolo-video-wrap">
                            <iframe src="" className="zolo-video-iframe" allow="autoplay;" />
                        </div>
                    </>
                )}
            </div>

            <div className="zolo-post-content">
                <div data-swiper-parallax-x="-200" data-swiper-parallax-duration="700">
                    {showCategory && categoriesHtml}
                </div>
                <div data-swiper-parallax-x="-150" data-swiper-parallax-duration="800">
                    {showTitle && (
                        <DynamicTag tagName={titleTag} className="zolo-post-title">
                            <a href={post.permalink}>
                                <RawHTML>{titleLimitWords}</RawHTML>
                            </a>
                        </DynamicTag>
                    )}
                </div>
                <div data-swiper-parallax-x="-100" data-swiper-parallax-duration="900">
                    {showExcerpt && excerptLimitWords && (
                        <div className="zolo-post-desc">
                            <p>
                                <RawHTML>{excerptLimitWords}</RawHTML>
                                {excerptindicator}
                            </p>
                        </div>
                    )}
                </div>
                <div data-swiper-parallax-x="-80" data-swiper-parallax-duration="1000">
                    {showMeta && (
                        <div className="zolo-post-meta">
                            {showAuthor && author}
                            {showAuthor && showDate && <div className="zolo-separator">{metaSeparator}</div>}
                            {showDate && dateRTimeHtml}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
