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
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75ZM2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12Z"
                    fill="#4D4D4D"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.6897 9.22219C10.4731 9.1022 10.22 9.26266 10.22 9.48998V13.4963L10.23 14.5C10.23 14.7384 10.4743 14.8875 10.6901 14.7676L15.045 12.2705C15.0452 12.2704 15.0447 12.2706 15.045 12.2705C15.2542 12.149 15.2548 11.8509 15.0452 11.7296C15.0451 11.7296 15.0453 11.7297 15.0452 11.7296L10.6897 9.22219ZM8.72001 9.48998C8.72001 8.09807 10.2252 7.23885 11.4281 7.91655L11.4342 7.91997L15.7951 10.4305C17.005 11.1292 17.005 12.8708 15.7951 13.5695L15.7931 13.5706L11.4282 16.0734C10.2256 16.7509 8.733 15.9026 8.73001 14.5042L8.71997 13.5L8.72001 9.48998Z"
                    fill="#4D4D4D"
                />
            </svg>
        ),
    },
    example: Example,
    attributes,
    edit: Edit,
    save: Save,
});
