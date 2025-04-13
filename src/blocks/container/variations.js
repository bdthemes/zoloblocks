import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import { createBlocksFromInnerBlocksTemplate, createBlock } from '@wordpress/blocks';

export const variations = [
    {
        name: 'one-column',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21.5 4H2.5C2.22386 4 2 4.22386 2 4.5V19.5C2 19.7761 2.22386 20 2.5 20H21.5C21.7761 20 22 19.7761 22 19.5V4.5C22 4.22386 21.7761 4 21.5 4Z"
                    fill="#DAE4F0"
                />
            </svg>
        ),
        isDefault: true,
        scope: ['block'],
        attributes: {
            variationStatus: true,
            FlexDirectionZRPAlign: 'column',
        },
    },
    {
        name: 'two-column',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 4.5C2 4.22386 2.22386 4 2.5 4H10.5C10.7761 4 11 4.22386 11 4.5V19.5C11 19.7761 10.7761 20 10.5 20H2.5C2.22386 20 2 19.7761 2 19.5V4.5ZM13 4.5C13 4.22386 13.2239 4 13.5 4H21.5C21.7761 4 22 4.22386 22 4.5V19.5C22 19.7761 21.7761 20 21.5 20H13.5C13.2239 20 13 19.7761 13 19.5V4.5Z"
                    fill="#DAE4F0"
                />
            </svg>
        ),
        scope: ['block'],
        attributes: {
            FlexDirectionZRPAlign: 'row',
            FlexWrapZRPAlign: 'nowrap',
            variationStatus: true,
        },
        innerBlocks: [
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 50,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 50,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
        ],
    },
    {
        name: 'three-column',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.95 4H2.5C2.22386 4 2 4.22386 2 4.5V19.5C2 19.7761 2.22386 20 2.5 20H6.95C7.22614 20 7.45 19.7761 7.45 19.5V4.5C7.45 4.22386 7.22614 4 6.95 4ZM14.22 4H9.77002C9.49388 4 9.27002 4.22386 9.27002 4.5V19.5C9.27002 19.7761 9.49388 20 9.77002 20H14.22C14.4962 20 14.72 19.7761 14.72 19.5V4.5C14.72 4.22386 14.4962 4 14.22 4ZM17.05 4H21.5C21.7761 4 22 4.22386 22 4.5V19.5C22 19.7761 21.7761 20 21.5 20H17.05C16.7738 20 16.55 19.7761 16.55 19.5V4.5C16.55 4.22386 16.7738 4 17.05 4Z"
                    fill="#DAE4F0"
                />
            </svg>
        ),
        scope: ['block'],
        attributes: {
            FlexDirectionZRPAlign: 'row',
            FlexWrapZRPAlign: 'nowrap',
            variationStatus: true,
        },
        innerBlocks: [
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 33.33,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 33.33,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 33.33,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
        ],
    },
    {
        name: 'four-column',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 4H5.5C5.77614 4 6 4.22386 6 4.5V19.5C6 19.7761 5.77614 20 5.5 20H2.5C2.22386 20 2 19.7761 2 19.5V4.5C2 4.22386 2.22386 4 2.5 4ZM7.82001 4H10.82C11.0961 4 11.32 4.22386 11.32 4.5V19.5C11.32 19.7761 11.0961 20 10.82 20H7.82001C7.54386 20 7.32001 19.7761 7.32001 19.5V4.5C7.32001 4.22386 7.54386 4 7.82001 4ZM16.14 4H13.14C12.8639 4 12.64 4.22386 12.64 4.5V19.5C12.64 19.7761 12.8639 20 13.14 20H16.14C16.4162 20 16.64 19.7761 16.64 19.5V4.5C16.64 4.22386 16.4162 4 16.14 4ZM18.45 4H21.45C21.7262 4 21.95 4.22386 21.95 4.5V19.5C21.95 19.7761 21.7262 20 21.45 20H18.45C18.1739 20 17.95 19.7761 17.95 19.5V4.5C17.95 4.22386 18.1739 4 18.45 4Z"
                    fill="#DAE4F0"
                />
            </svg>
        ),
        scope: ['block'],
        attributes: {
            FlexDirectionZRPAlign: 'row',
            FlexWrapZRPAlign: 'nowrap',
            variationStatus: true,
        },
        innerBlocks: [
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 25,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 25,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 25,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 25,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
        ],
    },
    {
        name: 'quarter-third-two-third',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 4H7.5C7.77614 4 8 4.22386 8 4.5V19.5C8 19.7761 7.77614 20 7.5 20H2.5C2.22386 20 2 19.7761 2 19.5V4.5C2 4.22386 2.22386 4 2.5 4ZM10.5 4H21.5C21.7761 4 22 4.22386 22 4.5V19.5C22 19.7761 21.7761 20 21.5 20H10.5C10.2239 20 10 19.7761 10 19.5V4.5C10 4.22386 10.2239 4 10.5 4Z"
                    fill="#DAE4F0"
                />
            </svg>
        ),
        scope: ['block'],
        attributes: {
            variationStatus: true,
            FlexDirectionZRPAlign: 'row',
            FlexWrapZRPAlign: 'nowrap',
        },
        innerBlocks: [
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 25,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 75,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
        ],
    },
    {
        name: 'two-third-quarter-third',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 4H13.5C13.7761 4 14 4.22386 14 4.5V19.5C14 19.7761 13.7761 20 13.5 20H2.5C2.22386 20 2 19.7761 2 19.5V4.5C2 4.22386 2.22386 4 2.5 4ZM16.5 4H21.5C21.7761 4 22 4.22386 22 4.5V19.5C22 19.7761 21.7761 20 21.5 20H16.5C16.2239 20 16 19.7761 16 19.5V4.5C16 4.22386 16.2239 4 16.5 4Z"
                    fill="#DAE4F0"
                />
            </svg>
        ),
        scope: ['block'],
        attributes: {
            variationStatus: true,
            FlexDirectionZRPAlign: 'row',
            FlexWrapZRPAlign: 'nowrap',
        },
        innerBlocks: [
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 75,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 25,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
        ],
    },
    {
        name: 'two-column-row',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 4H10.5C10.7761 4 11 4.22386 11 4.5V10.7C11 10.9761 10.7761 11.2 10.5 11.2H2.5C2.22386 11.2 2 10.9761 2 10.7V4.5C2 4.22386 2.22386 4 2.5 4ZM13.5 4H21.5C21.7761 4 22 4.22386 22 4.5V10.7C22 10.9761 21.7761 11.2 21.5 11.2H13.5C13.2239 11.2 13 10.9761 13 10.7V4.5C13 4.22386 13.2239 4 13.5 4ZM21.5 12.8H13.5C13.2239 12.8 13 13.0239 13 13.3V19.5C13 19.7761 13.2239 20 13.5 20H21.5C21.7761 20 22 19.7761 22 19.5V13.3C22 13.0239 21.7761 12.8 21.5 12.8ZM2.5 12.8H10.5C10.7761 12.8 11 13.0239 11 13.3V19.5C11 19.7761 10.7761 20 10.5 20H2.5C2.22386 20 2 19.7761 2 19.5V13.3C2 13.0239 2.22386 12.8 2.5 12.8Z"
                    fill="#DAE4F0"
                />
            </svg>
        ),
        scope: ['block'],
        attributes: {
            variationStatus: true,
            FlexDirectionZRPAlign: 'row',
            FlexWrapZRPAlign: 'wrap',
        },
        innerBlocks: [
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 48,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 48,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 48,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 48,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
        ],
    },
    {
        name: 'three-columns-two-row',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_130_358)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.5 4H6.95C7.22614 4 7.45 4.22386 7.45 4.5V10.7C7.45 10.9761 7.22614 11.2 6.95 11.2H2.5C2.22386 11.2 2 10.9761 2 10.7V4.5C2 4.22386 2.22386 4 2.5 4ZM2.5 12.8H6.95C7.22614 12.8 7.45 13.0239 7.45 13.3V19.5C7.45 19.7762 7.22614 20 6.95 20H2.5C2.22386 20 2 19.7762 2 19.5V13.3C2 13.0239 2.22386 12.8 2.5 12.8ZM14.22 12.8H9.77002C9.49388 12.8 9.27002 13.0239 9.27002 13.3V19.5C9.27002 19.7762 9.49388 20 9.77002 20H14.22C14.4962 20 14.72 19.7762 14.72 19.5V13.3C14.72 13.0239 14.4962 12.8 14.22 12.8ZM9.77002 4H14.22C14.4962 4 14.72 4.22386 14.72 4.5V10.7C14.72 10.9761 14.4962 11.2 14.22 11.2H9.77002C9.49388 11.2 9.27002 10.9761 9.27002 10.7V4.5C9.27002 4.22386 9.49388 4 9.77002 4ZM21.5 12.8H17.05C16.7739 12.8 16.55 13.0239 16.55 13.3V19.5C16.55 19.7762 16.7739 20 17.05 20H21.5C21.7762 20 22 19.7762 22 19.5V13.3C22 13.0239 21.7762 12.8 21.5 12.8ZM17.05 4H21.5C21.7762 4 22 4.22386 22 4.5V10.7C22 10.9761 21.7762 11.2 21.5 11.2H17.05C16.7739 11.2 16.55 10.9761 16.55 10.7V4.5C16.55 4.22386 16.7739 4 17.05 4Z"
                        fill="#DAE4F0"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_130_358">
                        <rect width="20" height="16" fill="white" transform="translate(2 4)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        scope: ['block'],
        attributes: {
            variationStatus: true,
            FlexDirectionZRPAlign: 'row',
            FlexWrapZRPAlign: 'wrap',
        },
        innerBlocks: [
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 31,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 31,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 31,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 31,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 31,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 31,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
        ],
    },
    {
        name: 'two-quater-one-half',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_130_324)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.5 4H2.5C2.22386 4 2 4.22386 2 4.5V19.5C2 19.7761 2.22386 20 2.5 20H5.5C5.77614 20 6 19.7761 6 19.5V4.5C6 4.22386 5.77614 4 5.5 4ZM15.5 4H8.5C8.22386 4 8 4.22386 8 4.5V19.5C8 19.7761 8.22386 20 8.5 20H15.5C15.7761 20 16 19.7761 16 19.5V4.5C16 4.22386 15.7761 4 15.5 4ZM18.5 4H21.5C21.7761 4 22 4.22386 22 4.5V19.5C22 19.7761 21.7761 20 21.5 20H18.5C18.2239 20 18 19.7761 18 19.5V4.5C18 4.22386 18.2239 4 18.5 4Z"
                        fill="#DAE4F0"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_130_324">
                        <rect width="20" height="16" fill="white" transform="translate(2 4)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        scope: ['block'],
        attributes: {
            variationStatus: true,
            FlexDirectionZRPAlign: 'row',
            FlexWrapZRPAlign: 'nowrap',
        },
        innerBlocks: [
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 25,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 50,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 25,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
        ],
    },
    {
        name: 'one-third-one-quaters',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_130_338)">
                    <path
                        d="M21.5 4H16.5C16.2239 4 16 4.22386 16 4.5V10.7C16 10.9761 16.2239 11.2 16.5 11.2H21.5C21.7761 11.2 22 10.9761 22 10.7V4.5C22 4.22386 21.7761 4 21.5 4Z"
                        fill="#DAE4F0"
                    />
                    <path
                        d="M13.5 4H2.5C2.22386 4 2 4.22386 2 4.5V10.7C2 10.9761 2.22386 11.2 2.5 11.2H13.5C13.7761 11.2 14 10.9761 14 10.7V4.5C14 4.22386 13.7761 4 13.5 4Z"
                        fill="#DAE4F0"
                    />
                    <path
                        d="M21.5 12.8H10.5C10.2239 12.8 10 13.0239 10 13.3V19.5C10 19.7762 10.2239 20 10.5 20H21.5C21.7761 20 22 19.7762 22 19.5V13.3C22 13.0239 21.7761 12.8 21.5 12.8Z"
                        fill="#DAE4F0"
                    />
                    <path
                        d="M7.5 12.8H2.5C2.22386 12.8 2 13.0239 2 13.3V19.5C2 19.7762 2.22386 20 2.5 20H7.5C7.77614 20 8 19.7762 8 19.5V13.3C8 13.0239 7.77614 12.8 7.5 12.8Z"
                        fill="#DAE4F0"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_130_338">
                        <rect width="20" height="16" fill="white" transform="translate(2 4)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        scope: ['block'],
        attributes: {
            variationStatus: true,
            FlexDirectionZRPAlign: 'row',
            FlexWrapZRPAlign: 'wrap',
        },
        innerBlocks: [
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 73,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 23,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 23,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 73,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
        ],
    },
    {
        name: 'one-third-one-quater',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_130_351)">
                    <path
                        d="M7.5 4H2.5C2.22386 4 2 4.22386 2 4.5V10.7C2 10.9761 2.22386 11.2 2.5 11.2H7.5C7.77614 11.2 8 10.9761 8 10.7V4.5C8 4.22386 7.77614 4 7.5 4Z"
                        fill="#DAE4F0"
                    />
                    <path
                        d="M21.5 4H10.5C10.2239 4 10 4.22386 10 4.5V10.7C10 10.9761 10.2239 11.2 10.5 11.2H21.5C21.7761 11.2 22 10.9761 22 10.7V4.5C22 4.22386 21.7761 4 21.5 4Z"
                        fill="#DAE4F0"
                    />
                    <path
                        d="M13.5 12.8H2.5C2.22386 12.8 2 13.0239 2 13.3V19.5C2 19.7762 2.22386 20 2.5 20H13.5C13.7761 20 14 19.7762 14 19.5V13.3C14 13.0239 13.7761 12.8 13.5 12.8Z"
                        fill="#DAE4F0"
                    />
                    <path
                        d="M21.5 12.8H16.5C16.2239 12.8 16 13.0239 16 13.3V19.5C16 19.7762 16.2239 20 16.5 20H21.5C21.7761 20 22 19.7762 22 19.5V13.3C22 13.0239 21.7761 12.8 21.5 12.8Z"
                        fill="#DAE4F0"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_130_351">
                        <rect width="20" height="16" fill="white" transform="translate(2 4)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        scope: ['block'],
        attributes: {
            variationStatus: true,
            FlexDirectionZRPAlign: 'row',
            FlexWrapZRPAlign: 'wrap',
        },
        innerBlocks: [
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 23,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 73,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 73,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 23,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
        ],
    },
    {
        name: 'two-half-one-full',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_130_345)">
                    <path
                        d="M10.5 4H2.5C2.22386 4 2 4.22386 2 4.5V10.7C2 10.9761 2.22386 11.2 2.5 11.2H10.5C10.7761 11.2 11 10.9761 11 10.7V4.5C11 4.22386 10.7761 4 10.5 4Z"
                        fill="#DAE4F0"
                    />
                    <path
                        d="M21.5 4H13.5C13.2239 4 13 4.22386 13 4.5V10.7C13 10.9761 13.2239 11.2 13.5 11.2H21.5C21.7761 11.2 22 10.9761 22 10.7V4.5C22 4.22386 21.7761 4 21.5 4Z"
                        fill="#DAE4F0"
                    />
                    <path
                        d="M21.5 12.8H2.5C2.22386 12.8 2 13.0239 2 13.3V19.5C2 19.7762 2.22386 20 2.5 20H21.5C21.7761 20 22 19.7762 22 19.5V13.3C22 13.0239 21.7761 12.8 21.5 12.8Z"
                        fill="#DAE4F0"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_130_345">
                        <rect width="20" height="16" fill="white" transform="translate(2 4)" />
                    </clipPath>
                </defs>
            </svg>
        ),
        scope: ['block'],
        attributes: {
            variationStatus: true,
            FlexDirectionZRPAlign: 'row',
            FlexWrapZRPAlign: 'wrap',
        },
        innerBlocks: [
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 48,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 48,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
            [
                'zolo/container',
                {
                    zolo_ContainerWidthRange: 98,
                    zolo_ContainerWidthUnit: '%',
                    zolo_TABContainerWidthRange: 100,
                    zolo_TABContainerWidthUnit: '%',
                    FlexDirectionZRPAlign: 'column',
                },
            ],
        ],
    },
];

