import { RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
const {
	DisplayIcon
} = window.zoloModule;

const Save = ({ attributes }) => {
	const { uniqueId, preset, label, link, showIcon, iconPosition, icon } =
		attributes;
	return (
		<div {...useBlockProps.save()}>
			<div
				className={`zolo-block-wrapper zolo-advanced-button ${uniqueId} ${preset}`}
			>
				<a
					className={`zolo-button ${iconPosition}`}
					href={link && link.url}
					rel={link && link.opensInNewTab && 'noreferrer noopener'}
					target={link && link.opensInNewTab && '_blank'}
				>
					<RichText.Content
						tagName="span"
						className={`zolo-button-content`}
						value={label}
					/>
					{showIcon && (
						<DisplayIcon 
							icon={ icon }
						/>
					)}
				</a>
			</div>
		</div>
	);
};

export default Save;
