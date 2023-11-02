/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/components';

const LinkUnlink = ({ isLinked }) => {
	return (
		<>
			{isLinked ? (
				<Icon
					icon={() => (
						<svg
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 13.1404C10.3955 13.6728 10.9001 14.1134 11.4796 14.4322C12.0591 14.7511 12.6999 14.9407 13.3586 14.9882C14.0172 15.0357 14.6783 14.94 15.297 14.7076C15.9157 14.4751 16.4775 14.1115 16.9443 13.6412L19.7073 10.8588C20.5462 9.98423 21.0103 8.81284 20.9998 7.59697C20.9893 6.38109 20.505 5.21801 19.6512 4.35822C18.7974 3.49844 17.6424 3.01074 16.435 3.00018C15.2276 2.98961 14.0644 3.45702 13.1959 4.30173L11.6117 5.88768"
								stroke="#4D4D4D"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M14 10.8596C13.6045 10.3272 13.0999 9.88658 12.5204 9.56776C11.9409 9.24894 11.3001 9.05935 10.6414 9.01185C9.98279 8.96435 9.32171 9.06004 8.70302 9.29245C8.08433 9.52486 7.52251 9.88853 7.05567 10.3588L4.29268 13.1412C3.45384 14.0158 2.98968 15.1872 3.00017 16.403C3.01067 17.6189 3.49497 18.782 4.34877 19.6418C5.20257 20.5016 6.35756 20.9893 7.56498 20.9998C8.77239 21.0104 9.93562 20.543 10.8041 19.6983L12.379 18.1123"
								stroke="#4D4D4D"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					)}
				/>
			) : (
				<Icon
					icon={() => (
						<svg
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M18.26 12L19.7786 10.4886H19.761C20.5738 9.64543 21.0192 8.51382 20.9994 7.34221C20.9795 6.17061 20.496 5.05478 19.655 4.23971C18.8312 3.44441 17.7313 3 16.5868 3C15.4423 3 14.3425 3.44441 13.5186 4.23971L12 5.75111"
								stroke="#4D4D4D"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5.75153 12L4.24023 13.5114C3.42658 14.3546 2.98075 15.4862 3.00064 16.6578C3.02052 17.8294 3.50449 18.9452 4.34629 19.7603C5.17092 20.5556 6.27188 21 7.4175 21C8.56311 21 9.66407 20.5556 10.4887 19.7603L12 18.2489"
								stroke="#4D4D4D"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8 3V6"
								stroke="#4D4D4D"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M3 8H6"
								stroke="#4D4D4D"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M16 18V21"
								stroke="#4D4D4D"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M18 16H21"
								stroke="#4D4D4D"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					)}
				/>
			)}
		</>
	);
};

export default LinkUnlink;
