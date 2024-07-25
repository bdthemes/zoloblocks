import { registerBlockType } from '@wordpress/blocks';
import metadata from '../block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import Context from './context';
import deprecated from './deprecated';
import './style.scss';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.75 6.127A3.375 3.375 0 0 1 6.127 2.75h11.746a3.378 3.378 0 0 1 0 6.754H6.127A3.375 3.375 0 0 1 2.75 6.127zM6.127 1.25A4.875 4.875 0 0 0 1.25 6.127a4.875 4.875 0 0 0 4.877 4.877h11.746a4.878 4.878 0 0 0 0-9.754H6.127zm12.118 3.7a.75.75 0 0 0-1.5 0v.431h-.444a.75.75 0 0 0 0 1.5h.444v.432a.75.75 0 1 0 1.5 0V6.88h.45a.75.75 0 0 0 0-1.5h-.45V4.95zm-12.492.449a.75.75 0 1 0 0 1.5h6.16a.75.75 0 0 0 0-1.5h-6.16zm11.742 10.543a.75.75 0 0 1 .75.75v.427h.45a.75.75 0 0 1 0 1.5h-.45v.431a.75.75 0 0 1-1.5 0v-.431h-.444a.75.75 0 0 1 0-1.5h.444v-.427a.75.75 0 0 1 .75-.75zM5.003 17.886a.75.75 0 0 1 .75-.75h6.16a.75.75 0 1 1 0 1.5h-6.16a.75.75 0 0 1-.75-.75zm-2.253-.022a3.378 3.378 0 0 1 3.377-3.377h11.746a3.378 3.378 0 0 1 0 6.754H6.127a3.375 3.375 0 0 1-3.377-3.377zm3.377-4.877a4.878 4.878 0 0 0 0 9.754h11.746a4.878 4.878 0 0 0 4.877-4.877 4.88 4.88 0 0 0-4.877-4.877H6.127z"
                    fill="#2667FF"
                />
            </svg>
        ),
    },
    providesContext: Context,
    attributes,
    edit: Edit,
    save: Save,
    deprecated: [deprecated],
});
