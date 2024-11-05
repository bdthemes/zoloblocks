import { Modal, SearchControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
const PatternPicker = ({ templateType, setTemplateType }) => {
    const [searchInput, setSearchInput] = useState('');
    return (
        <Modal title={__('Choose a pattern', 'zoloblocks')} onRequestClose={() => { setTemplateType('') }} isFullScreen>
            <div className="pattern-picker-content">
                <SearchControl
                    __nextHasNoMarginBottom
                    label={__('Search', 'zoloblocks')}
                    value={searchInput}
                    onChange={setSearchInput}
                />
            </div>
        </Modal>
    )
}

export default PatternPicker;