import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
const { classArrayToStr, sanitizeUrl } = window.zoloModule;

const Save = ({ attributes }) => {
    const {
        uniqueId,
        parentClasses,
        zoloId,
        textpathContent,
        textPathType,
        pathlink,
        textpathLength,
        textPathSpoint,
        circlePhoto,
        circlePhotoTitle,
        imageRes,
        showCircleImg,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });
    return (
        <>
            <div
                {...blockProps}
                {...(zoloId && {
                    id: zoloId,
                })}
                data-textpathcontent={textpathContent}
                data-textpathtype={textPathType}
                data-pathlink={JSON.stringify(sanitizeUrl(pathlink?.url))}
                data-textpathlength={textpathLength}
                data-textstartoffset={textPathSpoint}
                data-uniqueid={uniqueId}
                data-circlephoto={JSON.stringify(circlePhoto)} // Adding circlePhoto to data attributes
                data-circlephototitle={circlePhotoTitle}
                data-imageres={imageRes}
                data-showcircleimg={showCircleImg}
            ></div>
        </>
    );
};

export default Save;
