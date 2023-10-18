import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 4.5C2 4.22386 2.22386 4 2.5 4H10.5C10.7761 4 11 4.22386 11 4.5V19.5C11 19.7761 10.7761 20 10.5 20H2.5C2.22386 20 2 19.7761 2 19.5V4.5ZM13 4.5C13 4.22386 13.2239 4 13.5 4H21.5C21.7761 4 22 4.22386 22 4.5V19.5C22 19.7761 21.7761 20 21.5 20H13.5C13.2239 20 13 19.7761 13 19.5V4.5Z"
                    fill="#DAE4F0"
                />
            </svg>
        ),
        scope: ['block'],
        attributes: {
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.95 4H2.5C2.22386 4 2 4.22386 2 4.5V19.5C2 19.7761 2.22386 20 2.5 20H6.95C7.22614 20 7.45 19.7761 7.45 19.5V4.5C7.45 4.22386 7.22614 4 6.95 4ZM14.22 4H9.77002C9.49388 4 9.27002 4.22386 9.27002 4.5V19.5C9.27002 19.7761 9.49388 20 9.77002 20H14.22C14.4962 20 14.72 19.7761 14.72 19.5V4.5C14.72 4.22386 14.4962 4 14.22 4ZM17.05 4H21.5C21.7761 4 22 4.22386 22 4.5V19.5C22 19.7761 21.7761 20 21.5 20H17.05C16.7738 20 16.55 19.7761 16.55 19.5V4.5C16.55 4.22386 16.7738 4 17.05 4Z"
                    fill="#DAE4F0"
                />
            </svg>
        ),
        scope: ['block'],
        attributes: {
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5 4H5.5C5.77614 4 6 4.22386 6 4.5V19.5C6 19.7761 5.77614 20 5.5 20H2.5C2.22386 20 2 19.7761 2 19.5V4.5C2 4.22386 2.22386 4 2.5 4ZM7.82001 4H10.82C11.0961 4 11.32 4.22386 11.32 4.5V19.5C11.32 19.7761 11.0961 20 10.82 20H7.82001C7.54386 20 7.32001 19.7761 7.32001 19.5V4.5C7.32001 4.22386 7.54386 4 7.82001 4ZM16.14 4H13.14C12.8639 4 12.64 4.22386 12.64 4.5V19.5C12.64 19.7761 12.8639 20 13.14 20H16.14C16.4162 20 16.64 19.7761 16.64 19.5V4.5C16.64 4.22386 16.4162 4 16.14 4ZM18.45 4H21.45C21.7262 4 21.95 4.22386 21.95 4.5V19.5C21.95 19.7761 21.7262 20 21.45 20H18.45C18.1739 20 17.95 19.7761 17.95 19.5V4.5C17.95 4.22386 18.1739 4 18.45 4Z"
                    fill="#DAE4F0"
                />
            </svg>
        ),
        scope: ['block'],
        attributes: {
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
        name: 'two-column-row',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
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
];

export const VariationPicker = (props) => {
    const { clientId, setAttributes, defaultVariation } = props;
    const { replaceInnerBlocks } = useDispatch('core/block-editor');

    const blockVariationPickerOnSelect = (nextVariation = defaultVariation) => {
        if (nextVariation.attributes) {
            setAttributes(nextVariation.attributes);
        }

        if (nextVariation.innerBlocks && 'one-column' !== nextVariation.name) {
            replaceInnerBlocks(clientId, createBlocksFromInnerBlocksTemplate(nextVariation.innerBlocks));
        }
    };

    return (
        <div className="zolo-container-variation-picker">
            <BlockVariationPicker
                icon="layout"
                label={__('Choose Container Layout', 'zolo-blocks')}
                instructions={__('Select a container column layout to start with.', 'zolo-blocks')}
                variations={variations}
                onSelect={(nextVariation) => {
                    blockVariationPickerOnSelect(nextVariation);
                    console.log(nextVariation);
                }}
            />
        </div>
    );
};

export default { VariationPicker, variations };
