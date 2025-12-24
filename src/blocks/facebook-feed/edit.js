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

                    // Then fetch posts with detailed reactions
                    const postsUrl = `https://graph.facebook.com/v18.0/${encodeURIComponent(facebookPageId)}/posts?fields=id,message,created_time,full_picture,reactions.type(LIKE).limit(0).summary(total_count).as(reactions_like),reactions.type(LOVE).limit(0).summary(total_count).as(reactions_love),reactions.type(CARE).limit(0).summary(total_count).as(reactions_care),reactions.type(WOW).limit(0).summary(total_count).as(reactions_wow),reactions.type(HAHA).limit(0).summary(total_count).as(reactions_haha),reactions.type(SAD).limit(0).summary(total_count).as(reactions_sad),reactions.type(ANGRY).limit(0).summary(total_count).as(reactions_angry),reactions.limit(0).summary(total_count).as(reactions_total),comments.summary(true),shares&limit=${postsPerPage}&access_token=${encodeURIComponent(facebookAccessToken)}`;

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
            reactions: { like: 0, love: 0, care: 8, wow: 0, haha: 0, sad: 0, angry: 0 },
            totalReactions: 8,
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
            reactions: { like: 15, love: 7, care: 0, wow: 0, haha: 0, sad: 0, angry: 0 },
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
                            {post.reactions.like > 0 && (
                                <svg className="zolo-fb-reaction-emoji like" width="18" height="18" viewBox="0 0 512 512">
                                    <circle cx="256" cy="256" r="256" fill="#2196F3" />
                                    <path d="M385.7 258.3c-4.2-23.8-24.9-41.9-49.8-41.9h-62.1c5.5-14.8 15.3-41.4 15.3-58.9 0-26.5-13.7-49.6-33.7-57.6-4.9-2-10.2-3-15.6-3-13.4 0-26.2 5.7-35.2 15.6-3.8 4.2-5.6 10.2-4.6 16.1l5.4 32.4c-7.9 20.8-28.7 53.1-45.6 62.1-6.9 3.7-11.3 10.8-11.3 18.6v112.8c0 11.5 9.3 20.8 20.8 20.8h9.1c3.6 13.8 16.1 24 30.9 24h120.3c23.5 0 43.9-16.4 48.8-39.2l21.2-99.7c1.5-7 .9-14.3-2.9-20.8-3.8-6.6-9.8-11.4-16.8-13.5z" fill="#FAFAFA" />
                                    <path d="M103.5 374.1h31.2c8.6 0 15.6-7 15.6-15.6V249.9c0-8.6-7-15.6-15.6-15.6h-31.2c-8.6 0-15.6 7-15.6 15.6v108.6c0 8.6 7 15.6 15.6 15.6z" fill="#FAFAFA" />
                                </svg>
                            )}
                            {post.reactions.love > 0 && (
                                <svg className="zolo-fb-reaction-emoji love" width="18" height="18" viewBox="0 0 512 512">
                                    <circle cx="256" cy="256" r="256" fill="#F44336" />
                                    <path d="M368.5 157.8c-33.5-33.5-87.8-33.5-121.3 0L256 149l-9.2-9.2c-33.5-33.5-87.8-33.5-121.3 0-33.5 33.5-33.5 87.8 0 121.3l130.5 130.5 130.5-130.5c33.5-33.5 33.5-87.8 0-121.3z" fill="#FAFAFA" />
                                </svg>
                            )}
                            {post.reactions.care > 0 && (
                                <svg className="zolo-fb-reaction-emoji care" width="18" height="18" viewBox="0 0 512 512">
                                    <circle cx="256" cy="256" r="256" fill="#FFC107" />
                                    <circle cx="200" cy="220" r="20" fill="#795548" />
                                    <circle cx="312" cy="220" r="20" fill="#795548" />
                                    <path d="M340 280c0-46.4-37.6-84-84-84s-84 37.6-84 84" stroke="#795548" strokeWidth="16" fill="none" strokeLinecap="round" />
                                    <path d="M320 190c-20-35-50-50-50-50s-30 15-50 50" stroke="#FF6B9D" strokeWidth="18" fill="none" strokeLinecap="round" />
                                    <path d="M140 240c30 40 60 60 60 60M372 240c-30 40-60 60-60 60" stroke="#FF6B9D" strokeWidth="16" fill="none" strokeLinecap="round" />
                                </svg>
                            )}
                            {post.reactions.wow > 0 && (
                                <svg className="zolo-fb-reaction-emoji wow" width="18" height="18" viewBox="0 0 512 512">
                                    <circle cx="256" cy="256" r="256" fill="#FFC107" />
                                    <circle cx="180" cy="200" r="32" fill="#795548" />
                                    <circle cx="332" cy="200" r="32" fill="#795548" />
                                    <ellipse cx="256" cy="340" rx="48" ry="64" fill="#795548" />
                                </svg>
                            )}
                            {post.reactions.haha > 0 && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" id="haha">
                                    <path fill="url(#a)" d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8"></path>
                                    <path fill="url(#b)" d="M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008Z"></path>
                                    <path fill="url(#c)" d="M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5Z"></path>
                                    <path fill="#2A3755" d="M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.37-.78.012-1.708.256-2.506.613-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604-.41-.303-.85-.56-1.315-.768-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 0 1 1.552.925Zm3.577 0a8.955 8.955 0 0 1 1.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.028 7.028 0 0 0-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788v-.001Z"></path>
                                    <defs>
                                        <linearGradient id="a" x1="8" x2="8" y1="1.64" y2="16" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FEEA70"></stop>
                                            <stop offset="1" stop-color="#F69B30"></stop>
                                        </linearGradient>
                                        <linearGradient id="b" x1="8" x2="8" y1="7" y2="14" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#472315"></stop>
                                            <stop offset="1" stop-color="#8B3A0E"></stop>
                                        </linearGradient>
                                        <linearGradient id="c" x1="8.005" x2="8.005" y1="11" y2="13.457" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FC607C"></stop>
                                            <stop offset="1" stop-color="#D91F3A"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            )}
                            {post.reactions.sad > 0 && (
                                <svg className="zolo-fb-reaction-emoji sad" width="18" height="18" viewBox="0 0 512 512">
                                    <circle cx="256" cy="256" r="256" fill="#FFC107" />
                                    <path d="M168 192c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16zm160 0c0-8.8 7.2-16 16-16s16 7.2 16 16-7.2 16-16 16-16-7.2-16-16z" fill="#795548" />
                                    <path d="M336 360c0-44.2-35.8-80-80-80s-80 35.8-80 80" stroke="#795548" strokeWidth="16" fill="none" strokeLinecap="round" />
                                    <ellipse cx="152" cy="280" rx="16" ry="24" fill="#42A5F5" />
                                </svg>
                            )}
                            {post.reactions.angry > 0 && (
                                <svg className="zolo-fb-reaction-emoji angry" width="18" height="18" viewBox="0 0 512 512">
                                    <circle cx="256" cy="256" r="256" fill="#FF6F00" />
                                    <path d="M144 176l48 32-16 16-48-32zm224 0l-48 32 16 16 48-32z" fill="#795548" />
                                    <circle cx="184" cy="240" r="24" fill="#795548" />
                                    <circle cx="328" cy="240" r="24" fill="#795548" />
                                    <path d="M336 368c0-44.2-35.8-80-80-80s-80 35.8-80 80" stroke="#795548" strokeWidth="16" fill="none" strokeLinecap="round" />
                                </svg>
                            )}
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
                    <div
                        className={`zolo-fb-posts-container layout-${layoutType} zolo-facebook-feed-${uniqueId || `zolo-fb-${clientId.substr(0, 8)}`}`}
                        style={{
                            '--masonry-columns': attributes.zolo_fbColumnsRange || 3,
                            '--masonry-gap': `${attributes.zolo_fbGapGap || 20}${attributes.zolo_fbGapUnit || 'px'}`,
                        }}
                    >
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
