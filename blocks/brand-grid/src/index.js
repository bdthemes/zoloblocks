import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import Context from './context';

import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.422 2.25a3.15 3.15 0 0 0-3.15 3.15v8.387a.75.75 0 0 0 1.5 0V5.4c0-.911.74-1.65 1.65-1.65H19.6c.911 0 1.65.739 1.65 1.65v13.178a1.65 1.65 0 0 1-1.65 1.65H7.702a.75.75 0 0 0 0 1.5H19.6a3.15 3.15 0 0 0 3.15-3.15V5.4a3.15 3.15 0 0 0-3.15-3.15H6.422zm-1.65 14.233a.75.75 0 1 0-1.5 0v1.273H2a.75.75 0 0 0 0 1.5h1.272v1.272a.75.75 0 0 0 1.5 0v-1.272h1.273a.75.75 0 1 0 0-1.5H4.772v-1.273zm9.107-7.938a.75.75 0 0 0-1.212.025l-1.358 1.945L9.498 8.91a.75.75 0 0 0-1.243.65l.6 5.029a.75.75 0 0 0 .745.661h7.238a.75.75 0 0 0 .744-.653l.662-5.054a.75.75 0 0 0-1.28-.622l-1.574 1.608-1.511-1.984zm-1.823 3.52 1.252-1.793 1.415 1.856a.75.75 0 0 0 1.133.07l.609-.622-.285 2.174h-5.914l-.288-2.41.965.857a.75.75 0 0 0 1.113-.132z"
                    fill="#2667FF"
                />
            </svg>
        ),
    },
    providesContext: Context,
    attributes,
    edit: Edit,
    save: Save,
});
