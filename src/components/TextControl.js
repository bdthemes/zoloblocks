import { TextControl as WPTextControl } from '@wordpress/components';

const TextControl = (props) => {
    return (
        <WPTextControl
            __nextHasNoMarginBottom={true}
            __next40pxDefaultSize={true}
            {...props}
        />
    );
};

export default TextControl;