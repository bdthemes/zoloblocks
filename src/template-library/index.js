import { Button, Modal } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { getTextContent } from '@wordpress/rich-text';
import { useEffect, useState } from '@wordpress/element';
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
    const [currentPostType, setCurrentPostType] = useState(wp.data.select('core/editor').getCurrentPostType());

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
        <Button onClick={() => setIsOpen(true)} className="zolo-library-open-button">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 4H9.22856L4.02857 9.27618L4 4ZM15.9048 11.1047L18 8.99999V9.00951C19.2953 10.1524 20 11.6476 20 13.2857C20 15.2476 19.2667 17.1333 18.0953 18.2095C16.7715 19.4 15.2 19.9809 13.2858 19.9809L4.02865 20V14.0857L14.1048 4H18.6953L6.22864 16.3333H13.2858C14.2191 16.3333 15.0286 16 15.6191 15.3809C16.2762 14.6952 16.6191 13.8666 16.6191 12.9619C16.6191 12.2476 16.2381 11.5619 15.9048 11.1047Z"
                    fill="white"
                />
            </svg>

            <span className="zolo-template-label">{__('Template Library', 'zoloblocks')}</span>
        </Button>
    );

    const renderButton = (selector) => {
        const libraryButton = document.createElement('div');
        libraryButton.classList.add('zoloblocks-template-library-button');
        selector.append(libraryButton);
        createRoot(libraryButton).render(<LibraryButton />);
    };

    /**
     * Handle Import Template
     * @param {string} jsonFile
     */
    const handleImportTemplate = (jsonFile) => {
        setLoading(true);

        jQuery.ajax({
            url: zoloParams?.ajaxurl,
            type: 'POST',
            nonce: zoloParams?.nonce,
            data: {
                action: 'zolo_demo_import',
                security: zoloParams?.zolo_nonce,
                json_file_url: jsonFile,
            },
            success: function (response) {
                if (response.success) {
                    const { data } = response;
                    if (data) {
                        const { content } = data;
                        const blocks = wp.blocks.parse(content);

                        const getBlockRecursively = (block) => {
                            if (block.innerBlocks.length > 0) {
                                block.innerBlocks.forEach((innerBlock) => {
                                    getBlockRecursively(innerBlock);
                                });
                            } else {
                                if (block.name === 'zolo/advanced-paragraph') {
                                    let content = block.attributes.content;
                                    content = content.replace(/<p>/g, '').replace(/<\/p>/g, '');
                                    block.attributes.content = content;
                                }
                            }
                        };

                        blocks.forEach((block) => {
                            getBlockRecursively(block);
                        });

                        const selectedBlock = wp.data.select('core/block-editor').getSelectedBlock();
                        if (selectedBlock && selectedBlock.name === 'core/paragraph') {
                            wp.data.dispatch('core/block-editor').replaceBlocks(selectedBlock.clientId, blocks);
                        } else {
                            wp.data.dispatch('core/block-editor').insertBlocks(blocks, 0);
                        }
                        setLoading(false);
                        setIsOpen(false);
                    }
                } else {
                    console.log('Error:', response.data);
                }
            },
            error: function (error) {
                console.log('Error:', error);
            },
        });
    };

    return (
        <div className="zolo-demos-modal-wrapper">
            {isOpen && (
                <Modal
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
                </Modal>
            )}
        </div>
    );
}

registerPlugin('zoloblocks-template-library-button', {
    render: ZoloBlocksTemplateLibraryButton,
});
