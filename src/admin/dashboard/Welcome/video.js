const VideoSection = ({ title, description, videoInfo, buttons }) => {
    return (
        <div className="zolo-welcome-video-item">
            {title && <h1 className="zolo-welcome-page-title">{title}</h1>}
            {description && <p className="zolo-welcome-page-text">{description}</p>}
            {videoInfo && videoInfo.id && (
                <div className="zolo-welcome-video-container">
                    <iframe
                        width="100%"
                        height="426"
                        src={`https://www.youtube.com/embed/${videoInfo.id}`}
                        title={videoInfo.title || 'Zoloblocks Features Walkthrough - Get a Glance at the Features | BdThemes'}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
            {buttons && buttons.length > 0 && (
                <div className="zolo-welcome-video-info-button">
                    {buttons.map((button, index) => {
                        return (
                            <a href={button.link} target="_blank" className={`zolo-welcome-page-btn zolo-${button.type}-btn`}>
                                {button.text}
                                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                                    />
                                </svg>
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default VideoSection;
