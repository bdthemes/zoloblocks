import { createRoot } from 'react-dom/client';
import SvgComponent from './svg';

document.addEventListener('DOMContentLoaded', () => {
    const textPath = document.querySelectorAll('.wp-block-zolo-text-path');
    if (textPath.length < 0) {
        return;
    }

    const SvgItem = ({
        textpathContent,
        textPathType,
        pathlink,
        uniqueid,
        textpathLength,
        textPathSpoint,
        circlePhoto,
        circlePhotoTitle,
        imageRes,
        showCircleImg,
    }) => {
        return (
            <>
                {textPathType !== 'circle' && textPathType !== 'triangle' && textPathType !== 'rectangle' && textPathType !== 'polygon' && (
                    <SvgComponent uniqueId={uniqueid} pathType={textPathType}>
                        <text>
                            <textPath
                                href={`#MyPath-${uniqueid}`}
                                textLength={textpathLength ? textpathLength : 0}
                                startOffset={textPathSpoint ? 100 - textPathSpoint + '%' : 0 + '%'}
                            >
                                <a
                                    className="zolo-textpath"
                                    href={pathlink && pathlink.url}
                                    rel={pathlink && pathlink.openInNewTab && 'noreferrer noopener'}
                                    target={pathlink && pathlink.openInNewTab && '_blank'}
                                    title={textpathContent}
                                >
                                    <tspan>{textpathContent && textpathContent}</tspan>
                                </a>
                            </textPath>
                        </text>
                    </SvgComponent>
                )}
                {textPathType === 'circle' || textPathType === 'triangle' || textPathType === 'rectangle' || textPathType === 'polygon' ? (
                    <>
                        <div className="zolo-circle-path-wrap">
                            <SvgComponent uniqueId={uniqueid} pathType={textPathType}>
                                <text>
                                    <textPath
                                        href={`#MyPath-${uniqueid}`}
                                        textLength={textpathLength ? textpathLength : 0}
                                        startOffset={textPathSpoint ? 100 - textPathSpoint + '%' : 0 + '%'}
                                    >
                                        <a
                                            className="zolo-textpath"
                                            href={pathlink && pathlink.url}
                                            rel={pathlink && pathlink.openInNewTab && 'noreferrer noopener'}
                                            target={pathlink && pathlink.openInNewTab && '_blank'}
                                            title={textpathContent}
                                        >
                                            <tspan>{textpathContent && textpathContent}</tspan>
                                        </a>
                                    </textPath>
                                </text>
                            </SvgComponent>
                            {showCircleImg && (
                                <div className="zolo-circle-image">
                                    {circlePhoto && (
                                        <img
                                            src={
                                                circlePhoto.sizes && circlePhoto.sizes[imageRes]
                                                    ? circlePhoto.sizes[imageRes].url
                                                    : circlePhoto.url
                                            }
                                            alt={circlePhoto.alt || circlePhotoTitle}
                                            className={`zolo-img wp-image-${circlePhoto.id}`}
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    </>
                ) : null}
            </>
        );
    };
    textPath.forEach((item) => {
        const textpathContent = item.dataset.textpathcontent;
        const textPathType = item.dataset.textpathtype;
        const pathlink = JSON.parse(item.dataset.pathlink);
        const textpathLength = item.dataset.textpathlength;
        const textPathSpoint = item.dataset.textstartoffset;
        const uniqueId = item.dataset.uniqueid;
        const showCircleImg = item.dataset.showcircleimg === 'true';
        const circlePhoto = JSON.parse(item.dataset.circlephoto || '{}');
        const circlePhotoTitle = item.dataset.circlephototitle;
        const imageRes = item.dataset.imageres || 'full';
        let root = createRoot(item);
        root.render(
            <>
                <SvgItem
                    textpathContent={textpathContent}
                    textPathType={textPathType}
                    pathlink={pathlink}
                    uniqueid={uniqueId}
                    textpathLength={textpathLength}
                    textPathSpoint={textPathSpoint}
                    circlePhoto={circlePhoto}
                    circlePhotoTitle={circlePhotoTitle}
                    imageRes={imageRes}
                    showCircleImg={showCircleImg}
                />
            </>
        );
    });
});
