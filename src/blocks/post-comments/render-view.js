import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import CommentItem from './comment-item';
const { isEmpty, ZoloSpinner } = window.zoloModule;

export default function RenderView({ attributes }) {
    const { commentQuery, textLimit, avatarSize } = attributes;
    const [isLoading, setIsLoading] = useState(true);
    const [commentResults, setCommentResults] = useState([]);

    const dataFetch = async () => {
        const formData = new FormData();
        formData.append('action', 'zolo_comments_ajax');
        formData.append('zolo_nonce', zoloParams.zolo_nonce);
        formData.append('commentQuery', JSON.stringify(commentQuery));
        formData.append('textLimit', textLimit);
        formData.append('avatarSize', avatarSize);

        try {
            const response = await apiFetch({
                url: zoloParams?.ajaxurl,
                method: 'POST',
                body: formData,
            });
            if (response.success) {
                setCommentResults(response.data.results);
            } else {
                setCommentResults([]);
            }
        } catch (error) {
            console.error('Error:', error);
            setCommentResults([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        setIsLoading(true);
        dataFetch();
    }, [commentQuery]);

    return (
        <>
            {isLoading ? (
                <div className="preloader">
                    <ZoloSpinner />
                </div>
            ) : commentResults.length > 0 ? (
                commentResults.map((comment, index) => <CommentItem key={index} comment={comment} attributes={attributes} />)
            ) : (
                <p>No items found.</p>
            )}
        </>
    );
}
