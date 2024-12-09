import React from 'react';
import { __ } from '@wordpress/i18n';

const Header = () => {
    return (
        <div className="zolo-popup-header">
            <h2>{__('ZoloAi AI', 'zoloblocks-pro')}</h2>
        </div>
    );
};
export default Header;


