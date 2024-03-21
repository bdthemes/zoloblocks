/**
 * WordPress dependencies
 */
import { useBlockProps, BlockControls, InnerBlocks } from '@wordpress/block-editor';

import { ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import classnames from 'classnames';

/**
 * Internal depencencies
 */
const { classArrayToStr, generateGapStyle, generateResCounterStyle } = window.zoloModule;

import { GRID_COLUMNS, GRID_GAP } from './constants';

import Inspector from './inspector';

// import style
import Style from './style';

export default function Edit(props) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const { preview, uniqueId, parentClasses, preset } = attributes;

    // this useEffect is for creating a unique id for each block's unique className by a random unique number
    const blockProps = useBlockProps({
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses), preset),
    });

    // column count
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
        const newBlock = wp.blocks.createBlock('zolo/review-child', {});
        wp.data.dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
    };

    // preview image
    if (preview) {
        return <img src={zoloParams.blocksPreview.reviewGrid} alt={__('Review Grid Preview', 'zolo-blocks')} />;
    }

    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <style>{`
					.${uniqueId}.wp-block-zolo-review-grid {
						display: block;
					}
					.${uniqueId}.wp-block-zolo-review-grid .block-editor-block-list__layout {
						display: grid;
						grid-template-columns: repeat(${deskColumns}, 1fr);
						${deskGridGap}
					}
                    @media only screen and (max-width: 1024px) {
                        .${uniqueId}.wp-block-zolo-review-grid .block-editor-block-list__layout {
                            grid-template-columns: repeat(${tabColumns}, 1fr);
                            ${tabGridGap}
                        }
                    }

                    @media only screen and (max-width: 767px) {
                        .${uniqueId}.wp-block-zolo-review-grid .block-editor-block-list__layout {
                            grid-template-columns: repeat(${mobColumns}, 1fr);
                            ${mobGridGap}
                        }
                    }
				`}</style>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton
                        className="components-toolbar__control"
                        label={__('Add Review', 'zolo-blocks')}
                        icon="insert"
                        onClick={() => appendBlock()}
                    />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <InnerBlocks
                    allowedBlocks={['zolo/review-child']}
                    template={[
                        [
                            'zolo/review-child',
                            {
                                memberName: 'John Doe',
                                memberDesignation: 'Web Designer',
                                testimonialMessage: '"Simple Yet Powerful": Zolo Blocks is a game-changer for WordPress users. With its intuitive interface and comprehensive block library, creating stunning layouts has never been easier.',
                                memberPhoto: {
                                    url: zoloPlaceholders.avatarSquare,
                                },
                            },
                        ],
                        [
                            'zolo/review-child',
                            {
                                memberName: 'Joanna T. Logan',
                                memberDesignation: 'Frontend Developer',
                                testimonialMessage: '"Efficiency Redefined": Zolo Blocks streamlines the website building process with its vast collection of blocks. From headers to footers, each block is meticulously crafted flexibility.',
                                memberPhoto: {
                                    url: zoloPlaceholders.avatarSquare,
                                },
                            },
                        ],
                        [
                            'zolo/review-child',
                            {
                                memberName: 'Ruben S. McLain',
                                memberDesignation: 'UX Designer',
                                testimonialMessage: '"Versatile and Responsive": Zolo Blocks offers a wide range of blocks that adapt seamlessly to any screen size. Whether you are designing for desktop or mobile, this plugin ensures',
                                memberPhoto: {
                                    url: zoloPlaceholders.avatarSquare,
                                },
                            },
                        ],
                    ]}
                    renderAppender={false}
                />
                <div
                    className="appender-btn"
                    style={{
                        marginTop: '30px',
                    }}
                >
                    <button className="zolo-appender-btn" label={__('Add Review', 'zolo-blocks')} onClick={() => appendBlock()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                        {__('Add Review', 'zolo-blocks')}
                    </button>
                </div>
            </div>
        </>
    );
}
