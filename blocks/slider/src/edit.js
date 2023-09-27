/**
 * WordPress dependencies
 */
import { useBlockProps, RichText, InnerBlocks, useInnerBlocksProps, BlockControls } from '@wordpress/block-editor';
const { Fragment, useEffect, useRef } = wp.element;
import { useDispatch } from '@wordpress/data';
import { createHigherOrderComponent } from '@wordpress/compose';
import { addFilter } from '@wordpress/hooks';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
const {
    handleUniqueId,
    generateResRangeStyle,
    generateResCounterStyle,
    generateDimensionStyle,
    generateBorderStyle,
    generateNormalBGControlStyles,
    generateTypographyStyle,
    generateDimensionsStyle,
    softMinifyCssStrings,
} = window.zoloModule;

// Constants
import {
    BLOCK_PREFIX,
    COLUMNS,
    COLUMNS_GAP,
    SLIDER_HEIGHT,
    CONTENT_WIDTH,
    CONTENT_PADDING,
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_BORDER,
    NAV_BORDER_RADIUS,
    NAV_BG,
    NAV_HOVER_BG,
    NAV_ICON_SIZE,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_BORDER,
    PAG_BORDER_RADIUS,
    PAG_BG,
    PAG_SPACING,
    APAG_WIDTH,
    APAG_HEIGHT,
    APAG_BORDER,
    APAG_BORDER_RADIUS,
    APAG_BG,
} from './constants';

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, className, clientId, isSelected }) {
    const {
        uniqueId,
        blockStyle,
        slideItems,
        sliderType,
        autoplay,
        autoplayDelay,
        pauseOnMouseEnter,
        infiniteLoop,
        showNavigation,
        navColor,
        navHoverColor,
        showPagination,
        paginationType,
        dynamicBullets,
        speed,
        carouselEffect,
        sliderEffect,
    } = attributes;

    // unique ID
    useEffect(() => {
        handleUniqueId({
            BLOCK_PREFIX,
            uniqueId,
            setAttributes,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`),
    });

    // columns count
    const {
        desktopRangeStyle: deskCol,
        tabRangeStyle: tabCol,
        mobRangeStyle: mobCol,
    } = generateResCounterStyle({
        controlName: COLUMNS,
        attributes,
        noProperty: true,
    });

    const {
        desktopRangeStyle: deskColGap,
        tabRangeStyle: tabColGap,
        mobRangeStyle: mobColGap,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        attributes,
        noProperty: true,
        noUnits: true,
    });

    // slider height
    const {
        desktopRangeStyle: deskHeight,
        tabRangeStyle: tabHeight,
        mobRangeStyle: mobHeight,
    } = generateResRangeStyle({
        controlName: SLIDER_HEIGHT,
        property: 'height',
        attributes,
    });

    // slider content
    const {
        desktopRangeStyle: deskContentWidth,
        tabRangeStyle: tabContentWidth,
        mobRangeStyle: mobContentWidth,
    } = generateResRangeStyle({
        controlName: CONTENT_WIDTH,
        property: 'max-width',
        attributes,
    });

    // content
    const {
        dimensionStylesDesktop: contentPaddingDesktop,
        dimensionStylesTab: contentPaddingTab,
        dimensionStylesMobile: contentPaddingMob,
    } = generateDimensionStyle({
        controlName: CONTENT_PADDING,
        styleFor: 'padding',
        attributes,
    });

    // Navigation
    const {
        desktopRangeStyle: navDeskWidth,
        tabRangeStyle: navTabWidth,
        mobRangeStyle: navMobWidth,
    } = generateResRangeStyle({
        controlName: NAV_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: navDeskHeight,
        tabRangeStyle: navTabHeight,
        mobRangeStyle: navMobHeight,
    } = generateResRangeStyle({
        controlName: NAV_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: navBorderStyles,
        tabBorderStyle: navBorderStylesTab,
        mobBorderStyle: navBorderStylesMob,
    } = generateBorderStyle({
        controlName: NAV_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: navBorderRadiusDesktop,
        dimensionStylesTab: navBorderRadiusTab,
        dimensionStylesMobile: navBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: NAV_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: navNormalBGStyle,
        backgroundStylesTab: navNormalBGStyleTab,
        backgroundStylesMobile: navNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        backgroundStylesDesktop: navHoverBGStyle,
        backgroundStylesTab: navHoverBGStyleTab,
        backgroundStylesMobile: navHoverBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: NAV_HOVER_BG,
        attributes,
        noMainBGImg: true,
    });

    // navigation icon
    const {
        desktopRangeStyle: navDeskSize,
        tabRangeStyle: navTabSize,
        mobRangeStyle: navMobSize,
    } = generateResRangeStyle({
        controlName: NAV_ICON_SIZE,
        property: 'font-size',
        attributes,
    });

    // Pagination
    const {
        desktopRangeStyle: pagDeskWidth,
        tabRangeStyle: pagTabWidth,
        mobRangeStyle: pagMobWidth,
    } = generateResRangeStyle({
        controlName: PAG_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: pagDeskHeight,
        tabRangeStyle: pagTabHeight,
        mobRangeStyle: pagMobHeight,
    } = generateResRangeStyle({
        controlName: PAG_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: pagBorderStyles,
        tabBorderStyle: pagBorderStylesTab,
        mobBorderStyle: pagBorderStylesMob,
    } = generateBorderStyle({
        controlName: PAG_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: pagBorderRadiusDesktop,
        dimensionStylesTab: pagBorderRadiusTab,
        dimensionStylesMobile: pagBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: PAG_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: pagNormalBGStyle,
        backgroundStylesTab: pagNormalBGStyleTab,
        backgroundStylesMobile: pagNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: PAG_BG,
        attributes,
        noMainBGImg: true,
    });

    const {
        desktopRangeStyle: pagSpacingDesktop,
        tabRangeStyle: pagSpacingTab,
        mobRangeStyle: pagSpacingMob,
    } = generateResRangeStyle({
        controlName: PAG_SPACING,
        property: 'gap',
        attributes,
    });

    // Active Pagination
    const {
        desktopRangeStyle: apagDeskWidth,
        tabRangeStyle: apagTabWidth,
        mobRangeStyle: apagMobWidth,
    } = generateResRangeStyle({
        controlName: APAG_WIDTH,
        property: 'width',
        attributes,
    });

    const {
        desktopRangeStyle: apagDeskHeight,
        tabRangeStyle: apagTabHeight,
        mobRangeStyle: apagMobHeight,
    } = generateResRangeStyle({
        controlName: APAG_HEIGHT,
        property: 'height',
        attributes,
    });

    const {
        desktopBorderStyle: apagBorderStyles,
        tabBorderStyle: apagBorderStylesTab,
        mobBorderStyle: apagBorderStylesMob,
    } = generateBorderStyle({
        controlName: APAG_BORDER,
        attributes,
    });

    const {
        dimensionStylesDesktop: apagBorderRadiusDesktop,
        dimensionStylesTab: apagBorderRadiusTab,
        dimensionStylesMobile: apagBorderRadiusMob,
    } = generateDimensionStyle({
        controlName: APAG_BORDER_RADIUS,
        styleFor: 'border-radius',
        attributes,
    });

    const {
        backgroundStylesDesktop: apagNormalBGStyle,
        backgroundStylesTab: apagNormalBGStyleTab,
        backgroundStylesMobile: apagNormalBGStyleMob,
    } = generateNormalBGControlStyles({
        controlName: APAG_BG,
        attributes,
        noMainBGImg: true,
    });

    /**
     * Block Styles
     */
    const desktopAllStyle = `
        .${uniqueId} .swiper-slide {
            ${deskHeight}
        }
        .${uniqueId} .swiper-content-outer {
            ${deskContentWidth}
            ${contentPaddingDesktop}
        }
        .${uniqueId} .swiper-button-next, .${uniqueId} .swiper-button-prev {
            ${navBorderStyles}
            ${navBorderRadiusDesktop}
            ${navNormalBGStyle}
            ${navDeskWidth}
            ${navDeskHeight}
        }
        .${uniqueId} .swiper-button-next:hover, .${uniqueId} .swiper-button-prev:hover {
            ${navHoverBGStyle}
        }
        .${uniqueId} .swiper-button-next:after, .${uniqueId}.swiper-button-prev:after {
            color: ${navColor};
            ${navDeskSize}

        }
        .${uniqueId}.swiper-button-next:hover:after, .${uniqueId}.swiper-button-prev:hover:after {
            color: ${navHoverColor};
        }
        .${uniqueId} .swiper-pagination-bullets {
            ${pagSpacingDesktop}
        }
        .${uniqueId} .swiper-pagination-bullets .swiper-pagination-bullet {
            ${pagDeskWidth}
            ${pagDeskHeight}
            ${pagBorderStyles}
            ${pagBorderRadiusDesktop}
            ${pagNormalBGStyle}
        }
        .${uniqueId} .swiper-pagination-bullet-active {
            ${apagDeskWidth}
            ${apagDeskHeight}
            ${apagBorderStyles}
            ${apagBorderRadiusDesktop}
            ${apagNormalBGStyle}
        }
    `;
    const tabletAllStyle = `
        .${uniqueId} .swiper-slide {
            ${tabHeight}
        }
        .${uniqueId} .swiper-content-outer {
            ${tabContentWidth}
            ${contentPaddingTab}
        }
        .${uniqueId} .swiper-button-next, .${uniqueId} .swiper-button-prev {
            ${navTabWidth}
            ${navTabHeight}
            ${navBorderStylesTab}
            ${navBorderRadiusTab}
            ${navNormalBGStyleTab}
        }
        .${uniqueId} .swiper-button-next:hover, .${uniqueId} .swiper-button-prev:hover {
            ${navHoverBGStyleTab}
        }
        .${uniqueId}.swiper-button-next:after, .${uniqueId}.swiper-button-prev:after {
            ${navTabSize}
        }
        .${uniqueId} .swiper-pagination-bullet {
            ${pagTabWidth}
            ${pagTabHeight}
            ${pagBorderStylesTab}
            ${pagBorderRadiusTab}
            ${pagNormalBGStyleTab}
            ${pagSpacingTab}
        }
        .${uniqueId} .swiper-pagination-bullet-active {
            ${apagTabWidth}
            ${apagTabHeight}
            ${apagBorderStylesTab}
            ${apagBorderRadiusTab}
            ${apagNormalBGStyleTab}
        }
    `;
    const mobileAllStyle = `
        .${uniqueId} .swiper-slide {
            ${mobHeight}
        }
        .${uniqueId} .swiper-content-outer {
            ${mobContentWidth}
            ${contentPaddingMob}
        }
        .${uniqueId} .swiper-button-next, .${uniqueId} .swiper-button-prev {
            ${navMobWidth}
            ${navMobHeight}
            ${navBorderStylesMob}
            ${navBorderRadiusMob}
            ${navNormalBGStyleMob}
        }
        .${uniqueId} .swiper-button-next:hover, .${uniqueId} .swiper-button-prev:hover {
            ${navHoverBGStyleMob}
        }
        .${uniqueId}.swiper-button-next:after, .${uniqueId}.swiper-button-prev:after {
            ${navMobSize}
        }
        .${uniqueId} .swiper-pagination-bullet {
            ${pagMobWidth}
            ${pagMobHeight}
            ${pagBorderStylesMob}
            ${pagBorderRadiusMob}
            ${pagNormalBGStyleMob}
            ${pagSpacingMob}
        }
        .${uniqueId} .swiper-pagination-bullet-active {
            ${apagMobWidth}
            ${apagMobHeight}
            ${apagBorderStylesMob}
            ${apagBorderRadiusMob}
            ${apagNormalBGStyleMob}
        }
    `;

    /**
     * Block All Styles
     */
    const allStyle = `
		${desktopAllStyle}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabletAllStyle}
		}
		@media (max-width: 767px) {
			${mobileAllStyle}
		}
	`;

    // Set All Style in "blockStyle" Attribute
    useEffect(() => {
        const styles = {
            desktop: desktopAllStyle,
            tablet: tabletAllStyle,
            mobile: mobileAllStyle,
        };
        if (JSON.stringify(blockStyle) != JSON.stringify(styles)) {
            setAttributes({ blockStyle: styles });
        }
    }, [attributes]);

    // Slider Ref
    const swiperRef = useRef(null);
    const dispatch = useDispatch();

    // add new slide
    const addNewSlide = () => {
        // Create the new slide block
        const newSlideBlock = createBlock('zolo/slide');
        // Insert the new slide block
        dispatch('core/block-editor').insertBlocks(newSlideBlock, 100, clientId);
    };

    // control the click event on the slider
    const addClickEventListener = (swiperElement) => {
        swiperElement.addEventListener('click', function (e) {
            e.preventDefault();
            const outerContent = swiperElement.querySelector('.wp-block-zolo-slider');
            // Check if the click is on the inner content
            if (outerContent && outerContent.contains(e.target)) {
                dispatch('core/block-editor').selectBlock(clientId);
                dispatch('core/edit-post').openGeneralSidebar('edit-post/block');
            }
        });
    };

    useEffect(() => {
        if (swiperRef.current) {
            addClickEventListener(swiperRef.current);
        }
    }, []);

    // slider options init
    const axvartSliderInit = function (sliderE, options) {
        if (sliderE.swiper) {
            sliderE.swiper.destroy();
        }
        new Swiper(sliderE, options);
    };

    //slider initialize
    useEffect(() => {
        let breakpoints = {};
        if (sliderType === 'carousel') {
            breakpoints = {
                1024: {
                    slidesPerView: deskCol || 2,
                    spaceBetween: parseInt(deskColGap.slice(0, -1)) || 30,
                },
                768: {
                    slidesPerView: tabCol || 2,
                    spaceBetween: parseInt(tabColGap.slice(0, -1)) || 30,
                },
                320: {
                    slidesPerView: mobCol || 1,
                    spaceBetween: parseInt(mobColGap.slice(0, -1)) || 0,
                },
            };
        }

        let options = {
            loop: infiniteLoop,
            speed: speed * 100,
            effect: sliderType === 'carousel' ? carouselEffect : sliderEffect,
            autoplay: autoplay ? { delay: autoplayDelay * 100, pauseOnMouseEnter: pauseOnMouseEnter } : false,
            navigation: showNavigation ? { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' } : false,
            pagination: showPagination
                ? {
                      el: '.swiper-pagination',
                      clickable: true,
                      type: paginationType,
                      dynamicBullets: dynamicBullets,
                  }
                : false,
            effect: sliderType === 'carousel' ? carouselEffect : sliderEffect,
            breakpoints: breakpoints,
        };

        setAttributes({ sliderOptions: options });

        axvartSliderInit(swiperRef.current, options);
    }, [
        sliderType,
        deskCol,
        tabCol,
        mobCol,
        deskColGap,
        tabColGap,
        mobColGap,
        autoplay,
        autoplayDelay,
        pauseOnMouseEnter,
        infiniteLoop,
        showNavigation,
        showPagination,
        paginationType,
        dynamicBullets,
        speed,
        carouselEffect,
        sliderEffect,
        slideItems,
    ]);

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `swiper-wrapper`,
            slot: 'container-start',
        },
        {
            allowedBlocks: ['zolo/slide'],
            template: [['zolo/slide'], ['zolo/slide'], ['zolo/slide']],
            templateLock: false,
            renderAppender: false,
            orientation: 'horizontal',
        }
    );

    return (
        <Fragment>
            <style>{` 
                .wp-block-zolo-slider {
                    padding: 10px;
                    border: 2px dashed #021feb;
                }
                [data-type="zolo/slide"] {
                    height: 100%;
                }
                ${softMinifyCssStrings(allStyle)}
            `}</style>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton title={__('Add Slide', 'zolo-blocks')} icon="plus" onClick={addNewSlide} />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <div className="swiper" ref={swiperRef}>
                    <div {...innerBlocksProps} />
                    {showPagination && <div class="swiper-pagination swiper-pagination-position-bottom"></div>}
                    {showNavigation && (
                        <Fragment>
                            <div className="swiper-navigation-wrap  swiper-navigation-position-center">
                                <div className="swiper-nav-button swiper-button-prev"></div>
                                <div className="swiper-nav-button swiper-button-next"></div>
                            </div>
                        </Fragment>
                    )}
                </div>
            </div>
        </Fragment>
    );
}
