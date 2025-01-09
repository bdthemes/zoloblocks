import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { RichTextToolbarButton } from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';


const Edit = (props) => {
    const { isActive, value } = props;
    const { toggle, setBlockContent, setScreen } = useDispatch('zoloai/popup');
    const { selectedBlock } = useSelect((select) => {
        const blockEditor = select('core/block-editor');
        return {
            selectedBlock: blockEditor.getSelectedBlock(),
        };
    }, []);
    const toolbarRef = useRef(null);

    // Allowed blocks
    const allowedBlocks = ['core/paragraph', 'core/heading', 'zolo/advanced-heading', 'zolo/advanced-paragraph', 'zolo/advanced-icon-box'];
    const isAllowedBlock = selectedBlock && allowedBlocks.includes(selectedBlock.name);

    return (
        <>
            {isAllowedBlock && (
                <div ref={toolbarRef}>
                    <RichTextToolbarButton
                        name="unknown"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <g clipPath="url(#clip0_1313_270)">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.4493 2.04772C12.2553 2.04772 11.394 3.02283 11.394 4.09545C11.394 3.01308 10.4153 2.04772 9.33866 2.04772C10.5327 2.04772 11.394 1.07262 11.394 0C11.394 1.08237 12.3727 2.04772 13.4493 2.04772ZM5.2475 10.2095C5.2475 8.07399 6.96027 6.36756 9.10367 6.36756C6.96027 6.36756 5.2475 4.66112 5.2475 2.52563C5.2475 4.66112 3.53474 6.36756 1.39134 6.36756C3.53474 6.36756 5.2475 8.07399 5.2475 10.2095ZM24.0001 11.1358C19.4294 11.1358 15.818 14.7339 15.818 19.2877C15.818 14.8509 12.2065 11.1358 7.63584 11.1358C12.2065 11.1358 15.818 7.53764 15.818 2.98389C15.818 7.42062 19.4294 11.1358 24.0001 11.1358ZM4.34723 13.3296H1V16.6645L4.34723 13.3296ZM10.0042 16.5085L8.65361 17.8541H8.7319C8.97659 18.1662 9.21148 18.488 9.21148 19.0438C9.21148 19.5996 8.97659 20.0774 8.57531 20.5552C8.17403 20.955 7.69446 21.189 7.05829 21.189H2.51702L10.4838 13.3296H7.53786L1.0783 19.7653V23.5H6.9702C8.25233 23.5 9.20169 23.1782 10.0825 22.3884C10.797 21.6668 11.2766 20.2431 11.2766 19.2095C11.2766 18.1759 10.797 17.2203 10.0042 16.5085Z"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1313_270">
                                        <rect width={24} height={24} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        }
                        title={__('Zolo AI', 'zoloblocks')}
                        onClick={(e) => {
                            e.preventDefault();
                            toggle();
                            setBlockContent(value?.text);
                            setScreen('request');
                        }}
                        isActive={isActive}
                        className="zolo-ai-toolbar-button"
                        aria-posinset={1}
                    />
                </div>
            )}
        </>
    );
};

export default Edit;
