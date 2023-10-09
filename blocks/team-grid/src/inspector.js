/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TabPanel, SelectControl, ToggleControl, Panel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import objAttributes from './attributes';
import { TEAM_GRID_BG, GRID_COLUMNS, COLUMNS_GAP, ROWS_GAP, CONTAINER_MARGIN, CONTAINER_PADDING, PRESETS } from './constants';

const { ResRangeControl, ResDimensionsControl, NormalBGControl, HeaderTabs, ResCounterControl, AdvancedOptions } = window.zoloModule;

function Inspector(props) {
    const { attributes, setAttributes } = props;
    const { resMode, preset, addDetailPageLink, showDetailPageIcon, showDesignation, showShortBio, showSocialProfiles } = attributes;

    const requiredProps = {
        resMode,
        setAttributes,
        attributes,
        objAttributes,
    };

    /**
     * Preset
     */
    const changePremade = (selected) => {
        setAttributes({ preset: selected });
        switch (selected) {
            case 'default':
                setAttributes({
                    showShortBio: false,
                    showSocialProfiles: true,
                    showDetailPageIcon: true,
                    showDesignation: true,
                    addDetailPageLink: true,
                });
                break;
            case 'style-1':
                setAttributes({
                    showShortBio: false,
                    showSocialProfiles: true,
                    showDetailPageIcon: false,
                    showDesignation: false,
                });
                break;
            case 'style-2':
                setAttributes({
                    showShortBio: true,
                    showSocialProfiles: true,
                    showDetailPageIcon: false,
                    showDesignation: true,
                });
                break;
            case 'style-3':
                setAttributes({
                    showShortBio: false,
                    showSocialProfiles: true,
                    showDetailPageIcon: true,
                    showDesignation: true,
                });
                break;
            default:
                return false;
        }
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                generalTab={
                    <>
                        <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={true}>
                            <SelectControl
                                label={__('Preset Designs', 'zolo-blocks')}
                                value={preset}
                                options={PRESETS}
                                onChange={(selected) => changePremade(selected)}
                            />
                            <ToggleControl
                                label={__('Add Detail Page Link', 'zolo-blocks')}
                                checked={addDetailPageLink}
                                onChange={() =>
                                    setAttributes({
                                        addDetailPageLink: !addDetailPageLink,
                                    })
                                }
                            />
                            {addDetailPageLink && (
                                <ToggleControl
                                    label={__('Show Detail Page Link Icon', 'zolo-blocks')}
                                    checked={showDetailPageIcon}
                                    onChange={() =>
                                        setAttributes({
                                            showDetailPageIcon: !showDetailPageIcon,
                                        })
                                    }
                                />
                            )}

                            {preset !== 'style-1' && preset !== 'style-3' && (
                                <ToggleControl
                                    label={__('Show Short Bio', 'zolo-blocks')}
                                    checked={showShortBio}
                                    onChange={() =>
                                        setAttributes({
                                            showShortBio: !showShortBio,
                                        })
                                    }
                                />
                            )}
                            <ToggleControl
                                label={__('Show Designation', 'zolo-blocks')}
                                checked={showDesignation}
                                onChange={() =>
                                    setAttributes({
                                        showDesignation: !showDesignation,
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Show Social Profiles', 'zolo-blocks')}
                                checked={showSocialProfiles}
                                onChange={() =>
                                    setAttributes({
                                        showSocialProfiles: !showSocialProfiles,
                                    })
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Grid Settings', 'zolo-blocks')} initialOpen={false}>
                            <ResCounterControl
                                label={__('Columns', 'zolo-blocks')}
                                controlName={GRID_COLUMNS}
                                requiredProps={requiredProps}
                                min={1}
                                max={5}
                            />
                            <ResRangeControl
                                label={__('Columns Gap', 'zolo-blocks')}
                                controlName={COLUMNS_GAP}
                                requiredProps={requiredProps}
                            />
                            <ResRangeControl label={__('Rows Gap', 'zolo-blocks')} controlName={ROWS_GAP} requiredProps={requiredProps} />
                        </PanelBody>
                    </>
                }
                advancedTab={
                    <>
                        <AdvancedOptions attributes={attributes} setAttributes={setAttributes} requiredProps={requiredProps} />
                    </>
                }
            />
        </InspectorControls>
    );
}

export default Inspector;
