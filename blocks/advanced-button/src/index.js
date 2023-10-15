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
                    d="M1.25 10C1.25 8.48122 2.48122 7.25 4 7.25H20C21.5188 7.25 22.75 8.48122 22.75 10V14C22.75 15.5188 21.5188 16.75 20 16.75H4C2.48122 16.75 1.25 15.5188 1.25 14V10ZM4 8.75C3.30964 8.75 2.75 9.30964 2.75 10V14C2.75 14.6904 3.30964 15.25 4 15.25H20C20.6904 15.25 21.25 14.6904 21.25 14V10C21.25 9.30964 20.6904 8.75 20 8.75H4ZM5 12C5 11.4477 5.44772 11 6 11H7C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13H6C5.44772 13 5 12.5523 5 12ZM11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13L18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11L11 11Z"
                    fill="url(#paint0_linear_122_158)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_122_158"
                        x1="21.675"
                        y1="15.8"
                        x2="13.8848"
                        y2="2.5771"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0.239583" stopColor="#2A2C64" />
                        <stop offset={1} stopColor="#0BB1D3" />
                    </linearGradient>
                </defs>
            </svg>
        ),
    },
    example: Example,
    attributes,
    edit: Edit,
    save: Save,
});
