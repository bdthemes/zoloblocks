/**
 * Internal depencencies
 */
const { DisplayZoloIcon } = window.zoloModule;

import classnames from 'classnames';
import { socialMediaInfo } from './constants';

import { useBlockProps } from '@wordpress/block-editor';

const Save = ({ attributes }) => {
    const { uniqueId, preset, socialProfiles, socialMedia, socialColor, socialText, layout } = attributes;
function zoloArraysMergeIfUniqueValue(array1, array2) {
    // Create a new array to store the merged results
    let mergedArray = [];
    // Iterate over the first array
    array1.forEach((item1) => {
        // Find the corresponding item in the second array based on ID
        let matchingItem = array2.find((item2) => item2.value === item1.value);
        // If a match is found, merge the properties
        if (matchingItem) {
            let mergedItem = { ...matchingItem, ...item1 };
            mergedArray.push(mergedItem);
        }
    });

    return mergedArray;
}

const socialMediaInfoFiltered = zoloArraysMergeIfUniqueValue(socialMedia, socialMediaInfo, 'value');
    return (
        <div
            {...useBlockProps.save({
                className: classnames(`${preset} ${uniqueId} ${layout}`),
            })}
        >
            {socialMediaInfoFiltered &&
                socialMediaInfoFiltered.map((profile, index) => {
                    let socialName = Object.keys(profile.icon)[0];
                    // const iconName = profile && profile.text && profile.text.toLowerCase();
                    const tags = profile.tags && profile.tags.join(',');
                    return (
                        <div
                            key={index}
                            type="button"
                            data-hashtags={tags}
                            data-sharer={profile.value}
                            data-url={profile.link && profile.link.url}
                            data-title={profile.label}
                            className={`zolo-social-item zolo-${socialName} ${socialColor} ${profile.value}`}
                        >
                            {socialText !== 'none' && (
                                <span className="zolo-social-icon">
                                    <DisplayZoloIcon icon={profile.icon} />
                                </span>
                            )}
                            {socialText !== 'iconOnly' && <span className="zolo-social-text">{profile.label}</span>}
                        </div>
                    );
                })}
        </div>
    );
};

export default Save;
