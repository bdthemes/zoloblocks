const SingleBlock = ({ title, description, button, icon }) => {
    return (
        <div className="zolo-welcome-s-k-item">
            {title && <h2 className="zolo-welcome-s-k-title">{title}</h2>}
            {description && <p className="zolo-welcome-s-k-text">{description}</p>}
            {button && button.text && (
                <a href={button.link} target="_blank" className="zolo-welcome-page-btn zolo-secondary-btn">
                    {button.text}
                    <svg
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                        />
                    </svg>
                </a>
            )}
            {icon && <img src={zoloBlocks[icon]} alt={title} />}
        </div>
    );
};

export default SingleBlock;
