import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 1.25C2.92893 1.25 1.25 2.92893 1.25 5V19C1.25 21.0711 2.92893 22.75 5 22.75H19C21.0711 22.75 22.75 21.0711 22.75 19V5C22.75 2.92893 21.0711 1.25 19 1.25H5ZM2.75 5C2.75 3.75736 3.75736 2.75 5 2.75H19C20.2426 2.75 21.25 3.75736 21.25 5V19C21.25 20.2426 20.2426 21.25 19 21.25H5C3.75736 21.25 2.75 20.2426 2.75 19V5ZM9.75 9C9.75 7.75736 10.7574 6.75 12 6.75C13.2426 6.75 14.25 7.75736 14.25 9C14.25 10.2426 13.2426 11.25 12 11.25C10.7574 11.25 9.75 10.2426 9.75 9ZM12 5.25C9.92893 5.25 8.25 6.92893 8.25 9C8.25 11.0711 9.92893 12.75 12 12.75C14.0711 12.75 15.75 11.0711 15.75 9C15.75 6.92893 14.0711 5.25 12 5.25ZM4.25 15C4.25 14.5858 4.58579 14.25 5 14.25H19C19.4142 14.25 19.75 14.5858 19.75 15C19.75 15.4142 19.4142 15.75 19 15.75H5C4.58579 15.75 4.25 15.4142 4.25 15ZM7 17.25C6.58579 17.25 6.25 17.5858 6.25 18C6.25 18.4142 6.58579 18.75 7 18.75H17C17.4142 18.75 17.75 18.4142 17.75 18C17.75 17.5858 17.4142 17.25 17 17.25H7Z"
                    fill="url(#paint0_linear_122_162)"
                />
                <defs>
                    <linearGradient id="paint0_linear_122_162" x1="21.675" y1="20.6" x2="2.325" y2="6.0875" gradientUnits="userSpaceOnUse">
                        <stop offset="0.239583" stopColor="#2A2C64" />
                        <stop offset={1} stopColor="#68D68B" />
                    </linearGradient>
                </defs>
            </svg>
        ),
    },
    attributes,
    edit: Edit,
    save: Save,
});
