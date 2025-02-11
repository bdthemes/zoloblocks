import { PanelBody } from '@wordpress/components';
import classNames from 'classnames';

const ZoloPanelBody = ({
    children,
    title,
    stylePanel = false,
    extraPanel = false,
    firstOpen = false,
    isPro = false,
    isNew = false,
    isDisabled = false,
}) => {
    const { usePanelProps } = window.zoloModule;
    const { attributes, setAttributes } = usePanelProps();
    const { selectedPanel, selectedStylePanel, selectedExtraPanel } = attributes;
    const panelAttribute = stylePanel ? 'selectedStylePanel' : extraPanel ? 'selectedExtraPanel' : 'selectedPanel';
    const panelName =
        panelAttribute === 'selectedPanel'
            ? selectedPanel
            : panelAttribute === 'selectedStylePanel'
              ? selectedStylePanel
              : selectedExtraPanel;

    // Handle toggle panel
    const handleToggle = () => {
        const panelKey = title.replace(' ', '_').toLowerCase();
        if (firstOpen && panelName === 'first') {
            setAttributes({
                [panelAttribute]: '',
            });
        } else {
            setAttributes({
                [panelAttribute]: panelName === panelKey ? '' : panelKey,
            });
        }
    };

    const isOpened = panelName === title.replace(' ', '_').toLowerCase() || (firstOpen && panelName === 'first');

    return (
        <PanelBody
            title={title}
            onToggle={handleToggle}
            opened={isOpened}
            className={classNames(
                `${isPro ? 'zolo-pro-panel' : ''}`,
                `${isNew ? 'zolo-new-panel' : ''}`,
                `${isNew && isPro ? 'zolo-new-pro-panel' : ''}`,
                `${isDisabled ? 'zolo-disabled-panel' : ''}`
            )}
            buttonProps={isDisabled ? { disabled: true } : {}}
        >
            {children}
        </PanelBody>
    );
};

export default ZoloPanelBody;
