import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Notice, Spinner } from '@wordpress/components';
import { useEffect, useState, useRef } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { layoutTypes, defaultAttributes } from './attributes';
import Inspector from './inspector';
import Style from './styles';
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
        reviewsPerPage,
        showAvatar,
        showReviewerName,
        showDate,
        showRating,
        showRecommendation,
        showReviewText,
        reviewTextLength,
        showReadMore,
        readMoreText,
        showHeader,
        headerTitle,
        showWriteReviewBtn,
        writeReviewBtnText,
        writeReviewBtnUrl,
        showHeaderRating,
        carouselAutoplay,
        carouselSpeed,
        carouselLoop,
        resMode,
    } = attributes;

    const carouselRef = useRef(null);
    const swiperInstance = useRef(null);

    const [facebookReviews, setFacebookReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    const blockProps = useBlockProps({
        className: `zolo-facebook-reviews zolo-facebook-reviews-${layoutType}`,
    });

    // Set unique ID
    useEffect(() => {
        if (!uniqueId) {
            setAttributes({ uniqueId: `zolo-fb-reviews-${clientId.substr(0, 8)}` });
        }
    }, []);

    // Fetch Facebook reviews when component mounts
    useEffect(() => {
        setIsLoading(true);
        setApiError(null);

        wp.apiFetch({ path: '/wp/v2/settings' })
            .then((settings) => {
                const pageId = settings.zolo_facebook_page_id || '';
                const accessToken = settings.zolo_facebook_access_token || '';

                if (!pageId || !accessToken) {
                    throw new Error(__('Facebook Page ID or Access Token not configured.', 'zoloblocks'));
                }

                // Fetch directly from Facebook Graph API
                const reviewsUrl = `https://graph.facebook.com/v18.0/${pageId}/ratings?fields=id,created_time,recommendation_type,review_text,reviewer{id,name,picture}&access_token=${accessToken}&limit=${reviewsPerPage}`;

                return fetch(reviewsUrl)
                    .then(response => response.json())
                    .then(data => {
                        if (data.error) {
                            throw new Error(data.error.message);
                        }
                        return { reviews: data.data || [], page_id: pageId };
                    });
            })
            .then((response) => {
                if (response.reviews) {
                    const pageIdFromApi = response.page_id || '';
                    const formattedReviews = response.reviews.map((review, index) => {
                        const createdDate = new Date(review.created_time);
                        const now = new Date();
                        const diffTime = Math.abs(now - createdDate);
                        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
                        const diffMinutes = Math.floor(diffTime / (1000 * 60));
                        const diffMonths = Math.floor(diffDays / 30);
                        const diffYears = Math.floor(diffDays / 365);

                        let timeAgo;
                        if (diffYears > 0) {
                            timeAgo = `${diffYears} ${diffYears === 1 ? 'year' : 'years'} ago`;
                        } else if (diffMonths > 0) {
                            timeAgo = `${diffMonths} ${diffMonths === 1 ? 'month' : 'months'} ago`;
                        } else if (diffDays > 0) {
                            timeAgo = `${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago`;
                        } else if (diffHours > 0) {
                            timeAgo = `${diffHours} ${diffHours === 1 ? 'hour' : 'hours'} ago`;
                        } else {
                            timeAgo = `${diffMinutes} ${diffMinutes === 1 ? 'minute' : 'minutes'} ago`;
                        }

                        const reviewerName = review.reviewer?.name || 'Anonymous';
                        let reviewerAvatar = review.reviewer?.picture?.data?.url || review.reviewer?.picture?.url || '';

                        console.log(review);
                        console.log(review.reviewer?.name);
                        console.log(review.reviewer?.picture?.data?.url)
                        
                        // If picture is a string URL, use it directly
                        if (!reviewerAvatar && typeof review.reviewer?.picture === 'string') {
                            reviewerAvatar = review.reviewer.picture;
                        }
                        
                        // Generate UI Avatar if no picture available
                        if (!reviewerAvatar) {
                            const colors = ['FF6B6B', '4ECDC4', '45B7D1', 'FFA07A', '98D8C8', 'F7DC6F'];
                            const randomColor = colors[index % colors.length];
                            reviewerAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(reviewerName)}&size=100&background=${randomColor}&color=fff`;
                        }

                        return {
                            id: review.id || index,
                            reviewerName: reviewerName,
                            reviewerAvatar: reviewerAvatar,
                            date: timeAgo,
                            rating: review.rating || 5,
                            reviewText: review.review_text || review.text || review.recommendation_type || '',
                            hasRecommendation: review.recommendation_type === 'positive',
                            pageId: pageIdFromApi,
                        };
                    });
                    setFacebookReviews(formattedReviews);
                } else {
                    setFacebookReviews([]);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching Facebook reviews:', error);
                setApiError(error.message || __('Failed to fetch Facebook reviews. Please check your API settings.', 'zoloblocks'));
                
                // Use demo reviews as fallback
                const demoReviews = [
                    {
                        id: '1',
                        reviewerName: 'Sarah Johnson',
                        reviewerAvatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=100&background=FF6B6B&color=fff',
                        date: '2 days ago',
                        rating: 5,
                        reviewText: 'Excellent service! The team was professional and delivered beyond our expectations. Highly recommend!',
                        hasRecommendation: true,
                    },
                    {
                        id: '2',
                        reviewerName: 'Michael Chen',
                        reviewerAvatar: 'https://ui-avatars.com/api/?name=Michael+Chen&size=100&background=4ECDC4&color=fff',
                        date: '1 week ago',
                        rating: 5,
                        reviewText: 'Great experience from start to finish. Very responsive and attentive to details.',
                        hasRecommendation: true,
                    },
                    {
                        id: '3',
                        reviewerName: 'Emily Rodriguez',
                        reviewerAvatar: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&size=100&background=45B7D1&color=fff',
                        date: '2 weeks ago',
                        rating: 4,
                        reviewText: 'Quality work and friendly staff. Will definitely use their services again.',
                        hasRecommendation: true,
                    },
                    {
                        id: '4',
                        reviewerName: 'David Kim',
                        reviewerAvatar: 'https://ui-avatars.com/api/?name=David+Kim&size=100&background=FFA07A&color=fff',
                        date: '3 weeks ago',
                        rating: 5,
                        reviewText: 'Outstanding! They went above and beyond to ensure everything was perfect.',
                        hasRecommendation: true,
                    },
                    {
                        id: '5',
                        reviewerName: 'Jennifer Smith',
                        reviewerAvatar: 'https://ui-avatars.com/api/?name=Jennifer+Smith&size=100&background=98D8C8&color=fff',
                        date: '1 month ago',
                        rating: 5,
                        reviewText: 'Fantastic service! Professional, reliable, and excellent quality.',
                        hasRecommendation: true,
                    },
                    {
                        id: '6',
                        reviewerName: 'Robert Taylor',
                        reviewerAvatar: 'https://ui-avatars.com/api/?name=Robert+Taylor&size=100&background=F7DC6F&color=fff',
                        date: '1 month ago',
                        rating: 4,
                        reviewText: 'Very satisfied with the results. Good communication throughout the process.',
                        hasRecommendation: false,
                    },
                ];
                setFacebookReviews(demoReviews.slice(0, reviewsPerPage));
                setIsLoading(false);
            });
    }, [reviewsPerPage]);

    // Initialize Swiper for carousel layout
    useEffect(() => {
        if (layoutType === 'carousel' && carouselRef.current && !swiperInstance.current) {
            const container = carouselRef.current.querySelector('.swiper');
            if (container) {
                const deskCols = Math.min(attributes.zolo_fbReviewsColumnsRange || 3, 3);
                const tabCols = Math.min(attributes.zolo_TABfbReviewsColumnsRange || 2, 2);
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
    }, [layoutType, carouselAutoplay, carouselSpeed, carouselLoop, resMode, attributes.zolo_fbReviewsColumnsRange, attributes.zolo_TABfbReviewsColumnsRange, attributes.zolo_MOBfbReviewsColumnsRange]);

    // Update Swiper when reviews change
    useEffect(() => {
        if (swiperInstance.current) {
            swiperInstance.current.update();
        }
    }, [facebookReviews]);

    // Demo reviews for preview
    const demoReviews = [
        {
            id: 1,
            reviewerName: 'MD Mehdi Hasan Asif',
            reviewerAvatar: 'https://ui-avatars.com/api/?name=MD+Mehdi+Hasan+Asif&size=100&background=4267B2&color=fff',
            date: 'August 20, 2025',
            rating: 5,
            reviewText: 'The photography here is always breathtaking, with so much passion and attention to detail in every shot.',
            hasRecommendation: true,
        },
        {
            id: 2,
            reviewerName: 'Sarah Johnson',
            reviewerAvatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=100&background=E91E63&color=fff',
            date: 'July 15, 2025',
            rating: 5,
            reviewText: 'Absolutely amazing service! The team went above and beyond to ensure everything was perfect. Highly recommend!',
            hasRecommendation: true,
        },
        {
            id: 3,
            reviewerName: 'John Smith',
            reviewerAvatar: 'https://ui-avatars.com/api/?name=John+Smith&size=100&background=FF9800&color=fff',
            date: 'June 30, 2025',
            rating: 5,
            reviewText: 'Outstanding quality and professionalism. I couldn\'t be happier with the results. Will definitely use again!',
            hasRecommendation: true,
        },
        {
            id: 4,
            reviewerName: 'Emily Chen',
            reviewerAvatar: 'https://ui-avatars.com/api/?name=Emily+Chen&size=100&background=9C27B0&color=fff',
            date: 'May 10, 2025',
            rating: 5,
            reviewText: 'Exceptional experience from start to finish. The attention to detail is remarkable and truly sets them apart.',
            hasRecommendation: true,
        },
        {
            id: 5,
            reviewerName: 'Michael Brown',
            reviewerAvatar: 'https://ui-avatars.com/api/?name=Michael+Brown&size=100&background=00BCD4&color=fff',
            date: 'April 22, 2025',
            rating: 5,
            reviewText: 'Best decision I made! Professional, creative, and delivered beyond my expectations. Five stars all the way!',
            hasRecommendation: true,
        },
        {
            id: 6,
            reviewerName: 'Lisa Anderson',
            reviewerAvatar: 'https://ui-avatars.com/api/?name=Lisa+Anderson&size=100&background=4CAF50&color=fff',
            date: 'March 18, 2025',
            rating: 5,
            reviewText: 'Simply wonderful! The quality of work speaks for itself. I am extremely satisfied and would recommend to anyone.',
            hasRecommendation: true,
        },
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <svg
                    key={i}
                    className={`zolo-fb-review-star ${i <= rating ? 'filled' : ''}`}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={i <= rating ? '#FFC107' : '#E0E0E0'}
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            );
        }
        return stars;
    };

    const renderReview = (review) => {
        const pageId = review.pageId || '';
        const fbReviewsLink = pageId ? `https://www.facebook.com/${pageId}/reviews` : '#';
        
        return (
        <div key={review.id} className="zolo-fb-review-card">
            {showAvatar && (
                <div className="zolo-fb-reviewer-image">
                    <a href={fbReviewsLink} target="_blank" rel="noopener noreferrer" className="zolo-fb-reviewer-image-url">
                        <img className="zolo-fb-reviewer-avatar" src={review.reviewerAvatar} alt={review.reviewerName} />
                    </a>
                </div>
            )}
            
            <div className="zolo-fb-review-info">
                {showReviewerName && (
                    <a href={fbReviewsLink} target="_blank" rel="noopener noreferrer" className="zolo-fb-reviewer-name-url">
                        <span className="zolo-fb-reviewer-name">{review.reviewerName}</span>
                    </a>
                )}
                
                {showRecommendation && review.hasRecommendation && (
                    <div className="zolo-fb-rating-wrapper zolo-fb-rating">
                        <svg className="wpsr-recommends" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 14l-3.293 3.293A1 1 0 0 1 4 16.586V14h-.154c-1.337 0-1.822-.14-2.311-.4A2.726 2.726 0 0 1 .4 12.464c-.261-.488-.4-.973-.4-2.309v-6.31c0-1.336.14-1.821.4-2.31A2.726 2.726 0 0 1 1.536.4c.488-.261.973-.4 2.309-.4h10.31c1.336 0 1.821.14 2.31.4.49.262.873.646 1.134 1.135.262.489.401.974.401 2.31v6.31c0 1.336-.14 1.821-.4 2.31a2.726 2.726 0 0 1-1.135 1.134c-.489.262-.974.401-2.31.401H9zm0-5l1.454.765a.5.5 0 0 0 .726-.527l-.278-1.62 1.177-1.147a.5.5 0 0 0-.277-.853l-1.626-.236-.728-1.474a.5.5 0 0 0-.896 0l-.728 1.474-1.626.236a.5.5 0 0 0-.277.853l1.177 1.147-.278 1.62a.5.5 0 0 0 .726.527L9 9z" fill="#f36b7f"/>
                        </svg>
                        <span>{__('recommends', 'zoloblocks')}</span>
                    </div>
                )}
                
                {showDate && (
                    <span className="zolo-fb-review-date">{review.date}</span>
                )}
                
                {showReviewText && review.reviewText && (
                    <div className="zolo-fb-review-content">
                        <p>
                            {reviewTextLength > 0 && review.reviewText.length > reviewTextLength
                                ? review.reviewText.substring(0, reviewTextLength) + '...'
                                : review.reviewText}
                        </p>
                        {showReadMore && reviewTextLength > 0 && review.reviewText.length > reviewTextLength && (
                            <span className="zolo-fb-read-more">{readMoreText}</span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
    };

    return (
        <>
            <Style 
                attributes={attributes} 
                setAttributes={setAttributes}
                uniqueId={uniqueId || `zolo-fb-reviews-${clientId.substr(0, 8)}`} 
            />

            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                block={{ name: 'zolo/facebook-reviews', clientId }}
            />

            <div {...blockProps}>
                {isLoading && (
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                        <Spinner />
                        <p>{__('Loading Facebook reviews...', 'zoloblocks')}</p>
                    </div>
                )}

                {!isLoading && apiError && (
                    <Notice status="error" isDismissible={false}>
                        {__('Facebook API Error: ', 'zoloblocks')}{apiError}
                    </Notice>
                )}

                {!isLoading && !apiError && (
                    <>
                        {showHeader && (
                            <div className="zolo-fb-reviews-header">
                                <div className="zolo-fb-reviews-header-left">
                                    <svg className="zolo-fb-logo" width="32" height="32" viewBox="0 0 24 24" fill="#1877F2">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                    <div className="zolo-fb-reviews-header-info">
                                        <h2 className="zolo-fb-reviews-title">{headerTitle}</h2>
                                        {showHeaderRating && (
                                            <div className="zolo-fb-reviews-header-rating">
                                                <span className="zolo-fb-rating-number">5.0</span>
                                                <div className="zolo-fb-rating-stars">
                                                    {renderStars(5)}
                                                </div>
                                                <span className="zolo-fb-rating-count">Suggested by {facebookReviews.length > 0 ? facebookReviews.length : demoReviews.length} Clients</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {showWriteReviewBtn && (
                                    <a 
                                        href={writeReviewBtnUrl || '#'} 
                                        className="zolo-fb-write-review-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {writeReviewBtnText}
                                    </a>
                                )}
                            </div>
                        )}

                        <div
                            ref={carouselRef}
                            className={`zolo-fb-reviews-container layout-${layoutType} zolo-facebook-reviews-${uniqueId || `zolo-fb-reviews-${clientId.substr(0, 8)}`}`}
                        >
                        {layoutType === 'carousel' ? (
                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    {(facebookReviews.length > 0 ? facebookReviews : demoReviews).map(review => (
                                        <div key={review.id} className="swiper-slide">
                                            {renderReview(review)}
                                        </div>
                                    ))}
                                </div>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-pagination"></div>
                            </div>
                        ) : (
                            (facebookReviews.length > 0 ? facebookReviews : demoReviews).map(renderReview)
                        )}
                        </div>
                    </>
                )}

                {!isLoading && !apiError && facebookReviews.length === 0 && (
                    <Notice status="warning" isDismissible={false}>
                        {__('No reviews found. Configure your Facebook API settings to display reviews.', 'zoloblocks')}
                    </Notice>
                )}
            </div>
        </>
    );
};

export default Edit;
