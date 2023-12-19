/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Dropdown, Button, ColorPicker, ColorIndicator } from '@wordpress/components';

const ColorBtn = ({ color, onChange }) => {
    return (
        <Dropdown
            className="zolo-color-picker-btn"
            position="bottom right"
            renderToggle={({ isOpen, onToggle }) => (
                <Button onClick={onToggle} aria-expanded={isOpen} className="color-ball-btn">
                    <ColorIndicator colorValue={color} className="color-ball" />
                </Button>
            )}
            renderContent={() => (
                <div className="zolo-color-picker">
                    <ColorPicker color={color} disableAlpha={false} onChangeComplete={(value) => onChange(value.hex)} />
                </div>
            )}
        />
    );
};

export default ColorBtn;
