import { __ } from '@wordpress/i18n';
import {
	PanelRow,
	Dashicon,
	SearchControl,
	TabPanel,
	Popover,
	Button,
} from '@wordpress/components';
import { useEffect, useState, useRef } from '@wordpress/element';

import DisplayIcon from './DisplayIcon';
import '../scss/componets/_icon-picker.scss';

//Import Dashicon list
import { dashIcon } from './icons/dashicon';
import { fontAwesome } from './icons/fontawesome';

function useOutsideAlerter(ref, setVal) {
	useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setVal(false);
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);
}

const IconPicker = (props) => {
	const {
		title = 'Select Icon',
		value,
		onChange,
		showHeading = true,
	} = props;

	const [selectedIcon, setSelectedIcon] = useState('');
	const [searchInput, setSearchInput] = useState('');
	const [iconType, setIconType] = useState('dashicon');
	const [icons, setIcons] = useState('');
	const [showPopover, setShowPopover] = useState(false);
	const [popoverAnchor, setPopoverAnchor] = useState('');

	const popoverWrapperRef = useRef(null);
	useOutsideAlerter(popoverWrapperRef, setShowPopover);

	useEffect(() => {
		if (typeof dashIcon === 'object' && Object.keys(dashIcon).length > 0) {
			setIcons(dashIcon);
		}

		//set popover anchor
		const selector = document.querySelector('#zoloIcon');
		setPopoverAnchor(selector);

		// let icons = {}
		// Object.keys(fontawesome).map((item, index) => {
		//     const splitText = fontawesome[item].split(" ");
		//     icons = {
		//         ...icons,
		//         [splitText[1]]: {
		//             name: splitText[1].replace(/-/g, " "),
		//             source: 'fontawesome',
		//             type: splitText[0]
		//         }
		//     }
		// })
		// console.log("Icons:", icons)
	}, []);

	useEffect(() => {
		//Set search text to empty
		setSearchInput('');

		switch (iconType) {
			case 'fontawesome':
				if (
					typeof fontAwesome === 'object' &&
					Object.keys(fontAwesome).length > 0
				) {
					setIcons(fontAwesome);
				}
				break;
			default:
				if (
					typeof dashIcon === 'object' &&
					Object.keys(dashIcon).length > 0
				) {
					setIcons(dashIcon);
				}
		}
	}, [iconType]);

	useEffect(() => {
		if (!value || typeof value != 'object') {
			return;
		}
		const key = Object.keys(value)[0];
		setSelectedIcon(key);

		if (value[key].source) {
			setIconType(value[key].source);
		}
	}, [value]);

	const searchIcon = (text) => {
		setSearchInput(text);

		//Filter search result
		const iconList = iconType === 'fontawesome' ? fontAwesome : dashIcon;
		const filteredIcons = Object.keys(iconList)
			.filter((item) => item.includes(text))
			.reduce((obj, key) => {
				return Object.assign(obj, {
					[key]: iconList[key],
				});
			}, {});

		//set Icons list from search result
		setIcons(filteredIcons);
	};

	const saveIcon = (value) => {
		//Save attribute value
		onChange(value);

		//Hide popover
		setShowPopover(false);
	};

	return (
		<>
			{showHeading && <PanelRow>{title}</PanelRow>}

			<div id={'zoloIcon'} onClick={() => setShowPopover(true)}>
				{value && (
					<div className="zb-icon-preview">
						<DisplayIcon
							label="Click to choose Icon"
							icon={value}
						/>
						<Button className="zolo-replace-btn">
							<svg
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.827 16.379C9.77912 16.9085 8.60041 17.1235 7.43311 16.9979C6.2658 16.8722 5.15981 16.4115 4.24861 15.6711C3.33741 14.9308 2.65996 13.9426 2.29804 12.8257C1.93611 11.7088 1.90518 10.5111 2.20897 9.37703L7.62097 10.827C7.09144 9.77918 6.87652 8.60047 7.00213 7.43317C7.12774 6.26586 7.58853 5.15987 8.32886 4.24867C9.06919 3.33747 10.0574 2.66003 11.1743 2.2981C12.2912 1.93617 13.4889 1.90524 14.623 2.20903L13.173 7.62103C14.2208 7.0915 15.3995 6.87658 16.5668 7.00219C17.7341 7.1278 18.8401 7.58859 19.7513 8.32892C20.6625 9.06926 21.34 10.0575 21.7019 11.1744C22.0638 12.2912 22.0948 13.489 21.791 14.623L16.379 13.173C16.9085 14.2209 17.1234 15.3996 16.9978 16.5669C16.8722 17.7342 16.4114 18.8402 15.6711 19.7514C14.9307 20.6626 13.9425 21.34 12.8256 21.702C11.7088 22.0639 10.511 22.0948 9.37697 21.791L10.827 16.379Z"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M12 12V12.01"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>

							{__('Replace', 'zolo-blocks')}
						</Button>
					</div>
				)}
				{!value && (
					<>
						<Dashicon
							className="zolo-iconpicker-placeholder"
							icon={'insert'}
						/>
					</>
				)}
			</div>
			{showPopover && (
				<Popover
					ref={popoverWrapperRef}
					anchor={popoverAnchor}
					className="zolo-iconpicker-popup"
				>
					<SearchControl
						value={searchInput}
						onChange={(text) => searchIcon(text)}
					/>
					<TabPanel
						className="zolo-parent-tab-panel"
						activeClass="active-tab"
						onSelect={(selected) => setIconType(selected)}
						initialTabName={iconType}
						tabs={[
							{
								name: 'dashicon',
								title: 'Dashicon',
								className: 'zolo-icon-tab dashicon',
							},
							{
								name: 'fontawesome',
								title: 'FontAwesome',
								className: 'zolo-icon-tab fontawesome',
							},
						]}
					>
						{(tab) => (
							<div className="zolo-icon-area">
								{Object.keys(icons).map((item, index) => (
									<div
										className={`zolo-icon-box${
											selectedIcon === item
												? ' active'
												: ''
										}`}
										onClick={() =>
											saveIcon({ [item]: icons[item] })
										}
									>
										<div className="zolo-icon-content">
											{iconType === 'dashicon' && (
												<Dashicon icon={item} />
											)}
											{iconType === 'fontawesome' && (
												<i
													class={`${icons[item].type} ${item}`}
												></i>
											)}

											<PanelRow>
												{icons[item].name}
											</PanelRow>
										</div>
									</div>
								))}
							</div>
						)}
					</TabPanel>
				</Popover>
			)}
		</>
	);
};

export default IconPicker;
