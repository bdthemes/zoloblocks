import { PanelBody } from '@wordpress/components';

const ZoloPanelBody = ({ children, panelProps, title, stylePanel = false, firstOpen = false }) => {
    const { attributes, setAttributes } = panelProps;
    const { selectedPanel, selectedStylePanel } = attributes;
    const panelAttribute = stylePanel ? 'selectedStylePanel' : 'selectedPanel';
    const panelName = panelAttribute === 'selectedPanel' ? selectedPanel : selectedStylePanel;

    const handleToggle = (value) => {
        if (value === true) {
            setAttributes({
                [panelAttribute]: title.replace(' ', '_').toLowerCase(),
            });
        }
    };

    const isOpened = panelName === title.replace(' ', '_').toLowerCase() || (firstOpen && panelName === 'first');

    return (
        <PanelBody title={title} onToggle={handleToggle} opened={isOpened}>
            {children}
        </PanelBody>
    );
};

export default ZoloPanelBody;
