/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
const {} = wp.element;
import classnames from 'classnames';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;
import { applyFilters } from '@wordpress/hooks';

/**
 * Save function
 */

export default function save(props) {
    const { attributes } = props;
    const { uniqueId, parentClasses, sliderOptions, customNavIcon, prevNavIcon, nextNavIcon, zoloId } = attributes;

    const {
        pagination = true,
        navigation = true,
        paginationType = 'bullets',
        pagiPosition = 'bottom-center',
        navPosition = 'center-center',
        progressDirection = 'top',
    } = sliderOptions;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    return (
        <div
            {...blockProps}
            {...(zoloId && {
                id: zoloId,
            })}
            {...(sliderOptions &&
                Object.keys(sliderOptions).length > 1 && {
                    'data-swiper-options': JSON.stringify(sliderOptions),
                })}
        >
            {renderHookBefore && renderHookBefore}
            <div
                className={`swiper ${pagination ? (paginationType === 'progressbar' ? `zolo-progress-${progressDirection}` : `zolo-pag-ps-${pagiPosition}`) : ''}`}
            >
                <div className="swiper-wrapper">
                    <InnerBlocks.Content />
                </div>
                {pagination && <div className="swiper-pagination"></div>}
            </div>
            {navigation && (
                <>
                    <div
                        className={`swiper-navigation-wrap ${navPosition ? `zolo-nav-ps-${navPosition}` : ''} ${customNavIcon ? 'zolo-custom-nav' : ''}`}
                    >
                        {customNavIcon && (
                            <>
                                <div className="swiper-nav-button swiper-zolo-prev swiper-button-prev">
                                    <DisplayZoloIcon icon={prevNavIcon} />
                                </div>
                                <div className="swiper-nav-button swiper-zolo-next swiper-button-next">
                                    <DisplayZoloIcon icon={nextNavIcon} />
                                </div>
                            </>
                        )}
                        {!customNavIcon && (
                            <>
                                <div className="swiper-nav-button swiper-button-prev"></div>
                                <div className="swiper-nav-button swiper-button-next"></div>
                            </>
                        )}
                    </div>
                </>
            )}
            {renderHookAfter && renderHookAfter}
        </div>
    );
}
