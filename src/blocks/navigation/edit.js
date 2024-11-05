import { useBlockProps, useInnerBlocksProps, BlockControls, MediaUpload, MediaPlaceholder } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { Placeholder, Button, ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import Inspector from './inspector';
import './style.scss';
import VariationPicker from './components/variation-picker';
import PatternPicker from './components/pattern-picker';
import { closeSmall } from '@wordpress/icons';
import NavigationAppenderButton from './components/appender-button';
import { select } from '@wordpress/data';

// import style
import Style from './style';

const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

const Edit = (props) => {
    const { attributes, setAttributes, isSelected, clientId } = props;
    const [templateType, setTemplateType] = useState('');
    const [navigationTemplates, setNavigationTemplates] = useState([]);
    const [selectedVariation, setSelectedVariation] = useState();
    const [toggleHamburger, setToggleHamburger] = useState(false);
    const [activeMenu, setActiveMenu] = useState(false);
    const {
        uniqueId,
        preview,
        parentClasses,
        styles,
        isVariationSelected,
        resMode,
        menuBreakpoint,
        brandPhoto,
        brandTitle,
        imageRes,
        humbergerIcon,
    } = attributes;

    const CustomAppender = () => <NavigationAppenderButton rootClientId={clientId} />;
    const { getBlockOrder, getBlockNamesByClientId, getBlockRootClientId } = select('core/block-editor');
    const blockRootClientId = getBlockRootClientId(clientId);
    const blockRootName = getBlockNamesByClientId(blockRootClientId);
    const isNestedMenu = blockRootName && blockRootName[0] === 'zolo/navigation-item';
    const hasChildBlocks = getBlockOrder(clientId).length > 0;

    useEffect(() => {
        if (selectedVariation?.name && !hasChildBlocks) {
            if (isNestedMenu) {
                setNavigationTemplates([]);
                setAttributes({ isVariationSelected: true });
            } else {
                switch (selectedVariation.name) {
                    case 'with-megamenu':
                        setNavigationTemplates(selectedVariation.innerBlocks);
                        break;
                    case 'with-submenu':
                        setNavigationTemplates(selectedVariation.innerBlocks);
                        break;
                    case 'items-only':
                        setNavigationTemplates(selectedVariation.innerBlocks);
                        break;
                    default:
                        break;
                }
                setAttributes({ isVariationSelected: true });
            }
        }

        return () => {
            setNavigationTemplates([]);
        };
    }, [selectedVariation, hasChildBlocks]);

    //block wrapper class
    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses), {
            [`menu-breakpoint-${menuBreakpoint}`]: menuBreakpoint,
        }),
    });

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: classnames('zolo-navigation-menu'),
        },
        {
            allowedBlocks: ['zolo/navigation-item'],
            renderAppender: isSelected || !hasChildBlocks ? CustomAppender : false,
            template: navigationTemplates,
        }
    );
    let timer;
    const handleHamburger = () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            setToggleHamburger(!toggleHamburger);
            if (!activeMenu) {
                setActiveMenu(true);
            } else {
                setTimeout(() => {
                    setActiveMenu(false);
                }, 700);
            }
        }, 500);
    };

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.heading} alt={__('Heading Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            {brandPhoto && (
                <BlockControls>
                    <Fragment>
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        brandPhoto: {
                                            id: media.id,
                                            url: media.url,
                                            alt: media.alt,
                                            sizes: media.sizes,
                                            caption: media.caption,
                                        },
                                    });
                                }}
                                allowedTypes={['image']}
                                value={brandPhoto && brandPhoto.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="components-toolbar__control"
                                        label={__('Replace Photo', 'zoloblocks')}
                                        icon="edit"
                                        onClick={open}
                                    />
                                )}
                            />
                        </ToolbarGroup>
                    </Fragment>
                </BlockControls>
            )}
            <Style props={props} />
            <div {...blockProps}>
                {!isVariationSelected ? (
                    <>
                        {!templateType && (
                            <>
                                <Placeholder
                                    className="zolo-navigation-placeholder"
                                    icon={
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.98633 15.2297C3.98633 14.8419 4.30068 14.5276 4.68846 14.5276H7.62803C8.0158 14.5276 8.33016 14.8419 8.33016 15.2297C8.33016 15.6175 8.0158 15.9318 7.62803 15.9318H4.68846C4.30068 15.9318 3.98633 15.6175 3.98633 15.2297Z"
                                                fill="#2667FF"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.98633 18.834C3.98633 18.4462 4.30068 18.1318 4.68846 18.1318H7.62803C8.0158 18.1318 8.33016 18.4462 8.33016 18.834C8.33016 19.2217 8.0158 19.5361 7.62803 19.5361H4.68846C4.30068 19.5361 3.98633 19.2217 3.98633 18.834Z"
                                                fill="#2667FF"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M2.40426 2.40426V6.44851H21.5957V2.40426H2.40426ZM1 2.17021C1 1.52392 1.52392 1 2.17021 1H21.8298C22.4761 1 23 1.52392 23 2.17021V6.68255C23 7.32884 22.4761 7.85277 21.8298 7.85277H2.17021C1.52392 7.85277 1 7.32884 1 6.68255V2.17021Z"
                                                fill="#2667FF"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.70557 4.42625C3.70557 4.03847 4.01992 3.72412 4.40769 3.72412H7.14131C7.52909 3.72412 7.84344 4.03847 7.84344 4.42625C7.84344 4.81402 7.52909 5.12838 7.14131 5.12838H4.40769C4.01992 5.12838 3.70557 4.81402 3.70557 4.42625Z"
                                                fill="#2667FF"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M9.81873 4.42625C9.81873 4.03847 10.1331 3.72412 10.5209 3.72412H13.2545C13.6422 3.72412 13.9566 4.03847 13.9566 4.42625C13.9566 4.81402 13.6422 5.12838 13.2545 5.12838H10.5209C10.1331 5.12838 9.81873 4.81402 9.81873 4.42625Z"
                                                fill="#2667FF"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.8477 4.42625C15.8477 4.03847 16.162 3.72412 16.5498 3.72412H19.2834C19.6712 3.72412 19.9855 4.03847 19.9855 4.42625C19.9855 4.81402 19.6712 5.12838 19.2834 5.12838H16.5498C16.162 5.12838 15.8477 4.81402 15.8477 4.42625Z"
                                                fill="#2667FF"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M6.06336 9.04183C6.27787 9.03857 6.4821 9.13355 6.61782 9.2997L7.95179 10.9328H10.1089C10.8841 10.9328 11.3072 11.6252 11.3072 12.2154V21.7175C11.3072 22.3066 10.8818 22.9769 10.1473 22.9995C10.1377 22.9998 10.128 23 10.1183 23H2.1983C1.42309 23 1 22.3076 1 21.7175V12.2154C1 11.616 1.44028 10.9328 2.1983 10.9328H4.27673L5.51701 9.31645C5.64761 9.14625 5.84885 9.04509 6.06336 9.04183ZM9.90298 21.5958H2.40426V12.3371H4.62298C4.84126 12.3371 5.04713 12.2355 5.18001 12.0624L6.09125 10.8748L7.07495 12.0791C7.2083 12.2424 7.40793 12.3371 7.61872 12.3371H9.90298V21.5958Z"
                                                fill="#2667FF"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M16.1285 15.2297C16.1285 14.8419 16.4429 14.5276 16.8307 14.5276H19.7796C20.1674 14.5276 20.4817 14.8419 20.4817 15.2297C20.4817 15.6175 20.1674 15.9318 19.7796 15.9318H16.8307C16.4429 15.9318 16.1285 15.6175 16.1285 15.2297Z"
                                                fill="#2667FF"
                                            />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M14.8553 12.3371V14.4716C14.8553 14.6821 14.7609 14.8814 14.5981 15.0148L14.1973 15.343L14.5806 15.6371C14.7538 15.77 14.8553 15.9758 14.8553 16.1941V18.2818H21.5958V12.3371H14.8553ZM13.4511 11.9252C13.4511 11.2864 14.0139 10.9329 14.4902 10.9329H21.9609C22.4371 10.9329 23 11.2864 23 11.9252V18.6937C23 19.3325 22.4371 19.6861 21.9609 19.6861H14.4902C14.0139 19.6861 13.4511 19.3325 13.4511 18.6937V16.5404L12.6398 15.918C12.4698 15.7875 12.3686 15.5865 12.3652 15.3721C12.3618 15.1577 12.4565 14.9536 12.6224 14.8177L13.4511 14.1391V11.9252Z"
                                                fill="#2667FF"
                                            />
                                        </svg>
                                    }
                                    label={__('Navigation', 'zoloblocks')}
                                    instructions={__('Select from library or start blank', 'zoloblocks')}
                                >
                                    {/* <Button
                                        onClick={() => setTemplateType('library')}
                                        className="zolo-navigation-placeholder-button"
                                        variant="primary"
                                    >
                                        {__('Select From Library', 'zoloblocks')}
                                    </Button> */}
                                    <Button
                                        onClick={() => setTemplateType('blank')}
                                        className="zolo-navigation-placeholder-button"
                                        variant="secondary"
                                    >
                                        {__('Start Blank', 'zoloblocks')}
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setAttributes({ isVariationSelected: true });
                                            setSelectedVariation({
                                                name: 'items-only',
                                                innerBlocks: [
                                                    [
                                                        'zolo/navigation-item',
                                                        {
                                                            label: 'Home',
                                                            url: '#',
                                                        },
                                                    ],
                                                    [
                                                        'zolo/navigation-item',
                                                        {
                                                            label: 'About',
                                                            url: '#',
                                                        },
                                                    ],
                                                    [
                                                        'zolo/navigation-item',
                                                        {
                                                            label: 'Contact',
                                                            url: '#',
                                                        },
                                                    ],
                                                ],
                                                scope: ['block'],
                                            });
                                        }}
                                        className="zolo-navigation-placeholder-skip-button"
                                        icon={closeSmall}
                                    />
                                </Placeholder>
                            </>
                        )}

                        {templateType === 'blank' && (
                            <VariationPicker setSelectedVariation={setSelectedVariation} setTemplateType={setTemplateType} />
                        )}

                        {templateType === 'library' && <PatternPicker templateType={templateType} setTemplateType={setTemplateType} />}
                    </>
                ) : (
                    <>
                        <button
                            className="zolo-navigation-hamburger zolo-menu-toggler"
                            aria-label="hamburger-icon"
                            type="button"
                            onClick={handleHamburger}
                        >
                            <DisplayZoloIcon icon={humbergerIcon} />
                        </button>
                        <div
                            className={classnames('zolo-navigation-wrapper', {
                                'zolo-navigation-open': toggleHamburger,
                                'is-menu-active': activeMenu,
                            })}
                        >
                            <div className="zolo-navigation-sidebar-top">
                                <a className="zolo-navigation-sidebar-logo">
                                    {brandPhoto.id ? (
                                        <>
                                            <img
                                                src={
                                                    brandPhoto.sizes && brandPhoto.sizes[imageRes]
                                                        ? brandPhoto.sizes[imageRes].url
                                                        : brandPhoto.url
                                                }
                                                alt={brandPhoto.alt || brandTitle}
                                                className="zolo-img"
                                            />
                                        </>
                                    ) : (
                                        <MediaPlaceholder
                                            onSelect={(media) =>
                                                setAttributes({
                                                    brandPhoto: {
                                                        id: media.id,
                                                        url: media.url,
                                                        alt: media.alt,
                                                        sizes: media.sizes,
                                                        caption: media.caption,
                                                    },
                                                })
                                            }
                                            allowedTypes={['image']}
                                            multiple={false}
                                            labels={{ title: __('Brand Photo', 'zoloblocks') }}
                                        />
                                    )}
                                </a>
                                <button className="zolo-navigation-sidebar-close" aria-label="close" type="button" onClick={handleHamburger}>
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
                        <div
                            className={classnames('zolo-navigation-overlay', { 'zolo-navigation-overlay-open': toggleHamburger })}
                            onClick={handleHamburger}
                        ></div>
                    </>
                )}
            </div>
        </>
    );
};

export default Edit;
