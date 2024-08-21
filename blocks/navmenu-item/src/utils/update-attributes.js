import { escapeHTML } from '@wordpress/escape-html';
import { safeDecodeURI } from '@wordpress/url';

export const updateAttributes = (
    updatedValue = {},
    setAttributes,
    blockAttributes = {}
) => {
    const {
        label: originalLabel = '',
        kind: originalKind = '',
        type: originalType = '',
    } = blockAttributes;

    const {
        title: newLabel = '', // the title of any provided Post.
        url: newUrl = '',
        opensInNewTab,
        id,
        kind: newKind = originalKind,
        type: newType = originalType,
    } = updatedValue;

    const newLabelWithoutHttp = newLabel.replace(/http(s?):\/\//gi, '');
    const newUrlWithoutHttp = newUrl.replace(/http(s?):\/\//gi, '');

    const useNewLabel =
        newLabel &&
        newLabel !== originalLabel &&
        newLabelWithoutHttp !== newUrlWithoutHttp;
    const label = useNewLabel
        ? escapeHTML(newLabel)
        : originalLabel || escapeHTML(newUrlWithoutHttp);

    const type = newType === 'post_tag' ? 'tag' : newType.replace('-', '_');

    const isBuiltInType =
        ['post', 'page', 'tag', 'category'].indexOf(type) > -1;

    const isCustomLink =
        (!newKind && !isBuiltInType) || newKind === 'custom';
    const kind = isCustomLink ? 'custom' : newKind;

    setAttributes({
        ...(newUrl && { url: encodeURI(safeDecodeURI(newUrl)) }),
        ...(label && { label }),
        ...(undefined !== opensInNewTab && { opensInNewTab }),
        ...(id && Number.isInteger(id) && { id }),
        ...(kind && { kind }),
        ...(type && type !== 'URL' && { type }),
    });
};
