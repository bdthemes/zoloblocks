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
                    d="M18.5 7.5C19.6046 7.5 20.5 6.60457 20.5 5.5C20.5 4.39543 19.6046 3.5 18.5 3.5C17.3954 3.5 16.5 4.39543 16.5 5.5C16.5 6.60457 17.3954 7.5 18.5 7.5ZM18.5 9C20.433 9 22 7.433 22 5.5C22 3.567 20.433 2 18.5 2C16.567 2 15 3.567 15 5.5C15 5.89031 15.0639 6.2657 15.1818 6.61628L11.0642 9.08686C10.1567 7.82314 8.6745 7 7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17C8.6745 17 10.1567 16.1769 11.0642 14.9131L15.1818 17.3837C15.0639 17.7343 15 18.1097 15 18.5C15 20.433 16.567 22 18.5 22C20.433 22 22 20.433 22 18.5C22 16.567 20.433 15 18.5 15C17.497 15 16.5925 15.4219 15.9544 16.098L11.7473 13.5737C11.9113 13.0789 12 12.5498 12 12C12 11.4502 11.9113 10.9211 11.7473 10.4263L15.9544 7.90203C16.5925 8.57808 17.497 9 18.5 9ZM7 15.5C8.933 15.5 10.5 13.933 10.5 12C10.5 10.067 8.933 8.5 7 8.5C5.067 8.5 3.5 10.067 3.5 12C3.5 13.933 5.067 15.5 7 15.5ZM20.5 18.5C20.5 19.6046 19.6046 20.5 18.5 20.5C17.3954 20.5 16.5 19.6046 16.5 18.5C16.5 17.3954 17.3954 16.5 18.5 16.5C19.6046 16.5 20.5 17.3954 20.5 18.5Z"
                    fill="url(#paint0_linear_104_30)"
                />
                <defs>
                    <linearGradient id="paint0_linear_104_30" x1={21} y1={20} x2={3} y2="6.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#2A2C64" />
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
