import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Notice, Spinner } from '@wordpress/components';
import { useEffect, useState, useRef } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { layoutTypes, defaultAttributes } from './attributes';
import Inspector from './inspector';
import Style from './styles';
import { LikeEmoji, LoveEmoji, CareEmoji, WowEmoji, HahaEmoji, SadEmoji, AngryEmoji } from './ReactionEmojis';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './editor.scss';

const Edit = ({ attributes, setAttributes, clientId }) => {
    const {
        uniqueId,
        layoutType,
        postsPerPage,
        showAvatar,
        showAuthor,
        showDate,
        showContent,
        contentLength,
        showReadMore,
        readMoreText,
        showReactions,
        showComments,
        showShares,
        carouselAutoplay,
        carouselSpeed,
        carouselLoop,
        facebookPageId,
        facebookAccessToken,
        cacheExpiration,
        resMode,
    } = attributes;

    const carouselRef = useRef(null);
    const swiperInstance = useRef(null);

    const [showApiNotice, setShowApiNotice] = useState(false);
    const [facebookPosts, setFacebookPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    const blockProps = useBlockProps({
        className: `${uniqueId || `zolo-fb-${clientId.substr(0, 8)}`} zolo-facebook-feed zolo-facebook-feed-${layoutType}`,
    });

    // Set unique ID
    useEffect(() => {
        if (!uniqueId) {
            setAttributes({ uniqueId: `zolo-fb-${clientId.substr(0, 8)}` });
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

                // Fetch page info
                const pageInfoUrl = `https://graph.facebook.com/v18.0/${pageId}?fields=name,picture&access_token=${accessToken}`;
                
                return fetch(pageInfoUrl)
                    .then(response => response.json())
                    .then(pageData => {
                        if (pageData.error) {
                            throw new Error(pageData.error.message);
                        }

                        // Fetch posts
                        const postsUrl = `https://graph.facebook.com/v18.0/${pageId}/posts?fields=id,message,created_time,full_picture,reactions.type(LIKE).limit(0).summary(total_count).as(reactions_like),reactions.type(LOVE).limit(0).summary(total_count).as(reactions_love),reactions.type(CARE).limit(0).summary(total_count).as(reactions_care),reactions.type(WOW).limit(0).summary(total_count).as(reactions_wow),reactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha),reactions.type(SAD).limit(0).summary(total_count).as(reactions_sad),reactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry),reactions.limit(0).summary(total_count).as(reactions_total),comments.summary(true),shares&limit=${postsPerPage}&access_token=${accessToken}`;

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
                        const createdDate = new Date(post.created_time);
                        const now = new Date();
                        const diffTime = Math.abs(now - createdDate);
                        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
                        const diffMinutes = Math.floor(diffTime / (1000 * 60));

                        let timeAgo;
                        if (diffDays > 0) {
                            timeAgo = `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
                        } else if (diffHours > 0) {
                            timeAgo = `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
                        } else {
                            timeAgo = `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`;
                        }

                        // Extract hashtags
                        const hashtags = post.message ? post.message.match(/#\w+/g) || [] : [];

                        return {
                            id: post.id || index,
                            author: pageName,
                            avatar: pageAvatar,
                            date: timeAgo,
                            content: post.message || '',
                            hashtags: hashtags.slice(0, 5),
                            image: post.full_picture || '',
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
    }, [postsPerPage]);

    // Initialize Swiper for carousel layout
    useEffect(() => {
        if (layoutType === 'carousel' && carouselRef.current && !swiperInstance.current) {
            const container = carouselRef.current.querySelector('.swiper');
            if (container) {
                // Get columns based on responsive mode (max 3 for carousel)
                const deskCols = Math.min(attributes.zolo_fbColumnsRange || 3, 3);
                const tabCols = Math.min(attributes.zolo_TABfbColumnsRange || 2, 2);
                const mobCols = 1;
                
                const slidesPerView = resMode === 'Desktop' ? deskCols : resMode === 'Tablet' ? tabCols : mobCols;

                swiperInstance.current = new Swiper(container, {
                    modules: [Navigation, Pagination, Autoplay],
                    slidesPerView: slidesPerView,
                    spaceBetween: 20,
                    loop: carouselLoop,
                    centeredSlides: false,
                    watchSlidesProgress: true,
                    watchOverflow: true,
                    autoplay: carouselAutoplay ? {
                        delay: carouselSpeed,
                        disableOnInteraction: false,
                    } : false,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            }
        }

        return () => {
            if (swiperInstance.current) {
                swiperInstance.current.destroy();
                swiperInstance.current = null;
            }
        };
    }, [layoutType, carouselAutoplay, carouselSpeed, carouselLoop, resMode, attributes.zolo_fbColumnsRange, attributes.zolo_TABfbColumnsRange, attributes.zolo_MOBfbColumnsRange]);

    // Update Swiper when posts change
    useEffect(() => {
        if (swiperInstance.current) {
            swiperInstance.current.update();
        }
    }, [facebookPosts]);

    // Demo posts for preview
    const demoPosts = [
        {
            id: 1,
            author: 'Sigmative',
            avatar: 'https://i.pravatar.cc/50?img=1',
            date: '2 weeks ago',
            content: 'The Sigmative crew is all set for WordCamp Malaysia! 🇲🇾 Tomorrow, if you spot any of us at the venue, feel free to stop us, say hi, and let\'s chat about everything social media integration for WordPress sites! See you there!',
            hashtags: ['#WordCampMY', '#WCMY25', '#WordCamp'],
            image: 'https://picsum.photos/600/400?random=1',
            reactions: { like: 0, love: 0, care: 8, wow: 0, haha: 0, sad: 0, angry: 0 },
            totalReactions: 8,
            comments: 5,
            shares: 2,
        },
        {
            id: 2,
            author: 'Sigmative',
            avatar: 'https://i.pravatar.cc/50?img=2',
            date: '1 week ago',
            content: 'Exciting news! We just launched our new feature that helps you connect with your audience better. Check it out!',
            image: 'https://picsum.photos/600/400?random=2',
            reactions: { like: 15, love: 7, care: 0, wow: 0, haha: 0, sad: 0, angry: 0 },
            totalReactions: 22,
            comments: 8,
            shares: 4,
        },
        {
            id: 3,
            author: 'Sigmative',
            avatar: 'https://i.pravatar.cc/50?img=3',
            date: '3 days ago',
            content: 'Thanks to all our amazing users for your continued support! We couldn\'t do this without you. 💙',
            reactions: { like: 25, love: 10, care: 0, wow: 0, haha: 0, sad: 0, angry: 0 },
            totalReactions: 35,
            comments: 12,
            shares: 6,
        },
    ];

    const renderPost = (post) => (
        <div key={post.id} className="zolo-fb-post">
            <div className="zolo-fb-post-header">
                {showAvatar && (
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
                    {showAuthor && (
                        <a
                            href={facebookPageId ? `https://www.facebook.com/${facebookPageId}` : 'https://www.facebook.com'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="zolo-fb-author-link"
                        >
                            <div className="zolo-fb-author">{post.author}</div>
                        </a>
                    )}
                    {showDate && <div className="zolo-fb-date">{post.date}</div>}
                </div>
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
            </div>

            {showContent && post.content && (
                <div className="zolo-fb-content">
                    <p>{contentLength > 0 && post.content.length > contentLength
                        ? post.content.substring(0, contentLength) + '...'
                        : post.content}
                    </p>
                    {post.hashtags && (
                        <div className="zolo-fb-hashtags">
                            {post.hashtags.map((tag, i) => (
                                <span key={i} className="zolo-fb-hashtag">{tag}</span>
                            ))}
                        </div>
                    )}
                    {showReadMore && contentLength > 0 && post.content.length > contentLength && (
                        <a href="#" className="zolo-fb-read-more">{readMoreText}</a>
                    )}
                </div>
            )}

            {post.image && (
                <div className="zolo-fb-image">
                    <img src={post.image} alt="Post" />
                </div>
            )}

            {(showReactions || showComments || showShares) && (
                <div className="zolo-fb-reactions">
                    {showReactions && post.totalReactions > 0 && (
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
                        {showComments && post.comments > 0 && (
                            <span className="zolo-fb-stat-item">{post.comments} Comments</span>
                        )}
                        {showShares && post.shares > 0 && (
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
                    <Notice status="error" isDismissible={false}>
                        {__('Facebook API Error: ', 'zoloblocks')}{apiError}
                    </Notice>
                )}

                {!isLoading && !apiError && (
                    <div
                        ref={carouselRef}
                        className={`zolo-fb-posts-container layout-${layoutType} zolo-facebook-feed-${uniqueId || `zolo-fb-${clientId.substr(0, 8)}`}`}
                        style={{
                            '--masonry-columns': attributes.zolo_fbColumnsRange || 3,
                            '--masonry-gap': `${attributes.zolo_fbGapGap || 20}${attributes.zolo_fbGapUnit || 'px'}`,
                        }}
                    >
                        {layoutType === 'carousel' ? (
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    {(facebookPosts.length > 0 ? facebookPosts : demoPosts).map(post => (
                                        <div key={post.id} className="swiper-slide">
                                            {renderPost(post)}
                                        </div>
                                    ))}
                                </div>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-pagination"></div>
                            </div>
                        ) : (
                            (facebookPosts.length > 0 ? facebookPosts : demoPosts).map(renderPost)
                        )}
                    </div>
                )}

                {!isLoading && !apiError && facebookPosts.length === 0 && facebookPageId && facebookAccessToken && (
                    <Notice status="warning" isDismissible={false}>
                        {__('No posts found. The page might not have any published posts or the credentials may be incorrect.', 'zoloblocks')}
                    </Notice>
                )}
            </div>
        </>
    );
};

export default Edit;
