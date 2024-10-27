import {InspectorControls} from '@wordpress/block-editor';
import {ToggleControl, CardDivider} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import objAttributes from './attributes';
import {
  CONTENT_ALIGN,
  CONTENT_PADDING,
  CONTENT_BG,
  CONTENT_BORDER,
  CONTENT_BORDER_RADIUS,
  CONTENT_SHADOW,
  CONTENT_TEXT_SHADOW,
  CONTENT_TEXT_STROKE,
  CONTENT_HOVER_BG,
  CONTENT_HOVER_BORDER,
  CONTENT_HOVER_BRADIUS,
  CONTENT_HOVER_SHADOW,
} from './constants';

import {CONTENT_TYPOGRAPHY} from './constants/typoPrefixConstant';
import {TEXT_ALIGN_OPTIONS} from '../../../src/global/constants';

const {
  TextShadowControl,
  TextStrokeControl,
  ResDimensionsControl,
  NormalBGControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  TabPanelControl,
  ColorControl,
  TypographyDropdown,
  ResAlignmentControl,
  AdvancedOptions,
  ZoloPanelBody,
} = window.zoloModule;

function Inspector(props) {
  const {attributes, setAttributes} = props;
  const {resMode, inheritThemeLayout, contentColor, contentHoverColor} = attributes;

  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };
  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/post-content"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
              <div className="zolo-custom-heading" style={{border: 0, paddingTop: 0}}>
                {__('show/hide elements', 'zoloblocks')}
              </div>
              <ToggleControl
                label={__('Inherit Theme Layout', 'zoloblocks')}
                checked={inheritThemeLayout}
                onChange={(inheritThemeLayout) => setAttributes({inheritThemeLayout})}
              />
              <CardDivider/>
              <ResAlignmentControl
                label={__('Alignment', 'zoloblocks')}
                controlName={CONTENT_ALIGN}
                requiredProps={requiredProps}
                alignOptions={TEXT_ALIGN_OPTIONS}
              />
            </ZoloPanelBody>
          </>
        }
        styleTab={
          <>
            <ZoloPanelBody title={__('Title', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
              <TabPanelControl
                options={[
                  {
                    value: 'normal',
                    label: __('Normal', 'zoloblocks'),
                  },
                  {
                    value: 'hover',
                    label: __('Hover', 'zoloblocks'),
                  },
                ]}
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={contentColor}
                      onChange={(color) =>
                        setAttributes({
                          contentColor: color,
                        })
                      }
                    />
                    <TypographyDropdown
                      label={__('Typography', 'zoloblocks')}
                      typoPrefixConstant={CONTENT_TYPOGRAPHY}
                      requiredProps={requiredProps}
                    />
                    <TextShadowControl
                      controlName={CONTENT_TEXT_SHADOW}
                      requiredProps={requiredProps}
                      enableTransition={false}
                    />
                    <TextStrokeControl
                      controlName={CONTENT_TEXT_STROKE}
                      requiredProps={requiredProps}
                      enableTransition={false}
                    />
                    <CardDivider/>
                    <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_BG} noMainBGImg={true}/>
                    <ResDimensionsControl
                      label={__('Padding', 'zoloblocks')}
                      controlName={CONTENT_PADDING}
                      requiredProps={requiredProps}
                    />
                    <CardDivider/>
                    <BorderControl
                      label={__('Border', 'zoloblocks')}
                      controlName={CONTENT_BORDER}
                      requiredProps={requiredProps}
                    />
                    <BoxShadowControl controlName={CONTENT_SHADOW} requiredProps={requiredProps}/>
                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={CONTENT_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={contentHoverColor}
                      onChange={(color) =>
                        setAttributes({
                          contentHoverColor: color,
                        })
                      }
                    />
                    <NormalBGControl requiredProps={requiredProps} controlName={CONTENT_HOVER_BG} noMainBGImg={true}/>
                    <CardDivider/>
                    <BorderControl
                      label={__('Border', 'zoloblocks')}
                      controlName={CONTENT_HOVER_BORDER}
                      requiredProps={requiredProps}
                    />
                    <BoxShadowControl controlName={CONTENT_HOVER_SHADOW} requiredProps={requiredProps}/>
                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={CONTENT_HOVER_BRADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                  </>
                }
              />
            </ZoloPanelBody>
          </>
        }
        advancedTab={
          <>
            <AdvancedOptions
              attributes={attributes}
              setAttributes={setAttributes}
              requiredProps={requiredProps}
              block="zolo/post-content"
            />
          </>
        }
      />
    </InspectorControls>
  );
}

export default Inspector;
