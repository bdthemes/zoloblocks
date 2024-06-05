import classNames from 'classnames';
import { dispatch } from '@wordpress/data';

const SidebarOpener = ({clientId = null }) => {
    return (
        <div className={classNames('zolo-blocks-toolbar general-block')}>
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
                    d="M5 20L19 20"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.6158 4.57792C14.9876 4.20789 15.4918 4 16.0176 4C16.2779 4 16.5357 4.05104 16.7762 4.1502C17.0168 4.24936 17.2353 4.3947 17.4194 4.57792C17.6035 4.76115 18.7495 5.97401 18.8491 6.21341C18.9487 6.4528 19 6.70938 19 6.9685C19 7.22762 18.9487 7.4842 18.8491 7.7236C18.7495 7.96299 18.6035 8.18051 18.4194 8.36374L9.73803 17H5L6.5 12.5L14.6158 4.57792Z"
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

export default SidebarOpener;
