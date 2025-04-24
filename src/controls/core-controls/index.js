import {
    TextControl as WPTextControl,
    RangeControl as WPRangeControl,
    __experimentalNumberControl as WPNumberControl,
    SelectControl as WPSelectControl,
    ToggleControl as WPToggleControl,
    BaseControl as WPBaseControl,
} from '@wordpress/components';

export const ZoloTextControl = (props) => {
    return <WPTextControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

export const ZoloRangeControl = (props) => {
    return <WPRangeControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

export const ZoloNumberControl = (props) => {
    return <WPNumberControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

export const ZoloSelectControl = (props) => {
    return <WPSelectControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

export const ZoloToggleControl = (props) => {
    return <WPToggleControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

export const ZoloBaseControl = (props) => {
    return <WPBaseControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};
