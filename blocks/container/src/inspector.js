/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { CardDivider, PanelBody, TextControl, TextareaControl, ToggleControl, BaseControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal depencencies
 */
const {
  ResRangeControl,
  BorderControl,
  ResDimensionsControl,
  NormalBGControl,
  BoxShadowControl,
  HeaderTabs,
  IconicBtnGroup,
  ResAlignmentControl,
} = window.zoloModule;

import objAttributes from './attributes';
import {
  CONTAINER_WIDTH,
  CONTAINER_BG,
  CONTAINER_BORDER,
  CONTAINER_BORDER_RADIUS,
  CONTAINER_BOX_SHADOW,
  CONTAINER_PADDING,
  CONTAINER_MARGIN,
  ROW_GAP,
  COLUMN_GAP,
  CONTENT_WIDTH,
  MIN_HEIGHT,
  FLEX_DIRECTION,
  FLEX_WRAP,
  FLEX_JUSTIFY,
  FLEX_ALIGN,
} from './constants';

import { FLEX_DIRECTIONS, FLEX_ALIGNS, FLEX_JUSTIFIES, FLEX_WRAPS, WIDTH_TYPES, CONTENT_WIDTH_TYPES } from '../../../src/global/constants';

function Inspector(props) {
  const { attributes, setAttributes } = props;
  const {
    containerWidthType,
    contentWidthType,
    resMode,
    isBlockRootParent
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
        generalTab={
          <>
            <PanelBody title={__('Layout', 'zolo-blocks')} initialOpen={false}>
              {isBlockRootParent && (
                <>
                  <IconicBtnGroup
                    label={__('Container Width', 'zolo-blocks')}
                    value={containerWidthType}
                    onChange={(value) =>
                      setAttributes({
                        containerWidthType: value,
                      })
                    }
                    options={WIDTH_TYPES}
                  />
                  {containerWidthType === 'full_width' && (
                    <>
                      <IconicBtnGroup
                        label={__('Content Width', 'zolo-blocks')}
                        value={contentWidthType}
                        onChange={(value) =>
                          setAttributes({
                            contentWidthType: value,
                          })
                        }
                        options={CONTENT_WIDTH_TYPES}
                      />
                      {contentWidthType === 'boxed' && (
                        <ResRangeControl
                          label={__('Content Width', 'zolo-blocks')}
                          controlName={CONTENT_WIDTH}
                          requiredProps={requiredProps}
                          min={0}
                          max={2000}
                        />
                      )}
                    </>
                  )}
                </>
              )}

              {((isBlockRootParent && containerWidthType === 'custom_width') || !isBlockRootParent) && (
                <ResRangeControl
                  label={__('Custom Width', 'zolo-blocks')}
                  controlName={CONTAINER_WIDTH}
                  requiredProps={requiredProps}
                  min={0}
                  max={2000}
                />
              )}

              <ResRangeControl
                label={__('Minimum Height', 'zolo-blocks')}
                controlName={MIN_HEIGHT}
                requiredProps={requiredProps}
                min={0}
                max={1000}
              />
            </PanelBody>
            <PanelBody title={__('Flex Properties', 'zolo-blocks')} initialOpen={false}>
              <ResAlignmentControl
                label={__('Direction', 'zolo-blocks')}
                controlName={FLEX_DIRECTION}
                requiredProps={requiredProps}
                alignOptions={FLEX_DIRECTIONS}
              />
              <ResAlignmentControl
                label={__('Align Items', 'zolo-blocks')}
                controlName={FLEX_ALIGN}
                requiredProps={requiredProps}
                alignOptions={FLEX_ALIGNS}
              />
              <ResAlignmentControl
                label={__('Justify Content', 'zolo-blocks')}
                controlName={FLEX_JUSTIFY}
                requiredProps={requiredProps}
                alignOptions={FLEX_JUSTIFIES}
              />
              <ResAlignmentControl
                label={__('Wrap', 'zolo-blocks')}
                controlName={FLEX_WRAP}
                requiredProps={requiredProps}
                alignOptions={FLEX_WRAPS}
              />
            </PanelBody>
          </>
        }
        styleTab={
          <>
            <PanelBody title={__('Container', 'zolo-blocks')} initialOpen={false}>
              <BorderControl
                label={__('Border', 'zolo-blocks')}
                controlName={CONTAINER_BORDER}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__('Border Radius', 'zolo-blocks')}
                controlName={CONTAINER_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />
              <BoxShadowControl
                controlName={CONTAINER_BOX_SHADOW}
                requiredProps={requiredProps}
                enableTransition={false}
              />

              <NormalBGControl requiredProps={requiredProps} controlName={CONTAINER_BG} noMainBGImg={false} />
            </PanelBody>

            <PanelBody title={__('Spacing', 'zolo-blocks')} initialOpen={false}>
              <ResRangeControl
                label={__('Row Gap', 'zolo-blocks')}
                controlName={ROW_GAP}
                requiredProps={requiredProps}
              />
              <ResRangeControl
                label={__('Column Gap', 'zolo-blocks')}
                controlName={COLUMN_GAP}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__('Padding', 'zolo-blocks')}
                controlName={CONTAINER_PADDING}
                requiredProps={requiredProps}
                forBorderRadius={false}
              />
              <ResDimensionsControl
                label={__('Margin', 'zolo-blocks')}
                controlName={CONTAINER_MARGIN}
                requiredProps={requiredProps}
                forBorderRadius={false}
              />
            </PanelBody>
          </>
        }
        advancedTab={<></>}
      />
    </InspectorControls>
  );
}

export default Inspector;
