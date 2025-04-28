import { Inserter } from '@wordpress/block-editor';
import { plusCircleFilled } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
const { ZoloButton } = window.zoloModule;

const NavigationAppenderButton = ({ rootClientId }) => {
    const { getBlockNamesByClientId, getBlockRootClientId } = select('core/block-editor');
    const blockRootClientId = getBlockRootClientId(rootClientId);
    const blockRootName = getBlockNamesByClientId(blockRootClientId);
    const isNested = blockRootName && blockRootName[0] === 'zolo/navigation-item';

    const buttonLabel = isNested ? __('Add Submenu Item', 'zoloblocks') : __('Add Menu Item', 'zoloblocks');
    return (
        <Inserter
            rootClientId={rootClientId}
            renderToggle={({ onToggle }) => (
                <ZoloButton
                    className="zolo-navigation-item-appender-button"
                    onClick={() => {
                        onToggle();
                    }}
                    icon={plusCircleFilled}
                    iconPosition="right"
                    showTooltip
                    aria-label={buttonLabel}
                    label={buttonLabel}
                    variant="secondary"
                ></ZoloButton>
            )}
            isAppender
        />
    );
};

export default NavigationAppenderButton;
