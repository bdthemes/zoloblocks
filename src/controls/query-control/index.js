import { BaseControl, PanelBody, SelectControl, TextControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Select2 from 'react-select';
import { SORT_ORDER, ORDER_BY, PRINT_TAXONOMY } from '../../global/constants';

const QueryControl = ({ attributes, setAttributes }) => {
    const { postQuery } = attributes;

    const allTermList = zoloParams.all_term_list;
    const allTaxonomyList = zoloParams.get_taxonomies;

    let tpgAllTaxonomies = new Set();
    for (let tax in allTaxonomyList) {
        let value = allTaxonomyList[tax];
        if (postQuery && postQuery.postType && postQuery.postType === value.object_type[0]) {
            tpgAllTaxonomies.add({
                value: value.name,
                name: value.label,
            });
        }
    }
    tpgAllTaxonomies = [...tpgAllTaxonomies];

    const changeTaxonomy = (terms, name) => {
        let postTaxonomies = {
            ...postQuery.postTaxonomies,
            [name]: {
                name: name,
                options: terms,
            },
        };
        setAttributes({ postQuery: { ...postQuery, postTaxonomies } });
    };

    //get post types
    const PostType = [];
    let getPostType = zoloParams.post_types;
    for (let p in getPostType) {
        PostType.push({ value: p, label: __(getPostType[p], 'zolo-blocks') });
    }
    const POSTS_TYPE = PostType;
    //get authors
    const AUTHOR_LISTS = zoloParams.get_users;

    return (
        <>
            <SelectControl
                label={__('Source', 'zolo-blocks')}
                value={postQuery.postType}
                options={POSTS_TYPE}
                onChange={(postType) => setAttributes({ postQuery: { ...postQuery, postType } })}
            />

            <BaseControl label={__('By Author', 'zolo-block')}>
                <Select2
                    options={AUTHOR_LISTS}
                    value={postQuery.postAuthors}
                    onChange={(postAuthors) => setAttributes({ postQuery: { ...postQuery, postAuthors } })}
                    isMulti={true}
                    closeMenuOnSelect={false}
                />
            </BaseControl>

            <TextControl
                label={__('Include Only', 'zolo-blocks')}
                value={postQuery.postInclude}
                onChange={(postInclude) => setAttributes({ postQuery: { ...postQuery, postInclude } })}
                autocomplete="off"
            />

            <TextControl
                label={__('Exclude', 'zolo-blocks')}
                autocomplete="off"
                value={postQuery.postExclude}
                onChange={(postExclude) => {
                    setAttributes({ postQuery: { ...postQuery, postExclude } });
                }}
            />

            {tpgAllTaxonomies.map((tax, index) => (
                <BaseControl label={__('By ', 'zolo-blocks') + tax.name} key={index}>
                    <Select2
                        options={PRINT_TAXONOMY(allTermList[tax.value])}
                        value={
                            Object.keys(postQuery.postTaxonomies).length > 0
                                ? postQuery.postTaxonomies[tax.value] !== undefined
                                    ? postQuery.postTaxonomies[tax.value].options
                                    : []
                                : []
                        }
                        onChange={(value) => changeTaxonomy(value, tax.value)}
                        isMulti={true}
                        closeMenuOnSelect={false}
                    />
                </BaseControl>
            ))}

            <NumberControl
                isShiftStepEnabled
                label={__('Post Per Page', 'zolo-blocks')}
                max={100}
                min={-1}
                value={postQuery.postPerPage}
                onChange={(postPerPage) => {
                    setAttributes({ postQuery: { ...postQuery, postPerPage } });
                }}
                shiftStep={10}
                step={1}
            />

            <NumberControl
                isShiftStepEnabled
                label={__('Offset', 'zolo-blocks')}
                max={100}
                min={0}
                value={postQuery.postOffset}
                onChange={(postOffset) => {
                    setAttributes({ postQuery: { ...postQuery, postOffset } });
                }}
                shiftStep={10}
                step={1}
            />

            <SelectControl
                label={__('Order By', 'zolo-blocks')}
                value={postQuery.postOrderby}
                onChange={(postOrderby) => {
                    setAttributes({ postQuery: { ...postQuery, postOrderby } });
                }}
                options={ORDER_BY}
            />

            <SelectControl
                label={__('Sort Order', 'zolo-blocks')}
                value={postQuery.postOrder}
                onChange={(postOrder) => {
                    setAttributes({ postQuery: { ...postQuery, postOrder } });
                }}
                options={SORT_ORDER}
            />
        </>
    );
};

export default QueryControl;
