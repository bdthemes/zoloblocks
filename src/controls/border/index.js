import { BorderBoxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

const ZoloBorder = ({ value, onChange, label = __('Border', 'zoloblocks'), ...props }) => {
    const colors = useSelect((select) => {
        const settings = select('core/block-editor').getSettings();
        const pallete = settings.__experimentalFeatures.color.palette;
        const colorOption = [];

        for (const key in pallete) {
            const colorValues = pallete[key];
            const name = key.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
            colorOption.push({
                name,
                colors: colorValues
            });
        }
        return colorOption;
    }, []);

    return (
        <div className='zolo-border-control'>
            <BorderBoxControl
                label={label}
                value={value}
                onChange={onChange}
                colors={colors}
                {...props}
            />
        </div>
    );
};
export default ZoloBorder;
