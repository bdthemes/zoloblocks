/**
 * WordPress dependencies
 */

import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
import classnames from 'classnames';

const {
    DisplayIcon,
    generateResRangeStyle,
    generateBorderStyle,
    softMinifyCssStrings,
    generateResCounterStyle,
    generateDimensionStyle,
    generateBoxShadowStyles,
    generateTypographyStyles,
    classArrayToStr,
} = window.zoloModule;

import {
    BLOCK_PREFIX,
    BUTTON_BORDER,
    BTN_BORDER_RADIUS,
    COLUMN_COUNT,
    COLUMNS_GAP,
    ROW_GAP,
    BUTTON_PADDING,
    BUTTON_SIZE,
    ICON_TEXT_SPACING,
    BLOCK_MARGIN,
    BTN_SHADOW,
    BTN_HOVER_SHADOW,
} from './constants';

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        uniqueId,
        preset,
        zoloStyles,
        parentClasses,
        socialText,
        socialProfiles,
        socialBgColor,
        socialColor,
        socialBgHoverColor,
        socialTextColor,
        socialTextHoverColor,
        borderHoverColor,
        presetBgColor,
    } = attributes;
    // this useEffect is for creating a unique id for each block's unique className by a random unique number

    const blockProps = useBlockProps({
        className: classnames(className, `${preset} ${uniqueId}`, classArrayToStr(parentClasses)),
    });

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

            <Style props={props} />

            <div {...blockProps}>
                {socialProfiles &&
                    socialProfiles.map((profile, index) => {
                        let socialName = Object.keys(profile.icon)[0];
                        return (
                            <a
                                href={profile.link && profile.link.url}
                                key={index}
                                target={profile.link && profile.link.openInNewTab && '_blank'}
                                rel={profile.link && profile.link.openInNewTab && 'noopener noreferrer'}
                                className={`zolo-social-item zolo-${socialName} ${socialColor}`}
                            >
                                {socialText !== 'none' && (
                                    <span className="zolo-social-icon">
                                        <DisplayIcon icon={profile.icon} />
                                    </span>
                                )}
                                {socialText !== 'iconOnly' && <span className="zolo-social-text">{profile.text}</span>}
                            </a>
                        );
                    })}
            </div>
        </>
    );
}
