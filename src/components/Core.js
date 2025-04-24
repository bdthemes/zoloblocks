import { TextControl as WPTextControl, RangeControl as WPRangeControl } from '@wordpress/components';

const TextControl = (props) => {
    return <WPTextControl __nextHasNoMarginBottom={true} __next40pxDefaultSize={true} {...props} />;
};

const RangeControl = (props) => {
    return (
        <WPRangeControl
            __nextHasNoMarginBottom={true}
            __next40pxDefaultSize={true}
            {...props}
        />
    );
};

export { TextControl, RangeControl };