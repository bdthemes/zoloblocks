import { BaseControl, TabPanel } from '@wordpress/components';
import { NORMAL_HOVER } from '../../global/constants';
import { __ } from '@wordpress/i18n';

const TabPanelControl = ({ normalComponents, hoverComponents }) => {
	return (
		<>
			<BaseControl>
				<TabPanel
					className="zolo-tab-panel"
					activeClass="active-tab"
					tabs={NORMAL_HOVER.map(({ value, label }) => ({
						name: value,
						title: label,
						className: `zolo-tab ${value}`,
					}))}
				>
					{(tab) => {
						if (tab.name === 'normal') {
							return <>{normalComponents}</>;
						} else {
							return <>{hoverComponents}</>;
						}
					}}
				</TabPanel>
			</BaseControl>
		</>
	);
};

export default TabPanelControl;
