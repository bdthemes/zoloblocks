import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.781 11.232h-9.07c-.743 0-1.348.568-1.348 1.256 0 .689.605 1.256 1.349 1.256h9.07c.744 0 1.348-.567 1.348-1.256 0-.688-.604-1.255-1.348-1.255z"
                    fill="#2667FF"
                    fillOpacity=".831"
                />
                <path
                    d="M18.512 15.977H5.488a3.49 3.49 0 0 1 0-6.977h13.024a3.49 3.49 0 0 1 0 6.977zM5.488 10.395c-1.153 0-2.093.94-2.093 2.093 0 1.154.94 2.093 2.093 2.093h13.024c1.153 0 2.093-.94 2.093-2.093s-.94-2.093-2.093-2.093H5.488z"
                    fill="#2667FF"
                    fillOpacity=".831"
                />
            </svg>
        ),
    },
    usesContext: ['zolo/preset', 'zolo/titleToggle', 'zolo/percentToggle', 'zolo/progressTextTag'],
    attributes,
    edit: Edit,
    save: Save,
});
