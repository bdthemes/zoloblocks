import domReady from '@wordpress/dom-ready';
import apiFetch from '@wordpress/api-fetch';
import { autoRecovery } from '../controls/auto-recovery';

const updateSettings = async () => {
    try {
        const settings = await apiFetch({ path: '/wp/v2/settings' });

        // Update core pattern modal setting
        if (settings?.zolo_disable_core_patterns !== undefined) {
            wp.data.dispatch('core/preferences').set('core', 'enableChoosePatternModal', !settings?.zolo_disable_core_patterns);
        }

        // Trigger auto-recovery if enabled
        if (settings?.zolo_auto_recovery) {
            autoRecovery();
        }
    } catch (error) {
        console.error('API Fetch Error:', error);
    }
};

domReady(() => {
    updateSettings();
});

