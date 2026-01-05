import { minifyCSS } from './utils';
const { generateCSS } = window.zoloModule;

const generateStyles = (styles, selector) => {
    
    const desktopAllStyle = `
        ${selector}{
            ${generateCSS({ attributes: styles?.typography, key: 'fontFamily', getValue: (value) => `font-family: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.typography, key: 'fontWeight', getValue: (value) => `font-weight: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.typography, key: 'fontSize', getValue: (value) => `font-size: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.typography, key: 'lineHeight', getValue: (value) => `line-height: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.typography, key: 'letterSpacing', getValue: (value) => `letter-spacing: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.typography, key: 'textTransform', getValue: (value) => `text-transform: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.typography, key: 'textDecoration', getValue: (value) => `text-decoration: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.typography, key: 'fontStyle', getValue: (value) => `font-style: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.colors, key: 'textColor', getValue: (value) => `color: ${value};`, device: 'Desktop' })}
        }
    `;

    const tabletAllStyle = `
        ${selector}{
            ${generateCSS({ attributes: styles?.typography, key: 'fontSize', getValue: (value) => `font-size: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.typography, key: 'lineHeight', getValue: (value) => `line-height: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.typography, key: 'letterSpacing', getValue: (value) => `letter-spacing: ${value};`, device: 'Tablet' })}
        }`;

    const mobileAllStyle = `
        ${selector}{
            ${generateCSS({ attributes: styles?.typography, key: 'fontSize', getValue: (value) => `font-size: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.typography, key: 'lineHeight', getValue: (value) => `line-height: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.typography, key: 'letterSpacing', getValue: (value) => `letter-spacing: ${value};`, device: 'Mobile' })}
        }`;

    const style = `${desktopAllStyle}@media screen and (max-width: 1024px) {${tabletAllStyle}}@media screen and (max-width: 767px) {${mobileAllStyle}}`;
    
    return minifyCSS(style);
};

export default generateStyles;