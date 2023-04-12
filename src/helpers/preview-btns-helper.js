import { dispatch } from '@wordpress/data';

export const onDesktopBtnClick = ({ setAttributes }) => {
	setAttributes({ resMode: 'Desktop' });
	dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Desktop');
};

export const onTabletBtnClick = ({ setAttributes }) => {
	setAttributes({ resMode: 'Tablet' });
	dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Tablet');
};

export const onMobileBtnClick = ({ setAttributes }) => {
	setAttributes({ resMode: 'Mobile' });
	dispatch('core/edit-post').__experimentalSetPreviewDeviceType('Mobile');
};
