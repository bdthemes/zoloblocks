import { RichText, useBlockProps } from '@wordpress/block-editor';

const { DisplayIcon } = window.zoloModule;

const Save = ( { attributes } ) => {
	const {
		uniqueId,
		preset,
		titleTag,
		link,
		showIcon,
		mainIcon,
		buttonIcon,
		iconPosition,
		buttonPosition,
		iconType,
		iconTypeImage,
		iconBoxTitle,
		iconBoxDescription,
		buttonText,
		buttonLink,
		globalLink,
	} = attributes;

	let linkRel = link && link.opensInNewTab ? 'noopener noreferrer' : '';
	const rel = link && link.addNoFollow ? `${ linkRel } nofollow` : linkRel;

	return (
		<div { ...useBlockProps.save() }>
			<div
				className={ `zb-brand-grid-wrap zb-brand-style-1 ${ uniqueId } ${ preset }` }
			>
				<div class="zb-brand-item">
					<div class="zb-brand-image">
						<img
							src="https://dragwp.com/wp-content/uploads/2023/06/zolando.png"
							alt=""
						/>
					</div>
					<div class="zb-brand-content">
						<div class="zb-brand-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-plus"
								viewBox="0 0 16 16"
							>
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
							</svg>
						</div>
						<div class="zb-brand-inner-content">
							<div class="zb-brand-title">zalando</div>
							<a class="zb-brand-link" href="#">
								www.zalando.com
							</a>
						</div>
					</div>
				</div>
				<div class="zb-brand-item">
					<div class="zb-brand-image">
						<img
							src="https://dragwp.com/wp-content/uploads/2023/06/flixbus.png"
							alt=""
						/>
					</div>
					<div class="zb-brand-content">
						<div class="zb-brand-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-plus"
								viewBox="0 0 16 16"
							>
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
							</svg>
						</div>
						<div class="zb-brand-inner-content">
							<div class="zb-brand-title">Flixbus</div>
							<a class="zb-brand-link" href="#">
								www.flixbus.com
							</a>
						</div>
					</div>
				</div>
				<div class="zb-brand-item">
					<div class="zb-brand-image">
						<img
							src="https://dragwp.com/wp-content/uploads/2023/06/indeed.png"
							alt=""
						/>
					</div>
					<div class="zb-brand-content">
						<div class="zb-brand-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-plus"
								viewBox="0 0 16 16"
							>
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
							</svg>
						</div>
						<div class="zb-brand-inner-content">
							<div class="zb-brand-title">Indeed</div>
							<a class="zb-brand-link" href="#">
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
