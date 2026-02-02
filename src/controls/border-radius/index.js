import { __experimentalBorderRadiusControl as BorderRadiusControl } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const ZoloBorderRadius = ({ value, onChange, label, ...props }) => {
    return (
        <BorderRadiusControl
            label={label}
            values={value}
            onChange={onChange}
            { ...props }
        />
    );
}

export default ZoloBorderRadius;