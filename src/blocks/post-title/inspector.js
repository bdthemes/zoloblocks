import {InspectorControls} from '@wordpress/block-editor';
import {SelectControl, TextControl, ToggleControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import objAttributes from './attributes';
import {
  TITLE_ALIGN,
  TITLE_PADDING,
  TITLE_BG,
  TITLE_BORDER,
  TITLE_BORDER_RADIUS,
  TITLE_SHADOW,
  TITLE_HOVER_BG,
  TITLE_HOVER_BORDER,
  TITLE_HOVER_BRADIUS,
  TITLE_HOVER_SHADOW
} from './constants';

import {TITLE_TYPOGRAPHY} from './constants/typoPrefixConstant';
import {DEFAULT_ALIGNS, HEADING} from '../../../src/global/constants';

const {
  ResDimensionsControl,
  NormalBGControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  TabPanelControl,
  ColorControl,
  TypographyDropdown,
  ResAlignmentControl,
  RangeResetControl,
  AdvancedOptions,
  ZoloPanelBody,
} = window.zoloModule;

function Inspector(props) {
  const {attributes, setAttributes} = props;
  const {
    resMode,
    isLink,
    linkTarget,
    linkRel,
    titleTag,
    titleWords,
    titleColor,
    titleHoverColor,


  } = attributes;

  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };


  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/post-list"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>
              <ToggleControl
                label={__('Make Title a Link', 'zoloblocks')}
                checked={isLink}
                onChange={(isLink) => setAttributes({isLink})}
              />
              {isLink && (
                <>
                  <ToggleControl
                    label={__('Open in new tab', 'zoloblocks')}
                    onChange={(value) => setAttributes({linkTarget: value ? '_blank' : '_self',})}
                    checked={linkTarget === '_blank'}
                  />
                  <TextControl
                    label={__('Link rel', 'zoloblocks')}
                    value={linkRel}
                    onChange={(linkRel) => setAttributes({linkRel})}
                  />
                </>
              )}
              <SelectControl
                label={__('Title Tag', 'zoloblocks')}
                value={titleTag}
                options={HEADING}
                onChange={(titleTag) => setAttributes({titleTag})}
              />
              <RangeResetControl
                label={__('Title Words', 'zoloblocks')}
                controlName={'titleWords'}
                requiredProps={requiredProps}
                min={1}
                max={100}
                step={1}
              />
              <ResAlignmentControl
                label={__('Alignment', 'zoloblocks')}
                controlName={TITLE_ALIGN}
                requiredProps={requiredProps}
                alignOptions={DEFAULT_ALIGNS}
              />
            </ZoloPanelBody>
          </>
        }
        styleTab={
          <>
            <ZoloPanelBody title={__('Title', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={TITLE_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__('Padding', 'zoloblocks')}
                controlName={TITLE_PADDING}
                requiredProps={requiredProps}
              />

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
                      color={titleColor}
                      onChange={(color) =>
                        setAttributes({
                          titleColor: color,
                        })
                      }
                    />
                    <NormalBGControl requiredProps={requiredProps} controlName={TITLE_BG} noMainBGImg={true}/>

                    <BorderControl label={__('Border', 'zoloblocks')} controlName={TITLE_BORDER}
                                   requiredProps={requiredProps}/>
                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={TITLE_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                    <BoxShadowControl controlName={TITLE_SHADOW} requiredProps={requiredProps}/>
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={titleHoverColor}
                      onChange={(color) =>
                        setAttributes({
                          titleHoverColor: color,
                        })
                      }
                    />
                    <NormalBGControl requiredProps={requiredProps} controlName={TITLE_HOVER_BG} noMainBGImg={true}/>

                    <BorderControl label={__('Border', 'zoloblocks')} controlName={TITLE_HOVER_BORDER}
                                   requiredProps={requiredProps}/>
                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={TITLE_HOVER_BRADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                    <BoxShadowControl controlName={TITLE_HOVER_SHADOW} requiredProps={requiredProps}/>

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
              block="zolo/post-title"
            />
          </>
        }
      />
    </InspectorControls>
  );
}

export default Inspector;
