import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import { createBlocksFromInnerBlocksTemplate } from '@wordpress/blocks';

export const variations = [
  {
    name: 'one-column',
    title: 'One Column',
    icon: 'button',
    isDefault: true,
    scope: ['block'],
    attributes: {
      variationStatus: true,
      FlexDirectionZRPAlign: 'column'
    },
  },
  {
    name: 'two-column',
    title: 'Two Column',
    icon: 'plugins-checked',
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
          FlexDirectionZRPAlign: 'column'
        },
      ],
      [
        'zolo/container',
        {
          zolo_ContainerWidthRange: 50,
          zolo_ContainerWidthUnit: '%',
          zolo_TABContainerWidthRange: 100,
          zolo_TABContainerWidthUnit: '%',
          FlexDirectionZRPAlign: 'column'
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
        icon="smiley"
        label={__('Choose a Layout', 'zolo-blocks')}
        instructions={__('Select a columns layout to start with.', 'zolo-blocks')}
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
