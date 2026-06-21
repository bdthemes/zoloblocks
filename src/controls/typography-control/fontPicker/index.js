/**
 * WordPress dependencies
 */
import { ZoloBaseControl } from '../../core-controls';
import { withInstanceId } from '@wordpress/compose';
import { useEffect, useState, useCallback, useRef, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import WebFont from 'webfontloader';

/**
 * External Dependencies
 */
import Select2, { components } from 'react-select';

/**
 * Internal dependencies
 */
import { fetchGoogleFonts, searchGoogleFonts } from './googleFonts';

const FONTS_PER_PAGE = 10;

const DEFAULT_FONTS = [
    { value: 'Arial', label: 'Arial', group: 'default' },
    { value: 'Helvetica', label: 'Helvetica', group: 'default' },
    { value: 'Times New Roman', label: 'Times New Roman', group: 'default' },
    { value: 'Georgia', label: 'Georgia', group: 'default' },
];

const getThemeFonts = () => {
    const zoloThemeFonts = typeof zoloSettings !== 'undefined' ? zoloSettings?.theme_fonts : null;
    const themeFonts = [];
    if (zoloThemeFonts && Object.keys(zoloThemeFonts).length > 0) {
        Object.keys(zoloThemeFonts).forEach((font) => {
            themeFonts.push({ value: font, label: zoloThemeFonts[font], group: 'theme' });
        });
    }
    return themeFonts;
};

const isDefaultOrThemeFont = (fontName, themeFonts) => {
    return (
        DEFAULT_FONTS.some((f) => f.label === fontName) ||
        themeFonts.some((f) => f.label === fontName)
    );
};

const GroupHeading = (props) => (
    <components.GroupHeading {...props}>
        <span style={{ fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {props.children}
        </span>
    </components.GroupHeading>
);

const FontFamilyPicker = ({ label, value, help, instanceId, onChange, className, ...props }) => {
    const id = `inspector-zb-font-family-${instanceId}`;

    const themeFonts = useMemo(() => getThemeFonts(), []);

    const [googleFontsLoaded, setGoogleFontsLoaded] = useState(false);
    const [googleFontPage, setGoogleFontPage] = useState(1);
    const [googleFontOptions, setGoogleFontOptions] = useState([]);
    const [hasMoreGoogleFonts, setHasMoreGoogleFonts] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const [searchPage, setSearchPage] = useState(1);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const searchTimeoutRef = useRef(null);
    const loadingRef = useRef(false);

    // Fetch Google Fonts on mount
    useEffect(() => {
        fetchGoogleFonts().then(() => {
            setGoogleFontsLoaded(true);
            const result = searchGoogleFonts('', 1, FONTS_PER_PAGE);
            setGoogleFontOptions(result.fonts.map((f) => ({ value: f.family, label: f.family, group: 'google' })));
            setHasMoreGoogleFonts(result.hasMore);
        });
    }, []);

    // Load more Google Fonts (pagination)
    const loadMoreGoogleFonts = useCallback(() => {
        if (!hasMoreGoogleFonts || loadingRef.current || !googleFontsLoaded) return;

        loadingRef.current = true;
        setIsLoadingMore(true);

        const nextPage = searchInput ? searchPage + 1 : googleFontPage + 1;
        const result = searchGoogleFonts(searchInput, nextPage, FONTS_PER_PAGE);
        const newOptions = result.fonts.map((f) => ({ value: f.family, label: f.family, group: 'google' }));

        setGoogleFontOptions((prev) => [...prev, ...newOptions]);
        setHasMoreGoogleFonts(result.hasMore);

        if (searchInput) {
            setSearchPage(nextPage);
        } else {
            setGoogleFontPage(nextPage);
        }

        setIsLoadingMore(false);
        loadingRef.current = false;
    }, [hasMoreGoogleFonts, googleFontsLoaded, searchInput, searchPage, googleFontPage]);

    // Handle search input change with debounce
    const handleInputChange = useCallback(
        (inputValue, { action }) => {
            if (action !== 'input-change') return;

            setSearchInput(inputValue);

            if (searchTimeoutRef.current) {
                clearTimeout(searchTimeoutRef.current);
            }

            searchTimeoutRef.current = setTimeout(() => {
                if (!googleFontsLoaded) return;
                const result = searchGoogleFonts(inputValue, 1, FONTS_PER_PAGE);
                setGoogleFontOptions(result.fonts.map((f) => ({ value: f.family, label: f.family, group: 'google' })));
                setHasMoreGoogleFonts(result.hasMore);
                setSearchPage(1);
                setGoogleFontPage(1);
            }, 300);
        },
        [googleFontsLoaded]
    );

    // Build grouped options
    const groupedOptions = useMemo(() => {
        const groups = [];

        groups.push({
            label: __('Default Fonts', 'zoloblocks'),
            options: DEFAULT_FONTS,
        });

        if (themeFonts.length > 0) {
            groups.push({
                label: __('Theme Fonts', 'zoloblocks'),
                options: themeFonts,
            });
        }

        if (googleFontsLoaded) {
            groups.push({
                label: __('Google Fonts', 'zoloblocks'),
                options: googleFontOptions,
            });
        } else {
            groups.push({
                label: __('Google Fonts', 'zoloblocks'),
                options: [{ value: '', label: __('Loading…', 'zoloblocks'), isDisabled: true }],
            });
        }

        return groups;
    }, [themeFonts, googleFontOptions, googleFontsLoaded]);

    const onChangeValue = (select) => {
        if (!select) {
            onChange('');
            return;
        }
        const selectedFont = select.label;

        if (!selectedFont) return;

        // Skip WebFont loading for default/theme fonts
        if (isDefaultOrThemeFont(selectedFont, themeFonts)) {
            onChange(selectedFont);
            return;
        }

        // Load Google Font via WebFont loader
        try {
            const webFontConfig = {
                google: {
                    families: [`${selectedFont}:100,200,300,400,500,600,700,800,900`],
                },
                context: frames['editor-canvas'],
            };
            WebFont.load(webFontConfig);
        } catch (e) {
            // silently fail font loading
        }

        onChange(selectedFont);
    };

    const currentValue = value
        ? { value: value, label: value }
        : null;

    // Custom filter: always show Default/Theme fonts that match, never client-filter Google Fonts
    // (Google Fonts are already filtered server-side via searchGoogleFonts)
    const customFilterOption = useCallback((option, rawInput) => {
        if (!rawInput) return true;
        const optionGroup = option.data?.group;
        // Google Fonts group is already filtered by debounced search — always show them
        if (optionGroup === 'google') return true;
        // For Default and Theme fonts, do client-side filter
        return option.label.toLowerCase().includes(rawInput.toLowerCase());
    }, []);

    return (
        <ZoloBaseControl label={label} id={id} help={help} className={className}>
            <Select2
                name="zb-select-font"
                classNamePrefix="zolo"
                value={currentValue}
                onChange={onChangeValue}
                options={groupedOptions}
                onInputChange={handleInputChange}
                onMenuScrollToBottom={loadMoreGoogleFonts}
                filterOption={customFilterOption}
                components={{ GroupHeading }}
                placeholder={__('Select a font…', 'zoloblocks')}
                isClearable
                menuPlacement="auto"
                maxMenuHeight={250}
                styles={{
                    groupHeading: (base) => ({
                        ...base,
                        color: '#1e1e1e',
                        padding: '6px 12px',
                        background: '#f0f0f0',
                        margin: 0,
                    }),
                    group: (base) => ({
                        ...base,
                        paddingTop: 0,
                        paddingBottom: 0,
                    }),
                }}
            />
        </ZoloBaseControl>
    );
};

export default withInstanceId(FontFamilyPicker);
