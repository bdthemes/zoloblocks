import {
    TextControl as WPTextControl,
    RangeControl as WPRangeControl,
    __experimentalNumberControl as WPNumberControl,
    SelectControl as WPSelectControl,
    ToggleControl as WPToggleControl,
    BaseControl as WPBaseControl,
} from '@wordpress/components';


const TextControl = (props) => {
    return <WPTextControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

const RangeControl = (props) => {
    return (
        <WPRangeControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props}/>
    );
};

const NumberControl = (props) => {
    return <WPNumberControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

const SelectControl = (props) => {
    return <WPSelectControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

const ToggleControl = (props) => {
    return <WPToggleControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

const BaseControl = (props) => {
    return <WPBaseControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

export { TextControl, RangeControl, NumberControl, SelectControl, ToggleControl, BaseControl };