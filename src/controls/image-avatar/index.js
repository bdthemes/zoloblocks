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

	const deleteButtonStyle = {
		visibility: hover ? 'visible' : 'hidden',
		backgroundColor: deleteHover ? 'white' : '#64666a',
		color: '#b4b5b7',
		position: 'absolute',
		right: 34,
		fontSize: 16,
		alignSelf: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
		cursor: 'pointer',
	};

	return (
		<div
			className="zb-image-avatar-control"
			style={{ backgroundImage: `url(${imageUrl})` }}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<span
				className="image-avatar-delete dashicons dashicons-trash"
				onMouseEnter={() => setDeleteHover(true)}
				onMouseLeave={() => setDeleteHover(false)}
				style={deleteButtonStyle}
				onClick={() => onDeleteImage()}
			></span>

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
