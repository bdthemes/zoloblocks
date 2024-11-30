import attributes from './attributes';
import metadata from './block.json';
import Edit from './edit';
import './style.scss';

const {BlockIcons} = window.zoloIcons;
const {manageSingleBlock} = window.zoloModule;

const blockConfig = {
  metadata,
  icon: BlockIcons['post-content'],
  attributes,
  edit: Edit,
};

// Register/unregister the block based on the URL
manageSingleBlock(blockConfig);

// Optional: Add listeners for dynamic URL updates
window.addEventListener('popstate', () => manageSingleBlock(blockConfig));

// Override history.pushState to detect programmatic URL changes
const originalPushState = history.pushState;
history.pushState = function (...args) {
  originalPushState.apply(history, args);
  manageSingleBlock(blockConfig);  // Re-check when URL is updated programmatically
};

// Override history.replaceState to detect programmatic URL changes
const originalReplaceState = history.replaceState;
history.replaceState = function (...args) {
  originalReplaceState.apply(history, args);
  manageSingleBlock(blockConfig);  // Re-check when URL is updated programmatically
};
