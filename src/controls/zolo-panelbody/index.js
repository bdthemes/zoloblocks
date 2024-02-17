import { PanelBody } from '@wordpress/components';

const ZoloPanelBody = ({
    children,
    panelProps,
    title,
    stylePanel = false,
    extraPanel = false,
    firstOpen = false,
    isPro = false,
    isNew = false,
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
            className={isPro ? 'zolo-pro-panel' : isNew ? 'zolo-new-panel' : ''}
            // {...(isPro && {
            //     className: 'zolo-pro-panel',
            // })}
            // {...(isNew && {
            //     className: 'zolo-new-panel',
            // })}
        >
            {children}
        </PanelBody>
    );
};

export default ZoloPanelBody;
