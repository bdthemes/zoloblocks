import {__} from '@wordpress/i18n';
import {Button, PanelBody, TextControl} from '@wordpress/components';

const {SortableControl, SortableItem} = window.zoloModule;
import {cloneDeep} from 'lodash';

const Sortable = ({optionData, setAttributes}) => {
  const deepCloneMetaData = cloneDeep(optionData);
  const transformToValueFormat = (input) => {
    return input.toLowerCase().replace(/\s+/g, '_');
  };
  return (
    <div className="sortable">
      <div className="zb-repeater-flex">
        <div className="repeater-label">{__('Add New Option', 'zoloblocks')}</div>
        <Button
          onClick={() =>
            setAttributes({
              optionData: [
                ...optionData,
                {
                  id: optionData.length + 1,
                  name: 'Option ' + optionData.length,
                  value: transformToValueFormat('Option ' + optionData.length)
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
      {deepCloneMetaData &&
        deepCloneMetaData.map((meta, index) => {
          return (
            <SortableControl defaultItems={optionData} attributeName="optionData" setAttributes={setAttributes}>
              <div className="dnd-container" key={index}>
                <Button
                  className="dnd-trash"
                  icon="trash"
                  onClick={() => {
                    setAttributes({
                      optionData: optionData.filter((meta, i) => index !== i),
                    });
                  }}
                />
                <SortableItem key={meta.id} id={meta.id}>
                  <PanelBody title={meta?.name ? meta.name.charAt(0).toUpperCase() + meta.name.slice(1) : 'Title'}
                             initialOpen={false}>
                    <TextControl
                      label={__('Value', 'zoloblocks')}
                      value={meta?.name}
                      onChange={(v) => {
                        const newItems = [...deepCloneMetaData];
                        newItems[index].name = v;
                        newItems[index].value = transformToValueFormat(v);
                        setAttributes({
                          optionData: newItems,
                        });
                      }}
                    />
                  </PanelBody>
                </SortableItem>
              </div>
            </SortableControl>
          );
        })}
    </div>
  );
};

export default Sortable;
