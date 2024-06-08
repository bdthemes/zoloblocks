/**
 * Internal depencencies
 */
const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import classnames from 'classnames';
import { socialMediaInfo } from './constants';

import { useBlockProps } from '@wordpress/block-editor';
import { zoloArraysMergeIfUniqueValue } from '../../../src/helpers/helper';

const Save = ({ attributes }) => {
    const { uniqueId, parentClasses, preset, socialMedia, socialColor, socialText, layout } = attributes;

    const socialMediaInfoFiltered = zoloArraysMergeIfUniqueValue(socialMedia, socialMediaInfo, 'value');
    return (
        <div
            {...useBlockProps.save({
                className: classnames(`${preset} ${uniqueId} ${layout}`, classArrayToStr(parentClasses)),
            })}
        >
            {socialMediaInfoFiltered &&
                socialMediaInfoFiltered.map((brand, index) => {
                    let socialName = Object.keys(brand.icon)[0];
                    const tags = brand.tags && brand.tags.join(',');
                    const socialLabel = brand.customLabel ? brand.customLabel : brand.label;
                    return (
                        <div
                            key={index}
                            type="button"
                            data-hashtags={tags}
                            data-sharer={brand.value}
                            data-url={brand.link && brand.link.url}
                            data-title={brand.label}
                            className={`zolo-social-item zolo-${socialName} ${socialColor} ${brand.value}`}
                        >
                            {socialText !== 'none' && (
                                <span className="zolo-social-icon">
                                    <DisplayZoloIcon icon={brand.icon} />
                                </span>
                            )}
                            {socialText !== 'iconOnly' && <span className="zolo-social-text">{socialLabel}</span>}
                        </div>
                    );
                })}
        </div>
    );
};

export default Save;
