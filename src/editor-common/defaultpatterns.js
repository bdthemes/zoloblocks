import apiFetch from '@wordpress/api-fetch';

const updateCorePatternsSetting = async () => {
    try {
        const { zolo_disable_core_patterns } = await apiFetch({ path: '/wp/v2/settings' });

        if (zolo_disable_core_patterns !== undefined) {
            wp.data.dispatch('core/preferences').set('core', 'enableChoosePatternModal', !zolo_disable_core_patterns);
        }

        console.log('Settings retrieved and applied successfully.');
    } catch (error) {
        console.error('API Fetch Error:', error);
    }
};

updateCorePatternsSetting();
