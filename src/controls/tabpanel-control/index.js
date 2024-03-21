import { BaseControl, TabPanel } from '@wordpress/components';
import { NORMAL_HOVER } from '../../global/constants';
import { __ } from '@wordpress/i18n';

const TabPanelControl = ({ normalComponents, hoverComponents, activeComponents='', options = [] }) => {
    const availableOptions = options.length > 0 ? options : NORMAL_HOVER;
    return (
        <>
            <BaseControl>
                <TabPanel
                    className="zolo-tab-panel"
                    activeClass="active-tab"
                    tabs={availableOptions.map((tab, index) => ({
                        name: tab?.value,
                        title: tab?.label,
                        className: `zolo-tab zolo-tab-${index + 1} ${tab?.value}`,
                    }))}
                >
                    {(tab) => {
                        if ('normal' === tab.name) {
                            return normalComponents;
                        } else if ('hover' === tab.name) {
                            return hoverComponents;
                        }else if ('active' === tab.name) {
                            return activeComponents;
                        }
                    }}
                </TabPanel>
            </BaseControl>
        </>
    );
};

export default TabPanelControl;
