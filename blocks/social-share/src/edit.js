/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const { DisplayZoloIcon, classArrayToStr } = window.zoloModule;

import Inspector from './inspector';

// import style
import Style from './style';

import { socialMediaInfo } from './constants';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected } = props;
    const { preview, uniqueId, preset, parentClasses, socialText, socialMedia, socialColor, layout } = attributes;


    function zoloArraysMergeIfUniqueValue(array1, array2) {
        // Create a new array to store the merged results
        let mergedArray = [];
        // Iterate over the first array
        array1.forEach((item1) => {
            // Find the corresponding item in the second array based on ID
            let matchingItem = array2.find((item2) => item2.value === item1.value);
            // If a match is found, merge the properties
            if (matchingItem) {
                let mergedItem = {...matchingItem, ...item1 };
                mergedArray.push(mergedItem);
            }
        });

        return mergedArray;
    }

    const socialMediaInfoFiltered = zoloArraysMergeIfUniqueValue(socialMedia, socialMediaInfo, 'value');

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${preset} ${uniqueId}`, layout, classArrayToStr(parentClasses)),
    });

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.socialLinks} alt={__('Social Links Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

            <Style props={props} />

            <div {...blockProps}>
                {
                    socialMediaInfoFiltered &&
                    socialMediaInfoFiltered.map((profile, index) => {
                        let socialName = Object.keys(profile.icon)[0];
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
                    }
                    )
                }
            </div>
        </>
    );
}
