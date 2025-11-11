import { ZoloButton, ZoloModal } from '../controls/core-controls';
import { useSelect, useDispatch } from '@wordpress/data';
import { getTextContent } from '@wordpress/rich-text';
import { useEffect, useState } from '@wordpress/element';
import { parse } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { createRoot } from 'react-dom/client'; // ?? todo: remove if @wordpress/element is updated
import domReady from '@wordpress/dom-ready';
import './store';
/**
 * Template Library Style
 */
import './library.scss';
import './page-templates.scss';
import Sidebar from './components/sidebar/index';
import Header from './components/header/index';
import Content from './components/content';

/**
 * ZoloBlocks Template Library Button
 */
function ZoloBlocksTemplateLibraryButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const { selectedBlock, currentPostType } = useSelect((select) => {
        const { getSelectedBlock } = select('core/block-editor');
        const { getCurrentPostType } = select('core/editor');
        return {
            selectedBlock: getSelectedBlock(),
            currentPostType: getCurrentPostType(),
        };
    }, []);

    const { replaceBlocks, insertBlocks } = useDispatch('core/block-editor');

    const { isPageEmpty } = useSelect((select) => {
        const { getBlocks } = select('core/block-editor');
        const blocks = getBlocks();
        let isPageEmpty = false;

        if (blocks.length === 0) {
            isPageEmpty = true;
        }

        if (blocks.length == 1) {
            const firstBlock = blocks[0];
            if (firstBlock.name === 'core/paragraph' && getTextContent(firstBlock.attributes.content).length === 0) {
                isPageEmpty = true;
            }
        }

        return { isPageEmpty };
    }, []);

    useEffect(() => {
        domReady(() => {
            const toolbar = document.querySelector('.editor-header__toolbar, .edit-post-header__toolbar');
            const libraryButton = document.querySelector('.zoloblocks-template-library-button');
            if (toolbar && !libraryButton && currentPostType !== 'zolo-popup') {
                renderButton(toolbar);
            }

            if (libraryButton) {
                setTimeout(() => {
                    if (isPageEmpty) {
                        libraryButton.classList.add('empty-page');
                    } else {
                        libraryButton.classList.remove('empty-page');
                    }
                }, 1000);
            }
        });
    }, [currentPostType, isPageEmpty]);

    const LibraryButton = () => (
        <ZoloButton onClick={() => setIsOpen(true)} className="zolo-library-open-button">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 4H9.22856L4.02857 9.27618L4 4ZM15.9048 11.1047L18 8.99999V9.00951C19.2953 10.1524 20 11.6476 20 13.2857C20 15.2476 19.2667 17.1333 18.0953 18.2095C16.7715 19.4 15.2 19.9809 13.2858 19.9809L4.02865 20V14.0857L14.1048 4H18.6953L6.22864 16.3333H13.2858C14.2191 16.3333 15.0286 16 15.6191 15.3809C16.2762 14.6952 16.6191 13.8666 16.6191 12.9619C16.6191 12.2476 16.2381 11.5619 15.9048 11.1047Z"
                    fill="white"
                />
            </svg>

            <span className="zolo-template-label">{__('Template Library', 'zoloblocks')}</span>
        </ZoloButton>
    );

    const renderButton = (selector) => {
        const libraryButton = document.createElement('div');
        libraryButton.classList.add('zoloblocks-template-library-button');
        selector.append(libraryButton);
        createRoot(libraryButton).render(<LibraryButton />);
    };

    /**
     * Handle Import Template with retry logic and better error handling
     * @param {string} jsonFileUrl - URL to the JSON file
     * @param {number} retryCount - Current retry attempt (default: 0)
     */
    const handleImportTemplate = async (jsonFileUrl, retryCount = 0) => {
        const MAX_RETRIES = 3;
        const RETRY_DELAY = 1000; // 1 second

        console.log(`Importing template from: ${jsonFileUrl}`);
        
        try {
            setLoading(true);

            // Validate URL
            if (!jsonFileUrl || typeof jsonFileUrl !== 'string') {
                throw new Error('Invalid or missing JSON file URL provided.');
            }

            // Validate URL format
            try {
                new URL(jsonFileUrl);
            } catch (urlError) {
                throw new Error(`Invalid URL format: ${jsonFileUrl}`);
            }

            // Ensure URL uses the correct domain
            const url = new URL(jsonFileUrl);
            const allowedDomains = ['templates.zoloblocks.com', 'zoloblocks.com'];
            if (!allowedDomains.includes(url.hostname)) {
                throw new Error(`Template must be from an allowed domain: ${allowedDomains.join(', ')}`);
            }

            // Fetch the JSON content from the URL with timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

            const response = await fetch(jsonFileUrl, {
                signal: controller.signal,
                headers: {
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`Failed to fetch template: ${response.status} ${response.statusText}`);
            }

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new Error('Response is not valid JSON format');
            }

            const jsonData = await response.json();
            const content = jsonData?.content || jsonData;

            // Validate content
            if (!content || (typeof content !== 'string' && typeof content !== 'object')) {
                throw new Error('No valid content found in template JSON.');
            }

            const blocks = parse(content);

            // Validate parsed blocks
            if (!blocks || !Array.isArray(blocks) || blocks.length === 0) {
                throw new Error('No valid blocks were parsed from template content.');
            }

            // Function to recursively process blocks
            const processBlockContent = (block) => {
                if (block.innerBlocks?.length > 0) {
                    block.innerBlocks.forEach(processBlockContent);
                } else if (block.name === 'zolo/advanced-paragraph') {
                    block.attributes.content = processAdvancedParagraphContent(block.attributes.content);
                }
            };

            // Process each block
            blocks.forEach(processBlockContent);

            // Handle insertion or replacement of blocks
            if (selectedBlock && selectedBlock.name === 'core/paragraph') {
                await replaceBlocks(selectedBlock.clientId, blocks);
            } else {
                await insertBlocks(blocks, 0);
            }

            console.log('Template imported successfully');

        } catch (error) {
            console.error(`Template import error (attempt ${retryCount + 1}):`, error.message);

            // Retry logic for network errors
            if (retryCount < MAX_RETRIES && 
                (error.name === 'AbortError' || 
                 error.message.includes('fetch') || 
                 error.message.includes('network') ||
                 error.message.includes('Failed to fetch'))) {
                
                console.log(`Retrying template import in ${RETRY_DELAY}ms... (${retryCount + 1}/${MAX_RETRIES})`);
                
                setTimeout(() => {
                    handleImportTemplate(jsonFileUrl, retryCount + 1);
                }, RETRY_DELAY * (retryCount + 1)); // Exponential backoff
                
                return;
            }

            // Show user-friendly error message
            const errorMessage = error.message || 'Unknown error occurred during template import';
            console.error('Final template import error:', errorMessage);
            
            // You could add a toast notification here if available
            // showErrorNotification(`Template import failed: ${errorMessage}`);
            
        } finally {
            // Only close if this is not a retry attempt
            if (retryCount === 0 || retryCount >= MAX_RETRIES) {
                setTimeout(() => {
                    setLoading(false);
                    setIsOpen(false);
                }, 2000);
            }
        }
    };

    // Function to clean up the content for 'zolo/advanced-paragraph' block
    const processAdvancedParagraphContent = (content) => {
        if (typeof content === 'string') {
            return content.replace(/<p>/g, '').replace(/<\/p>/g, '');
        }
        return content;
    };

    return (
        <div className="zolo-demos-modal-wrapper">
            {isOpen && (
                <ZoloModal
                    className="zolo-demos-modal"
                    onRequestClose={() => setIsOpen(false)}
                    shouldCloseOnClickOutside={true}
                    shouldCloseOnEsc={true}
                    isOpen={isOpen}
                    isDismissible={false}
                >
                    <div className="zolo-dm-body">
                        <Sidebar />
                        <div className="demos-container">
                            <Header setIsOpen={setIsOpen} />
                            <Content handleImportTemplate={handleImportTemplate} isLoading={loading} />
                        </div>
                        {/* {loading && <PreLoader />} */}
                    </div>
                </ZoloModal>
            )}
        </div>
    );
}

registerPlugin('zoloblocks-template-library-button', {
    render: ZoloBlocksTemplateLibraryButton,
});
