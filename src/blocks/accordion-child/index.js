import { registerBlockType } from '@wordpress/blocks';
import attributes from './attributes';
import metadata from './block.json';
import Context from './context';
import Edit from './edit';
import Example from './example';
import Save from './save';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6.25C2.48122 6.25 1.25 7.48122 1.25 9V15C1.25 16.5188 2.48122 17.75 4 17.75H21C22.5188 17.75 23.75 16.5188 23.75 15V9C23.75 7.48122 22.5188 6.25 21 6.25H4ZM2.75 9C2.75 8.30964 3.30964 7.75 4 7.75H21C21.6904 7.75 22.25 8.30964 22.25 9V15C22.25 15.6904 21.6904 16.25 21 16.25H4C3.30964 16.25 2.75 15.6904 2.75 15V9ZM18.492 11C18.492 10.5858 18.1562 10.25 17.742 10.25C17.3277 10.25 16.992 10.5858 16.992 11V11.4316H16.5473C16.1331 11.4316 15.7973 11.7674 15.7973 12.1816C15.7973 12.5958 16.1331 12.9316 16.5473 12.9316H16.992V13.3632C16.992 13.7774 17.3277 14.1132 17.742 14.1132C18.1562 14.1132 18.492 13.7774 18.492 13.3632V12.9316H18.9409C19.3551 12.9316 19.6909 12.5958 19.6909 12.1816C19.6909 11.7674 19.3551 11.4316 18.9409 11.4316H18.492V11ZM6 11.449C5.58579 11.449 5.25 11.7847 5.25 12.199C5.25 12.6132 5.58579 12.949 6 12.949H12.1599C12.5741 12.949 12.9099 12.6132 12.9099 12.199C12.9099 11.7847 12.5741 11.449 12.1599 11.449H6Z"
                    fill="#2667FF"
                />
            </svg>
        ),
    },
    usesContext: Context,
    example: Example,
    attributes,
    edit: Edit,
    save: Save,
});
