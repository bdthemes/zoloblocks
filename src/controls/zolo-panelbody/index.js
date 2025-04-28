import { ZoloCorePanelBody } from '../core-controls';
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

    const handleToggle = (value) => {
        if (value === true) {
            setAttributes({
                [panelAttribute]: title.replace(' ', '_').toLowerCase(),
            });
        } else {
            setAttributes({
                [panelAttribute]: '',
            });
        }
    };

    const isOpened = panelName === title.replace(' ', '_').toLowerCase() || (firstOpen && panelName === 'first');

    return (
        <ZoloCorePanelBody
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
        </ZoloCorePanelBody>
    );
};

export default ZoloPanelBody;
