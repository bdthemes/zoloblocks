import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 490 490">
                <path d="M109.773 105.325H7.712V0h102.061v105.325zM28.346 84.691h60.793V20.634H28.346v64.057zM165.277 38.522h317.011v20.634H165.277zM109.773 297.662H7.712V192.333h102.061v105.329zm-81.427-20.634h60.793v-64.061H28.346v64.061zM165.277 230.859h317.011v20.634H165.277zM109.773 490H7.712V384.67h102.061V490zm-81.427-20.634h60.793v-64.063H28.346v64.063zM165.277 423.197h317.011v20.634H165.277z" />
            </svg>
        ),
    },
    attributes,
    edit: Edit,
    save: Save,
    providesContext: {
        'menuBreakpoint': "menuBreakpoint"
    }
});
