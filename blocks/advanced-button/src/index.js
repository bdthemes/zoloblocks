import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={22} height={10} viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.25 3C0.25 1.48122 1.48122 0.25 3 0.25H19C20.5188 0.25 21.75 1.48122 21.75 3V7C21.75 8.51878 20.5188 9.75 19 9.75H3C1.48122 9.75 0.25 8.51878 0.25 7V3ZM3 1.75C2.30964 1.75 1.75 2.30964 1.75 3V7C1.75 7.69036 2.30964 8.25 3 8.25H19C19.6904 8.25 20.25 7.69036 20.25 7V3C20.25 2.30964 19.6904 1.75 19 1.75H3ZM4.25 5C4.25 4.58579 4.58579 4.25 5 4.25H17C17.4142 4.25 17.75 4.58579 17.75 5C17.75 5.41421 17.4142 5.75 17 5.75H5C4.58579 5.75 4.25 5.41421 4.25 5Z"
                    fill="#4D4D4D"
                />
            </svg>
        ),
    },
    attributes,
    edit: Edit,
    save: Save,
});
