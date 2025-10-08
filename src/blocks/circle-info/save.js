import { useBlockProps, RichText } from '@wordpress/block-editor';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;
import classnames from 'classnames';

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, circleItems } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div {...blockProps}>
            <div className="feature-data" data-items={encodeURIComponent(JSON.stringify(circleItems || []))}></div>
            <div className="circular-feature-display" id={uniqueId}>
                {/* Central content display */}
                <div className="content-display">
                    {circleItems && circleItems[0] && (
                        <>
                            <RichText.Content tagName="h3" value={circleItems[0].title} />
                            <RichText.Content tagName="p" value={circleItems[0].desc} />
                        </>
                    )}
                </div>

                {/* Circular feature icons */}
                <ul className="feature-icons">
                    {circleItems &&
                        circleItems.map((item, index) => {
                            const angle = (360 / circleItems.length) * index;
                            return (
                                <li
                                    key={item.id || index}
                                    style={{ '--angle': `${angle}deg` }}
                                    data-item-id={item.id || index + 1}
                                    className={index === 0 ? 'active' : ''}
                                >
                                    <button type="button">
                                        {item.icon ? (
                                            <DisplayZoloIcon icon={item.icon} />
                                        ) : (
                                            <span style={{ fontSize: '20px', color: '#999' }}>?</span>
                                        )}
                                    </button>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export default Save;
