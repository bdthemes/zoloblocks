/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const { DisplayZoloIcon, classArrayToStr, SidebarOpener, sanitizeText, sanitizeUrl } = window.zoloModule;

import { zoloArraysMergeIfUniqueValue } from '../../../src/helpers/helper';

import Inspector from './inspector';

// import style
import Style from './style';

import { socialMediaInfo } from './constants';

export default function Edit(props) {
    const { attributes, setAttributes, className, isSelected, clientId } = props;
    const { preview, uniqueId, preset, parentClasses, socialText, socialMedia, socialColor, layout } = attributes;
    const socialMediaInfoFiltered = zoloArraysMergeIfUniqueValue(socialMedia, socialMediaInfo, 'value');
    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${preset} ${uniqueId}`, layout, classArrayToStr(parentClasses)),
    });

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.socialShare} alt={__('Social Share Preview', 'zoloblocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

            <Style props={props} />

            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
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
                                data-url={brand.link && sanitizeUrl(brand.link.url)}
                                data-title={sanitizeText(brand.label)}
                                className={`zolo-social-item zolo-${socialName} ${socialColor} ${brand.value}`}
                            >
                                {socialText !== 'none' && (
                                    <span className="zolo-social-icon">
                                        <DisplayZoloIcon icon={brand.icon} />
                                    </span>
                                )}
                                {socialText !== 'iconOnly' && <span className="zolo-social-text">{sanitizeText(socialLabel)}</span>}
                            </div>
                        );
                    })}

                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
