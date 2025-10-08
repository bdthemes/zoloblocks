/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import classnames from 'classnames';
/**
 * Internal depencencies
 */
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected } = props;
    const { uniqueId, parentClasses, circleItems } = attributes;

    // Track active item index
    const [activeIndex, setActiveIndex] = useState(0);

    const blockProps = useBlockProps({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // Update circle item
    const updateCircleItem = (index, key, value) => {
        const updatedItems = [...circleItems];
        updatedItems[index] = { ...updatedItems[index], [key]: value };
        setAttributes({ circleItems: updatedItems });
    };

    // Handle icon click
    const handleIconClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                <div className="circular-feature-display">
                    {/* Central content display */}
                    <div className="content-display">
                        {circleItems && circleItems[activeIndex] && (
                            <>
                                <RichText
                                    tagName="h3"
                                    value={circleItems[activeIndex].title}
                                    onChange={(value) => updateCircleItem(activeIndex, 'title', value)}
                                    placeholder={__('Title', 'zoloblocks')}
                                />
                                <RichText
                                    tagName="p"
                                    value={circleItems[activeIndex].desc}
                                    onChange={(value) => updateCircleItem(activeIndex, 'desc', value)}
                                    placeholder={__('Description', 'zoloblocks')}
                                />
                            </>
                        )}
                    </div>

                    {/* Circular feature icons */}
                    <ul className="feature-icons">
                        {circleItems &&
                            circleItems.map((item, index) => {
                                console.log(item);
                                const angle = (360 / circleItems.length) * index;
                                return (
                                    <li
                                        key={item.id || index}
                                        style={{ '--angle': `${angle}deg` }}
                                        data-item-id={item.id || index + 1}
                                        className={index === activeIndex ? 'active' : ''}
                                    >
                                        <button type="button" onClick={() => handleIconClick(index)}>
                                            {item.icon ? (
                                                <DisplayZoloIcon icon={item.icon} />
                                            ) : (
                                                <span style={{fontSize: '20px', color: '#999'}}>?</span>
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </>
    );
}
