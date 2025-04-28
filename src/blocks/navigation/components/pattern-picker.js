const { ZoloModal, ZoloSearchControl } = window.zoloModule;
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
const PatternPicker = ({ templateType, setTemplateType }) => {
    const [searchInput, setSearchInput] = useState('');
    return (
        <ZoloModal
            title={__('Choose a pattern', 'zoloblocks')}
            onRequestClose={() => {
                setTemplateType('');
            }}
            isFullScreen
        >
            <div className="pattern-picker-content">
                <ZoloSearchControl
                    label={__('Search', 'zoloblocks')}
                    value={searchInput}
                    onChange={setSearchInput}
                />
            </div>
        </ZoloModal>
    );
};

export default PatternPicker;
