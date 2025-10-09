import { useBlockProps, RichText } from '@wordpress/block-editor';
const { classArrayToStr, DisplayZoloIcon } = window.zoloModule;
import classnames from 'classnames';

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, circleItems, rotationMode, rotationSpeed } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    return (
        <div {...blockProps}>
            <div className="zolo-circle-info" id={uniqueId}>
                {/* Central content display */}
                <div className="zolo-content-display">
                    {circleItems && circleItems[0] && (
                        <>
                            <RichText.Content tagName="h3" value={circleItems[0].title} />
                            <RichText.Content tagName="p" value={circleItems[0].desc} />
                        </>
                    )}
                </div>

                <div
                    className="zolo-feature-data"
                    data-items={JSON.stringify(circleItems || [])}
                    data-rotation-mode={rotationMode}
                    data-rotation-speed={rotationSpeed}
                ></div>

                {/* Circular feature icons */}
                <ul className="zolo-feature-icons">
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
                                    <button type="button">{item.icon && <DisplayZoloIcon icon={item.icon} />}</button>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
};

export default Save;
