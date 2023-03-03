//Import controls css
import "./controls/scss/controls.scss";

//Export Controls
export {default as BackgroundControl} from "./controls/background-control";
export {default as BorderControl} from "./controls/border-control";
export {default as BoxShadowControl} from "./controls/boxshadow-control";
export {default as ColorControl} from "./controls/color-control";
export {default as ResDimensionsControl} from "./controls/dimensions-control";
export {default as GradientControl} from "./controls/gradient-control";
export {default as ImageAvatar} from "./controls/image-avatar";
export {default as ResAlignmentControl} from "./controls/res-alignment-control";
export {default as ResRangeControl} from "./controls/res-range-control";
export {default as TypographyDropdown} from "./controls/typography-control";

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
    handleUniqueId,
    hasVal,
    softMinifyCssStrings
} from "./helpers/helper";

export {
    onDesktopBtnClick,
    onTabletBtnClick,
    onMobileBtnClick
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
    generateTypographyAttributes,
    generateTypographyStyles
} from "./helpers/typoHelpers";
