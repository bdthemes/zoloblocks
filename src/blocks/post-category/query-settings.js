import { __ } from '@wordpress/i18n';
import { SORT_ORDER } from '../../../src/global/constants';
import { CAT_ORDER_BY } from './constants';

const { Select2AjaxControl, ZoloSelectControl, ZoloInputControl, ZoloTextControl } = window.zoloModule;

const QuerySettings = ({ attributes, setAttributes }) => {
    const { catQuery, customClass } = attributes;
    const allTaxonomyList = zoloParams.get_taxonomies;
    let tpgAllTaxonomies = new Set();
    tpgAllTaxonomies.add({
        value: '',
        label: __('Select Type', 'zoloblocks'),
    });
    for (let tax in allTaxonomyList) {
        let value = allTaxonomyList[tax];
        if (value.public === true) {
            tpgAllTaxonomies.add({
                value: value.name,
                label: value.label,
            });
        }
    }

    let tpgAllTaxonomiesArray = [...tpgAllTaxonomies];

    return (
        <>
            <ZoloInputControl
                label={__('Item Limit', 'zoloblocks-pro')}
                value={catQuery.catItemLimit}
                onChange={(catItemLimit) => {
                    setAttributes({ catQuery: { ...catQuery, catItemLimit } });
                }}
                type="number"
                min={1}
                max={99}
                labelPosition="edge"
                __unstableInputWidth="64px"
            />

            <ZoloSelectControl
                label={__('Taxonomy', 'zoloblocks-pro')}
                value={catQuery.catTaxonomy}
                onChange={(catTaxonomy) => {
                    setAttributes({ catQuery: { ...catQuery, catTaxonomy } });
                }}
                options={tpgAllTaxonomiesArray}
            />

            <div className="zolo-flex-col-control">
                <Select2AjaxControl
                    label={__('Exclude', 'zoloblocks-pro')}
                    placeholder={__('Search...', 'zoloblocks-pro')}
                    sourceName="taxonomy"
                    sourceType={catQuery.catTaxonomy || 'category'}
                    isMulti={true}
                    value={catQuery?.catExclude || []}
                    onChange={(catExclude) => setAttributes({ catQuery: { ...catQuery, catExclude } })}
                />
            </div>

            <ZoloTextControl
                label={__('Parent', 'zoloblocks')}
                value={catQuery.catParent}
                onChange={(catParent) => setAttributes({ catQuery: { ...catQuery, catParent } })}
                placeholder={__('Category ID: 12', 'zoloblocks')}
            />

            <ZoloSelectControl
                label={__('Order By', 'zoloblocks-pro')}
                value={catQuery.catOrderby}
                onChange={(catOrderby) => {
                    setAttributes({ catQuery: { ...catQuery, catOrderby } });
                }}
                options={CAT_ORDER_BY}
            />

            <ZoloSelectControl
                label={__('Sort Order', 'zoloblocks-pro')}
                value={catQuery.catOrder}
                onChange={(catOrder) => {
                    setAttributes({ catQuery: { ...catQuery, catOrder } });
                }}
                options={SORT_ORDER}
            />

            <ZoloTextControl
                label={__('Custom Class', 'zoloblocks')}
                value={customClass}
                onChange={(value) => setAttributes({ customClass: value })}
                __nextHasNoMarginBottom={true}
                __next40pxDefaultSize={true}
            />
        </>
    );
};

export default QuerySettings;
