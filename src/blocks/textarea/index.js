import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import attributes from './attributes';
import Edit from './edit';
import Save from './save';
import Context from './context';

registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.59 3.7a.89.89 0 0 0-.89.89v14.82c0 .492.399.89.89.89h14.82a.89.89 0 0 0 .89-.89V4.59a.89.89 0 0 0-.89-.89H4.59zm-2.29.89A2.29 2.29 0 0 1 4.59 2.3h14.82a2.29 2.29 0 0 1 2.29 2.29v14.82a2.29 2.29 0 0 1-2.29 2.29H4.59a2.29 2.29 0 0 1-2.29-2.29V4.59zm3.09 6.67a.73.73 0 0 1 .73-.73h6.13a.73.73 0 0 1 0 1.46H6.12a.73.73 0 0 1-.73-.73zm.73-4.735a.735.735 0 1 0 0 1.47h11.82a.735.735 0 0 0 0-1.47H6.12zm13.47 12.264a.375.375 0 0 1-.01.53l-.32.31a.375.375 0 1 1-.52-.538l.32-.31a.375.375 0 0 1 .53.008zm-.381-1.007a.375.375 0 1 0-.538-.524l-1.49 1.53a.375.375 0 0 0 .538.524l1.49-1.53z"
                    fill="#2667FF"
                />
            </svg>
        ),
    },

    attributes,
    edit: Edit,
    usesContext: Context,
    save: Save,
});
