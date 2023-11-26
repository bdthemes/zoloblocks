import { useState, useEffect, RawHTML } from '@wordpress/element';
import { Modal, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import icons from './icons.json';

const iconCategories = [
    {
        label: 'All',
        value: 'all',
    },
    {
        label: 'Solid',
        value: 'solid',
    },
    {
        label: 'Brand',
        value: 'brands',
    },
    {
        label: 'Regular',
        value: 'regular',
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
                                        {item.label}
                                    </Button>
                                ))}
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
                                            <Button
                                                key={index}
                                                className="single__icon"
                                                onClick={() => {
                                                    onChange(item.svg[iconCat].raw);
                                                    setIconsPanel(false);
                                                }}
                                            >
                                                <RawHTML className="single__icon_svg" children={item.svg[iconCat].raw} />
                                            </Button>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};
export default ZoloIconPicker;
