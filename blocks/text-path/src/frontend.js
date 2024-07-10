import { render, createRoot } from '@wordpress/element';
import SvgComponent from './svg';

document.addEventListener('DOMContentLoaded', () => {
    const textPath = document.querySelectorAll('.wp-block-zolo-text-path');
    if (textPath.length < 0) {
        return;
    }
    const SvgItem = ({ textpathContent, textPathType, pathlink, uniqueId, textpathLength }) => {
        return (
            <SvgComponent uniqueId={uniqueId} pathType={textPathType}>
                <text>
                    <textPath href={`#MyPath-${uniqueId}`} textLength={textpathLength}>
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
        );
    };
    textPath.forEach((item) => {
        const textpathContent = item.dataset.textpathcontent;
        const textPathType = item.dataset.textpathtype;
        const pathlink = JSON.parse(item.dataset.pathlink);
        const textpathLength = item.dataset.textpathlength;
        const uniqueId = item.dataset.uniqueid;
        let root = createRoot(item);
        root.render(
            <SvgItem
                textpathContent={textpathContent}
                textPathType={textPathType}
                pathlink={pathlink}
                uniqueid={uniqueId}
                textpathLength={textpathLength}
            />
        );
    });
});
