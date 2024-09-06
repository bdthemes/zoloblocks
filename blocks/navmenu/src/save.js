import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { classArrayToStr } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        isVariationSelected,
        menuBreakpoint
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses), {
            [`menu-breakpoint-${menuBreakpoint}`]: menuBreakpoint
        }),
    });

    const innerBlocksProps = useInnerBlocksProps.save(
        {
            className: classnames('zolo-navmenu-menu'),
        },
    );

    if (!isVariationSelected) {
        return null;
    }

    return (
        <div {...blockProps}>
            <button className="zolo-nav-menu-hamburger zolo-menu-toggler" aria-label="hamburger-icon" type='button'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={24} height={24} aria-hidden="true" focusable="false">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 10h30c0.552 0 1-0.448 1-1s-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M31 15h-30c-0.552 0-1 0.448-1 1s0.448 1 1 1h30c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M31 22h-20c-0.552 0-1 0.448-1 1s0.448 1 1 1h20c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
                </svg>
            </button>
            <div className='zolo-navmenu-wrapper'>
                <div class="zolo-nav-menu-sidebar-top">
                    <a class="zolo-nav-menu-sidebar-logo">
                        <img src="https://zoloblocks.com/wp-content/uploads/2023/12/Zoloblocks-logo-black-300x59.png" alt="site-logo" />
                    </a>
                    <button className="zolo-nav-menu-sidebar-close" aria-label="close" type='button'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.131 16.8l9.034-9.034c0.312-0.312 0.312-0.819 0-1.131s-0.819-0.312-1.131 0l-9.034 9.034-9.034-9.034c-0.312-0.312-0.819-0.312-1.131 0s-0.312 0.819 0 1.131l9.034 9.034-9.034 9.034c-0.312 0.312-0.312 0.819 0 1.131 0.156 0.156 0.361 0.234 0.566 0.234s0.409-0.078 0.566-0.234l9.034-9.034 9.034 9.034c0.156 0.156 0.361 0.234 0.566 0.234s0.409-0.078 0.566-0.234c0.312-0.312 0.312-0.819 0-1.131l-9.034-9.034z"></path>
                        </svg>
                    </button>
                </div>
                <ul {...innerBlocksProps}></ul>
            </div>
            <div className='zolo-navmenu-overlay'></div>
        </div>
    );
};

export default Save;