export const VariationPicker = (props) => {
    const { clientId, setAttributes, defaultVariation, closeModal, onRemove, isReplace = false } = props;
    const { replaceInnerBlocks, replaceBlock } = useDispatch('core/block-editor');

    const blockVariationPickerOnSelect = (nextVariation = defaultVariation) => {
        if (nextVariation.attributes) {
            setAttributes(nextVariation.attributes);
        }

        if (nextVariation.innerBlocks && 'one-column' !== nextVariation.name) {
            replaceInnerBlocks(clientId, createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks));
        }

        if (isReplace && 'one-column' == nextVariation.name) {
            replaceBlock(clientId, createBlock('zolo/container', nextVariation.attributes, []));
        }

        // Close the modal after selection
        if (closeModal) {
            closeModal();
        }
    };

    const LayoutIcon = () => {
        return (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 3.75C2 2.7835 2.7835 2 3.75 2H19.75C20.7165 2 21.5 2.7835 21.5 3.75V8.75C21.5 9.7165 20.7165 10.5 19.75 10.5H3.75C2.7835 10.5 2 9.7165 2 8.75V3.75ZM3.75 3.5C3.61193 3.5 3.5 3.61193 3.5 3.75V8.75C3.5 8.88807 3.61193 9 3.75 9H19.75C19.8881 9 20 8.88807 20 8.75V3.75C20 3.61193 19.8881 3.5 19.75 3.5H3.75ZM2 14.75C2 13.7835 2.7835 13 3.75 13H8.75C9.7165 13 10.5 13.7835 10.5 14.75V19.75C10.5 20.7165 9.7165 21.5 8.75 21.5H3.75C2.7835 21.5 2 20.7165 2 19.75V14.75ZM3.75 14.5C3.61193 14.5 3.5 14.6119 3.5 14.75V19.75C3.5 19.8881 3.61193 20 3.75 20H8.75C8.88807 20 9 19.8881 9 19.75V14.75C9 14.6119 8.88807 14.5 8.75 14.5H3.75ZM14.75 13C13.7835 13 13 13.7835 13 14.75V19.75C13 20.7165 13.7835 21.5 14.75 21.5H19.75C20.7165 21.5 21.5 20.7165 21.5 19.75V14.75C21.5 13.7835 20.7165 13 19.75 13H14.75ZM14.5 14.75C14.5 14.6119 14.6119 14.5 14.75 14.5H19.75C19.8881 14.5 20 14.6119 20 14.75V19.75C20 19.8881 19.8881 20 19.75 20H14.75C14.6119 20 14.5 19.8881 14.5 19.75V14.75Z"
                    fill="#4D4D4D"
                />
            </svg>
        );
    };

    return (
        <div className="zolo-container-variation-picker">
            <BlockVariationPicker
                icon={<LayoutIcon />}
                label={__('Choose Container Layout', 'zoloblocks')}
                instructions={__('Select a container column layout to start with.', 'zoloblocks')}
                variations={variations}
                onSelect={(nextVariation) => {
                    blockVariationPickerOnSelect(nextVariation);
                }}
            />

            {!isReplace && (
                <button type="button" className="zolo-close-icon" aria-label="Close" onClick={() => onRemove()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-x"
                        role="img"
                        aria-hidden="true"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default { VariationPicker, variations };
