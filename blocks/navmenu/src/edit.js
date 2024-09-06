import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { Placeholder, Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import Inspector from './inspector';
import './style.scss';
import VariationPicker from './components/variation-picker';
import PatternPicker from './components/pattern-picker';
import { closeSmall } from '@wordpress/icons';
import NavMenuAppenderButton from './components/appender-button';
import { select } from '@wordpress/data';

// import style
import Style from './style';


const { classArrayToStr } = window.zoloModule;



const Edit = (props) => {
    const { attributes, setAttributes, isSelected, clientId } = props;
    const [templateType, setTemplateType] = useState('');
    const [navMenuTemplates, setNavMenuTemplates] = useState([]);
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
        menuBreakpoint
    } = attributes;

    const CustomAppender = () => <NavMenuAppenderButton rootClientId={clientId} />;
    const { getBlockOrder, getBlockNamesByClientId, getBlockRootClientId } = select('core/block-editor');
    const blockRootClientId = getBlockRootClientId(clientId);
    const blockRootName = getBlockNamesByClientId(blockRootClientId);
    const isNestedMenu = blockRootName && blockRootName[0] === 'zolo/navmenu-item';
    const hasChildBlocks = getBlockOrder(clientId).length > 0;

    useEffect(() => {
        if (selectedVariation?.name && !hasChildBlocks) {
            if (isNestedMenu) {
                setNavMenuTemplates([]);
                setAttributes({ isVariationSelected: true });
            } else {
                switch (selectedVariation.name) {
                    case 'with-megamenu':
                        setNavMenuTemplates(selectedVariation.innerBlocks);
                        break;
                    case 'with-submenu':
                        setNavMenuTemplates(selectedVariation.innerBlocks);
                        break;
                    case 'items-only':
                        setNavMenuTemplates(selectedVariation.innerBlocks);
                        break;
                    default:
                        break;
                }
                setAttributes({ isVariationSelected: true });
            }
        }

        return () => {
            setNavMenuTemplates([]);
        }
    }, [selectedVariation, hasChildBlocks]);


    //block wrapper class
    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses), {
            [`menu-breakpoint-${menuBreakpoint}`]: menuBreakpoint
        }),
    });


    const innerBlocksProps = useInnerBlocksProps(
        {
            className: classnames('zolo-navmenu-menu'),
        },
        {
            allowedBlocks: ['zolo/navmenu-item'],
            renderAppender: isSelected || !hasChildBlocks ? CustomAppender : false,
            template: navMenuTemplates,
        }
    );

    const handleHamburger = () => {
        setToggleHamburger(!toggleHamburger);

        if (!activeMenu) {
            setActiveMenu(true);
        } else {
            setTimeout(() => {
                setActiveMenu(false);
            }, 1000);
        }
    };

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.heading} alt={__('Heading Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {
                    !isVariationSelected ? (
                        <>
                            {
                                !templateType && (
                                    <>
                                        <Placeholder
                                            className='zolo-navmenu-placeholder'
                                            icon={<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 490 490">
                                                <path d="M109.773 105.325H7.712V0h102.061v105.325zM28.346 84.691h60.793V20.634H28.346v64.057zM165.277 38.522h317.011v20.634H165.277zM109.773 297.662H7.712V192.333h102.061v105.329zm-81.427-20.634h60.793v-64.061H28.346v64.061zM165.277 230.859h317.011v20.634H165.277zM109.773 490H7.712V384.67h102.061V490zm-81.427-20.634h60.793v-64.063H28.346v64.063zM165.277 423.197h317.011v20.634H165.277z" />
                                            </svg>}
                                            label={__('Nav Menu', 'zoloblocks')}
                                            instructions={__('Select from library or start blank', 'zoloblocks')}
                                        >
                                            <Button
                                                onClick={() => setTemplateType('library')}
                                                className='zolo-navmenu-placeholder-button'
                                                variant='primary'
                                            >
                                                {__('Select From Library', 'zoloblocks')}
                                            </Button>
                                            <Button
                                                onClick={() => setTemplateType('blank')}
                                                className='zolo-navmenu-placeholder-button'
                                                variant='secondary'
                                            >
                                                {__('Start Blank', 'zoloblocks')}
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    setAttributes({ isVariationSelected: true });
                                                    setSelectedVariation({
                                                        name: 'items-only',
                                                        innerBlocks: [
                                                            ["zolo/navmenu-item", {
                                                                label: 'Home',
                                                                url: '#',
                                                            }],
                                                            ["zolo/navmenu-item", {
                                                                label: 'About',
                                                                url: '#',
                                                            }],
                                                            ["zolo/navmenu-item", {
                                                                label: 'Contact',
                                                                url: '#',
                                                            }],
                                                        ],
                                                        scope: ['block'],
                                                    })
                                                }}
                                                className='zolo-navmenu-placeholder-skip-button'
                                                icon={closeSmall}
                                            />
                                        </Placeholder>

                                    </>
                                )
                            }

                            {
                                templateType === 'blank' && (
                                    <VariationPicker setSelectedVariation={setSelectedVariation} setTemplateType={setTemplateType} />
                                )
                            }

                            {
                                templateType === 'library' && (
                                    <PatternPicker templateType={templateType} setTemplateType={setTemplateType} />
                                )
                            }
                        </>
                    ) : (
                        <>
                            <button className="zolo-nav-menu-hamburger zolo-menu-toggler" aria-label="hamburger-icon" type='button' onClick={handleHamburger}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={24} height={24} aria-hidden="true" focusable="false">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1 10h30c0.552 0 1-0.448 1-1s-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M31 15h-30c-0.552 0-1 0.448-1 1s0.448 1 1 1h30c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M31 22h-20c-0.552 0-1 0.448-1 1s0.448 1 1 1h20c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>
                                </svg>
                            </button>
                            <div className={classnames('zolo-navmenu-wrapper', { 'zolo-nav-menu-open': toggleHamburger, 'is-menu-active': activeMenu })}>
                                <div class="zolo-nav-menu-sidebar-top">
                                    <a class="zolo-nav-menu-sidebar-logo">
                                        <img src="https://zoloblocks.com/wp-content/uploads/2023/12/Zoloblocks-logo-black-300x59.png" alt="site-logo" />
                                    </a>
                                        <button className="zolo-nav-menu-sidebar-close" aria-label="close" type='button' onClick={handleHamburger}>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.131 16.8l9.034-9.034c0.312-0.312 0.312-0.819 0-1.131s-0.819-0.312-1.131 0l-9.034 9.034-9.034-9.034c-0.312-0.312-0.819-0.312-1.131 0s-0.312 0.819 0 1.131l9.034 9.034-9.034 9.034c-0.312 0.312-0.312 0.819 0 1.131 0.156 0.156 0.361 0.234 0.566 0.234s0.409-0.078 0.566-0.234l9.034-9.034 9.034 9.034c0.156 0.156 0.361 0.234 0.566 0.234s0.409-0.078 0.566-0.234c0.312-0.312 0.312-0.819 0-1.131l-9.034-9.034z"></path>
                                            </svg>
                                        </button>
                                </div>
                                <ul {...innerBlocksProps}></ul>
                            </div>
                            <div className={classnames('zolo-navmenu-overlay', { 'zolo-nav-menu-overlay-open': toggleHamburger })} onClick={handleHamburger}></div>
                        </>
                    )
                }
            </div>
        </>
    );
};

export default Edit;
