import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
	const { uniqueId, preset, label, link, showIcon, iconPosition } =
		attributes;

	let linkRel = link && link.opensInNewTab ? 'noopener noreferrer' : '';
	const rel = link && link.addNoFollow ? `${linkRel} nofollow` : linkRel;

	return (
		<div {...useBlockProps.save()}>
			<div
				className={`zolo-block-wrapper zolo-advanced-button ${uniqueId} ${preset}`}
			>
				<a
					className={`zolo-button ${iconPosition}`}
					href={link && link.url}
					rel={rel}
				>
					<RichText.Content
						tagName="span"
						className={`zolo-button-content`}
						value={label}
					/>
					{showIcon && (
						<svg
							clipRule="evenodd"
							fillRule="evenodd"
							strokeLinejoin="round"
							strokeMiterlimit="2"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							className="zolo-button-icon"
						>
							<path
								d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
								fill-rule="nonzero"
							/>
						</svg>
					)}
				</a>
			</div>
		</div>
	);
};

export default Save;
