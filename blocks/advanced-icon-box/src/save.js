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
			{ globalLink === true ? (
				<a
					href={ buttonLink }
					className={ `zolo-block-advanced-icon-box ${ uniqueId } zolo-block-advanced-icon-box-${ preset }` }
				>
					<div className="zolo-block-item">
						<div className={ `zolo-block-icon-wrap` }>
							{ iconType == 'icon' && (
								<DisplayIcon icon={ mainIcon } />
							) }
						</div>

						<div className="zolo-block-body-content">
							<RichText.Content
								value={ iconBoxTitle }
								tagName={ titleTag }
								className={ `zolo-block-title` }
							/>
							<RichText.Content
								value={ iconBoxDescription }
								tagName="div"
								className={ `zolo-block-desc` }
							/>
							<div
								className={ `zolo-block-link-btn ${ buttonPosition }` }
							>
								<div
									className={ `zolo-box-button ${ iconPosition }` }
									href={ buttonLink }
								>
									<RichText.Content value={ buttonText } />
									{ showIcon && (
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
									) }
								</div>
							</div>
						</div>

						<div className="zolo-block-hover-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-gear"
								viewBox="0 0 16 16"
							>
								<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"></path>
								<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"></path>
							</svg>
						</div>
					</div>
				</a>
			) : (
				<div
					className={ `zolo-block-advanced-icon-box ${ uniqueId } zolo-block-advanced-icon-box-${ preset }` }
				>
					<div className="zolo-block-item">
						<div className={ `zolo-block-icon-wrap` }>
							{ iconType == 'icon' && (
								<DisplayIcon icon={ mainIcon } />
							) }
						</div>

						<div className="zolo-block-body-content">
							<RichText.Content
								value={ iconBoxTitle }
								tagName={ titleTag }
								className={ `zolo-block-title` }
							/>
							<RichText.Content
								value={ iconBoxDescription }
								tagName="div"
								className={ `zolo-block-desc` }
							/>
							<div
								className={ `zolo-block-link-btn ${ buttonPosition }` }
							>
								<a
									className={ `zolo-box-button ${ iconPosition }` }
									href={ buttonLink }
								>
									<RichText.Content value={ buttonText } />
									{ showIcon && (
										<DisplayIcon icon={ buttonIcon } />
									) }
								</a>
							</div>
						</div>

						<div className="zolo-block-hover-icon">
							<DisplayIcon icon={ mainIcon } />
						</div>
					</div>
				</div>
			) }
		</div>
	);
};

export default Save;
