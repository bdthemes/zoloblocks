import {
  InspectorControls
} from '@wordpress/block-editor';
import {
  PanelBody,
  SelectControl,
  TabPanel,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import objAttributes from './attributes';
import {
  CONTAINER_MARGIN,
  CONTAINER_PADDING,
  PRESETS,
} from './constants';

const {
  ResDimensionsControl,
  QueryControl
} = window.zoloModule;

function Inspector({ attributes, setAttributes }) {
  const {
    preset,
    resMode,
  } = attributes;

  const resRequiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };

  const changePremade = (selected) => {
    setAttributes({ preset: selected });
    // switch (selected) {
    // 	case 'default':
    // 		setAttributes({
    // 			showTestimonialMessage: false,
    // 		});
    // 		break;
    // 	case 'style-1':
    // 		setAttributes({
    // 			showTestimonialMessage: false,
    // 		});
    // 		break;
    // 	case 'style-2':
    // 		setAttributes({
    // 			showTestimonialMessage: false,
    // 		});
    // 		break;
    // 	default:
    // 		setAttributes({
    // 			showTestimonialMessage: false,
    // 		});
    // 		break;
    // }
  };

  return (
    <InspectorControls key="controls">
      <div className="zolo-panel-control">
        <TabPanel
          className="zolo-parent-tab-panel"
          activeClass="active-tab"
          tabs={[
            {
              name: 'settings',
              title: __('Settings', 'zolo-blocks'),
              className: 'zolo-tab settings',
            },
            {
              name: 'design',
              title: __('Design', 'zolo-blocks'),
              className: 'zolo-tab design',
            },
            {
              name: 'advanced',
              title: __('Advanced', 'zolo-blocks'),
              className: 'zolo-tab advanced',
            },
          ]}
        >
          {(tab) => (
            <div className={'zolo-tab-controls' + tab.name}>
              {tab.name === 'settings' && (
                <>
                  <PanelBody title={__('Query', 'zolo-blocks')} initialOpen={true} >
                    <QueryControl
                      attributes={attributes}
                      setAttributes={setAttributes}
                    />
                  </PanelBody>

                  <PanelBody
                    title={__('Layout Style', 'zolo-blocks')}
                    initialOpen={false}
                  >
                    <SelectControl
                      label={__(
                        'Preset Designs',
                        'zolo-blocks'
                      )}
                      value={preset}
                      options={PRESETS}
                      onChange={(selected) =>
                        changePremade(selected)
                      }
                    />

                  </PanelBody>
                </>
              )}

              {tab.name === 'design' && (
                <>
                  <PanelBody
                    title={__('Container', 'zolo-blocks')}
                    initialOpen={false}
                  >

                  </PanelBody>
                </>
              )}

              {tab.name === 'advanced' && (
                <>
                  <PanelBody
                    title={__('Spacing', 'zolo-blocks')}
                    initialOpen={false}
                  >
                    <ResDimensionsControl
                      label={__('Margin', 'zolo-blocks')}
                      controlName={CONTAINER_MARGIN}
                      resRequiredProps={resRequiredProps}
                    />
                    <ResDimensionsControl
                      label={__('Padding', 'zolo-blocks')}
                      controlName={CONTAINER_PADDING}
                      resRequiredProps={resRequiredProps}
                    />
                  </PanelBody>
                </>
              )}
            </div>
          )}
        </TabPanel>
      </div>
    </InspectorControls>
  );
}

export default Inspector;
