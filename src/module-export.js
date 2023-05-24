//Import controls css
import './controls/scss/controls.scss';

//Export Controls
export { default as BackgroundControl } from "./controls/background-control";
export { default as BorderControl } from "./controls/border-control";
export { default as BoxShadowControl } from "./controls/boxshadow-control";
export { default as ColorControl } from "./controls/color-control";
export { default as ResDimensionsControl } from "./controls/dimensions-control";
export { default as GradientControl } from "./controls/gradient-control";
export { default as IconPicker } from "./controls/icon-picker";
export { default as DisplayIcon } from "./controls/icon-picker/DisplayIcon";
export { default as ImageAvatar } from "./controls/image-avatar";
export { default as NormalBGControl } from "./controls/normal-bg-control";
export { default as RangeResetControl } from './controls/range-reset-control';
export { default as ResAlignmentControl } from "./controls/res-alignment-control";
export { default as ResRangeControl } from "./controls/res-range-control";
export { default as ResetControl } from "./controls/reset-control";
export { default as TextShadowControl } from './controls/textshadow-control';
export { default as TextStrokeControl } from "./controls/textstroke-control";
export { default as TypographyDropdown } from "./controls/typography-control";
export { default as TabPanelControl } from './controls/tabpanel-control';
export { default as StarRating } from './controls/star-rating';

//Export Helpers
export {
  generateBackgroundAttributes,
  generateBackgroundControlStyles
} from "./helpers/backgroundHelpers";
export {
  generateBorderAttributies,
  generateBorderStyle
} from "./helpers/border-helper";
export {
  generateBoxShadowAttributies,
  generateBoxShadowStyles
} from "./helpers/boxshadow-helper";
export {
  generateDimensionAttributes,
  generateDimensionStyle
} from "./helpers/dimension-helper";
export {
  DynamicTag,
  handleUniqueId,
  hasVal,
  softMinifyCssStrings
} from "./helpers/helper";
export {
  generateNormalBGAttributes,
  generateNormalBGControlStyles
} from "./helpers/normal-bg-helpers";
export {
  onDesktopBtnClick,
  onMobileBtnClick,
  onTabletBtnClick
} from "./helpers/preview-btns-helper";
export {
  generateResAlignmentAttributies,
  generateResAlignmentStyle
} from "./helpers/res-alignment-helper";
export {
  generateResRangeAttributies,
  generateResRangeStyle
} from "./helpers/res-range-helper";
export {
  generateTextShadowAttributies,
  generateTextShadowStyles
} from "./helpers/textshadow-helper";
export {
  generateTextStrokeAttributies,
  generateTextStrokeStyles
} from "./helpers/textstroke-helper";
export {
  generateTypographyAttributes,
  generateTypographyStyles
} from "./helpers/typoHelpers";
