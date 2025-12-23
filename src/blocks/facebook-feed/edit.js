import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Notice, Spinner } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { layoutTypes, defaultAttributes } from './attributes';
import Inspector from './inspector';
import Style from './styles';
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
    } = attributes;

    const [showApiNotice, setShowApiNotice] = useState(!facebookPageId || !facebookAccessToken);
    const [facebookPosts, setFacebookPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    const blockProps = useBlockProps({
        className: `zolo-facebook-feed zolo-facebook-feed-${layoutType}`,
    });

    // Set unique ID
    useEffect(() => {
        if (!uniqueId) {
            setAttributes({ uniqueId: `zolo-fb-${clientId.substr(0, 8)}` });
        }
    }, []);

    // Fetch Facebook posts when credentials are available
    useEffect(() => {
        if (facebookPageId && facebookAccessToken) {
            setIsLoading(true);
            setApiError(null);
            
            // First, fetch page info (name and picture)
            const pageInfoUrl = `https://graph.facebook.com/v18.0/${encodeURIComponent(facebookPageId)}?fields=name,picture&access_token=${encodeURIComponent(facebookAccessToken)}`;
            
            fetch(pageInfoUrl)
                .then(response => response.json())
                .then(pageData => {
                    if (pageData.error) {
                        setApiError(pageData.error.message);
                        setFacebookPosts([]);
                        setIsLoading(false);
                        return;
                    }
                    
                    const pageName = pageData.name || facebookPageId;
                    const pageAvatar = pageData.picture?.data?.url || 'https://via.placeholder.com/50';
                    
                    // Then fetch posts
                    const postsUrl = `https://graph.facebook.com/v18.0/${encodeURIComponent(facebookPageId)}/posts?fields=id,message,created_time,full_picture,likes.summary(true),comments.summary(true),shares&limit=${postsPerPage}&access_token=${encodeURIComponent(facebookAccessToken)}`;
                    
                    return fetch(postsUrl)
                        .then(response => response.json())
                        .then(data => {
                            if (data.error) {
                                setApiError(data.error.message);
                                setFacebookPosts([]);
                            } else if (data.data && data.data.length > 0) {
                                // Format posts
                                const formattedPosts = data.data.map((post, index) => {
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
                                        reactions: { like: 0, love: 0 },
                                        totalReactions: post.likes?.summary?.total_count || 0,
                                        comments: post.comments?.summary?.total_count || 0,
                                        shares: post.shares?.count || 0,
                                    };
                                });
                                setFacebookPosts(formattedPosts);
                            } else {
                                setFacebookPosts([]);
                            }
                            setIsLoading(false);
                        });
                })
                .catch(error => {
                    console.error('Error fetching Facebook data:', error);
                    setApiError(error.message);
                    setFacebookPosts([]);
                    setIsLoading(false);
                });
        } else {
            setFacebookPosts([]);
        }
    }, [facebookPageId, facebookAccessToken, postsPerPage]);

    // Demo posts for preview
    const demoPosts = [
        {
            id: 1,
            author: 'Sigmative',
            avatar: 'https://via.placeholder.com/50',
            date: '2 weeks ago',
            content: 'The Sigmative crew is all set for WordCamp Malaysia! 🇲🇾 Tomorrow, if you spot any of us at the venue, feel free to stop us, say hi, and let\'s chat about everything social media integration for WordPress sites! See you there!',
            hashtags: ['#WordCampMY', '#WCMY25', '#WordCamp'],
            image: 'https://via.placeholder.com/600x400',
            reactions: { like: 8, love: 4 },
            totalReactions: 12,
            comments: 5,
            shares: 2,
        },
        {
            id: 2,
            author: 'Sigmative',
            avatar: 'https://via.placeholder.com/50',
            date: '1 week ago',
            content: 'Exciting news! We just launched our new feature that helps you connect with your audience better. Check it out!',
            image: 'https://via.placeholder.com/600x400',
            reactions: { like: 15, love: 7 },
            totalReactions: 22,
            comments: 8,
            shares: 4,
        },
        {
            id: 3,
            author: 'Sigmative',
            avatar: 'https://via.placeholder.com/50',
            date: '3 days ago',
            content: 'Thanks to all our amazing users for your continued support! We couldn\'t do this without you. 💙',
            reactions: { like: 25, love: 10 },
            totalReactions: 35,
            comments: 12,
            shares: 6,
        },
    ];

    const renderPost = (post) => (
        <div key={post.id} className="zolo-fb-post">
            <div className="zolo-fb-post-header">
                {showAvatar && (
                    <img src={post.avatar} alt={post.author} className="zolo-fb-avatar" />
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
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
                            <svg className="zolo-fb-reaction-emoji like" width="18" height="18" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" fill="#1877f2"/>
                                <path d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41" fill="#fff"/>
                            </svg>
                            <svg className="zolo-fb-reaction-emoji love" width="18" height="18" viewBox="0 0 16 16">
                                <circle cx="8" cy="8" r="8" fill="#f33e58"/>
                                <path d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41" fill="#fff"/>
                            </svg>
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
            <Style attributes={attributes} uniqueId={uniqueId || `zolo-fb-${clientId.substr(0, 8)}`} />
            
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
                    <div className={`zolo-fb-posts-container layout-${layoutType} zolo-facebook-feed-${uniqueId || `zolo-fb-${clientId.substr(0, 8)}`}`}>
                        {(facebookPosts.length > 0 ? facebookPosts : demoPosts).map(renderPost)}
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
