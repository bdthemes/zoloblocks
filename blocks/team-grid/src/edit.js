/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, InnerBlocks } from '@wordpress/block-editor';
import { ToolbarButton, ToolbarGroup, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, generateResRangeStyle, generateResCounterStyle } = window.zoloModule;

import { COLUMNS_GAP, GRID_COLUMNS, ROWS_GAP } from './constants';

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { uniqueId, preset, parentClasses } = attributes;

    const blockProps = useBlockProps({
        className: classnames(className, uniqueId, classArrayToStr(parentClasses), preset),
    });

    // Grid Style
    const {
        desktopRangeStyle: deskColumns,
        tabRangeStyle: tabColumns,
        mobRangeStyle: mobColumns,
    } = generateResCounterStyle({
        controlName: GRID_COLUMNS,
        attributes,
        noProperty: true,
    });

    const {
        desktopRangeStyle: deskColumnsGap,
        tabRangeStyle: tabColumnsGap,
        mobRangeStyle: mobColumnsGap,
    } = generateResRangeStyle({
        controlName: COLUMNS_GAP,
        property: 'grid-column-gap',
        attributes,
    });

    const {
        desktopRangeStyle: deskRowsGap,
        tabRangeStyle: tabRowsGap,
        mobRangeStyle: mobRowsGap,
    } = generateResRangeStyle({
        controlName: ROWS_GAP,
        property: 'grid-row-gap',
        attributes,
    });

    /**
     * Custom Append Button for InnerBlocks
     */
    const childBlocks = wp.data.select('core/block-editor').getBlocks(clientId);
    const appendBlock = () => {
        const newBlock = wp.blocks.createBlock('zolo/team-child', {});
        wp.data.dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
    };

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <style>{`
				.${uniqueId}.wp-block-zolo-team-grid {
					display: block;
				}
				.${uniqueId}.wp-block-zolo-team-grid .block-editor-block-list__layout {
					display: grid;
					grid-template-columns: repeat(${deskColumns}, 1fr);
					${deskColumnsGap};
					${deskRowsGap};
				}
				@media all and (max-width: 1024px) {
					.${uniqueId}.wp-block-zolo-team-grid .block-editor-block-list__layout {
						grid-template-columns: repeat(${tabColumns}, 1fr);
						${tabColumnsGap};
						${tabRowsGap};
					}
				}
				@media all and (max-width: 767px) {
					.${uniqueId}.wp-block-zolo-team-grid .block-editor-block-list__layout {
						grid-template-columns: repeat(${mobColumns}, 1fr);
						${mobColumnsGap};
						${mobRowsGap};
					}
				}
			`}</style>
            <Style props={props} />
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        className="components-toolbar__control"
                        label={__('Add Team Member', 'zolo-blocks')}
                        icon="insert"
                        onClick={() => appendBlock()}
                    />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <InnerBlocks
                    allowedBlocks={['zolo/team-child']}
                    template={[
                        ['zolo/team-child', {}],
                        ['zolo/team-child', {}],
                    ]}
                    renderAppender={false}
                />
                <div
                    className="appender-btn"
                    style={{
                        marginTop: '30px',
                    }}
                >
                    <Button
                        className="components-button"
                        label={__('Add Team Member', 'zolo-blocks')}
                        icon="insert"
                        variant="primary"
                        onClick={() => appendBlock()}
                        style={{
                            padding: '6px 12px',
                        }}
                    >
                        {__('Add Team Member', 'zolo-blocks')}
                    </Button>
                </div>
            </div>
        </>
    );
}
