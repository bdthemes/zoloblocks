import classNames from 'classnames';
import { dispatch } from '@wordpress/data';

const ContainerSidebarOpener = ({ clientId = null }) => {
    return (
        <div className={classNames('zolo-blocks-toolbar container')}>
            <button
                className="zolo-insert-before"
                onClick={() => {
                    dispatch('core/block-editor').insertAfterBlock(clientId);
                }}
            >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            >
            <path d="M12 8V16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M16 12H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
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
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            >
            <path
                d="M12.5 15C12.5 14.4477 12.0523 14 11.5 14C10.9477 14 10.5 14.4477 10.5 15C10.5 15.5523 10.9477 16 11.5 16C12.0523 16 12.5 15.5523 12.5 15Z"
                fill="white"
            />
            <path
                d="M7 15C7 14.4477 6.55228 14 6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16C6.55228 16 7 15.5523 7 15Z"
                fill="white"
            />
            <path
                d="M18 15C18 14.4477 17.5523 14 17 14C16.4477 14 16 14.4477 16 15C16 15.5523 16.4477 16 17 16C17.5523 16 18 15.5523 18 15Z"
                fill="white"
            />
            <path
                d="M12.5 9C12.5 8.44772 12.0523 8 11.5 8C10.9477 8 10.5 8.44772 10.5 9C10.5 9.55228 10.9477 10 11.5 10C12.0523 10 12.5 9.55228 12.5 9Z"
                fill="white"
            />
            <path
                d="M7 9C7 8.44772 6.55228 8 6 8C5.44772 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10C6.55228 10 7 9.55228 7 9Z"
                fill="white"
            />
            <path
                d="M18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 9.55228 16.4477 10 17 10C17.5523 10 18 9.55228 18 9Z"
                fill="white"
            />
            </svg>

            </button>
            <button
                className="zolo-remove-block"
                onClick={() => {
                    dispatch('core/block-editor').removeBlocks(clientId);
                }}
            >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            >
            <path
                d="M16 8L8 16"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 8L16 16"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>
            </button>
        </div>
    );
};

export default ContainerSidebarOpener;
