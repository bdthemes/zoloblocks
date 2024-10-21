import { Button } from '@wordpress/components';
import { plusCircleFilled } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { dispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
const MegamenuAppenderButton = ({ rootClientId }) => {
    const { insertBlock } = dispatch('core/block-editor');
    const container = createBlock('zolo/container', { variationStatus: true });
    return (
        <Button
            className="zolo-nav-menu-item-appender-button"
            onClick={() => {
                insertBlock(container, 0, rootClientId)
            }}
            icon={plusCircleFilled}
            iconPosition='right'
            showTooltip
            aria-label={__('Add Container', 'zoloblocks')}
            label={__('Add Container', 'zoloblocks')}
            variant='secondary'
        >
        </Button>
    );
}

export default MegamenuAppenderButton;