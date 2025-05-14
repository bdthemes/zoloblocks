import { __ } from '@wordpress/i18n';
import { __experimentalBlockVariationPicker as BlockVariationPicker } from '@wordpress/block-editor';
import variations from '../utils/variations';
import { closeSmall } from '@wordpress/icons';
const { ZoloButton } = window.zoloModule;

const VariationPicker = ({ setSelectedVariation, setTemplateType }) => {
    return (
        <div className="zolo-navigation-variation-picker">
            <BlockVariationPicker
                label={__('Select a variation', 'zoloblocks')}
                variations={variations}
                onSelect={(variation) => setSelectedVariation(variation)}
            />
            <ZoloButton icon={closeSmall} className="zolo-navigation-variation-picker-back" onClick={() => setTemplateType('')} />
        </div>
    );
};

export default VariationPicker;
