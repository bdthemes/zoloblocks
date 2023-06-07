import { RichText, useBlockProps } from '@wordpress/block-editor';

const { DisplayIcon } = window.zoloModule;

const Save = ( { attributes } ) => {
	const {
		uniqueId,
		preset,
		brandPhoto,
		brandName,
		brandDetailPageLink,
		brandAnchorText,
		link,
	} = attributes;

	let linkRel = link && link.opensInNewTab ? 'noopener noreferrer' : '';
	const rel = link && link.addNoFollow ? `${ linkRel } nofollow` : linkRel;

	return (
		<div { ...useBlockProps.save() }>
			<div
				className={ `zb-brand-grid-wrap zb-brand-style-1 ${ uniqueId } ${ preset }` }
			>
				<div className="zb-brand-item">
					<div className="zb-brand-image">
						{ brandPhoto && (
							<img
								src={ brandPhoto.url }
								alt={ brandPhoto.alt || 'Reviewer' }
								className="zolo-img"
							/>
						) }
					</div>
					<div className="zb-brand-content">
						<div className="zb-brand-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-plus"
								viewBox="0 0 16 16"
							>
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
							</svg>
						</div>
						<div className="zb-brand-inner-content">
							<RichText.Content
								tagName="div"
								className="zb-brand-title"
								value={ brandName }
							/>
							<a
								className="zb-brand-link"
								href={
									brandDetailPageLink &&
									brandDetailPageLink.url
								}
								rel={
									brandDetailPageLink &&
									brandDetailPageLink.opensInNewTab &&
									'noreferer'
								}
								target={
									brandDetailPageLink &&
									brandDetailPageLink.opensInNewTab &&
									'_blank'
								}
							>
								{ brandAnchorText && brandAnchorText }
							</a>
						</div>
					</div>
				</div>
				<div className="zb-brand-item">
					<div className="zb-brand-image">
						<img
							src="https://dragwp.com/wp-content/uploads/2023/06/flixbus.png"
							alt=""
						/>
					</div>
					<div className="zb-brand-content">
						<div className="zb-brand-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-plus"
								viewBox="0 0 16 16"
							>
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
							</svg>
						</div>
						<div className="zb-brand-inner-content">
							<div className="zb-brand-title">Flixbus</div>
							<a className="zb-brand-link" href="#">
								www.flixbus.com
							</a>
						</div>
					</div>
				</div>
				<div className="zb-brand-item">
					<div className="zb-brand-image">
						{ brandPhoto && (
							<img
								src={ brandPhoto.url }
								alt={ brandPhoto.alt || 'Reviewer' }
								className="zolo-img"
							/>
						) }
					</div>
					<div className="zb-brand-content">
						<div className="zb-brand-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-plus"
								viewBox="0 0 16 16"
							>
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
							</svg>
						</div>
						<div className="zb-brand-inner-content">
							<div className="zb-brand-title">Indeed</div>
							<a className="zb-brand-link" href="#">
								www.indeed.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
