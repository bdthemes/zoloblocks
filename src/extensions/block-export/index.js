import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';
import { select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { Notice } from '@wordpress/components';

const ZoloExportBlock = ({ clientId }) => {
    return (
        <PluginBlockSettingsMenuItem
            icon={
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path
                        d="M11.1899 3.38992C11.1899 3.38992 11.1199 3.34992 11.0799 3.32992C11.0399 3.29992 10.9999 3.26992 10.9499 3.24992C10.9299 3.24992 10.9099 3.22992 10.8899 3.22992C10.8399 3.20992 10.7899 3.20992 10.7399 3.19992C10.6899 3.19992 10.6399 3.16992 10.5899 3.16992C10.5799 3.16992 10.5699 3.16992 10.5599 3.16992C10.5499 3.16992 10.5399 3.16992 10.5299 3.16992C10.4799 3.16992 10.4299 3.18992 10.3899 3.19992C10.3399 3.20992 10.2899 3.21992 10.2299 3.22992C10.2099 3.22992 10.1899 3.23992 10.1699 3.24992C10.1199 3.26992 10.0899 3.30992 10.0499 3.32992C10.0099 3.34992 9.96991 3.35992 9.93991 3.38992L6.41991 6.44992C6.01991 6.79992 5.97991 7.39992 6.32991 7.79992C6.51991 8.01992 6.78991 8.12992 7.04991 8.12992C7.26991 8.12992 7.49991 8.04992 7.67991 7.88992L9.60991 6.20992V13.9599C9.60991 14.4899 10.0399 14.9199 10.5699 14.9199C11.0999 14.9199 11.5299 14.4899 11.5299 13.9599V6.21992L13.0299 7.51992V4.97992L11.1999 3.38992H11.1899Z"
                        fill="#2667FF"
                    />
                    <path
                        d="M17.21 19.6899C17.21 19.7999 17.12 19.8899 17.01 19.8899H4.12C4.01 19.8899 3.92 19.7999 3.92 19.6899V11.5499C3.92 11.4399 4.01 11.3499 4.12 11.3499H7.05C7.58 11.3499 8.01 10.9199 8.01 10.3899C8.01 9.85993 7.58 9.42993 7.05 9.42993H4.12C2.95 9.42993 2 10.3799 2 11.5499V19.6899C2 20.8599 2.95 21.8099 4.12 21.8099H17.01C18.18 21.8099 19.13 20.8599 19.13 19.6899V12.0099H17.21V19.6899Z"
                        fill="#2667FF"
                    />
                    <path
                        d="M20.97 4.97L19.81 6.13C19.98 6.32 20.19 6.63 20.19 6.91C20.19 7.24 20.06 7.52 19.84 7.74C19.63 7.95 19.36 8.06 19.05 8.06H16.52L21.66 3H19.28L14.98 7.28V10.04H16.62L19.04 10.03C19.89 10.03 20.6 9.77 21.18 9.24C21.75 8.72 22.04 7.86 22.04 7.04C22.04 6.18 21.61 5.45 20.96 4.96L20.97 4.97Z"
                        fill="#2667FF"
                    />
                    <path d="M14.98 3V5.93L17.93 3H14.98Z" fill="#2667FF" />
                </svg>
            }
            label={__('Export', 'zoloblocks')}
            onClick={() => {
                // check if clientId is not undefined
                if (!clientId || clientId === undefined || clientId === null || clientId === '') {
                    alert('Please save and refresh the page before exporting the block.');
                    return;
                } else {
                    const block = select('core/block-editor').getBlock(clientId);
                    const blockContent = wp.blocks.serialize([block]);

                    // export block content as json file
                    const blob = new Blob([JSON.stringify(blockContent)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `${block.name}.json`;
                    a.click();
                    URL.revokeObjectURL(url);

                    // show notice
                    const { createSuccessNotice } = wp.data.dispatch('core/notices');
                    createSuccessNotice(__('Great! The block is exported successfully.', 'zoloblocks'), {
                        type: 'default',
                    });
                }
            }}
        />
    );
};
registerPlugin('zolo-export-block', {
    render: () => {
        const selectedBlock = select('core/block-editor').getSelectedBlock();
        const selectedBlockClientId = selectedBlock?.clientId;

        if (!selectedBlockClientId) {
            return (
                <Notice status="warning" isDismissible>
                    {__('Please select a block to export.', 'zoloblocks')}
                </Notice>
            );
        } else {
            return <ZoloExportBlock clientId={selectedBlockClientId} />;
        }
    },
});
