import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {
	const {
		uniqueId,
		preset,
		heading,
		brandPhoto,
		brandName,
		brandDetailPageLink,
		brandLabel,
		link,
		showBrandName,
		showBrandLink,
	} = attributes;

	let linkRel = link && link.opensInNewTab ? 'noopener noreferrer' : '';
	const rel = link && link.addNoFollow ? `${ linkRel } nofollow` : linkRel;

	return (
		<div { ...useBlockProps.save() }>
			<div
				className="zolo-image-gallery zolo-img-gallery-style-1"
				style={ { marginBottom: 50 + 'px' } }
			>
				<div className="zolo-item">
					<div className="zolo-image-wrap">
						<img
							src="http://localhost:10011/wp-content/uploads/2023/07/natural-product.jpg"
							alt=""
						/>
					</div>
					<a href="#" className="zolo-icon-wrap">
						<span className="zolo-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-plus-lg"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
								></path>
							</svg>
						</span>
						<span className="zolo-icon-text">zoom</span>
					</a>
					<div className="zolo-title">This Is A Natural Products</div>
				</div>

				<div className="zolo-item">
					<div className="zolo-image-wrap">
						<img
							src="http://localhost:10011/wp-content/uploads/2023/07/natural-cream.jpg"
							alt=""
						/>
					</div>
					<a href="#" className="zolo-icon-wrap">
						<span className="zolo-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-plus-lg"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
								></path>
							</svg>
						</span>
						<span className="zolo-icon-text">zoom</span>
					</a>
					<div className="zolo-title">This Is A Natural Products</div>
				</div>

				<div className="zolo-item">
					<div className="zolo-image-wrap">
						<img
							src="http://localhost:10011/wp-content/uploads/2023/07/facial-cream.jpg"
							alt=""
						/>
					</div>
					<a href="#" className="zolo-icon-wrap">
						<span className="zolo-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-plus-lg"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
								></path>
							</svg>
						</span>
						<span className="zolo-icon-text">zoom</span>
					</a>
					<div className="zolo-title">This Is A Natural Products</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
