import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Notice, Spinner } from '@wordpress/components';
import { useEffect, useState, useRef } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { layoutTypes } from './attributes';
import Inspector from './inspector';
import Style from './styles';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import './editor.scss';

const Edit = ({ attributes, setAttributes, clientId }) => {
    const carouselRef = useRef(null);
    const swiperInstance = useRef(null);

    const [showApiNotice, setShowApiNotice] = useState(false);
    const [instagramData, setInstagramData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    const finalUniqueId = attributes.uniqueId || `zolo-ig-${clientId.substr(0, 8)}`;
    
    const blockProps = useBlockProps({
        className: `parent-${finalUniqueId} zolo-block ${finalUniqueId} zolo-instagram-feed zolo-instagram-feed-${attributes.layoutType}`,
    });

    // Set unique ID
    useEffect(() => {
        if (!attributes.uniqueId) {
            setAttributes({ uniqueId: finalUniqueId });
        }
    }, []);

    // Fetch Instagram posts when credentials are available
    useEffect(() => {
        setIsLoading(true);
        setApiError(null);

        // Get Instagram credentials from WordPress settings
        apiFetch({ path: '/wp/v2/settings' })
            .then((settings) => {
                const accessToken = settings.zolo_instagram_access_token || '';

                if (!accessToken) {
                    throw new Error(__('Instagram Access Token not configured.', 'zoloblocks'));
                }

                // Fetch user profile and media using Instagram Basic Display API
                const userUrl = `https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${accessToken}`;
                
                return fetch(userUrl)
                    .then(response => response.json())
                    .then(userData => {
                        if (userData.error) {
                            throw new Error(userData.error.message);
                        }

                        // Try to fetch profile picture using user ID
                        const userId = userData.id;
                        const profileUrl = `https://graph.instagram.com/${userId}?fields=profile_picture_url&access_token=${accessToken}`;
                        
                        return fetch(profileUrl)
                            .then(response => response.json())
                            .then(profileData => {
                                const profilePicture = profileData.profile_picture_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.username)}&background=e9d5ff&color=7c3aed&size=150`;

                                // Fetch media
                                const mediaUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&limit=${attributes.postsPerPage}&access_token=${accessToken}`;

                                return fetch(mediaUrl)
                                    .then(response => response.json())
                                    .then(mediaData => {
                                        if (mediaData.error) {
                                            throw new Error(mediaData.error.message);
                                        }
                                        
                                        return {
                                            username: userData.username || 'Instagram User',
                                            account_type: userData.account_type || 'PERSONAL',
                                            media_count: userData.media_count || 0,
                                            followers: 0, // Basic Display API doesn't provide follower count
                                            bio: 'Bringing vibes to your feed! Discover the latest trends and must-have styles.',
                                            profile_picture: profilePicture,
                                            media: mediaData.data || []
                                        };
                                    });
                            })
                            .catch(() => {
                                // Fallback if profile picture fetch fails
                                const mediaUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&limit=${attributes.postsPerPage}&access_token=${accessToken}`;

                                return fetch(mediaUrl)
                                    .then(response => response.json())
                                    .then(mediaData => {
                                        if (mediaData.error) {
                                            throw new Error(mediaData.error.message);
                                        }
                                        
                                        return {
                                            username: userData.username || 'Instagram User',
                                            account_type: userData.account_type || 'PERSONAL',
                                            media_count: userData.media_count || 0,
                                            followers: 0,
                                            bio: 'Bringing vibes to your feed! Discover the latest trends and must-have styles.',
                                            profile_picture: `https://ui-avatars.com/api/?name=${encodeURIComponent(userData.username)}&background=e9d5ff&color=7c3aed&size=150`,
                                            media: mediaData.data || []
                                        };
                                    });
                            });
                    });
            })
            .then((response) => {
                setInstagramData(response);
                setShowApiNotice(false);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Instagram API Error:', error);
                setApiError(error.message);
                setShowApiNotice(true);
                setIsLoading(false);
            });
    }, [attributes.postsPerPage]);

    // Initialize carousel when layout type is carousel
    useEffect(() => {
        if (attributes.layoutType === layoutTypes.CAROUSEL && carouselRef.current && instagramData?.media?.length > 0) {
            // Destroy existing instance
            if (swiperInstance.current) {
                swiperInstance.current.destroy(true, true);
            }

            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const swiperEl = carouselRef.current.querySelector('.swiper');
                if (swiperEl) {
                    swiperInstance.current = new Swiper(swiperEl, {
                        modules: [Navigation, Pagination, Autoplay],
                        slidesPerView: 1,
                        spaceBetween: attributes.zolo_igGapGap || 20,
                        loop: attributes.carouselLoop,
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
                        },
                        breakpoints: {
                            640: {
                                slidesPerView: attributes.zolo_MOBigColumnsRange || 1,
                            },
                            768: {
                                slidesPerView: attributes.zolo_TABigColumnsRange || 2,
                            },
                            1024: {
                                slidesPerView: attributes.zolo_igColumnsRange || 3,
                            },
                        },
                    });
                }
            }, 100);
        }

        return () => {
            if (swiperInstance.current) {
                swiperInstance.current.destroy(true, true);
                swiperInstance.current = null;
            }
        };
    }, [attributes.layoutType, instagramData, attributes.carouselAutoplay, attributes.carouselSpeed, attributes.carouselLoop, attributes.zolo_igColumnsRange, attributes.zolo_TABigColumnsRange, attributes.zolo_MOBigColumnsRange, attributes.zolo_igGapGap]);

    const getTimeAgo = (timestamp) => {
        const createdDate = new Date(timestamp);
        const now = new Date();
        const diffTime = Math.abs(now - createdDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        const diffMinutes = Math.floor(diffTime / (1000 * 60));

        if (diffDays > 0) {
            return `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
        } else if (diffHours > 0) {
            return `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
        } else if (diffMinutes > 0) {
            return `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`;
        } else {
            return 'Just now';
        }
    };

    const renderHeader = () => {
        if (!attributes.showHeader || !instagramData) return null;

        return (
            <div className="zolo-ig-header">
                <div className="zolo-ig-profile">
                    <div className="zolo-ig-avatar">
                        <img src={instagramData.profile_picture} alt={instagramData.username} />
                    </div>
                    <div className="zolo-ig-profile-info">
                        {attributes.showUsername && (
                            <div className="zolo-ig-username">
                                <a href={`https://instagram.com/${instagramData.username}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.preventDefault()}>
                                    @{instagramData.username}
                                </a>
                            </div>
                        )}
                        <div className="zolo-ig-stats">
                            <span className="zolo-ig-posts">
                                <strong>{instagramData.media_count}</strong> Posts
                            </span>
                            {attributes.showFollowers && (
                                <span className="zolo-ig-followers">
                                    <strong>{instagramData.followers}</strong> Followers
                                </span>
                            )}
                        </div>
                        {attributes.showBio && instagramData.bio && (
                            <div className="zolo-ig-bio">{instagramData.bio}</div>
                        )}
                    </div>
                </div>
                {attributes.showFollowButton && (
                    <RichText
                        tagName="a"
                        href={`https://instagram.com/${instagramData.username}`}
                        className="zolo-ig-follow-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        value={attributes.followButtonText}
                        onChange={(value) => setAttributes({ followButtonText: value })}
                        placeholder={__('Follow us on Instagram', 'zoloblocks')}
                        allowedFormats={['core/bold', 'core/italic']}
                    />
                )}
            </div>
        );
    };

    const renderPost = (post, index) => {
        const imageUrl = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;
        const caption = post.caption || '';
        const truncatedCaption = caption.length > attributes.captionLength
            ? caption.substring(0, attributes.captionLength) + '...'
            : caption;

        return (
            <div key={post.id} className={`zolo-ig-item ${attributes.imageRatio}`}>
                <div className="zolo-ig-item-inner">
                    <a 
                        href={post.permalink} 
                        target={attributes.openInNewTab ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="zolo-ig-link"
                        onClick={(e) => e.preventDefault()}
                    >
                        <div className="zolo-ig-image-wrapper">
                            <div className="zolo-ig-instagram-icon">
                                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </div>
                            <img src={imageUrl} alt={caption} loading="lazy" />
                            {post.media_type === 'VIDEO' && (
                                <div className="zolo-ig-video-icon">
                                    <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </div>
                            )}
                            <div className="zolo-ig-overlay">
                                <div className="zolo-ig-overlay-content">
                                    {attributes.showLikes && post.like_count !== undefined && (
                                        <span className="zolo-ig-likes">
                                            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                            </svg>
                                            {post.like_count}
                                        </span>
                                    )}
                                    {attributes.showComments && post.comments_count !== undefined && (
                                        <span className="zolo-ig-comments">
                                            <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                                            </svg>
                                            {post.comments_count}
                                        </span>
                                    )}
                                </div>
                                {attributes.showCaption && truncatedCaption && (
                                    <div className="zolo-ig-caption-overlay">
                                        {truncatedCaption}
                                    </div>
                                )}
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    };

    const renderGrid = () => {
        if (!instagramData?.media) return null;

        return (
            <div className="zolo-ig-grid">
                {instagramData.media.map((post, index) => renderPost(post, index))}
            </div>
        );
    };

    const renderMasonry = () => {
        if (!instagramData?.media) return null;

        return (
            <div className="zolo-ig-masonry">
                {instagramData.media.map((post, index) => renderPost(post, index))}
            </div>
        );
    };

    const renderCarousel = () => {
        if (!instagramData?.media) return null;

        return (
            <div ref={carouselRef} className="zolo-ig-carousel">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {instagramData.media.map((post, index) => (
                            <div key={post.id} className="swiper-slide">
                                {renderPost(post, index)}
                            </div>
                        ))}
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    };

    const renderContent = () => {
        switch (attributes.layoutType) {
            case layoutTypes.MASONRY:
                return renderMasonry();
            case layoutTypes.CAROUSEL:
                return renderCarousel();
            case layoutTypes.GRID:
            default:
                return renderGrid();
        }
    };

    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <Style attributes={attributes} setAttributes={setAttributes} name="zolo/instagram-feed" />
            <div {...blockProps}>
                {showApiNotice && (
                    <Notice status="warning" isDismissible={false}>
                        <p>
                            {apiError || __('Instagram Access Token not configured.', 'zoloblocks')}
                        </p>
                        <p>
                            {__('Please configure your Instagram credentials in Settings > ZoloBlocks > Instagram.', 'zoloblocks')}
                        </p>
                    </Notice>
                )}
                
                {isLoading && !instagramData && (
                    <div className="zolo-loading">
                        <Spinner />
                    </div>
                )}

                {instagramData && (
                    <div className="zolo-ig-container">
                        {renderHeader()}
                        {renderContent()}
                    </div>
                )}
            </div>
        </>
    );
};

export default Edit;
