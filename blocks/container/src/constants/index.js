/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// Block Prefix
export const BLOCK_PREFIX = 'container';

// Container
export const CONTAINER_WIDTH = 'ContainerWidth';
export const CONTENT_WIDTH = 'ContentWidth';
export const MIN_HEIGHT = 'MinHeight';

// Flex Properties
export const FLEX_DIRECTION = 'FlexDirection';
export const FLEX_WRAP = 'FlexWrap';
export const FLEX_JUSTIFY = 'FlexJustify';
export const FLEX_ALIGN = 'FlexAlign';

// Row & Column Style
export const CONTAINER_GAP = 'ContainerGap';

// container width types
export const CW_TYPES = [
    {
        label: __('None', 'zoloblocks'),
        value: 'cw_none',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="components-menu-items__item-icon"
                ariaHidden="true"
                focusable="false"
            >
                <path d="M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z"></path>
            </svg>
        ),
        info: __('Max 1280px wide', 'zoloblcoks'),
    },
    {
        label: __('Wide Width', 'zoloblocks'),
        value: 'cw_wide',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="components-menu-items__item-icon"
                ariaHidden="true"
                focusable="false"
            >
                <path d="M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z"></path>
            </svg>
        ),
        info: __('Max 1280px wide', 'zoloblcoks'),
    },
    {
        label: __('Full Width', 'zoloblocks'),
        value: 'cw_full',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="components-menu-items__item-icon"
                ariaHidden="true"
                focusable="false"
            >
                <path d="M5 4h14v11H5V4Zm11 16H8v-1.5h8V20Z"></path>
            </svg>
        ),
    },
];

export const CWT_ICONS = {
    cw_none: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="components-menu-items__item-icon"
            ariaHidden="true"
            focusable="false"
        >
            <path d="M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z"></path>
        </svg>
    ),
    cw_wide: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="components-menu-items__item-icon"
            ariaHidden="true"
            focusable="false"
        >
            <path d="M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z"></path>
        </svg>
    ),
    cw_full: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="components-menu-items__item-icon"
            ariaHidden="true"
            focusable="false"
        >
            <path d="M5 4h14v11H5V4Zm11 16H8v-1.5h8V20Z"></path>
        </svg>
    ),
};
