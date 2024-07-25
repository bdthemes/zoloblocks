import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
import { registerPlugin } from '@wordpress/plugins';
import { select, dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { Notice, Modal, FormFileUpload } from '@wordpress/components';
import { useState } from '@wordpress/element';

// import style
import './import.scss';

const ZoloExportBlock = ({ clientId }) => {
    const [importPanel, setImportPanel] = useState(false);
    const [patternContent, setPatternContent] = useState('');
    const [patternName, setPatternName] = useState(null);

    // handle file upload
    const handleFileUpload = (files) => {
        // check if the file is not empty
        if (files.length === 0) {
            return;
        }

        const file = files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setPatternContent(e.target.result);
            // get file name
            setPatternName(file.name);
        };
        reader.readAsText(file);
    };

    return (
        <>
            <PluginBlockSettingsMenuItem
                icon={
                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.76 4.96997L19.6001 6.12988C19.77 6.32007 19.98 6.62988 19.98 6.90991C19.98 7.04321 19.9587 7.16846 19.9189 7.28491C19.8604 7.45654 19.7612 7.60889 19.6301 7.73999C19.4199 7.94995 19.1499 8.06006 18.8401 8.06006H16.3101L21.45 3H19.0701L14.77 7.28003V10.04H16.4099L18.8301 10.03C19.6799 10.03 20.3901 9.77002 20.97 9.23999C21.54 8.71997 21.8301 7.86011 21.8301 7.04004C21.8301 6.17993 21.3999 5.44995 20.75 4.95996L20.76 4.96997ZM6.27002 13.29C6.54004 12.9802 7.02002 12.9502 7.33008 13.2202H7.31006L9.59009 15.2002V4.12012C9.59009 3.71021 9.92993 3.37012 10.3401 3.37012C10.75 3.37012 11.0901 3.71021 11.0901 4.12012V15.2002L13.3701 13.2202C13.6799 12.9402 14.1602 12.9802 14.4299 13.29C14.71 13.6001 14.6702 14.0801 14.3601 14.3501L10.8401 17.4102C10.8203 17.425 10.8005 17.4373 10.7808 17.4482L10.7478 17.4661L10.72 17.4802C10.7153 17.4849 10.7107 17.4873 10.707 17.4888C10.7029 17.4902 10.7 17.4902 10.7 17.4902C10.6799 17.5 10.6602 17.53 10.6401 17.53H10.6201C10.54 17.5701 10.4399 17.5901 10.3501 17.5901C10.26 17.5901 10.1702 17.5701 10.0801 17.53H10.0601C10.0559 17.5281 10.0518 17.5256 10.0476 17.5229L10.03 17.5103L10.0161 17.5002C10.0107 17.4963 10.0054 17.4929 10 17.4902C9.99561 17.4858 9.99121 17.4834 9.98755 17.4819C9.98315 17.4802 9.97998 17.4802 9.97998 17.4802C9.93994 17.4602 9.86011 17.4102 9.86011 17.4102L6.34009 14.3501C6.03003 14.0801 6 13.6001 6.27002 13.29ZM16.8 20.0999C17.03 20.0999 17.21 19.9099 17.21 19.6899V12.01H18.71V19.6899C18.71 20.74 17.8501 21.5999 16.8 21.5999H3.90991C2.86011 21.5999 2 20.74 2 19.6899V11.5498C2 10.5 2.86011 9.63989 3.90991 9.63989H6.84009C7.25 9.63989 7.59009 9.97998 7.59009 10.3899C7.59009 10.7998 7.25 11.1399 6.84009 11.1399H3.90991C3.83569 11.1399 3.7666 11.1597 3.70703 11.1938C3.58252 11.2656 3.5 11.4009 3.5 11.5498V19.6899C3.5 19.9199 3.68994 20.0999 3.90991 20.0999H16.8ZM14.78 5.92993V3H17.72L14.78 5.92993Z"
                            fill="#2667FF"
                        />
                    </svg>
                }
                label={__('Import Pattern', 'zoloblocks')}
                onClick={() => setImportPanel(true)}
            />
            {importPanel && (
                <Modal
                    className="zolo-import-block-modal"
                    title={__('Import Pattern', 'zoloblocks')}
                    onRequestClose={() => setImportPanel(false)}
                >
                    <div className="zolo-export-block-modal__content">
                        <FormFileUpload accept=".json" onChange={(e) => handleFileUpload(e.currentTarget.files)}>
                            {patternName ? (
                                patternName
                            ) : (
                                <>
                                    {__('Upload Pattern', 'zoloblocks')}
                                    <svg
                                        viewBox="0 0 24 24"
                                        width={24}
                                        height={24}
                                        color={'#000000'}
                                        style={{
                                            fill: 'none',
                                        }}
                                    >
                                        <path
                                            d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273M6.52042 8.03192C6.67826 8.01687 6.83823 8.00917 7 8.00917C8.12582 8.00917 9.16474 8.38194 10.0005 9.01101"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 13L12 21M12 13C11.2998 13 9.99153 14.9943 9.5 15.5M12 13C12.7002 13 14.0085 14.9943 14.5 15.5"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </>
                            )}
                        </FormFileUpload>

                        <button
                            className="zolo-export-pattern-btn"
                            onClick={() => {
                                // check if patternContent is not empty
                                if (!patternContent || patternContent === undefined || patternContent === null || patternContent === '') {
                                    alert('Please select a file to import.');
                                    return;
                                }

                                // import block content
                                const blockContent = JSON.parse(patternContent);
                                const blocks = wp.blocks.parse(blockContent.content);

                                // insert block
                                dispatch('core/block-editor').replaceBlocks(clientId, blocks);

                                // show notice
                                const { createSuccessNotice } = dispatch('core/notices');
                                createSuccessNotice(__('Great! The pattern is imported successfully.', 'zoloblocks'), {
                                    type: 'default',
                                });

                                // close the modal
                                setImportPanel(false);
                            }}
                        >
                            {__('Import Pattern', 'zoloblocks')}
                        </button>
                    </div>
                </Modal>
            )}
        </>
    );
};
registerPlugin('zolo-import-block', {
    render: () => {
        const selectedBlock = select('core/block-editor').getSelectedBlock();
        const selectedBlockClientId = selectedBlock?.clientId;
        return <ZoloExportBlock clientId={selectedBlockClientId} />;
    },
});
