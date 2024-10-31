import {__} from '@wordpress/i18n';
import {SelectControl, Button, PanelBody, BaseControl} from '@wordpress/components';

const {SortableControl, SortableItem} = window.zoloModule;
import {cloneDeep} from 'lodash';
import {TAGS_LIST, HEADING_TAGS} from './constants';
import Select2 from "react-select";

const Sortable = ({styleTags, setAttributes}) => {
  const deepCloneStyleTags = cloneDeep(styleTags);

  return (
    <div className="sortable">
      <div className="zb-repeater-flex">
        <div className="repeater-label">{__('Add a Style Tag', 'zoloblocks')}</div>
        <Button
          onClick={() =>
            setAttributes({
              styleTags: [
                ...styleTags,
                {
                  id: styleTags.length + 1,
                  type: 'image',
                },
              ],
            })
          }
        >
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8V16" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M16 12H8" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </Button>
      </div>
      <SortableControl defaultItems={styleTags} attributeName="styleTags" setAttributes={setAttributes}>
        {deepCloneStyleTags &&
          deepCloneStyleTags.map((tag, index) => {
            return (
              <div className="dnd-container" key={index}>
                <Button
                  className="dnd-trash"
                  icon="trash"
                  onClick={() => {
                    setAttributes({
                      styleTags: styleTags.filter((tag, i) => index !== i),
                    });
                  }}
                />
                <SortableItem key={tag.id} id={tag.id}>
                  <PanelBody title={tag?.type ? tag.type.charAt(0).toUpperCase() + tag.type.slice(1) : 'Title'}
                             initialOpen={false}>
                    <SelectControl
                      label={__('Type', 'zoloblocks')}
                      value={tag?.type}
                      options={TAGS_LIST}
                      onChange={(v) => {
                        const newItems = [...deepCloneStyleTags];
                        newItems[index].type = v;
                        setAttributes({
                          styleTags: newItems,
                        });
                      }}
                    />

                    {tag?.type === 'heading' && (
                      <BaseControl label={__('Heading Tag', 'zoloblocks')} className="zolo-flex-col-control">
                        <Select2
                          classNamePrefix="zolo-select"
                          options={HEADING_TAGS}
                          value={tag?.hTags || []}
                          onChange={(v) => {
                            const newItems = [...deepCloneStyleTags];
                            newItems[index].hTags = v;
                            const headingTags = v?.map((item) => item.value);
                            setAttributes({
                              styleTags: newItems,
                              headingTags
                            });
                          }}
                          isMulti={true}
                          closeMenuOnSelect={true}
                        />
                      </BaseControl>
                    )}

                  </PanelBody>
                </SortableItem>
              </div>
            );
          })}
      </SortableControl>
    </div>
  );
};

export default Sortable;
