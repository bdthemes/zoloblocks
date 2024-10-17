import {InspectorControls} from '@wordpress/block-editor';
import {ToggleControl, TextControl, CardDivider, SelectControl} from '@wordpress/components';
import {__} from '@wordpress/i18n';
import objAttributes from './attributes';

import {
  HEADING_TYPOGRAPHY,
  AUTHOR_TYPOGRAPHY,
  META_TYPOGRAPHY,
  MESSAGE_TYPOGRAPHY,
  REPLY_TYPOGRAPHY,
  FORMH_TYPOGRAPHY,
  CANCEL_TYPOGRAPHY,
  FORMINFO_TYPOGRAPHY,
  INPUT_TYPOGRAPHY,
  SUBMITBTN_TYPOGRAPHY,
} from './constants/typoPrefixConstant';

import {
  GET_TAXONOMIEX,
  HEADINGB_SPACE,
  //Comment list
  COMMENT_SPACE,
  COMMENT_PADDING,
  AVATAR_BORDER,
  AVATAR_BORDER_RADIUS,
  AVATAR_PADDING,
  AVATAR_SHADOW,
  //Reply Btn
  REPLY_PADDING,
  REPLY_BORDER,
  REPLY_BORDER_RADIUS,
  REPLY_SHADOW,
  REPLY_HOVER_BORDER,
  REPLY_HOVER_BRADIUS,
  REPLY_HOVER_SHADOW,
  //input field
  FORM_HB_SPACE,
  INPUT_SPACE,
  INPUT_PADDING,
  INPUT_MARGIN,
  INPUT_BORDER,
  INPUT_BORDER_RADIUS,
  //submit btn
  SUBMITBTN_PADDING,
  SUBMITBTN_BORDER_RADIUS,
  SUBMITBTN_MARGIN,
  SUBMITBTN_BORDER,
} from './constants';

