import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import Example from './example';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 1.25C2.92893 1.25 1.25 2.92893 1.25 5V19C1.25 21.0711 2.92893 22.75 5 22.75H19C21.0711 22.75 22.75 21.0711 22.75 19V5C22.75 2.92893 21.0711 1.25 19 1.25H5ZM2.75 5C2.75 3.75736 3.75736 2.75 5 2.75H19C20.2426 2.75 21.25 3.75736 21.25 5V19C21.25 20.2426 20.2426 21.25 19 21.25H5C3.75736 21.25 2.75 20.2426 2.75 19V5ZM6.75 18C6.75 18.4142 7.08579 18.75 7.5 18.75C7.91421 18.75 8.25 18.4142 8.25 18V12.75H15.75V18C15.75 18.4142 16.0858 18.75 16.5 18.75C16.9142 18.75 17.25 18.4142 17.25 18L17.25 6C17.25 5.58579 16.9142 5.25 16.5 5.25C16.0858 5.25 15.75 5.58579 15.75 6L15.75 11.25H8.25L8.25 6C8.25 5.58579 7.91421 5.25 7.5 5.25C7.08579 5.25 6.75 5.58579 6.75 6L6.75 18Z"
                    fill="#4D4D4D"
                />
            </svg>
        ),
    },
    attributes,
    example: Example,
    edit: Edit,
    save: Save,
});
