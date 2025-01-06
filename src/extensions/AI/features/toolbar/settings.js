import { __ } from '@wordpress/i18n';
import Edit from './edit';
const name = 'zoloblocks/zoloai';
const title = __('Zolo AI', 'zoloblocks');

const settings = {
    name,
    title,
    attributes:{
        content: {
            type: 'string',
            source: 'html',
            selector: 'span',
        },
        zoloai: {
            type: 'string',
            source: 'attribute',
            selector: 'span',
            attribute: 'data-zoloai',
        },
    },
    tagName: 'span',
    className: 'zolo-ai',
    edit: Edit,
};

export default settings;
