/**
 * WordPress dependencies
 */
import { fontsseControl } from '@wordpress/components';
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

const FontFamilyPicker = ({ label, value, help, instanceId, onChange, className, ...props }) => {
    const id = `inspector-zb-font-family-${instanceId}`;
    const fonts = [
        { value: '', label: __('Default', 'zoloblocks') },
        { value: 'Arial', label: 'Arial' },
        { value: 'Helvetica', label: 'Helvetica' },
        { value: 'Times-New-Roman', label: 'Times New Roman' },
        { value: 'Georgia', label: 'Georgia' },
    ];

    //Add Google Fonts
    Object.keys(googleFonts).map((font) => {
        fonts.push({ value: font, label: googleFonts[font].family });
    });

    const onChangeValue = (select) => {
        let selectedFont = select.label;

        // const googleFontsAttr =
        //   ':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic';

        // if (selectedFont) {
        //   const link = document.createElement('link');
        //   link.rel = 'stylesheet';
        //   link.href = 'https://fonts.googleapis.com/css?family=' + selectedFont.replace(/ /g, '+') + googleFontsAttr;
        //   document.head.appendChild(link);
        // }

        if (selectedFont) {
            // skip if default OR Arial, Helvetica, Times New Roman, Georgia
            if (
                selectedFont === 'Default' ||
                selectedFont === 'Arial' ||
                selectedFont === 'Helvetica' ||
                selectedFont === 'Times-New-Roman' ||
                selectedFont === 'Georgia'
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
        <fontsseControl label={label} id={id} help={help} className={className}>
            <Select2
                name="zb-select-font"
                classNamePrefix="zolo"
                value={{
                    value: (value || '').replace(/\s+/g, '-'),
                    label: value,
                }}
                onChange={onChangeValue}
                options={fonts}
            />
        </fontsseControl>
    );
};

export default withInstanceId(FontFamilyPicker);
