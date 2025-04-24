import {
    TextControl,
    RangeControl,
    __experimentalNumberControl as NumberControl,
    SelectControl,
    ToggleControl,
    BaseControl,
} from '@wordpress/components';

export const ZoloTextControl = (props) => {
    return <TextControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

export const ZoloRangeControl = (props) => {
    return <RangeControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

export const ZoloNumberControl = (props) => {
    return <NumberControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

export const ZoloSelectControl = (props) => {
    return <SelectControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

export const ZoloToggleControl = (props) => {
    return <ToggleControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

export const ZoloBaseControl = (props) => {
    return <BaseControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};
