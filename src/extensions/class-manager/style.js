import { minifyCSS } from './utils';
const { generateCSS } = window.zoloModule;

const generateStyles = (styles, selector) => {
    const generateBackgroundCSS = (background, device = 'Desktop') => {
        if (!background) return '';
        
        let css = '';
        
        if (background.type === 'color' && background.color) {
            css += `background-color: ${background.color};`;
        } else if (background.type === 'gradient' && background.gradient) {
            css += `background-image: ${background.gradient};`;
        } else if (background.type === 'image' && background.imageUrl) {
            css += `background-image: url(${background.imageUrl});`;
            if (background.size?.[device]) {
                css += `background-size: ${background.size[device]};`;
            }
            if (background.repeat) {
                css += `background-repeat: ${background.repeat};`;
            }
            if (background.position) {
                css += `background-position: ${background.position};`;
            }
            if (background.attachment) {
                css += `background-attachment: ${background.attachment};`;
            }
        }
        
        return css;
    };
    
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
            ${generateBackgroundCSS(styles?.background, 'Desktop')}
            ${styles?.textShadow?.color || styles?.textShadow?.horizontal?.Desktop || styles?.textShadow?.vertical?.Desktop || styles?.textShadow?.blur?.Desktop ? 
                `text-shadow: ${styles?.textShadow?.horizontal?.Desktop || '0px'} ${styles?.textShadow?.vertical?.Desktop || '0px'} ${styles?.textShadow?.blur?.Desktop || '0px'} ${styles?.textShadow?.color || 'transparent'};` : ''}
            ${styles?.stroke?.color ? `stroke: ${styles.stroke.color};` : ''}
            ${generateCSS({ attributes: styles?.stroke, key: 'width', getValue: (value) => `stroke-width: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.stroke, key: 'dasharray', getValue: (value) => `stroke-dasharray: ${value};`, device: 'Desktop' })}
            ${styles?.stroke?.opacity !== undefined ? `stroke-opacity: ${styles.stroke.opacity};` : ''}
            ${generateCSS({ attributes: styles?.stroke, key: 'linecap', getValue: (value) => `stroke-linecap: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.stroke, key: 'linejoin', getValue: (value) => `stroke-linejoin: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.border, key: 'style', getValue: (value) => `border-style: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.border, key: 'color', getValue: (value) => `border-color: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.border, key: 'width', getValue: (value) => `border-width: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.border, key: 'radius', getValue: (value) => `border-radius: ${value};`, device: 'Desktop' })}
            ${styles?.boxShadow?.color || styles?.boxShadow?.horizontal?.Desktop || styles?.boxShadow?.vertical?.Desktop || styles?.boxShadow?.blur?.Desktop || styles?.boxShadow?.spread?.Desktop ? 
                `box-shadow: ${styles?.boxShadow?.type === 'inset' ? 'inset ' : ''}${styles?.boxShadow?.horizontal?.Desktop || '0px'} ${styles?.boxShadow?.vertical?.Desktop || '0px'} ${styles?.boxShadow?.blur?.Desktop || '0px'} ${styles?.boxShadow?.spread?.Desktop || '0px'} ${styles?.boxShadow?.color || 'transparent'};` : ''}
            ${generateCSS({ attributes: styles?.overflow, key: 'overflowX', getValue: (value) => `overflow-x: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.overflow, key: 'overflowY', getValue: (value) => `overflow-y: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.overflow, key: 'whiteSpace', getValue: (value) => `white-space: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.layout, key: 'padding', getValue: (value) => `padding: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.layout, key: 'margin', getValue: (value) => `margin: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.layout, key: 'width', getValue: (value) => `width: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.layout, key: 'height', getValue: (value) => `height: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.layout, key: 'minWidth', getValue: (value) => `min-width: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.layout, key: 'minHeight', getValue: (value) => `min-height: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.layout, key: 'maxWidth', getValue: (value) => `max-width: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.layout, key: 'maxHeight', getValue: (value) => `max-height: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles, key: 'display', getValue: (value) => `display: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.flex, key: 'direction', getValue: (value) => `flex-direction: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.flex, key: 'alignItems', getValue: (value) => `align-items: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.flex, key: 'justifyContent', getValue: (value) => `justify-content: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.flex, key: 'flexWrap', getValue: (value) => `flex-wrap: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.flex, key: 'columnGap', getValue: (value) => `column-gap: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.flex, key: 'rowGap', getValue: (value) => `row-gap: ${value};`, device: 'Desktop' })}
            ${styles?.grid?.columns ? `grid-template-columns: repeat(${styles.grid.columns}, 1fr);` : ''}
            ${generateCSS({ attributes: styles?.grid, key: 'columnGap', getValue: (value) => `column-gap: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.grid, key: 'rowGap', getValue: (value) => `row-gap: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.block, key: 'float', getValue: (value) => `float: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.block, key: 'clear', getValue: (value) => `clear: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.block, key: 'overflow', getValue: (value) => `overflow: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.inline, key: 'verticalAlign', getValue: (value) => `vertical-align: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.inline, key: 'whiteSpace', getValue: (value) => `white-space: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.position, key: 'type', getValue: (value) => `position: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.position, key: 'top', getValue: (value) => `top: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.position, key: 'right', getValue: (value) => `right: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.position, key: 'bottom', getValue: (value) => `bottom: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.position, key: 'left', getValue: (value) => `left: ${value};`, device: 'Desktop' })}
        }
    `;

    const tabletAllStyle = `
        ${selector}{
            ${generateCSS({ attributes: styles?.typography, key: 'fontSize', getValue: (value) => `font-size: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.typography, key: 'lineHeight', getValue: (value) => `line-height: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.typography, key: 'letterSpacing', getValue: (value) => `letter-spacing: ${value};`, device: 'Tablet' })}
            ${generateBackgroundCSS(styles?.background, 'Tablet')}
            ${styles?.textShadow?.horizontal?.Tablet || styles?.textShadow?.vertical?.Tablet || styles?.textShadow?.blur?.Tablet ? 
                `text-shadow: ${styles?.textShadow?.horizontal?.Tablet || styles?.textShadow?.horizontal?.Desktop || '0px'} ${styles?.textShadow?.vertical?.Tablet || styles?.textShadow?.vertical?.Desktop || '0px'} ${styles?.textShadow?.blur?.Tablet || styles?.textShadow?.blur?.Desktop || '0px'} ${styles?.textShadow?.color || 'transparent'};` : ''}
            ${generateCSS({ attributes: styles?.stroke, key: 'width', getValue: (value) => `stroke-width: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.stroke, key: 'dasharray', getValue: (value) => `stroke-dasharray: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.border, key: 'width', getValue: (value) => `border-width: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.border, key: 'radius', getValue: (value) => `border-radius: ${value};`, device: 'Tablet' })}
            ${styles?.boxShadow?.horizontal?.Tablet || styles?.boxShadow?.vertical?.Tablet || styles?.boxShadow?.blur?.Tablet || styles?.boxShadow?.spread?.Tablet ? 
                `box-shadow: ${styles?.boxShadow?.type === 'inset' ? 'inset ' : ''}${styles?.boxShadow?.horizontal?.Tablet || styles?.boxShadow?.horizontal?.Desktop || '0px'} ${styles?.boxShadow?.vertical?.Tablet || styles?.boxShadow?.vertical?.Desktop || '0px'} ${styles?.boxShadow?.blur?.Tablet || styles?.boxShadow?.blur?.Desktop || '0px'} ${styles?.boxShadow?.spread?.Tablet || styles?.boxShadow?.spread?.Desktop || '0px'} ${styles?.boxShadow?.color || 'transparent'};` : ''}
            ${generateCSS({ attributes: styles?.layout, key: 'padding', getValue: (value) => `padding: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.layout, key: 'margin', getValue: (value) => `margin: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.flex, key: 'columnGap', getValue: (value) => `column-gap: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.flex, key: 'rowGap', getValue: (value) => `row-gap: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.grid, key: 'columnGap', getValue: (value) => `column-gap: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.grid, key: 'rowGap', getValue: (value) => `row-gap: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.layout, key: 'width', getValue: (value) => `width: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.layout, key: 'height', getValue: (value) => `height: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.layout, key: 'minWidth', getValue: (value) => `min-width: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.layout, key: 'minHeight', getValue: (value) => `min-height: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.layout, key: 'maxWidth', getValue: (value) => `max-width: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.layout, key: 'maxHeight', getValue: (value) => `max-height: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.position, key: 'top', getValue: (value) => `top: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.position, key: 'right', getValue: (value) => `right: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.position, key: 'bottom', getValue: (value) => `bottom: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.position, key: 'left', getValue: (value) => `left: ${value};`, device: 'Tablet' })}
        }`;

    const mobileAllStyle = `
        ${selector}{
            ${generateCSS({ attributes: styles?.typography, key: 'fontSize', getValue: (value) => `font-size: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.typography, key: 'lineHeight', getValue: (value) => `line-height: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.typography, key: 'letterSpacing', getValue: (value) => `letter-spacing: ${value};`, device: 'Mobile' })}
            ${generateBackgroundCSS(styles?.background, 'Mobile')}
            ${styles?.textShadow?.horizontal?.Mobile || styles?.textShadow?.vertical?.Mobile || styles?.textShadow?.blur?.Mobile ? 
                `text-shadow: ${styles?.textShadow?.horizontal?.Mobile || styles?.textShadow?.horizontal?.Desktop || '0px'} ${styles?.textShadow?.vertical?.Mobile || styles?.textShadow?.vertical?.Desktop || '0px'} ${styles?.textShadow?.blur?.Mobile || styles?.textShadow?.blur?.Desktop || '0px'} ${styles?.textShadow?.color || 'transparent'};` : ''}
            ${generateCSS({ attributes: styles?.stroke, key: 'width', getValue: (value) => `stroke-width: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.stroke, key: 'dasharray', getValue: (value) => `stroke-dasharray: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.border, key: 'width', getValue: (value) => `border-width: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.border, key: 'radius', getValue: (value) => `border-radius: ${value};`, device: 'Mobile' })}
            ${styles?.boxShadow?.horizontal?.Mobile || styles?.boxShadow?.vertical?.Mobile || styles?.boxShadow?.blur?.Mobile || styles?.boxShadow?.spread?.Mobile ? 
                `box-shadow: ${styles?.boxShadow?.type === 'inset' ? 'inset ' : ''}${styles?.boxShadow?.horizontal?.Mobile || styles?.boxShadow?.horizontal?.Desktop || '0px'} ${styles?.boxShadow?.vertical?.Mobile || styles?.boxShadow?.vertical?.Desktop || '0px'} ${styles?.boxShadow?.blur?.Mobile || styles?.boxShadow?.blur?.Desktop || '0px'} ${styles?.boxShadow?.spread?.Mobile || styles?.boxShadow?.spread?.Desktop || '0px'} ${styles?.boxShadow?.color || 'transparent'};` : ''}
            ${generateCSS({ attributes: styles?.layout, key: 'padding', getValue: (value) => `padding: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.layout, key: 'margin', getValue: (value) => `margin: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.flex, key: 'columnGap', getValue: (value) => `column-gap: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.flex, key: 'rowGap', getValue: (value) => `row-gap: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.grid, key: 'columnGap', getValue: (value) => `column-gap: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.grid, key: 'rowGap', getValue: (value) => `row-gap: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.layout, key: 'width', getValue: (value) => `width: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.layout, key: 'height', getValue: (value) => `height: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.layout, key: 'minWidth', getValue: (value) => `min-width: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.layout, key: 'minHeight', getValue: (value) => `min-height: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.layout, key: 'maxWidth', getValue: (value) => `max-width: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.layout, key: 'maxHeight', getValue: (value) => `max-height: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.position, key: 'top', getValue: (value) => `top: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.position, key: 'right', getValue: (value) => `right: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.position, key: 'bottom', getValue: (value) => `bottom: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.position, key: 'left', getValue: (value) => `left: ${value};`, device: 'Mobile' })}
        }`;

    const style = `${desktopAllStyle}@media screen and (max-width: 1024px) {${tabletAllStyle}}@media screen and (max-width: 767px) {${mobileAllStyle}}`;
    
    return minifyCSS(style);
};

export default generateStyles;