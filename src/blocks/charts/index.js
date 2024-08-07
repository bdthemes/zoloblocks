import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

import './style.scss';

registerBlockType(metadata, {
  icon: {
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m17.135 3.232-5.724 5.5.019.008a.652.652 0 0 1-.897 0L7.62 5.958 3.53 9.973a.667.667 0 0 1-.457.187.658.658 0 0 1-.467-.196.64.64 0 0 1 0-.915l4.52-4.473a.663.663 0 0 1 .905 0l2.922 2.783 5.276-5.07h-2.96a.646.646 0 0 1 0-1.289h4.51c.355 0 .644.29.644.644v4.137c0 .354-.29.644-.644.644a.646.646 0 0 1-.644-.644V3.23zm3.202 5.144h-3.996a.665.665 0 0 0-.663.663v11.289c0 .364.299.663.663.663h3.996a.665.665 0 0 0 .663-.663V9.039a.665.665 0 0 0-.663-.663zm-.663 11.289h-2.68V9.693h2.68v9.972zM9.002 11.71h3.996c.364 0 .663.298.663.663v7.955a.665.665 0 0 1-.663.663H9.002a.665.665 0 0 1-.663-.663v-7.955c0-.365.299-.663.663-.663zm.653 7.955h2.68v-6.639h-2.68v6.639zm-7.992-4.8h3.996c.364 0 .663.3.663.664v4.799a.665.665 0 0 1-.663.663H1.663A.665.665 0 0 1 1 20.328v-4.8c0-.364.299-.662.663-.662zm.654 4.8h2.68v-3.483h-2.68v3.483z"
          fill="#2667FF"
        />
      </svg>
    ),
  },

  attributes,
  edit: Edit,
  save: Save,
});
