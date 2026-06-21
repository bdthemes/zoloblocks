import apiFetch from '@wordpress/api-fetch';

let cachedFonts = null;
let fetchPromise = null;

export const fetchGoogleFonts = () => {
    if (cachedFonts) {
        return Promise.resolve(cachedFonts);
    }
    if (fetchPromise) {
        return fetchPromise;
    }

    fetchPromise = apiFetch({ path: '/zolo/v1/google-fonts' })
        .then((data) => {
            const fontFamilies = data?.font_families || [];
            cachedFonts = fontFamilies.map((item) => {
                const settings = item.font_family_settings || {};
                const fontFaces = settings.fontFace || [];
                const variants = fontFaces.map((face) => {
                    const weight = face.fontWeight || '400';
                    const style = face.fontStyle || 'normal';
                    if (style === 'italic') {
                        return weight === '400' ? 'italic' : `${weight}italic`;
                    }
                    return weight === '400' ? 'regular' : weight;
                });

                return {
                    family: settings.name || '',
                    slug: settings.slug || '',
                    fontFamily: settings.fontFamily || '',
                    category: (item.categories || [])[0] || 'sans-serif',
                    variants: [...new Set(variants)],
                };
            });
            fetchPromise = null;
            return cachedFonts;
        })
        .catch((error) => {
            console.error('ZoloBlocks: Error fetching Google Fonts', error);
            fetchPromise = null;
            cachedFonts = [];
            return cachedFonts;
        });

    return fetchPromise;
};

export const getGoogleFontVariants = (fontName) => {
    if (!cachedFonts || !fontName) {
        return [];
    }
    const font = cachedFonts.find(
        (f) => f.family === fontName || f.slug === fontName.toLowerCase().replace(/\s+/g, '-')
    );
    return font ? font.variants : [];
};

export const searchGoogleFonts = (query = '', page = 1, perPage = 10) => {
    if (!cachedFonts) {
        return { fonts: [], hasMore: false, total: 0 };
    }

    let filtered = cachedFonts;
    if (query) {
        const lowerQuery = query.toLowerCase();
        filtered = cachedFonts.filter((font) => font.family.toLowerCase().includes(lowerQuery));
    }

    const start = (page - 1) * perPage;
    const end = start + perPage;
    const fonts = filtered.slice(start, end);

    return {
        fonts,
        hasMore: end < filtered.length,
        total: filtered.length,
    };
};

// backward compatible export — a lookup object built once fonts are loaded
export const googleFonts = new Proxy(
    {},
    {
        get(target, prop) {
            if (!cachedFonts) {
                return undefined;
            }
            const key = String(prop);
            const font = cachedFonts.find(
                (f) => f.family.replace(/\s+/g, '-') === key || f.slug === key.toLowerCase()
            );
            return font ? { family: font.family, category: font.category, variants: font.variants } : undefined;
        },
        ownKeys() {
            if (!cachedFonts) {
                return [];
            }
            return cachedFonts.map((f) => f.family.replace(/\s+/g, '-'));
        },
        has(target, prop) {
            if (!cachedFonts) {
                return false;
            }
            const key = String(prop);
            return cachedFonts.some(
                (f) => f.family.replace(/\s+/g, '-') === key || f.slug === key.toLowerCase()
            );
        },
        getOwnPropertyDescriptor(target, prop) {
            if (!cachedFonts) {
                return undefined;
            }
            const key = String(prop);
            const font = cachedFonts.find(
                (f) => f.family.replace(/\s+/g, '-') === key || f.slug === key.toLowerCase()
            );
            if (font) {
                return {
                    configurable: true,
                    enumerable: true,
                    value: { family: font.family, category: font.category, variants: font.variants },
                };
            }
            return undefined;
        },
    }
);
