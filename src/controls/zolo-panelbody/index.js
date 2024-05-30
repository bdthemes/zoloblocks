import { PanelBody } from '@wordpress/components';
import classNames from 'classnames';

const ZoloPanelBody = ({
    children,
    panelProps,
    title,
    stylePanel = false,
    extraPanel = false,
    firstOpen = false,
    isPro = false,
    isNew = false,
    isDisabled = false,
}) => {
    const { attributes, setAttributes } = panelProps;
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
