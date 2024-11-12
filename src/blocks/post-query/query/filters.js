import {__} from '@wordpress/i18n';
import Taxonomy from './taxonomy';
import {queryRelationOptions} from '../utils';
import Meta from './meta';
import Date from './date';
import Author from './author';

const {ZoloRepeater, IconicBtnGroup, TabDynamicControl} = window.zoloModule;
const Filters = ({query, setQuery}) => {
  return (
    <>
      <TabDynamicControl
        names={['taxonomy', 'meta', 'date', 'author']}
        taxonomy={
          <>
            <ZoloRepeater
              repeaterItems={query?.taxQuery}
              onChange={(value) => setQuery({taxQuery: value})}
              itemLabelName="taxonomy"
              defaultLabel="Taxonomy"
            >
              <Taxonomy
                name="taxonomies"
              />
            </ZoloRepeater>

            <div className="zolo-flex-row-control-tab">
              <IconicBtnGroup
                label={__('Relation', 'zoloblocks')}
                value={query?.taxQueryRelation}
                onChange={(value) => setQuery({taxQueryRelation: value})}
                options={queryRelationOptions}
              />
            </div>

          </>
        }
        meta={
          <>
            <ZoloRepeater
              repeaterItems={query?.metaQuery}
              onChange={(value) => setQuery({metaQuery: value})}
              itemLabelName="meta"
              defaultLabel="Meta"
            >
              <Meta
                name="metaQuery"
              />
            </ZoloRepeater>
            <div className="zolo-flex-row-control-tab">
              <IconicBtnGroup
                label={__('Relation', 'zoloblocks')}
                value={query?.metaQueryRelation}
                onChange={(value) => setQuery({metaQueryRelation: value})}
                options={queryRelationOptions}
              />
            </div>
          </>
        }
        date={
          <>
            <ZoloRepeater
              repeaterItems={query?.dateQuery}
              onChange={(value) => setQuery({dateQuery: value})}
              itemLabelName="date"
              defaultLabel="Date"
            >
              <Date
                name="dateQuery"
              />
            </ZoloRepeater>
            <div className="zolo-flex-row-control-tab">
              <IconicBtnGroup
                label={__('Relation', 'zoloblocks')}
                value={query?.dateQueryRelation}
                onChange={(value) => setQuery({dateQueryRelation: value})}
                options={queryRelationOptions}
              />
            </div>
          </>
        }
        author={
          <>
            <Author
              query={query}
              setQuery={setQuery}
            />
          </>
        }
      />
    </>
  )
}
export default Filters;
