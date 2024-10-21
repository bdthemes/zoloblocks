import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import variations from '../utils/variations';
import { closeSmall } from '@wordpress/icons';
const VariationPicker = ({ setSelectedVariation, setTemplateType }) => {
    return (
        <div className="zolo-navmenu-variation-picker">
            <BlockVariationPicker
                label={__('Select a variation', 'zoloblocks')}
                variations={variations}
                onSelect={(variation) => setSelectedVariation(variation)}
            />
            <Button icon={closeSmall} className="zolo-navmenu-variation-picker-back" onClick={() => setTemplateType('')} />
        </div>
    );
};

export default VariationPicker;
