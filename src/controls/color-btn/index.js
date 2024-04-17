/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Dropdown, Button, ColorPicker, ColorIndicator } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

import { getContrastRatio } from '../../helpers/helper';

const ColorBtn = ({ color, onChange }) => {
    const COLORS = wp.data.select('core/editor').getEditorSettings().colors;

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
                    {COLORS && (
                        <Fragment>
                            <p className="zolo-theme-color-label">{__('Theme Colors', 'zoloblocks')}</p>
                            <div className="zolo-color-circular-option-grid">
                                {COLORS.map((paletteColor) => (
                                    <div className="components-circular-option-picker__option-wrapper">
                                        <Button
                                            className={`components-button components-circular-option-picker__option ${
                                                paletteColor.color === color ? 'is-pressed' : ''
                                            }`}
                                            style={{
                                                backgroundColor: paletteColor.color,
                                                color: paletteColor.color,
                                            }}
                                            onClick={() => {
                                                onChange(paletteColor.color);
                                            }}
                                        />
                                        {paletteColor.color === color && (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                width="24"
                                                height="24"
                                                fill={
                                                    // color contrast
                                                    getContrastRatio(paletteColor.color, '#fff') > 2 ? '#fff' : '#000'
                                                }
                                                aria-hidden="true"
                                                focusable="false"
                                            >
                                                <path d="M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"></path>
                                            </svg>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </Fragment>
                    )}
                </div>
            )}
        />
    );
};

export default ColorBtn;