const {
  ResDimensionsControl,
  BorderControl,
  BoxShadowControl,
  HeaderTabs,
  ColorControl,
  TypographyDropdown,
  AdvancedOptions,
  ZoloPanelBody,
  TabPanelControl,
  ResRangeControl,
} = window.zoloModule;
export default function Inspector(props) {
  const {attributes, setAttributes} = props;
  const {
    resMode,
    showRelatedPost,
    selectedTaxonomy,
    previousPost,
    nextPost,

    headingColor,
    //comment list
    authorColor,
    authorHoverColor,
    metaColor,
    metaHoverColor,
    messageColor,
    messageHoverColor,
    //reply btn
    replyColor,
    replyBackground,
    replyHoverColor,
    replyHoverBackground,
    formHeadingColor,
    //cancel
    cancelColor,
    cancelHoverColor,
    //form field
    formInfoColor,
    formInfoHoverColor,
    inputColor,
    inputBgColor,
    inputFocusColor,
    inputFocusBgColor,
    //submit btn
    submitBtnColor,
    submitBtnBgColor,
    submitBtnHoverColor,
    submitBtnBgHoverColor
  } = attributes;
  const requiredProps = {
    resMode,
    setAttributes,
    attributes,
    objAttributes,
  };

  const taxonomiesArray = GET_TAXONOMIEX(zoloParams.get_taxonomies);

  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/post-navigation"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody title={__('General', 'zoloblocks')} panelProps={props} firstOpen={true}>

              <div className="zolo-custom-heading" style={{border: 0, paddingTop: 0}}>
                {__('Show/hide elements', 'zoloblocks')}
              </div>

              <ToggleControl
                label={__('Related Post', 'zoloblocks')}
                checked={showRelatedPost}
                onChange={(showRelatedPost) => setAttributes({showRelatedPost})}
              />

              {showRelatedPost && (
                <SelectControl
                  label={__('Related Post', 'zoloblocks')}
                  value={selectedTaxonomy}
                  options={taxonomiesArray}
                  onChange={(selectedTaxonomy) => setAttributes({selectedTaxonomy})}
                />
              )}

              <CardDivider/>
              <TextControl
                label={__('Previous Post', 'zoloblocks')}
                value={previousPost}
                onChange={(previousPost) => setAttributes({previousPost})}
              />
              <TextControl
                label={__('Next Post', 'zoloblocks')}
                value={nextPost}
                onChange={(nextPost) => setAttributes({nextPost})}
              />
            </ZoloPanelBody>
          </>
        }
        styleTab={
          <>
            <ZoloPanelBody title={__('Comment Heading', 'zoloblocks')} firstOpen={true} stylePanel={true}
                           panelProps={props}>
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={HEADING_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <ColorControl
                label={__('Color', 'zoloblocks')}
                color={headingColor}
                onChange={(color) =>
                  setAttributes({
                    headingColor: color,
                  })
                }
              />
              <ResRangeControl
                label={__('Bottom Space', 'zoloblocks')}
                controlName={HEADINGB_SPACE}
                requiredProps={requiredProps}
                min={0}
                max={100}
                step={1}
              />
            </ZoloPanelBody>

            <ZoloPanelBody title={__('Comment List', 'zoloblocks')} stylePanel={true} panelProps={props}>

              <ResDimensionsControl
                label={__('Padding', 'zoloblocks')}
                controlName={COMMENT_PADDING}
                requiredProps={requiredProps}
              />

              <ResRangeControl
                label={__('Bottom Space', 'zoloblocks')}
                controlName={COMMENT_SPACE}
                requiredProps={requiredProps}
                min={0}
                max={100}
                step={1}
              />

              <div className="zolo-custom-heading" style={{border: 0, paddingTop: 0}}>
                {__('Avatar', 'zoloblocks')}
              </div>

              <ResDimensionsControl
                label={__('Padding', 'zoloblocks')}
                controlName={AVATAR_PADDING}
                requiredProps={requiredProps}
              />
              <BorderControl
                label={__('Border', 'zoloblocks')}
                controlName={AVATAR_BORDER}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__('Border Radius', 'zoloblocks')}
                controlName={AVATAR_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />
              <BoxShadowControl
                controlName={AVATAR_SHADOW}
                requiredProps={requiredProps}
                enableTransition={false}
              />

              <div className="zolo-custom-heading">
                {__('Author Name', 'zoloblocks')}
              </div>

              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={AUTHOR_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={authorColor}
                      onChange={(color) =>
                        setAttributes({
                          authorColor: color,
                        })
                      }
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Hover Color', 'zoloblocks')}
                      color={authorHoverColor}
                      onChange={(color) =>
                        setAttributes({
                          authorHoverColor: color,
                        })
                      }
                    />
                  </>
                }
              />

              <div className="zolo-custom-heading">
                {__('Meta', 'zoloblocks')}
              </div>

              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={META_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={metaColor}
                      onChange={(color) =>
                        setAttributes({
                          metaColor: color,
                        })
                      }
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Hover Color', 'zoloblocks')}
                      color={metaHoverColor}
                      onChange={(color) =>
                        setAttributes({
                          metaHoverColor: color,
                        })
                      }
                    />
                  </>
                }
              />
              <div className="zolo-custom-heading">
                {__('Message', 'zoloblocks')}
              </div>

              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={MESSAGE_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={messageColor}
                      onChange={(color) =>
                        setAttributes({
                          messageColor: color,
                        })
                      }
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Hover Color', 'zoloblocks')}
                      color={messageHoverColor}
                      onChange={(color) =>
                        setAttributes({
                          messageHoverColor: color,
                        })
                      }
                    />
                  </>
                }
              />
            </ZoloPanelBody>

            <ZoloPanelBody title={__('Reply Button', 'zoloblocks')} stylePanel={true}
                           panelProps={props}>
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={REPLY_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__('Padding', 'zoloblocks')}
                controlName={REPLY_PADDING}
                requiredProps={requiredProps}
              />

              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={replyColor}
                      onChange={(color) =>
                        setAttributes({
                          replyColor: color,
                        })
                      }
                    />
                    <ColorControl
                      label={__('Background', 'zoloblocks')}
                      color={replyBackground}
                      onChange={(color) =>
                        setAttributes({
                          replyBackground: color,
                        })
                      }
                    />
                    <BorderControl
                      label={__('Border', 'zoloblocks')}
                      controlName={REPLY_BORDER}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={REPLY_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                    <BoxShadowControl
                      controlName={REPLY_SHADOW}
                      requiredProps={requiredProps}
                      enableTransition={false}
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={replyHoverColor}
                      onChange={(color) =>
                        setAttributes({
                          replyHoverColor: color,
                        })
                      }
                    />
                    <ColorControl
                      label={__('Background', 'zoloblocks')}
                      color={replyHoverBackground}
                      onChange={(color) =>
                        setAttributes({
                          replyHoverBackground: color,
                        })
                      }
                    />
                    <BorderControl
                      label={__('Border', 'zoloblocks')}
                      controlName={REPLY_HOVER_BORDER}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={REPLY_HOVER_BRADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />
                    <BoxShadowControl
                      controlName={REPLY_HOVER_SHADOW}
                      requiredProps={requiredProps}
                      enableTransition={false}
                    />
                  </>
                }
              />

            </ZoloPanelBody>

            <ZoloPanelBody title={__('Form Heading', 'zoloblocks')} stylePanel={true}
                           panelProps={props}>
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={FORMH_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <ColorControl
                label={__('Color', 'zoloblocks')}
                color={formHeadingColor}
                onChange={(color) =>
                  setAttributes({
                    formHeadingColor: color,
                  })
                }
              />
              <ResRangeControl
                label={__('Bottom Space', 'zoloblocks')}
                controlName={FORM_HB_SPACE}
                requiredProps={requiredProps}
                min={0}
                max={100}
                step={1}
              />
            </ZoloPanelBody>

            <ZoloPanelBody title={__('Cancel Reply', 'zoloblocks')} stylePanel={true}
                           panelProps={props}>
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={CANCEL_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={cancelColor}
                      onChange={(color) =>
                        setAttributes({
                          cancelColor: color,
                        })
                      }
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Hover Color', 'zoloblocks')}
                      color={cancelHoverColor}
                      onChange={(color) =>
                        setAttributes({
                          cancelHoverColor: color,
                        })
                      }
                    />
                  </>
                }
              />
            </ZoloPanelBody>

            <ZoloPanelBody title={__('Comment Form', 'zoloblocks')} stylePanel={true} panelProps={props}>

              <div className="zolo-custom-heading" style={{border: 0, paddingTop: 0}}>
                {__('Form Info', 'zoloblocks')}
              </div>
              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={FORMINFO_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={formInfoColor}
                      onChange={(color) =>
                        setAttributes({
                          formInfoColor: color,
                        })
                      }
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Hover Color', 'zoloblocks')}
                      color={formInfoHoverColor}
                      onChange={(color) =>
                        setAttributes({
                          formInfoHoverColor: color,
                        })
                      }
                    />
                  </>
                }
              />

              <ResRangeControl
                label={__('Space Between', 'zoloblocks')}
                controlName={INPUT_SPACE}
                requiredProps={requiredProps}
                min={0}
                max={100}
                step={1}
              />

              <div className="zolo-custom-heading">
                {__('Form Fields', 'zoloblocks')}
              </div>

              <TypographyDropdown
                label={__('Typography', 'zoloblocks')}
                typoPrefixConstant={INPUT_TYPOGRAPHY}
                requiredProps={requiredProps}
              />
              <CardDivider/>
              <ResDimensionsControl
                label={__('Padding', 'zoloblocks')}
                controlName={INPUT_PADDING}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__('Margin', 'zoloblocks')}
                controlName={INPUT_MARGIN}
                requiredProps={requiredProps}
              />
              <CardDivider/>
              <BorderControl
                label={__('Border', 'zoloblocks')}
                controlName={INPUT_BORDER}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__('Border Radius', 'zoloblocks')}
                controlName={INPUT_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />

              <TabPanelControl
                options={[
                  {label: __('Normal', 'zoloblocks'), value: 'normal'},
                  {label: __('Focus', 'zoloblocks'), value: 'hover'},
                ]}
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={inputColor}
                      onChange={(value) =>
                        setAttributes({
                          inputColor: value,
                        })
                      }
                    />
                    <ColorControl
                      label={__('Background', 'zoloblocks')}
                      color={inputBgColor}
                      onChange={(value) =>
                        setAttributes({
                          inputBgColor: value,
                        })
                      }
                    />
                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Color Focus', 'zoloblocks')}
                      color={inputFocusColor}
                      onChange={(value) =>
                        setAttributes({
                          inputFocusColor: value,
                        })
                      }
                    />
                    <ColorControl
                      label={__('Background Focus', 'zoloblocks')}
                      color={inputFocusBgColor}
                      onChange={(value) =>
                        setAttributes({
                          inputFocusBgColor: value,
                        })
                      }
                    />
                  </>
                }
              />
            </ZoloPanelBody>

            <ZoloPanelBody title={__('Submit Button', 'zoloblocks')} stylePanel={true} panelProps={props}>
              <TabPanelControl
                normalComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={submitBtnColor}
                      onChange={(value) =>
                        setAttributes({
                          submitBtnColor: value,
                        })
                      }
                    />
                    <TypographyDropdown
                      label={__('Typography', 'zoloblocks')}
                      typoPrefixConstant={SUBMITBTN_TYPOGRAPHY}
                      requiredProps={requiredProps}
                      max={36}
                    />
                    <CardDivider/>
                    <ColorControl
                      label={__('Background', 'zoloblocks')}
                      color={submitBtnBgColor}
                      onChange={(value) =>
                        setAttributes({
                          submitBtnBgColor: value,
                        })
                      }
                    />
                    <ResDimensionsControl
                      label={__('Padding', 'zoloblocks')}
                      controlName={SUBMITBTN_PADDING}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__('Margin', 'zoloblocks')}
                      controlName={SUBMITBTN_MARGIN}
                      requiredProps={requiredProps}
                    />
                    <CardDivider/>
                    <BorderControl
                      label={__('Border', 'zoloblocks')}
                      controlName={SUBMITBTN_BORDER}
                      requiredProps={requiredProps}
                    />
                    <ResDimensionsControl
                      label={__('Border Radius', 'zoloblocks')}
                      controlName={SUBMITBTN_BORDER_RADIUS}
                      requiredProps={requiredProps}
                      forBorderRadius={true}
                    />

                  </>
                }
                hoverComponents={
                  <>
                    <ColorControl
                      label={__('Color', 'zoloblocks')}
                      color={submitBtnHoverColor}
                      onChange={(value) =>
                        setAttributes({
                          submitBtnHoverColor: value,
                        })
                      }
                    />
                    <ColorControl
                      label={__('Background', 'zoloblocks')}
                      color={submitBtnBgHoverColor}
                      onChange={(value) =>
                        setAttributes({
                          submitBtnBgHoverColor: value,
                        })
                      }
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
              block="zolo/post-navigation"
            />
          </>
        }
      />
    </InspectorControls>
  );
}
