import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import './style.scss';

const {BlockIcons} = window.zoloIcons;
// const {manageSingleBlock} = window.zoloModule;

registerBlockType(metadata, {
  icon: BlockIcons['post-comments-form'],
  attributes,
  edit: Edit,
  save: () => null,
});


// const blockConfig = {
//   metadata,
//   icon: BlockIcons['post-comments-form'],
//   attributes,
//   edit: Edit,
// };

// // Register/unregister the block based on the URL
// manageSingleBlock(blockConfig);
//
// // Optional: Add listeners for dynamic URL updates
// window.addEventListener('popstate', () => manageSingleBlock(blockConfig));
//
// // Override history.pushState to detect programmatic URL changes
// const originalPushState = history.pushState;
// history.pushState = function (...args) {
//   originalPushState.apply(history, args);
//   manageSingleBlock(blockConfig);  // Re-check when URL is updated programmatically
// };
//
// // Override history.replaceState to detect programmatic URL changes
// const originalReplaceState = history.replaceState;
// history.replaceState = function (...args) {
//   originalReplaceState.apply(history, args);
//   manageSingleBlock(blockConfig);  // Re-check when URL is updated programmatically
// };


