const { ZoloButton } = window.zoloModule;
import { plusCircleFilled } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { dispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';

const MegamenuAppenderButton = ({ rootClientId }) => {
    const { insertBlock } = dispatch('core/block-editor');
    const container = createBlock('zolo/container', { variationStatus: true });
    return (
        <ZoloButton
            className="zolo-navigation-item-appender-button"
            onClick={() => {
                insertBlock(container, 0, rootClientId);
            }}
            icon={plusCircleFilled}
            iconPosition="right"
            showTooltip
            aria-label={__('Add Container', 'zoloblocks')}
            label={__('Add Container', 'zoloblocks')}
            variant="secondary"
        ></ZoloButton>
    );
};

export default MegamenuAppenderButton;
