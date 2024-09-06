import { Popover } from '@wordpress/components';
import { __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { getSuggestionsQuery } from './get-suggestion-query';
import { decodeEntities } from '@wordpress/html-entities';
import { useDispatch } from '@wordpress/data';
import {
    store as coreStore,
    useResourcePermissions,
} from '@wordpress/core-data';

import {
    createInterpolateElement,
    useMemo,
    forwardRef
} from '@wordpress/element';
import { __unstableStripHTML as stripHTML } from '@wordpress/dom';

const LinkPopover = (props, ref) => {
    const { label, url, opensInNewTab, type, kind } = props?.link;
    const postType = type || 'page';
    const permissions = useResourcePermissions({
        kind: 'postType',
        name: postType,
    });

    const { saveEntityRecord } = useDispatch(coreStore);

    async function handleCreate(pageTitle) {
        const page = await saveEntityRecord('postType', postType, {
            title: pageTitle,
            status: 'draft',
        });

        return {
            id: page.id,
            type: postType,
            title: decodeEntities(page.title.rendered),
            url: page.link,
            kind: 'post-type',
        };
    }

    const link = useMemo(
        () => ({
            url,
            opensInNewTab,
            title: label && stripHTML(label),
        }),
        [label, opensInNewTab, url]
    );
    

    return (
        <Popover
            ref={ref}
            placement="bottom"
            onClose={props?.onClose}
            anchor={props?.anchor}
            shift
        >
            <LinkControl
                hasTextControl
                hasRichPreviews
                value={link}
                key={link?.url}
                showSuggestions
                showInitialSuggestions
                withCreateSuggestion={permissions.canCreate}
                createSuggestion={handleCreate}
                createSuggestionButtonText={(searchTerm) => {
                    let format;
                    if (type === 'post') {
                        /* translators: %s: search term. */
                        format = __(
                            'Create draft post: <mark>%s</mark>'
                        );
                    } else {
                        /* translators: %s: search term. */
                        format = __(
                            'Create draft page: <mark>%s</mark>'
                        );
                    }

                    return createInterpolateElement(
                        sprintf(format, searchTerm),
                        {
                            mark: <mark />,
                        }
                    );
                }}
                noDirectEntry={!!type}
                noURLSuggestion={!!type}
                suggestionsQuery={getSuggestionsQuery(type, kind)}
                onChange={props.onChange}
            />
        </Popover>
    );
}

export default forwardRef(LinkPopover);