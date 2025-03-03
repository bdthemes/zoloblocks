import { desktop, mobile, tablet } from "../controls/controls-icon";
import { __ } from '@wordpress/i18n';

export const defaultDeviceList = [
    {
        label: __('Desktop', 'zoloblocks'),
        value: 'base',
        slug: 'Desktop',
        identifier: 'desktop',
        icon: desktop,
        direction: 'max'
    },
    {
        label: __('Tablet', 'zoloblocks'),
        value: '1024px',
        slug: 'Tablet',
        identifier: 'tablet',
        icon: tablet,
        direction: 'max'
    },
    {
        label: __('Mobile', 'zoloblocks'),
        value: '768px',
        slug: 'Mobile',
        identifier: 'mobile',
        icon: mobile,
        direction: 'max'
    },
];
