import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, isVariationSelected, menuBreakpoint, brandPhoto, imageRes, brandTitle, humbergerIcon } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), {
            [`menu-breakpoint-${menuBreakpoint}`]: menuBreakpoint,
        }),
    });

    const innerBlocksProps = useInnerBlocksProps.save({
        className: classnames('zolo-navigation-menu'),
    });

    if (!isVariationSelected) {
        return null;
    }

    return (
        <div {...blockProps}>
            <button className="zolo-navigation-hamburger zolo-menu-toggler" aria-label="hamburger-icon" type="button">
                <DisplayZoloIcon icon={humbergerIcon} />
            </button>
            <div className="zolo-navigation-wrapper">
                <div className="zolo-navigation-sidebar-top">
                    <a className="zolo-navigation-sidebar-logo">
                        {brandPhoto && (
                            <img
                                src={brandPhoto.sizes && brandPhoto.sizes[imageRes] ? brandPhoto.sizes[imageRes].url : brandPhoto.url}
                                alt={brandPhoto.alt || brandTitle}
                                className="zolo-img"
                            />
                        )}
                    </a>
                    <button className="zolo-navigation-sidebar-close" aria-label="close" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.131 16.8l9.034-9.034c0.312-0.312 0.312-0.819 0-1.131s-0.819-0.312-1.131 0l-9.034 9.034-9.034-9.034c-0.312-0.312-0.819-0.312-1.131 0s-0.312 0.819 0 1.131l9.034 9.034-9.034 9.034c-0.312 0.312-0.312 0.819 0 1.131 0.156 0.156 0.361 0.234 0.566 0.234s0.409-0.078 0.566-0.234l9.034-9.034 9.034 9.034c0.156 0.156 0.361 0.234 0.566 0.234s0.409-0.078 0.566-0.234c0.312-0.312 0.312-0.819 0-1.131l-9.034-9.034z"
                            ></path>
                        </svg>
                    </button>
                </div>
                <ul {...innerBlocksProps}></ul>
            </div>
            <div className="zolo-navigation-overlay"></div>
        </div>
    );
};

export default Save;
