import classNames from 'classnames';
import { dispatch } from '@wordpress/data';

const SidebarOpener = ({ className = '', clientId = null }) => {
    return (
        <div className={classNames('zolo-blocks-toolbar', className)}>
            <button
                className="zolo-insert-before"
                onClick={() => {
                    dispatch('core/block-editor').insertBeforeBlock(clientId);
                }}
            >
                <svg viewBox="0 0 24 24" width={20} height={20} color={'#ffffff'} fill={'none'}>
                    <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <button
                className="zolo-open-sidebar-settings"
                onClick={() => {
                    const sidebar = document.querySelector('.edit-post-sidebar');
                    if (sidebar) {
                        sidebar.classList.add('is-open');
                    }
                }}
            >
                <svg viewBox="0 0 24 24" width={24} height={24} color={'#ffffff'} fill={'none'}>
                    <rect x="18" y="10.5" width="3" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="10.5" y="10.5" width="3" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="3" y="10.5" width="3" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
                </svg>
            </button>
            <button
                className="zolo-remove-block"
                onClick={() => {
                    dispatch('core/block-editor').removeBlocks(clientId);
                }}
            >
                <svg viewBox="0 0 24 24" width={20} height={20} color={'#ffffff'} fill={'none'}>
                    <path
                        d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SidebarOpener;
