import { useState, useEffect, RawHTML } from '@wordpress/element';
import { Modal, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import icons from './icons.json';

const iconCategories = [
    {
        label: __('All Icons', 'zolo-blocks'),
        value: 'all',
        icon: (
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M320 96H128C110.3 96 96 81.67 96 64C96 46.33 110.3 32 128 32H320C337.7 32 352 46.33 352 64C352 81.67 337.7 96 320 96zM416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224zM0 448C0 430.3 14.33 416 32 416H416C433.7 416 448 430.3 448 448C448 465.7 433.7 480 416 480H32C14.33 480 0 465.7 0 448zM320 352H128C110.3 352 96 337.7 96 320C96 302.3 110.3 288 128 288H320C337.7 288 352 302.3 352 320C352 337.7 337.7 352 320 352z"></path>
            </svg>
        ),
    },
    {
        label: __('Font Awesome - Regular', 'zolo-blocks'),
        value: 'regular',
        icon: (
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M201.6,152c-25.4,0-37.4,10.4-57.6,14.4V160c0-8.8-7.2-16-16-16s-16,7.2-16,16v192c0,0.8,0.1,1.6,0.2,2.4 c0.1,0.4,0.1,0.8,0.2,1.2c1.6,7.1,8,12.4,15.6,12.4s14-5.3,15.6-12.4c0.1-0.4,0.2-0.8,0.2-1.2c0.1-0.8,0.2-1.6,0.2-2.4V198.4 c4-0.8,7.7-1.8,11.2-3c14.3-4.7,26-11.4,46.4-11.4c31.4,0,43.2,16,74.6,16c8.9,0,15.9-1.1,24.2-3.5c1.2-0.3,2.4-0.7,3.6-1.1v96 c-10,3.2-17.6,4.6-27.8,4.6c-31.4,0-43.4-16-74.6-16c-10.2,0-18.2,1.8-25.6,4v32c7.4-2.4,15.4-4,25.6-4c31.4,0,43.2,16,74.6,16	c18.6,0,28.2-4.8,59.8-16V152c-31.6,11.2-41.2,16-59.8,16C244.8,168,232.8,152,201.6,152z M384,32H64C28.7,32,0,60.7,0,96v320	c0,35.3,28.7,64,64,64h320c35.3,0,64-28.7,64-64V96C448,60.7,419.3,32,384,32z M416,416c0,17.6-14.4,32-32,32H64 c-17.6,0-32-14.4-32-32V96c0-17.6,14.4-32,32-32h320c17.6,0,32,14.4,32,32V416z"></path>
            </svg>
        ),
    },
    {
        label: __('Font Awesome - Solid', 'zolo-blocks'),
        value: 'solid',
        icon: (
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M384.5,32.5h-320c-35.3,0-64,28.7-64,64v320c0,35.3,28.7,64,64,64h320c35.3,0,64-28.7,64-64v-320 C448.5,61.2,419.8,32.5,384.5,32.5z M336.5,312.5c-31.6,11.2-41.2,16-59.8,16c-31.4,0-43.2-16-74.6-16c-10.2,0-18.2,1.6-25.6,4v-32 c7.4-2.2,15.4-4,25.6-4c31.2,0,43.2,16,74.6,16c10.2,0,17.8-1.4,27.8-4.6v-96c-10,3.2-17.6,4.6-27.8,4.6c-31.4,0-43.2-16-74.6-16 c-25.4,0-37.4,10.4-57.6,14.4v153.6c0,8.8-7.2,16-16,16c-8.8,0-16-7.2-16-16v-192c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16v6.4 c20.2-4,32.2-14.4,57.6-14.4c31.2,0,43.2,16,74.6,16c18.6,0,28.2-4.8,59.8-16V312.5z"></path>
            </svg>
        ),
    },
    {
        label: __('Font Awesome - Brand', 'zolo-blocks'),
        value: 'brands',
        icon: (
            <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 496C64 504.8 56.75 512 48 512h-32C7.25 512 0 504.8 0 496V32c0-17.75 14.25-32 32-32s32 14.25 32 32V496zM476.3 0c-6.365 0-13.01 1.35-19.34 4.233c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.81-31.86-163.9-31.87C160.9 .3055 131.6 4.867 96 15.75v350.5c32-9.984 59.87-14.1 84.85-14.1c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.971 111.1-23.09C504.1 355.9 512 344.4 512 332.1V30.73C512 11.1 495.3 0 476.3 0z"></path>
            </svg>
        ),
    },
];

const ZoloIconPicker = ({ label, value, onChange }) => {
    const [iconsPanel, setIconsPanel] = useState(false);
    const [category, setCategory] = useState('all');
    const [filterIcons, setFilterIcons] = useState([]);
    const [searchText, setSearchText] = useState('');

    const allSvgItems = Object.keys(icons).map((key) => ({
        label: icons[key].label,
        svg: icons[key].svg,
    }));

    const solidCategory = allSvgItems.filter((item) => item.svg.solid);
    const brandCategory = allSvgItems.filter((item) => item.svg.brands);
    const regularCategory = allSvgItems.filter((item) => item.svg.regular);

    // console.log(allSvgItems[0].svg);

    useEffect(() => {
        let displayIcons = [];
        if (category === 'solid') {
            displayIcons = solidCategory;
        } else if (category === 'brands') {
            displayIcons = brandCategory;
        } else if (category === 'regular') {
            displayIcons = regularCategory;
        } else {
            displayIcons = allSvgItems;
        }

        if (searchText) {
            displayIcons = displayIcons.filter((item) => item.label.toLowerCase().includes(searchText.toLowerCase()));

            // check if icons found or not
            if (displayIcons.length === 0) {
                displayIcons = [
                    {
                        title: __('No Icons Found', 'zolo-blocks'),
                        svg: {
                            solid: {
                                raw: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.62 0 0 114.62 0 256s114.62 256 256 256 256-114.62 256-256S397.38 0 256 0zm0 480C132.48 480 32 379.52 32 256S132.48 32 256 32s224 100.48 224 224-100.48 224-224 224z"/><path d="M336 192H176a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm-16 64H192v-32h128z"/></svg>`,
                            },
                        },
                    },
                ];
            }
        }

        setFilterIcons(displayIcons);
    }, [category, allSvgItems, solidCategory, brandCategory, regularCategory, searchText]);

    return (
        <div className="zolo-icon-picker">
            <div className="zolo-icon-preview">
                <label htmlFor="iconPreview">{label}</label>
                <Button className={`zolo-picker__button ${value ? 'active' : ''}`} id="iconPreview" onClick={() => setIconsPanel(true)}>
                    {value ? <RawHTML className="zolo__single-preview-icon" children={value} /> : __('ADD ICON', 'zolo-blocks')}
                </Button>
            </div>

            {iconsPanel && (
                <Modal className="zolo__modal" title={__('ZoloBlocks', 'zolo-blocks')} onRequestClose={() => setIconsPanel(false)}>
                    <div className="zolo-modal__wrapper">
                        <div className="zolo-categories__sidebar">
                            {iconCategories &&
                                iconCategories.map((item, index) => (
                                    <Button
                                        className={`category__button ${category === item.value ? 'active' : ''}`}
                                        key={index}
                                        onClick={() => setCategory(item.value)}
                                    >
                                        {item.icon && <span className="category__icon">{item.icon}</span>}
                                        {item.label}
                                    </Button>
                                ))}

                            <p className="zolo-custom-icon">
                                <strong>{__('Upcoming: ', 'zolo-blocks')}</strong>
                                {__('Custom Icons Option', 'zolo-blocks')}
                            </p>
                        </div>
                        <div className="modal__content">
                            <div className="search__input">
                                <input
                                    type="text"
                                    placeholder="Search Icon"
                                    onChange={(e) => setSearchText(e.target.value)}
                                    value={searchText}
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="search__icon"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </div>
                            <div className="zolo-icons-wrap">
                                <h2 className="zolo-icons-title">
                                    {category === 'all' && __('All Icons', 'zolo-blocks')}
                                    {category === 'solid' && __('Font Awesome - Solid', 'zolo-blocks')}
                                    {category === 'brands' && __('Font Awesome - Brand', 'zolo-blocks')}
                                    {category === 'regular' && __('Font Awesome - Regular', 'zolo-blocks')}
                                </h2>
                                <div className="zolo__icons-grid">
                                    {filterIcons &&
                                        filterIcons.map((item, index) => {
                                            // find category
                                            let iconCat;
                                            if (item.svg.solid) {
                                                iconCat = 'solid';
                                            } else if (item.svg.brands) {
                                                iconCat = 'brands';
                                            } else if (item.svg.regular) {
                                                iconCat = 'regular';
                                            }

                                            return (
                                                <>
                                                    {item.title ? (
                                                        <p className="zolo__not_found">{item.title}</p>
                                                    ) : (
                                                        <Button
                                                            key={index}
                                                            className="single__icon"
                                                            onClick={() => {
                                                                onChange(item.svg[iconCat].raw);
                                                                setIconsPanel(false);
                                                            }}
                                                            title={item.label}
                                                        >
                                                            <RawHTML className="single__icon_svg" children={item.svg[iconCat].raw} />
                                                        </Button>
                                                    )}
                                                </>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};
export default ZoloIconPicker;
