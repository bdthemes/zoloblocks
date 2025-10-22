import { useBlockProps, RichText } from '@wordpress/block-editor';
const { classArrayToStr, DisplayZoloIcon, sanitizeUrl } = window.zoloModule;
import classnames from 'classnames';

const Save = (props) => {
    const { attributes } = props;
    const { uniqueId, parentClasses, photo, imageRes, circleItems = [] } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, classArrayToStr(parentClasses)),
    });

    // Group items by layer
    const layer1Items = circleItems.filter((item) => item.layer === 'layer1');
    const layer2Items = circleItems.filter((item) => item.layer === 'layer2');
    const layer3Items = circleItems.filter((item) => item.layer === 'layer3');

    return (
        <div {...blockProps}>
            <div className="zolo-block-circle-icon-wrap">
                <ul className="zolo-circle-icon-wrap">
                    <li className="zolo-main-circle-item">
                        {photo && (
                            <img
                                className="zolo-circle-main-img"
                                src={photo.sizes && photo.sizes[imageRes] ? photo.sizes[imageRes].url : photo.url}
                                alt={photo.alt || ''}
                            />
                        )}
                    </li>

                    {/* Layer 1 */}
                    {layer1Items.length > 0 && (
                        <li>
                            <ul className="zolo-circle-list-wrap zolo-list_one">
                                {layer1Items.map((item, index) => (
                                    <li key={item.id || index} className="zolo-list-item">
                                        <a
                                            href={sanitizeUrl(item.link?.url) ? item.link.url : '#'}
                                            rel={item.link?.openInNewTab ? 'noreferrer noopener' : undefined}
                                            target={item.link?.openInNewTab ? '_blank' : undefined}
                                        >
                                            {item.icon && <DisplayZoloIcon icon={item.icon} className="zolo-list-icon" />}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )}

                    {/* Layer 2 */}
                    {layer2Items.length > 0 && (
                        <li>
                            <ul className="zolo-circle-list-wrap zolo-list_two">
                                {layer2Items.map((item, index) => (
                                    <li key={item.id || index} className="zolo-list-item">
                                        <a
                                            href={sanitizeUrl(item.link?.url) ? item.link.url : '#'}
                                            rel={item.link?.openInNewTab ? 'noreferrer noopener' : undefined}
                                            target={item.link?.openInNewTab ? '_blank' : undefined}
                                        >
                                            {item.icon && <DisplayZoloIcon icon={item.icon} className="zolo-list-icon" />}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )}

                    {/* Layer 3 */}
                    {layer3Items.length > 0 && (
                        <li>
                            <ul className="zolo-circle-list-wrap zolo-list_three">
                                {layer3Items.map((item, index) => (
                                    <li key={item.id || index} className="zolo-list-item">
                                        <a
                                            href={sanitizeUrl(item.link?.url) ? item.link.url : '#'}
                                            rel={item.link?.openInNewTab ? 'noreferrer noopener' : undefined}
                                            target={item.link?.openInNewTab ? '_blank' : undefined}
                                        >
                                            {item.icon && <DisplayZoloIcon icon={item.icon} className="zolo-list-icon" />}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Save;
