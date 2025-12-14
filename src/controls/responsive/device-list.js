import { __ } from '@wordpress/i18n';
import { desktop, tablet, mobile } from '@wordpress/icons';

const deviceList = [
    {
        slug: 'Desktop',
        name: __('Desktop', 'zoloblocks'),
        icon: desktop,
    },
    {
        slug: 'Tablet',
        name: __('Tablet', 'zoloblocks'),
        icon: tablet,
    },
    {
        slug: 'Mobile',
        name: __('Mobile', 'zoloblocks'),
        icon: mobile,
    },
];

export default deviceList;
