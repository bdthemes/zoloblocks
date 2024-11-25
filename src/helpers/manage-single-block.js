import {registerBlockType, unregisterBlockType} from '@wordpress/blocks';

const getTemplateNameFromURL = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('postId');

  if (postId) {
    // Decode the URI component and check the result
    const decodedPostId = decodeURIComponent(postId);
    const parts = decodedPostId.split('//');
    // Return the second part (template name) if it exists
    return parts.length > 1 ? parts[1] : null;
  }

  return null;
};

export const manageSingleBlock = (blockConfig) => {
  const templateName = getTemplateNameFromURL();
  const {metadata, icon, attributes, edit} = blockConfig;
  const blockName = metadata.name;

  if (templateName === 'single') {
    if (!wp.blocks.getBlockType(blockName)) {
      registerBlockType(metadata, {
        icon: {
          src: icon,
        },
        attributes,
        edit,
        save: () => null,
      });
    }
  } else {
    if (wp.blocks.getBlockType(blockName)) {
      unregisterBlockType(blockName);
    }
  }
};
