/**
 * WordPress dependencies
 */
import { MediaUpload } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ImageAvatar = ({ imageUrl, imageId, onDeleteImage, onEditImage }) => {
	const [hover, setHover] = useState(false);
	const [deleteHover, setDeleteHover] = useState(false);

	return (
		<div
			className="zb-image-avatar-control"
			style={{ backgroundImage: `url(${imageUrl})` }}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<Button
				className="zb-image-avatar-delete"
				onMouseEnter={() => setDeleteHover(true)}
				onMouseLeave={() => setDeleteHover(false)}
				onClick={() => onDeleteImage()}
			>
				<svg
					width={24}
					height={24}
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
						stroke="#4D4D4D"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M15 9L9 15"
						stroke="#4D4D4D"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M9 9L15 15"
						stroke="#4D4D4D"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Button>

			<MediaUpload
				onSelect={(media) => onEditImage(media.url, media.id)}
				allowedTypes={['image']}
				value={imageId && imageId}
				render={({ open }) => (
					<Button className="zolo-replace-btn" onClick={open}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M12 4C14.5905 4 16.8939 5.23053 18.3573 7.14274L16 9.5H22V3.5L19.7814 5.71863C17.9494 3.452 15.1444 2 12 2 6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20 9.40951 20 7.10605 18.7695 5.64274 16.8573L8 14.5 2 14.5V20.5L4.21863 18.2814C6.05062 20.548 8.85557 22 12 22 17.5228 22 22 17.5228 22 12H20Z"></path>
						</svg>
						{__('Replace', 'zolo-blocks')}
					</Button>
				)}
			/>
		</div>
	);
};

export default ImageAvatar;
