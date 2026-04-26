import { PluginBlockSettingsMenuItem } from '@wordpress/editor';
import { registerPlugin } from '@wordpress/plugins';
import { select } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

import { ZoloToggleControl, ZoloModal, ZoloTextControl } from '../../controls/core-controls';

// page export
import '../page-export';

// import style
import './export.scss';

const ZoloExportBlock = ({ clientId }) => {
    const [exportPanel, setExportPanel] = useState(false);
    const [patternName, setPatternName] = useState('');
    const [syncPattern, setSyncPattern] = useState(false);

    return (
        <>
            <PluginBlockSettingsMenuItem
                icon={
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.76 4.97L19.6 6.13C19.77 6.32 19.98 6.63 19.98 6.91C19.98 7.24 19.85 7.52 19.63 7.74C19.42 7.95 19.15 8.06 18.84 8.06H16.31L21.45 3H19.07L14.77 7.28V10.04H16.41L18.83 10.03C19.68 10.03 20.39 9.77 20.97 9.24C21.54 8.72 21.83 7.86 21.83 7.04C21.83 6.18 21.4 5.45 20.75 4.96L20.76 4.97ZM7.31995 7.75011C7.17994 7.87011 6.99994 7.93011 6.82994 7.93011C6.61994 7.93011 6.40995 7.84011 6.25994 7.67011C5.97995 7.36011 6.01994 6.88011 6.32994 6.61011L9.84995 3.55011C9.86494 3.54011 9.87995 3.53261 9.89495 3.52511C9.90995 3.51761 9.92495 3.51011 9.93995 3.50011C9.95065 3.49208 9.95993 3.48476 9.96854 3.47797L9.96854 3.47797L9.96856 3.47795C9.9921 3.45939 10.0107 3.44475 10.0399 3.43011C10.0453 3.42743 10.0499 3.42475 10.0543 3.42226C10.066 3.41547 10.0753 3.41011 10.0899 3.41011C10.1299 3.39011 10.1699 3.38011 10.2099 3.38011C10.2499 3.37011 10.2899 3.36011 10.3299 3.36011H10.3499H10.3699C10.3899 3.36011 10.4099 3.36511 10.4299 3.37011C10.4499 3.37511 10.4699 3.38011 10.4899 3.38011C10.5033 3.38344 10.5166 3.38566 10.5299 3.38789C10.5566 3.39233 10.5833 3.39677 10.6099 3.41011C10.6153 3.41279 10.6199 3.41547 10.6243 3.41795C10.636 3.42475 10.6453 3.43011 10.6599 3.43011C10.6856 3.44293 10.7071 3.45986 10.7272 3.47563C10.7384 3.48446 10.7492 3.49293 10.7599 3.50011C10.7899 3.52011 10.8499 3.55011 10.8499 3.55011L12.8099 5.26011V7.25011L11.0999 5.76011V13.9801C11.0999 14.3901 10.7599 14.7301 10.3499 14.7301C9.93995 14.7301 9.59995 14.3901 9.59995 13.9801V5.77011L7.31995 7.75011ZM16.8 20.0999C17.03 20.0999 17.21 19.9099 17.21 19.6899V12.0099H18.71V19.6899C18.71 20.7399 17.85 21.5999 16.8 21.5999H3.91C2.86 21.5999 2 20.7399 2 19.6899V11.5499C2 10.4999 2.86 9.63989 3.91 9.63989H6.84C7.25 9.63989 7.59 9.97989 7.59 10.3899C7.59 10.7999 7.25 11.1399 6.84 11.1399H3.91C3.68 11.1399 3.5 11.3299 3.5 11.5499V19.6899C3.5 19.9199 3.69 20.0999 3.91 20.0999H16.8ZM14.78 5.93V3H17.72L14.78 5.93Z"
                            fill="#2667FF"
                        />
                    </svg>
                }
                label={__('Export Pattern', 'zoloblocks')}
                onClick={() => setExportPanel(true)}
            />
            {exportPanel && (
                <ZoloModal
                    className="zolo-export-block-modal"
                    title={__('Export Pattern', 'zoloblocks')}
                    onRequestClose={() => setExportPanel(false)}
                >
                    <div className="zolo-export-block-modal__content">
                        <ZoloTextControl
                            label={__('Pattern Name', 'zoloblocks')}
                            value={patternName}
                            onChange={(value) => setPatternName(value)}
                        />
                        <ZoloToggleControl
                            help={__('Sync this pattern across multiple locations.', 'zoloblocks')}
                            label={__('Sync Pattern', 'zoloblocks')}
                            checked={syncPattern}
                            onChange={() => setSyncPattern(!syncPattern)}
                        />
                        <button
                            className="zolo-export-pattern-btn"
                            onClick={() => {
                                // check if clientId is not undefined
                                if (!clientId || clientId === undefined || clientId === null || clientId === '') {
                                    alert('Please save and refresh the page before exporting the block.');
                                    return;
                                } else {
                                    const block = select('core/block-editor').getBlock(clientId);
                                    const blockContent = wp.blocks.serialize([block]);

                                    // export block content as json file
                                    const blob = new Blob(
                                        [
                                            JSON.stringify(
                                                {
                                                    __file: 'wp_block',
                                                    content: blockContent,
                                                    zoloVersion: zoloParams?.zolo_version || '1.0.0',
                                                    title: patternName,
                                                    syncStatus: syncPattern ? '' : 'unsynced',
                                                },
                                                null,
                                                2
                                            ),
                                        ],
                                        {
                                            type: 'application/json',
                                        }
                                    );

                                    const url = URL.createObjectURL(blob);
                                    const a = document.createElement('a');
                                    a.href = url;
                                    a.download = `${patternName === '' ? block.name : patternName.replace(/\s/g, '-').toLowerCase()}.json`;
                                    a.click();
                                    URL.revokeObjectURL(url);

                                    // show notice
                                    const { createSuccessNotice } = wp.data.dispatch('core/notices');
                                    createSuccessNotice(__('Great! The pattern is exported successfully.', 'zoloblocks'), {
                                        type: 'default',
                                    });
                                }

                                // close the modal
                                setExportPanel(false);
                            }}
                        >
                            {__('Export Pattern', 'zoloblocks')}
                        </button>
                    </div>
                </ZoloModal>
            )}
        </>
    );
};
registerPlugin('zolo-export-block', {
    render: () => {
        const selectedBlockClientId = select('core/block-editor').getSelectedBlockClientId();
        return <ZoloExportBlock clientId={selectedBlockClientId} />;
    },
});
