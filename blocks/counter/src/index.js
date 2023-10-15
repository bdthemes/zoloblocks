import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 8C13.2091 8 15 6.20914 15 4C15 1.79086 13.2091 0 11 0C8.79086 0 7 1.79086 7 4C7 6.20914 8.79086 8 11 8ZM11 6.5C12.3807 6.5 13.5 5.38071 13.5 4C13.5 2.61929 12.3807 1.5 11 1.5C9.61929 1.5 8.5 2.61929 8.5 4C8.5 5.38071 9.61929 6.5 11 6.5Z"
                    fill="#4D4D4D"
                />
                <path
                    d="M1 10.25C0.585786 10.25 0.25 10.5858 0.25 11C0.25 11.4142 0.585786 11.75 1 11.75H21C21.4142 11.75 21.75 11.4142 21.75 11C21.75 10.5858 21.4142 10.25 21 10.25H1Z"
                    fill="#4D4D4D"
                />
                <path
                    d="M4.33331 12.75C3.9191 12.75 3.58331 13.0858 3.58331 13.5C3.58331 13.9142 3.9191 14.25 4.33331 14.25H17.6666C18.0809 14.25 18.4166 13.9142 18.4166 13.5C18.4166 13.0858 18.0809 12.75 17.6666 12.75H4.33331Z"
                    fill="#4D4D4D"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 17C7 16.4477 7.44772 16 8 16H14C14.5523 16 15 16.4477 15 17V19C15 19.5523 14.5523 20 14 20H8C7.44772 20 7 19.5523 7 19V17ZM8.5 18.5V17.5H13.5V18.5H8.5Z"
                    fill="#4D4D4D"
                />
            </svg>
        ),
    },
    attributes,
    edit: Edit,
    save: Save,
});
