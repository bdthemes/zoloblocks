import { BaseControl, TabPanel } from '@wordpress/components';
import { NORMAL_HOVER } from '../../global/constants';
import { __ } from '@wordpress/i18n';

const TabPanelControl = ({ normalComponents, hoverComponents, options = [] }) => {
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
                        }
                    }}
                </TabPanel>
            </BaseControl>
        </>
    );
};

export default TabPanelControl;
