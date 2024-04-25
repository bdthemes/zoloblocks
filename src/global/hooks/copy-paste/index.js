import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
import { select, dispatch, useDispatch } from '@wordpress/data';
import { store as keyboardShortcutsStore, useShortcut } from '@wordpress/keyboard-shortcuts';
import { useEffect } from '@wordpress/element';
import SettingsIcons from './icons.js';
import getZoloEditorLocalStorage from './local-storage.js';

// excludeKeys
import excludeKeys from './excludes.js';

const ZBCopyPasteStyles = () => {
    // Registering the shortcuts
    const { registerShortcut } = useDispatch(keyboardShortcutsStore);
    const zoloCopyPasteStylesSetter = getZoloEditorLocalStorage();

    useEffect(() => {
        const zoloCopyPasteStyles = getZoloEditorLocalStorage('zoloCopyPasteStyles');

        if (!zoloCopyPasteStyles) {
            zoloCopyPasteStylesSetter.setItem('zoloCopyPasteStyles', JSON.stringify({}));
        }

        if (zoloCopyPasteStyles) {
            for (const block in zoloCopyPasteStyles) {
                const hoursSinceStylesSaved = Math.abs(Date.now() - zoloCopyPasteStyles[block].stylesSavedTimeStamp) / 36e5;

                if (hoursSinceStylesSaved >= 8) {
                    delete zoloCopyPasteStyles[block];
                }
            }

            zoloCopyPasteStylesSetter.setItem('zoloCopyPasteStyles', JSON.stringify(zoloCopyPasteStyles));
        }

        registerShortcut({
            name: 'zolo/copy',
            category: 'block',
            description: __('Copy the selected block(s).', 'zolo-blocks'),
            keyCombination: {
                modifier: 'primaryShift',
                character: 'y',
            },
        });

        registerShortcut({
            name: 'zolo/paste',
            category: 'block',
            description: __('Paste the selected block(s).', 'zolo-blocks'),
            keyCombination: {
                modifier: 'primaryShift',
                character: 'u',
            },
        });
    }, []);

    const copyStylesHandler = () => {
        // eslint-disable-next-line no-shadow
        const { getSelectedBlock, hasMultiSelection, getMultiSelectedBlocks } = select('core/block-editor');

        if (hasMultiSelection()) {
            const multiSelectedBlocksData = getMultiSelectedBlocks();
            multiSelectedBlocksData.map((block) => {
                if (block) {
                    storeBlockStyles(block);
                }
                return block;
            });

            return;
        }

        const selectedBlockData = getSelectedBlock();

        if (selectedBlockData) {
            storeBlockStyles(selectedBlockData);
        }
    };

    const pasteStylesHandler = () => {
        // eslint-disable-next-line no-shadow
        const { getSelectedBlock, hasMultiSelection, getMultiSelectedBlocks } = select('core/block-editor');

        if (hasMultiSelection()) {
            const multiSelectedBlocksData = getMultiSelectedBlocks();
            multiSelectedBlocksData.map((block) => {
                if (block) {
                    pasteBlockStyles(block);
                }

                return block;
            });

            return;
        }

        const selectedBlockData = getSelectedBlock();

        if (selectedBlockData) {
            pasteBlockStyles(selectedBlockData);
        }
    };

    const storeBlockStyles = (blockData) => {
        const zoloCopyPasteStyles = getZoloEditorLocalStorage('zoloCopyPasteStyles');
        zoloCopyPasteStylesSetter.setItem('zoloCopyPasteStyles', JSON.stringify({}));

        const { attributes, name, innerBlocks } = blockData;

        if (zoloCopyPasteStyles) {
            zoloCopyPasteStylesSetter.setItem('zoloCopyPasteStyles', JSON.stringify({}));
        }

        let styles = {};
        const parentStyle = {};

        // zoloblocks copy paste styles
        if (name.includes('zolo/')) {
            const blockName = name.replace('zolo/', '');

            let blockAttributes = attributes;
            zoloCopyPasteStyles[`${blockName}-styles`] = {};
            zoloCopyPasteStyles[`global-style`] = {};

            if (blockAttributes && zoloCopyPasteStyles) {
                Object.keys(blockAttributes).map((attribute) => {
                    let key = attribute;

                    if (undefined !== attributes[attribute] && null !== attributes[attribute] && !excludeKeys.includes(attribute)) {
                        styles[key] = attributes[attribute];
                        parentStyle[attribute] = attributes[attribute];
                    }

                    return attribute;
                });
            }
            if (innerBlocks) {
                parentStyle.innerblocks = innerBlocks;
            }

            styles.stylesSavedTimeStamp = Date.now();

            zoloCopyPasteStyles[`${blockName}-styles`] = parentStyle;
            zoloCopyPasteStyles[`global-style`] = styles;

            zoloCopyPasteStylesSetter.setItem('zoloCopyPasteStyles', JSON.stringify(zoloCopyPasteStyles));
        }

        // core copy paste styles
        if (name.includes('core/')) {
            const blockName = name.replace('core/', '');
            styles = attributes;
            styles.stylesSavedTimeStamp = Date.now();
            spectraCopyPasteStyles[`core-${blockName}-styles`] = styles;
            zoloCopyPasteStylesSetter.setItem('zoloCopyPasteStyles', JSON.stringify(zoloCopyPasteStyles));
        }
    };

    const pasteBlockStyles = (blockData) => {
        const { name, clientId, innerBlocks, attributes } = blockData;

        let styles;
        let pasteStyle;
        const parentAttr = {};

        const zoloCopyPasteStyles = getZoloEditorLocalStorage('zoloCopyPasteStyles');

        // zoloblocks copy paste styles
        if (name.includes('zolo/')) {
            styles = zoloCopyPasteStyles[`global-style`];

            const blockName = name.replace('zolo/', '');
            const blockAttributes = attributes;

            pasteStyle = zoloCopyPasteStyles[`${blockName}-styles`];

            if (blockAttributes && pasteStyle) {
                updateBlockStyles(clientId, pasteStyle);

                if (innerBlocks) {
                    const childAttr = {};

                    innerBlocks.map((childBlock, index) => {
                        const childName = childBlock.name.replace('zolo/', '');
                        const blockAttributes = childBlock.attributes;

                        if (pasteStyle.innerblocks[index].name === 'zolo/' + childName) {
                            Object.keys(blockAttributes).map((attribute) => {
                                if (!excludeKeys.includes(attribute)) {
                                    childAttr[attribute] = pasteStyle.innerblocks[index].attributes[attribute];
                                }
                                return childAttr;
                            });
                        }
                        updateBlockStyles(childBlock.clientId, childAttr);

                        return childBlock;
                    });
                }
            } else if (blockAttributes && styles) {
                Object.keys(blockAttributes).map((attribute) => {
                    const key = attribute;

                    Object.keys(styles).map((item) => {
                        if (item === key) {
                            parentAttr[attribute] = styles[key];
                        }

                        return parentAttr;
                    });

                    return parentAttr;
                });

                updateBlockStyles(clientId, parentAttr);
            }
        }

        // core copy paste styles
        if (name.includes('core/')) {
            const selectedBlockName = name.replace('core/', '');

            const unwantedAttributes = ['content', 'values', 'value', 'citation', 'body', 'caption', 'foot', 'head', 'url', 'alt', 'id', 'linkDestination'];

            pasteStyle = zoloCopyPasteStyles[`core-${selectedBlockName}-styles`];

            unwantedAttributes.map((attr) => {
                if (pasteStyle[attr]) {
                    delete pasteStyle[attr];
                }
                return attr;
            });
            updateBlockStyles(clientId, pasteStyle);
        }
    };

    const updateBlockStyles = (clientId, styles) => {
        dispatch('core/block-editor').updateBlockAttributes(clientId, styles);
    };

    useShortcut('zolo/copy', (event) => {
        copyStylesHandler();
        event.preventDefault();
    });

    useShortcut('zolo/paste', (event) => {
        pasteStylesHandler();
        event.preventDefault();
    });
    return (
        <>
            <PluginBlockSettingsMenuItem icon={SettingsIcons.copy} label={__('Copy Styles', 'zolo-blocks')} onClick={copyStylesHandler} />
            <PluginBlockSettingsMenuItem icon={SettingsIcons.paste} label={__('Paste Styles', 'zolo-blocks')} onClick={pasteStylesHandler} />
        </>
    );
};
registerPlugin('zolo-blocks-copy-paste', {
    render: ZBCopyPasteStyles,
});
