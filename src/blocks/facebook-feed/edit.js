import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Notice, Spinner } from '@wordpress/components';
import { useEffect, useState, useRef, useMemo } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import Inspector from './inspector';
import Style from './styles';
import { LikeEmoji, LoveEmoji, CareEmoji, WowEmoji, HahaEmoji, SadEmoji, AngryEmoji } from './ReactionEmojis';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './editor.scss';

// Helper function to calculate time ago
const getTimeAgo = (createdTime) => {
    const createdDate = new Date(createdTime);
    const now = new Date();
    const diffTime = Math.abs(now - createdDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));

    if (diffDays > 7) return `${Math.floor(diffDays / 7)} ${Math.floor(diffDays / 7) === 1 ? 'week' : 'weeks'} ago`;
    if (diffDays > 0) return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
    if (diffHours > 0) return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
    if (diffMinutes > 0) return `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`;
    return 'Just now';
};

const Edit = ({ attributes, setAttributes, clientId }) => {
    const carouselRef = useRef(null);
    const swiperInstance = useRef(null);

    const [showApiNotice, setShowApiNotice] = useState(false);
    const [facebookPosts, setFacebookPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(null);
    const [facebookPageId, setFacebookPageId] = useState('');

    const finalUniqueId = attributes.uniqueId || `zolo-fb-${clientId.substr(0, 8)}`;
    
    const blockProps = useBlockProps({
        className: `parent-${finalUniqueId} zolo-block ${finalUniqueId} zolo-facebook-feed zolo-facebook-feed-${attributes.layoutType}`,
    });

    // Set unique ID
    useEffect(() => {
        if (!attributes.uniqueId) {
            setAttributes({ uniqueId: finalUniqueId });
        }
    }, []);

    // Fetch Facebook posts when credentials are available
    useEffect(() => {
        setIsLoading(true);
        setApiError(null);

        // Get Facebook credentials from WordPress settings
        apiFetch({ path: '/wp/v2/settings' })
            .then((settings) => {
                const pageId = settings.zolo_facebook_page_id || '';
                const accessToken = settings.zolo_facebook_access_token || '';

                if (!pageId || !accessToken) {
                    throw new Error(__('Facebook Page ID or Access Token not configured.', 'zoloblocks'));
                }

                // Store page ID for use in links
                setFacebookPageId(pageId);

                // Fetch page info
                const pageInfoUrl = `https://graph.facebook.com/v18.0/${pageId}?fields=name,picture&access_token=${accessToken}`;
                
                return fetch(pageInfoUrl)
                    .then(response => response.json())
                    .then(pageData => {
                        if (pageData.error) {
                            throw new Error(pageData.error.message);
                        }

                        // Fetch posts
                        const postsUrl = `https://graph.facebook.com/v18.0/${pageId}/posts?fields=id,message,created_time,full_picture,reactions.type(LIKE).limit(0).summary(total_count).as(reactions_like),reactions.type(LOVE).limit(0).summary(total_count).as(reactions_love),reactions.type(CARE).limit(0).summary(total_count).as(reactions_care),reactions.type(WOW).limit(0).summary(total_count).as(reactions_wow),reactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha),reactions.type(SAD).limit(0).summary(total_count).as(reactions_sad),reactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry),reactions.limit(0).summary(total_count).as(reactions_total),comments.summary(true),shares&limit=${attributes.postsPerPage}&access_token=${accessToken}`;

                        return fetch(postsUrl)
                            .then(response => response.json())
                            .then(postsData => {
                                if (postsData.error) {
                                    throw new Error(postsData.error.message);
                                }
                                
                                return {
                                    page_name: pageData.name || pageId,
                                    page_avatar: pageData.picture?.data?.url || '',
                                    posts: postsData.data || []
                                };
                            });
                    });
            })
            .then((response) => {
                if (response.page_name && response.posts) {
                    const pageName = response.page_name;
                    const pageAvatar = response.page_avatar || 'https://i.pravatar.cc/50?img=10';

                    // Format posts
                    const formattedPosts = response.posts.map((post, index) => {
                        const timeAgo = getTimeAgo(post.created_time);

                        // Extract hashtags
                        const hashtags = post.message ? post.message.match(/#\w+/g) || [] : [];

                        // Parse attachment if exists
                        let attachment = null;
                        let hasLinkAttachment = false;
                        if (post.attachments?.data?.[0]) {
                            const attachData = post.attachments.data[0];
                            hasLinkAttachment = attachData.type === 'share';
                            attachment = {
                                type: attachData.type || '',
                                media_type: attachData.media_type || '',
                                title: attachData.title || '',
                                description: attachData.description || '',
                                url: attachData.unshimmed_url || attachData.url || '',
                            };
                        }

                        // Only use full_picture if it's not just a link preview thumbnail
                        const postImage = (post.full_picture && !hasLinkAttachment) ? post.full_picture : null;

                        return {
                            id: post.id || index,
                            author: pageName,
                            avatar: pageAvatar,
                            date: timeAgo,
                            content: post.message || '',
                            hashtags: hashtags.slice(0, 5),
                            image: postImage,
                            attachment: attachment,
                            reactions: {
                                like: post.reactions_like?.summary?.total_count || 0,
                                love: post.reactions_love?.summary?.total_count || 0,
                                care: post.reactions_care?.summary?.total_count || 0,
                                wow: post.reactions_wow?.summary?.total_count || 0,
                                haha: post.reactions_haha?.summary?.total_count || 0,
                                sad: post.reactions_sad?.summary?.total_count || 0,
                                angry: post.reactions_angry?.summary?.total_count || 0,
                            },
                            totalReactions: post.reactions_total?.summary?.total_count || 0,
                            comments: post.comments?.summary?.total_count || 0,
                            shares: post.shares?.count || 0,
                        };
                    });
                    setFacebookPosts(formattedPosts);
                    setShowApiNotice(false);
                } else {
                    setFacebookPosts([]);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching Facebook data:', error);
                setApiError(error.message || __('Failed to fetch Facebook posts. Please check your API settings.', 'zoloblocks'));
                setFacebookPosts([]);
                setShowApiNotice(true);
                setIsLoading(false);
            });
    }, [attributes.postsPerPage]);

    // Initialize Swiper for carousel layout
    useEffect(() => {
        if (attributes.layoutType === 'carousel' && carouselRef.current && !swiperInstance.current) {
            const container = carouselRef.current.querySelector('.swiper');
            if (container) {
                // Get columns based on responsive mode (max 3 for carousel)
                const deskCols = Math.min(attributes.fbColumns?.Desktop || 3, 3);
                const tabCols = Math.min(attributes.fbColumns?.Tablet || 2, 2);
                const mobCols = 1;
                
                const slidesPerView = attributes.resMode === 'Desktop' ? deskCols : 
                                     attributes.resMode === 'Tablet' ? tabCols : mobCols;

                requestAnimationFrame(() => {
                    if (container && container.querySelector('.swiper-slide')) {
                        if (swiperInstance.current) {
                            swiperInstance.current.destroy();
                            swiperInstance.current = null;
                        }

                        swiperInstance.current = new Swiper(container, {
                            modules: [Navigation, Pagination, Autoplay],
                            slidesPerView: slidesPerView,
                            spaceBetween: 20,
                            loop: attributes.carouselLoop,
                            centeredSlides: false,
                            watchSlidesProgress: true,
                            watchOverflow: true,
                            autoplay: attributes.carouselAutoplay ? {
                                delay: attributes.carouselSpeed,
                                disableOnInteraction: false,
                            } : false,
                            navigation: {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            },
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                                type: 'bullets',
                                bulletElement: 'button',
                            },
                            a11y: {
                                prevSlideMessage: __('Previous slide', 'zoloblocks'),
                                nextSlideMessage: __('Next slide', 'zoloblocks'),
                                paginationBulletMessage: __('Go to slide {{index}}', 'zoloblocks'),
                            },
                        });
                    }
                });
            }
        }

        return () => {
            if (swiperInstance.current) {
                swiperInstance.current.destroy();
                swiperInstance.current = null;
            }
        };
    }, [
        attributes.layoutType,
        attributes.carouselAutoplay,
        attributes.carouselSpeed,
        attributes.carouselLoop,
        attributes.resMode,
        attributes.fbColumns,
        facebookPosts
    ]);

    // Update Swiper when posts change
    useEffect(() => {
        if (swiperInstance.current) {
            swiperInstance.current.update();
        }
    }, [facebookPosts]);

    // Gallery view - only show images
    const renderGalleryItem = (post) => {
        const galleryContent = (
            <>
                <img src={post.image} alt={post.content ? post.content.substring(0, 50) : 'Facebook post'} />
                <div className="zolo-fb-gallery-overlay">
                    {attributes.showAvatar && (
                        attributes.galleryCardClickable ? (
                            <img src={post.avatar} alt={post.author} className="zolo-fb-gallery-avatar" />
                        ) : (
                            <a
                                href={facebookPageId ? `https://www.facebook.com/${facebookPageId}` : 'https://www.facebook.com'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="zolo-fb-gallery-avatar-link"
                            >
                                <img src={post.avatar} alt={post.author} className="zolo-fb-gallery-avatar" />
                            </a>
                        )
                    )}
                    <div className="zolo-fb-gallery-info">
                        {attributes.showAuthor && (
                            attributes.galleryCardClickable ? (
                                <div className="zolo-fb-gallery-author">{post.author}</div>
                            ) : (
                                <a
                                    href={facebookPageId ? `https://www.facebook.com/${facebookPageId}` : 'https://www.facebook.com'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="zolo-fb-gallery-author-link"
                                >
                                    <div className="zolo-fb-gallery-author">{post.author}</div>
                                </a>
                            )
                        )}
                        {attributes.showDate && (
                            <div className="zolo-fb-gallery-date">{post.date}</div>
                        )}
                    </div>
                </div>
            </>
        );

        return (
            <div key={post.id} className="zolo-fb-gallery-item">
                {attributes.galleryCardClickable ? (
                    <a
                        href={facebookPageId ? `https://www.facebook.com/${facebookPageId}` : 'https://www.facebook.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="zolo-fb-gallery-link"
                    >
                        {galleryContent}
                    </a>
                ) : (
                    <div className="zolo-fb-gallery-link">
                        {galleryContent}
                    </div>
                )}
            </div>
        );
    };

    const renderPost = (post) => (
        <div key={post.id} className="zolo-fb-post">
            <div className="zolo-fb-post-header">
                {attributes.showAvatar && (
                    <a
                        href={facebookPageId ? `https://www.facebook.com/${facebookPageId}` : 'https://www.facebook.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="zolo-fb-avatar-link"
                    >
                        <img src={post.avatar} alt={post.author} className="zolo-fb-avatar" />
                    </a>
                )}
                <div className="zolo-fb-meta">
                    {attributes.showAuthor && (
                        <a
                            href={facebookPageId ? `https://www.facebook.com/${facebookPageId}` : 'https://www.facebook.com'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="zolo-fb-author-link"
                        >
                            <div className="zolo-fb-author">{post.author}</div>
                        </a>
                    )}
                    {attributes.showDate && <div className="zolo-fb-date">{post.date}</div>}
                </div>
                {attributes.showFacebookIcon && (
                    <a
                        href={facebookPageId ? `https://www.facebook.com/${facebookPageId}` : 'https://www.facebook.com'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="zolo-fb-icon"
                        title={__('Visit Facebook Page', 'zoloblocks')}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877f2">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                )}
            </div>

            {attributes.showContent && post.content && (
                <div className="zolo-fb-content">
                    <p>{attributes.contentLength > 0 && post.content.length > attributes.contentLength
                        ? post.content.substring(0, attributes.contentLength) + '...'
                        : post.content}
                    </p>
                    {post.hashtags && (
                        <div className="zolo-fb-hashtags">
                            {post.hashtags.map((tag, i) => (
                                <span key={i} className="zolo-fb-hashtag">{tag}</span>
                            ))}
                        </div>
                    )}
                    {attributes.showReadMore && attributes.contentLength > 0 && post.content.length > attributes.contentLength && (
                        <a href="#" className="zolo-fb-read-more">{attributes.readMoreText}</a>
                    )}
                </div>
            )}

            {attributes.showImage && post.image && !(post.attachment && post.attachment.type === 'share') && (
                <div className="zolo-fb-image">
                    <img src={post.image} alt="Post" />
                </div>
            )}

            {post.attachment && post.attachment.type === 'share' && (
                <div className="zolo-fb-attachment">
                    <a href={post.attachment.url} target="_blank" rel="noopener noreferrer" className="zolo-fb-attachment-link">
                        {post.attachment.title && (
                            <>
                                <div className="zolo-fb-attachment-domain">{new URL(post.attachment.url).hostname}</div>
                                <div className="zolo-fb-attachment-title">{post.attachment.title}</div>
                            </>
                        )}
                        {post.attachment.description && (
                            <div className="zolo-fb-attachment-description">{post.attachment.description}</div>
                        )}
                    </a>
                </div>
            )}

            {(attributes.showReactions || attributes.showComments || attributes.showShares) && (
                <div className="zolo-fb-reactions">
                    {attributes.showReactions && post.totalReactions > 0 && (
                        <div className="zolo-fb-reaction-icons">
                            {post.reactions.like > 0 && <LikeEmoji />}
                            {post.reactions.love > 0 && <LoveEmoji />}
                            {post.reactions.care > 0 && <CareEmoji />}
                            {post.reactions.wow > 0 && <WowEmoji />}
                            {post.reactions.haha > 0 && <HahaEmoji />}
                            {post.reactions.sad > 0 && <SadEmoji />}
                            {post.reactions.angry > 0 && <AngryEmoji />}
                            <span className="zolo-fb-reaction-count">{post.totalReactions}</span>
                        </div>
                    )}
                    <div className="zolo-fb-engagement-stats">
                        {attributes.showComments && post.comments > 0 && (
                            <span className="zolo-fb-stat-item">{post.comments} Comments</span>
                        )}
                        {attributes.showShares && post.shares > 0 && (
                            <span className="zolo-fb-stat-item">{post.shares} Shares</span>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <>
            <Style attributes={attributes} setAttributes={setAttributes} />

            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                block={{ name: 'zolo/facebook-feed', clientId }}
            />

            <div {...blockProps}>
                {isLoading && (
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                        <Spinner />
                        <p>{__('Loading Facebook posts...', 'zoloblocks')}</p>
                    </div>
                )}

                {!isLoading && apiError && (
                    <div style={{
                        padding: '40px 20px',
                        textAlign: 'center',
                        background: '#f9fafb',
                        border: '2px dashed #d1d5db',
                        borderRadius: '8px',
                        color: '#6b7280',
                        marginTop: '20px'
                    }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 16px', opacity: 0.5 }}>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor" />
                        </svg>
                        <p style={{ margin: '0', fontSize: '16px', fontWeight: '600', color: '#374151' }}>
                            {__('Facebook API Not Configured', 'zoloblocks')}
                        </p>
                        <p style={{ margin: '8px 0 0', fontSize: '14px' }}>
                            {apiError === 'Facebook Page ID or Access Token not configured.' 
                                ? <>{__('Please configure your Facebook Page ID and Access Token in the ', 'zoloblocks')} <a href={`${window.location.origin}/wp-admin/admin.php?page=zoloblocks#apiSettings`} target="_blank" rel="noopener noreferrer" style={{ color: '#1877f2', textDecoration: 'none' }}>{__('API Settings', 'zoloblocks')}</a>.</>
                                : apiError
                            }
                        </p>
                    </div>
                )}

                {!isLoading && !apiError && facebookPosts.length > 0 && (
                    <div
                        ref={carouselRef}
                        className={`zolo-fb-posts-container layout-${attributes.layoutType} zolo-facebook-feed-${finalUniqueId}`}
                    >
                        {attributes.layoutType === 'carousel' ? (
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    {facebookPosts.map(post => (
                                        <div key={post.id} className="swiper-slide">
                                            {renderPost(post)}
                                        </div>
                                    ))}
                                </div>
                                <div className="swiper-button-prev" role="button" aria-label={__('Previous slide', 'zoloblocks')} tabIndex="0"></div>
                                <div className="swiper-button-next" role="button" aria-label={__('Next slide', 'zoloblocks')} tabIndex="0"></div>
                                <div className="swiper-pagination" role="group" aria-label={__('Carousel pagination', 'zoloblocks')}></div>
                            </div>
                        ) : attributes.layoutType === 'gallery' ? (
                            <>
                                {facebookPosts.filter(post => post.image).map(renderGalleryItem)}
                                {facebookPosts.filter(post => post.image).length === 0 && (
                                    <Notice status="info" isDismissible={false}>
                                        {__('No posts with images found for gallery view.', 'zoloblocks')}
                                    </Notice>
                                )}
                            </>
                        ) : (
                            facebookPosts.map(renderPost)
                        )}
                    </div>
                )}

                {!isLoading && !apiError && facebookPosts.length === 0 && facebookPageId && (
                    <Notice status="warning" isDismissible={false}>
                        {__('No posts found. The page might not have any published posts or the credentials may be incorrect.', 'zoloblocks')}
                    </Notice>
                )}
                
                {!isLoading && !apiError && facebookPosts.length === 0 && !facebookPageId && (
                     <div style={{
                        padding: '40px 20px',
                        textAlign: 'center',
                        background: '#f9fafb',
                        border: '2px dashed #d1d5db',
                        borderRadius: '8px',
                        color: '#6b7280',
                        marginTop: '20px'
                    }}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 16px', opacity: 0.5 }}>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor" />
                        </svg>
                        <p style={{ margin: '0', fontSize: '16px', fontWeight: '600', color: '#374151' }}>
                            {__('Facebook API Not Configured', 'zoloblocks')}
                        </p>
                        <p style={{ margin: '8px 0 0', fontSize: '14px' }}>
                            <>{__('Please configure your Facebook Page ID and Access Token in the ', 'zoloblocks')} <a href={`${window.location.origin}/wp-admin/admin.php?page=zoloblocks#apiSettings`} target="_blank" rel="noopener noreferrer" style={{ color: '#1877f2', textDecoration: 'none' }}>{__('API Settings', 'zoloblocks')}</a>.</>
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Edit;
