import classNames from 'classnames';

const SidebarOpener = ({ className = '', icon = null }) => {
    return (
        <button
            className={classNames('zolo-open-sidebar-settings', className)}
            onClick={() => {
                const sidebar = document.querySelector('.edit-post-sidebar');
                if (sidebar) {
                    sidebar.classList.add('is-open');
                }
            }}
        >
            {icon ? (
                <>{icon}</>
            ) : (
                <>
                    <svg viewBox="0 0 24 24" width={24} height={24} color={'#ffffff'} fill={'none'}>
                        <rect x="18" y="10.5" width="3" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="10.5" y="10.5" width="3" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
                        <rect x="3" y="10.5" width="3" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                </>
            )}
        </button>
    );
};

export default SidebarOpener;
