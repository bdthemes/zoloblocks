/**
 * External Dependencies
 */
import classNames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useState, Fragment, useRef } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { select, useSelect, withSelect } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';

/**
 * Internal Dependencies
 */

/**
 * Add custom attribute for Essential Block
 *
 * @param {Object} settings Settings for the block.
 *
 * @return {Object} settings Modified settings.
 */
function addAttributes(settings) {
	if (typeof settings.attributes === 'undefined') {
		return settings;
	}
	if (settings.category && settings.category == 'zolo-blocks') {
		settings.attributes = {
			...settings.attributes,
			blockId: {
				type: 'string',
			},
			resMode: {
				type: 'string',
				default: 'Desktop',
			},
			globalClass: {
				type: 'string',
				default: '',
			},
			zoloStyles: {
				type: 'object',
			},
			hideOnDesktop: {
				type: 'boolean',
				default: false,
			},
			hideOnTab: {
				type: 'boolean',
				default: false,
			},
			hideOnMobile: {
				type: 'boolean',
				default: false,
			},
			customCss: {
				type: 'string',
			},
		};
	}
	return settings;
}

/**
 * Add controls and generate styles on Advanced Block Panel.
 *
 * @param {function} BlockEdit Block edit component.
 *
 * @return {function} BlockEdit Modified block edit component.
 */
const withAdvancedControls = createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { attributes, setAttributes, isSelected, name, clientId } = props;
		const blockType = select('core/blocks').getBlockType(name);

		if (blockType.category != 'zolo-blocks') {
			return <BlockEdit {...props} />;
		}

		const {
			blockId,
			resMode,
			globalClass,
			zoloStyles,
			hideOnDesktop,
			hideOnTab,
			hideOnMobile,
			customCss,
		} = attributes;

		const isBlockJustInserted =
			select('core/block-editor').wasBlockJustInserted(clientId);
		const [editorStoreForGettingPreivew, setEditorStoreForGettingPreview] =
			useState();
		//
		useEffect(() => {
			if (!window?.eb_conditional_localize) {
				setEditorStoreForGettingPreview(false);
				return;
			}

			if (eb_conditional_localize.editor_type === 'edit-site') {
				setEditorStoreForGettingPreview('core/edit-site');
			} else if (eb_conditional_localize.editor_type === 'edit-post') {
				setEditorStoreForGettingPreview('core/edit-post');
			} else {
				setEditorStoreForGettingPreview(false);
			}
		}, []);

		//Get Device type from "__experimentalGetPreviewDeviceType" Function
		const deviceType = useSelect((select) => {
			if (
				editorStoreForGettingPreivew &&
				editorStoreForGettingPreivew !== false
			) {
				return select(
					editorStoreForGettingPreivew
				).__experimentalGetPreviewDeviceType();
			}
			return 'Desktop';
		});

		// this useEffect is for setting the resMode attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
		useEffect(() => {
			setAttributes({
				resMode: deviceType,
			});
		}, [deviceType]);

		return (
			<Fragment>
				<BlockEdit {...props} />
			</Fragment>
		);
	};
}, 'withAdvancedControls');

/**
 * Add Attributes Filter
 */
addFilter('blocks.registerBlockType', 'zolo-blocks/hoc-global', addAttributes);

/**
 * Filter for modification of Edit Function
 */
addFilter('editor.BlockEdit', 'zolo-blocks/hoc-global', withAdvancedControls);
