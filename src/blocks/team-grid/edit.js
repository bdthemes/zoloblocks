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
const { classArrayToStr, generateGapStyle, generateResCounterStyle, SidebarOpener } = window.zoloModule;

import { GRID_COLUMNS, GRID_GAP } from './constants';

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, preset, parentClasses } = attributes;

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
        gapStylesDesktop: deskGridGap,
        gapStylesTab: tabGridGap,
        gapStylesMobile: mobGridGap,
    } = generateGapStyle({
        controlName: GRID_GAP,
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

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.teamGrid} alt={__('Team Grid Preview', 'zoloblocks')} />;
    }

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
					${deskGridGap};
				}
				@media all and (max-width: 1024px) {
					.${uniqueId}.wp-block-zolo-team-grid .block-editor-block-list__layout {
						grid-template-columns: repeat(${tabColumns}, 1fr);
						${tabGridGap};
					}
				}
				@media all and (max-width: 767px) {
					.${uniqueId}.wp-block-zolo-team-grid .block-editor-block-list__layout {
						grid-template-columns: repeat(${mobColumns}, 1fr);
						${mobGridGap};
					}
				}
			`}</style>
            <Style props={props} />
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        className="components-toolbar__control"
                        label={__('Add Team Member', 'zoloblocks')}
                        icon="insert"
                        onClick={() => appendBlock()}
                    />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <SidebarOpener clientId={clientId} />
                <InnerBlocks
                    allowedBlocks={['zolo/team-child']}
                    template={[
                        ['zolo/team-child', {}],
                        ['zolo/team-child', {}],
                        ['zolo/team-child', {}],
                    ]}
                    renderAppender={false}
                />

                <button className="zolo-appender-btn" label={__('Add Team Member', 'zoloblocks')} onClick={() => appendBlock()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                    {__('Add Team Member', 'zoloblocks')}
                </button>
            </div>
        </>
    );
}
