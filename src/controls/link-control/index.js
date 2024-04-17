/**
 * WordPress dependencies
 */
import {
	BaseControl,
	Button,
	TextControl,
	ToggleControl,
	Popover,
	Dropdown,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

const LinkControl = ({ label, value, onChange }) => {
	const [isExternal, setIsExternal] = useState(false);
	return (
		<div className="zb-link-control-wrapper">
			<BaseControl label={label}>
				<div className="zb-link-flex">
					<TextControl
						value={value && value.url}
						onChange={(newUrl) => {
							onChange({
								...value,
								url: newUrl,
							});
						}}
						placeholder="https://"
					/>
					<Button
						onClick={() => setIsExternal(!isExternal)}
						className={`zb-link-extra-btn ${
							isExternal ? 'zb-extra-active' : ''
						}`}
					>
						{isExternal ? (
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
						) : (
							<svg
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.2196 2H11.7804C11.251 2 10.7433 2.21071 10.369 2.58579C9.99463 2.96086 9.78433 3.46957 9.78433 4V4.18C9.78397 4.53073 9.69157 4.87519 9.51639 5.17884C9.34121 5.48248 9.08942 5.73464 8.78628 5.91L8.35712 6.16C8.05367 6.33554 7.70945 6.42795 7.35907 6.42795C7.00868 6.42795 6.66446 6.33554 6.36101 6.16L6.21131 6.08C5.75327 5.81526 5.2091 5.74344 4.69826 5.88031C4.18743 6.01717 3.75166 6.35154 3.48663 6.81L3.26706 7.19C3.00284 7.64893 2.93116 8.19416 3.06776 8.706C3.20435 9.21783 3.53806 9.65445 3.99564 9.92L4.14534 10.02C4.44703 10.1945 4.69788 10.4451 4.87297 10.7468C5.04806 11.0486 5.14129 11.391 5.14339 11.74V12.25C5.14479 12.6024 5.05322 12.949 4.87796 13.2545C4.70269 13.5601 4.44996 13.8138 4.14534 13.99L3.99564 14.08C3.53806 14.3456 3.20435 14.7822 3.06776 15.294C2.93116 15.8058 3.00284 16.3511 3.26706 16.81L3.48663 17.19C3.75166 17.6485 4.18743 17.9828 4.69826 18.1197C5.2091 18.2566 5.75327 18.1847 6.21131 17.92L6.36101 17.84C6.66446 17.6645 7.00868 17.5721 7.35907 17.5721C7.70945 17.5721 8.05367 17.6645 8.35712 17.84L8.78628 18.09C9.08942 18.2654 9.34121 18.5175 9.51639 18.8212C9.69157 19.1248 9.78397 19.4693 9.78433 19.82V20C9.78433 20.5304 9.99463 21.0391 10.369 21.4142C10.7433 21.7893 11.251 22 11.7804 22H12.2196C12.749 22 13.2567 21.7893 13.631 21.4142C14.0054 21.0391 14.2157 20.5304 14.2157 20V19.82C14.216 19.4693 14.3084 19.1248 14.4836 18.8212C14.6588 18.5175 14.9106 18.2654 15.2137 18.09L15.6429 17.84C15.9463 17.6645 16.2905 17.5721 16.6409 17.5721C16.9913 17.5721 17.3355 17.6645 17.639 17.84L17.7887 17.92C18.2467 18.1847 18.7909 18.2566 19.3017 18.1197C19.8126 17.9828 20.2483 17.6485 20.5134 17.19L20.7329 16.8C20.9972 16.3411 21.0688 15.7958 20.9322 15.284C20.7956 14.7722 20.4619 14.3356 20.0044 14.07L19.8547 13.99C19.55 13.8138 19.2973 13.5601 19.122 13.2545C18.9468 12.949 18.8552 12.6024 18.8566 12.25V11.75C18.8552 11.3976 18.9468 11.051 19.122 10.7455C19.2973 10.4399 19.55 10.1862 19.8547 10.01L20.0044 9.92C20.4619 9.65445 20.7956 9.21783 20.9322 8.706C21.0688 8.19416 20.9972 7.64893 20.7329 7.19L20.5134 6.81C20.2483 6.35154 19.8126 6.01717 19.3017 5.88031C18.7909 5.74344 18.2467 5.81526 17.7887 6.08L17.639 6.16C17.3355 6.33554 16.9913 6.42795 16.6409 6.42795C16.2905 6.42795 15.9463 6.33554 15.6429 6.16L15.2137 5.91C14.9106 5.73464 14.6588 5.48248 14.4836 5.17884C14.3084 4.87519 14.216 4.53073 14.2157 4.18V4C14.2157 3.46957 14.0054 2.96086 13.631 2.58579C13.2567 2.21071 12.749 2 12.2196 2Z"
									stroke="#4D4D4D"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
									stroke="#4D4D4D"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						)}
					</Button>
				</div>
			</BaseControl>

			{isExternal && (
				<div className="zb-link-popover">
					<ToggleControl
						label={__('Open in new tab', 'zoloblocks')}
						checked={value && value.openInNewTab}
						onChange={() => {
							onChange({
								...value,
								openInNewTab: !value.openInNewTab,
							});
						}}
					/>
				</div>
			)}
		</div>
	);
};

export default LinkControl;
