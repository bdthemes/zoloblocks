import { Button } from '@wordpress/components';
import { plusCircleFilled } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { dispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
const NavigationAppenderButton = ({ rootClientId, isMegaMenu = false, onClick }) => {
    const buttonLabel = isMegaMenu ? __('Add Mega Menu', 'zoloblocks') : __('Add Submenu', 'zoloblocks');
    const { insertBlock } = dispatch('core/block-editor');
    const submenu = createBlock('zolo/navigation-submenu', {});
    const megamenu = isMegaMenu ? createBlock('zolo/megamenu', {}) : null;
    return (
        <Button
            className="zolo-navigation-item-appender-button"
            onClick={() => {
                onClick();
                isMegaMenu ? insertBlock(megamenu, 0, rootClientId) : insertBlock(submenu, 0, rootClientId);
            }}
            icon={plusCircleFilled}
            iconPosition='right'
            showTooltip
            aria-label={buttonLabel}
            label={buttonLabel}
            variant='secondary'
        >
        </Button>
    );
}

export default NavigationAppenderButton;