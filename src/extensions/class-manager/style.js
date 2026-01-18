import { minifyCSS } from './utils';
const { generateCSS, getBorderCSS, getBoxControlValue } = window.zoloModule;

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

            ${generateCSS({ attributes: styles, key: 'textShadow', getValue: (value) => {
                const x = `${value?.x || '0'}px`;
                const y = `${value?.y || '0'}px`;
                const blur = `${value?.blur || '0'}px`;
                const color = value?.color || 'rgba(0, 0, 0, 0.5)';
                return `text-shadow: ${x} ${y} ${blur} ${color};`;
            }, device: 'Desktop' })}


            ${generateCSS({ attributes: styles?.stroke, key: 'color', getValue: (value) => `stroke: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.stroke, key: 'width', getValue: (value) => `stroke-width: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.stroke, key: 'dasharray', getValue: (value) => `stroke-dasharray: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.stroke, key: 'opacity', getValue: (value) => `stroke-opacity: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.stroke, key: 'linecap', getValue: (value) => `stroke-linecap: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.stroke, key: 'linejoin', getValue: (value) => `stroke-linejoin: ${value};`, device: 'Desktop' })}

            
            ${generateCSS({ attributes: styles, key: 'border', getValue: (borderObjs) => {
               return getBorderCSS(borderObjs);
            }, device: 'Desktop' })}

            ${generateCSS({ attributes: styles, key: 'borderRadius', getValue: (value) => {
                return getBoxControlValue(value, 'border-radius');
            }, device: 'Desktop' })}

            ${generateCSS({ attributes: styles, key: 'boxShadow', getValue: (value) => {
                const x = `${value?.x || '0'}px`;
                const y = `${value?.y || '0'}px`;
                const blur = `${value?.blur || '0'}px`;
                const spread = `${value?.spread || '0'}px`;
                const inset = value?.inset ? 'inset ' : '';
                const color = value?.color || 'rgba(0, 0, 0, 0.5)';
                return `box-shadow: ${inset}${x} ${y} ${blur} ${spread} ${color};`;
            }, device: 'Desktop' })}

            
            ${generateCSS({ attributes: styles?.overflow, key: 'overflowX', getValue: (value) => `overflow-x: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.overflow, key: 'overflowY', getValue: (value) => `overflow-y: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.overflow, key: 'whiteSpace', getValue: (value) => `white-space: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.layout, key: 'padding', getValue: (value) => {
                return getBoxControlValue(value, 'padding');    
            }, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.layout, key: 'margin', getValue: (value) => {
                return getBoxControlValue(value, 'margin');
            }, device: 'Desktop' })}


            ${generateCSS({ attributes: styles?.size, key: 'width', getValue: (value) => `width: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.size, key: 'height', getValue: (value) => `height: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.size, key: 'minWidth', getValue: (value) => `min-width: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.size, key: 'minHeight', getValue: (value) => `min-height: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.size, key: 'maxWidth', getValue: (value) => `max-width: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.size, key: 'maxHeight', getValue: (value) => `max-height: ${value};`, device: 'Desktop' })}


            ${generateCSS({ attributes: styles, key: 'display', getValue: (value) => `display: ${value};`, device: 'Desktop' })}

            ${generateCSS({ attributes: styles?.flex, key: 'direction', getValue: (value) => `flex-direction: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.flex, key: 'alignItems', getValue: (value) => `align-items: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.flex, key: 'justifyContent', getValue: (value) => `justify-content: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.flex, key: 'flexWrap', getValue: (value) => `flex-wrap: ${value};`, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.flex, key: 'gap', getValue: (value) => {
                return `gap: ${value?.first} ${value?.second};`;
            }, device: 'Desktop' })}

            ${generateCSS({ attributes: styles?.grid, key: 'columns', getValue: (value) => {
                if(styles?.grid?.layoutType === 'manual') {
                    return `grid-template-columns: repeat(${value}, minmax(0, 1fr));`;
                }
                return '';
            }, device: 'Desktop' })}
            ${generateCSS({ attributes: styles?.grid, key: 'minColumnWidth', getValue: (value) => {
                if(styles?.grid?.layoutType === 'auto') {
                    return `grid-template-columns: repeat(auto-fill, minmax(min(${value}, 100%), 1fr));`;
                }
                return '';
            }, device: 'Desktop' })}

            ${generateCSS({ attributes: styles?.grid, key: 'gap', getValue: (value) => {
                return `gap: ${value?.first} ${value?.second};`;
            }, device: 'Desktop' })}


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

            ${generateCSS({ attributes: styles?.stroke, key: 'width', getValue: (value) => `stroke-width: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.stroke, key: 'dasharray', getValue: (value) => `stroke-dasharray: ${value};`, device: 'Tablet' })}

            ${generateCSS({ attributes: styles, key: 'borderRadius', getValue: (value) => {
                return getBoxControlValue(value, 'border-radius');
            }, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.layout, key: 'padding', getValue: (value) => {
                return getBoxControlValue(value, 'padding');    
            }, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.layout, key: 'margin', getValue: (value) => {
                return getBoxControlValue(value, 'margin');
            }, device: 'Tablet' })}

            ${generateCSS({ attributes: styles?.size, key: 'width', getValue: (value) => `width: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.size, key: 'height', getValue: (value) => `height: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.size, key: 'minWidth', getValue: (value) => `min-width: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.size, key: 'minHeight', getValue: (value) => `min-height: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.size, key: 'maxWidth', getValue: (value) => `max-width: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.size, key: 'maxHeight', getValue: (value) => `max-height: ${value};`, device: 'Tablet' })}

            ${generateCSS({ attributes: styles?.flex, key: 'direction', getValue: (value) => `flex-direction: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.flex, key: 'alignItems', getValue: (value) => `align-items: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.flex, key: 'justifyContent', getValue: (value) => `justify-content: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.flex, key: 'flexWrap', getValue: (value) => `flex-wrap: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.flex, key: 'gap', getValue: (value) => {
                return `gap: ${value?.first} ${value?.second};`;
            }, device: 'Tablet' })}

            ${generateCSS({ attributes: styles?.grid, key: 'columns', getValue: (value) => {
                if(styles?.grid?.layoutType === 'manual') {
                    return `grid-template-columns: repeat(${value}, minmax(0, 1fr));`;
                }
                return '';
            }, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.grid, key: 'minColumnWidth', getValue: (value) => {
                if(styles?.grid?.layoutType === 'auto') {
                    return `grid-template-columns: repeat(auto-fill, minmax(min(${value}, 100%), 1fr));`;
                }
                return '';
            }, device: 'Tablet' })}

            ${generateCSS({ attributes: styles?.grid, key: 'gap', getValue: (value) => {
                return `gap: ${value?.first} ${value?.second};`;
            }, device: 'Tablet' })}

            ${generateCSS({ attributes: styles?.block, key: 'float', getValue: (value) => `float: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.block, key: 'clear', getValue: (value) => `clear: ${value};`, device: 'Tablet' })}
            ${generateCSS({ attributes: styles?.block, key: 'overflow', getValue: (value) => `overflow: ${value};`, device: 'Tablet' })}

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

            ${generateCSS({ attributes: styles?.stroke, key: 'width', getValue: (value) => `stroke-width: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.stroke, key: 'dasharray', getValue: (value) => `stroke-dasharray: ${value};`, device: 'Mobile' })}

            ${generateCSS({ attributes: styles, key: 'borderRadius', getValue: (value) => {
                return getBoxControlValue(value, 'border-radius');
            }, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.layout, key: 'padding', getValue: (value) => {
                return getBoxControlValue(value, 'padding');    
            }, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.layout, key: 'margin', getValue: (value) => {
                return getBoxControlValue(value, 'margin');
            }, device: 'Mobile' })}

            ${generateCSS({ attributes: styles?.size, key: 'width', getValue: (value) => `width: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.size, key: 'height', getValue: (value) => `height: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.size, key: 'minWidth', getValue: (value) => `min-width: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.size, key: 'minHeight', getValue: (value) => `min-height: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.size, key: 'maxWidth', getValue: (value) => `max-width: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.size, key: 'maxHeight', getValue: (value) => `max-height: ${value};`, device: 'Mobile' })}

            ${generateCSS({ attributes: styles?.flex, key: 'direction', getValue: (value) => `flex-direction: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.flex, key: 'alignItems', getValue: (value) => `align-items: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.flex, key: 'justifyContent', getValue: (value) => `justify-content: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.flex, key: 'flexWrap', getValue: (value) => `flex-wrap: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.flex, key: 'gap', getValue: (value) => {
                return `gap: ${value?.first} ${value?.second};`;
            }, device: 'Mobile' })}

            ${generateCSS({ attributes: styles?.grid, key: 'columns', getValue: (value) => {
                if(styles?.grid?.layoutType === 'manual') {
                    return `grid-template-columns: repeat(${value}, minmax(0, 1fr));`;
                }
                return '';
            }, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.grid, key: 'minColumnWidth', getValue: (value) => {
                if(styles?.grid?.layoutType === 'auto') {
                    return `grid-template-columns: repeat(auto-fill, minmax(min(${value}, 100%), 1fr));`;
                }
                return '';
            }, device: 'Mobile' })}

            ${generateCSS({ attributes: styles?.grid, key: 'gap', getValue: (value) => {
                return `gap: ${value?.first} ${value?.second};`;
            }, device: 'Mobile' })}

            ${generateCSS({ attributes: styles?.block, key: 'float', getValue: (value) => `float: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.block, key: 'clear', getValue: (value) => `clear: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.block, key: 'overflow', getValue: (value) => `overflow: ${value};`, device: 'Mobile' })}
            
            ${generateCSS({ attributes: styles?.position, key: 'top', getValue: (value) => `top: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.position, key: 'right', getValue: (value) => `right: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.position, key: 'bottom', getValue: (value) => `bottom: ${value};`, device: 'Mobile' })}
            ${generateCSS({ attributes: styles?.position, key: 'left', getValue: (value) => `left: ${value};`, device: 'Mobile' })}
        }`;

    const style = `${desktopAllStyle}@media screen and (max-width: 1024px) {${tabletAllStyle}}@media screen and (max-width: 767px) {${mobileAllStyle}}`;
    
    return minifyCSS(style);
};

export default generateStyles;