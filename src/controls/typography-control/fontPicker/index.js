/**
 * WordPress dependencies
 */
import { BaseControl } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

import WebFont from 'webfontloader';

/**
 * External Dependencies
 */
import Select2 from 'react-select';

/**
 * Internal dependencies
 */
import { googleFonts } from './googleFonts';

const zoloThemeFonts = zoloSettings?.theme_fonts;
const zoloAvailableFonts = [];

if (zoloThemeFonts) {
    // check the object is not empty
    if (Object.keys(zoloThemeFonts).length > 0) {
        Object.keys(zoloThemeFonts).map((font) => {
            zoloAvailableFonts.push({ value: font, label: zoloThemeFonts[font] });
        });
    }
}

const FontFamilyPicker = ({ label, value, help, instanceId, onChange, className, ...props }) => {
    const id = `inspector-zb-font-family-${instanceId}`;
    const fonts = [
        { value: 'Arial', label: 'Arial' },
        { value: 'Helvetica', label: 'Helvetica' },
        { value: 'Times-New-Roman', label: 'Times New Roman' },
        { value: 'Georgia', label: 'Georgia' },
    ];

    //Add Google Fonts
    Object.keys(googleFonts).map((font) => {
        fonts.push({ value: font, label: googleFonts[font].family });
    });

    const allFonts = zoloAvailableFonts.concat(fonts);

    const onChangeValue = (select) => {
        let selectedFont = select.label;
        if (selectedFont) {
            // skip if default OR Arial, Helvetica, Times New Roman, Georgia
            if (
                selectedFont === 'Arial' ||
                selectedFont === 'Helvetica' ||
                selectedFont === 'Times-New-Roman' ||
                selectedFont === 'Georgia' ||
                zoloAvailableFonts.find((font) => font.label === selectedFont)
            ) {
                onChange(selectedFont);
                return;
            }
        }

        let webFontConfig = {
            google: {
                families: [selectedFont],
            },
            context: frames['editor-canvas'],
        };
        WebFont.load(webFontConfig);
        onChange(selectedFont);
    };

    return (
        <BaseControl label={label} id={id} help={help} className={className}>
            <Select2
                name="zb-select-font"
                classNamePrefix="zolo"
                value={{
                    value: (value || '').replace(/\s+/g, '-'),
                    label: value,
                }}
                onChange={onChangeValue}
                options={allFonts}
            />
        </BaseControl>
    );
};

export default withInstanceId(FontFamilyPicker);
