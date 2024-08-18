/**
 * Internal depencencies
 */
const {
  ZoloIconPicker,
  SortableControl,
  SortableItem,
  LinkControl,
  TabDynamicControl,
  ColorControl,
  TabPanelControl
} = window.zoloModule;

const {__} = wp.i18n;
const {Button, PanelBody, TextControl} = wp.components;
import {cloneDeep} from 'lodash';

const Sortable = ({socialProfiles, setAttributes}) => {
  const deepCloneProfiles = cloneDeep(socialProfiles);

  return (
    <div className="sortable">
      <div className="zb-repeater-flex">
        <div className="repeater-label">{__('Add a Profile', 'zoloblocks')}</div>
        <Button
          onClick={() =>
            setAttributes({
              socialProfiles: [
                ...socialProfiles,
                {
                  id: socialProfiles.length + 1,
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>',
                  link: {
                    url: '#',
                    openInNewTab: false,
                  },
                  text: 'Facebook',
                  number:'450',
                  meta:'Likes',
                  bgColor: '',
                  iconColor: '',
                  iconBgColor: '',
                  iconBorderColor: '',
                  iconHColor: '',
                  iconHBgColor: '',
                  iconHBorderColor: ''
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
      <SortableControl defaultItems={socialProfiles} attributeName="socialProfiles" setAttributes={setAttributes}>
        {deepCloneProfiles &&
          deepCloneProfiles.map((profile, index) => {
            return (
              <div className="dnd-container" key={index}>
                <Button
                  className="dnd-trash"
                  icon="trash"
                  onClick={() => {
                    setAttributes({
                      socialProfiles: socialProfiles.filter((profile, i) => index !== i),
                    });
                  }}
                />
                <SortableItem key={profile.id} id={profile.id}>
                  <PanelBody title={profile.text || 'Title'} initialOpen={false}>
                    <TabDynamicControl
                      names={['content', 'style']}
                      content={
                        <>
                          <TextControl
                            label={__('Label', 'zoloblocks')}
                            value={profile.text}
                            onChange={(v) => {
                              const newItems = [...deepCloneProfiles];
                              newItems[index].text = v;
                              setAttributes({
                                socialProfiles: newItems,
                              });
                            }}
                          />
                          <ZoloIconPicker
                            label={__('Select Icon', 'zoloblocks')}
                            value={profile.icon}
                            onChange={(value) => {
                              const newItems = [...deepCloneProfiles];
                              newItems[index].icon = value;
                              setAttributes({
                                socialProfiles: newItems,
                              });
                            }}
                          />

                          <LinkControl
                            label={__('Link', 'zoloblocks')}
                            value={profile.link}
                            onChange={(value) => {
                              const newItems = [...deepCloneProfiles];
                              newItems[index].link = value;
                              setAttributes({
                                socialProfiles: newItems,
                              });
                            }}
                          />
                          <TextControl
                            label={__('Number', 'zoloblocks')}
                            value={profile.number}
                            onChange={(v) => {
                              const newItems = [...deepCloneProfiles];
                              newItems[index].number = v;
                              setAttributes({
                                socialProfiles: newItems,
                              });
                            }}
                          />
                          <TextControl
                            label={__('Meta', 'zoloblocks')}
                            value={profile.meta}
                            onChange={(v) => {
                              const newItems = [...deepCloneProfiles];
                              newItems[index].meta = v;
                              setAttributes({
                                socialProfiles: newItems,
                              });
                            }}
                          />
                        </>
                      }
                      style={
                        <>
                          <ColorControl
                            label={__('Background','zoloblocks')}
                            color={profile.bgColor}
                            onChange={(value)=>{
                              const newItems = [...deepCloneProfiles];
                              newItems[index].bgColor=value;
                              setAttributes({socialProfiles:newItems});
                            }}
                          />
                          <TabPanelControl
                            normalComponents={
                            <>

                              <ColorControl
                                label={__('Color','zoloblocks')}
                                color={profile.iconColor}
                                onChange={(value)=>{
                                  const newItems = [...deepCloneProfiles];
                                  newItems[index].iconColor=value;
                                  setAttributes({socialProfiles:newItems});
                                }}
                              />
                              <ColorControl
                                label={__('Background','zoloblocks')}
                                color={profile.iconBgColor}
                                onChange={(value)=>{
                                  const newItems = [...deepCloneProfiles];
                                  newItems[index].iconBgColor=value;
                                  setAttributes({socialProfiles:newItems});
                                }}
                              />
                              <ColorControl
                                label={__('Border','zoloblocks')}
                                color={profile.iconBorderColor}
                                onChange={(value)=>{
                                  const newItems = [...deepCloneProfiles];
                                  newItems[index].iconBorderColor=value;
                                  setAttributes({socialProfiles:newItems});
                                }}
                              />
                            </>
                            }
                            hoverComponents={
                            <>
                              <ColorControl
                                label={__('Hover Color','zoloblocks')}
                                color={profile.iconHColor}
                                onChange={(value)=>{
                                  const newItems = [...deepCloneProfiles];
                                  newItems[index].iconHColor=value;
                                  setAttributes({socialProfiles:newItems});
                                }}
                              />
                              <ColorControl
                                label={__('Hover Background','zoloblocks')}
                                color={profile.iconHBgColor}
                                onChange={(value)=>{
                                  const newItems = [...deepCloneProfiles];
                                  newItems[index].iconHBgColor=value;
                                  setAttributes({socialProfiles:newItems});
                                }}
                              />
                              <ColorControl
                                label={__('Hover Border','zoloblocks')}
                                color={profile.iconHBorderColor}
                                onChange={(value)=>{
                                  const newItems = [...deepCloneProfiles];
                                  newItems[index].iconHBorderColor=value;
                                  setAttributes({socialProfiles:newItems});
                                }}
                              />

                            </>
                            }
                          />

                        </>
                      }
                    />
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
