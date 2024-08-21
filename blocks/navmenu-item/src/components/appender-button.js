import { Button } from '@wordpress/components';
import { plusCircleFilled } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { dispatch } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';
const NavMenuAppenderButton = ({ rootClientId, isMegaMenu = false, onClick }) => {
    const buttonLabel = isMegaMenu ? __('Add Mega Menu', 'gutenkit-blocks-addon') : __('Add Submenu', 'gutenkit-blocks-addon');
    const { insertBlock } = dispatch('core/block-editor');
    const submenu = createBlock('zolo/navmenu-submenu', {});
    const megamenu = isMegaMenu ? createBlock('zolo/megamenu', {}) : null;
    return (
        <Button
            className="gkit-nav-menu-item-appender-button"
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

export default NavMenuAppenderButton;