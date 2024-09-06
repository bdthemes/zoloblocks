import { Inserter } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { plusCircleFilled } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
const NavMenuAppenderButton = ({ rootClientId }) => {
    const { getBlockNamesByClientId, getBlockRootClientId } = select('core/block-editor');
    const blockRootClientId = getBlockRootClientId(rootClientId);
    const blockRootName = getBlockNamesByClientId(blockRootClientId);
    const isNested = blockRootName && blockRootName[0] === 'zolo/navmenu-item';

    const buttonLabel = isNested ? __('Add Submenu Item', 'zoloblocks') : __('Add Menu Item', 'zoloblocks');
    return (
        <Inserter
            rootClientId={rootClientId}
            renderToggle={({ onToggle }) => (
                <Button
                    className="zolo-nav-menu-item-appender-button"
                    onClick={() => {
                        onToggle();
                    }}
                    icon={plusCircleFilled}
                    iconPosition='right'
                    showTooltip
                    aria-label={buttonLabel}
                    label={buttonLabel}
                    variant='secondary'
                >
                </Button>
            )}
            isAppender
        />
    );
}

export default NavMenuAppenderButton;