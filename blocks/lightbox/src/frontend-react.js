import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.wp-block-zolo-lightbox').forEach((item) => {
        const {
            uniqueId,
            parentClasses,
            lightboxType,
            imagePoster,
            posterIcon,
            imageSize,
            posterIconToggle,
            buttonText,
            enableHeading,
            enableSubHeading,
            buttonHeadingText,
            buttonIcon,
        } = JSON.parse(item.dataset.options);
        const root = createRoot(item);

        const ZoloLightbox = ({ sources, options }) => {
            const [toggler, setToggler] = useState(false);

            return (
                <div className="zolo-lightbox-btn">
                    <button onClick={() => setToggler(!toggler)} className="zolo-play-btn zolo-lightbox-btn-2">
                        {lightboxType !== 'poster' && (
                            <span className="zolo-btn-text">
                                <small>{enableSubHeading && buttonHeadingText}</small>
                                {enableHeading && buttonText}
                            </span>
                        )}
                        <span className="zolo-btn-icon" dangerouslySetInnerHTML={{ __html: buttonIcon }}></span>
                    </button>
                    {imagePoster && (
                        <div className="zolo-poster-img">
                            <img
                                src={imagePoster.sizes && imagePoster.sizes[imageSize] ? imagePoster.sizes[imageSize].url : imagePoster.url}
                                alt={imagePoster.alt}
                            />
                        </div>
                    )}
                    <FsLightbox toggler={toggler} sources={sources} {...options} />
                </div>
            );
        };

        const lightboxData = [
            {
                uniqueId: 'lightbox-5qy13joa',
                sources: [
                    <iframe
                        key="google-map-iframe"
                        src="//maps.google.com/maps?q=London&output=embed"
                        width="450"
                        height="450"
                        allowFullScreen
                        scrolling="no"
                        allow="autoplay; fullscreen"
                    />,
                ],
                options: {
                    entranceAnimation: 'fade',
                    showThumbsOnMount: false,
                },
            },
        ];

        root.render(lightboxData.map((data) => <ZoloLightbox key={data.uniqueId} sources={data.sources} options={data.options} />));
    });
});
