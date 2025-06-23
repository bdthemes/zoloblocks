/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ZoloDropdown, ZoloButton, ZoloColorPicker, ZoloColorIndicator } from '../core-controls';
import { getContrastRatio } from '../../helpers/helper';

const ColorBtn = ({ color, onChange }) => {
    const COLORS = wp.data.select('core/editor').getEditorSettings().colors;

    const DEFAULTCOLORS = [
        { color: '#F72585', name: 'PINK PIANO' },

        { color: '#7209B7', name: 'INDIVIOLET SUNSET' },

        { color: '#3A0CA3', name: 'DEEP DAIJIN BLUE' },

        { color: '#4361EE', name: 'THE RAINBOW FISH' },

        { color: '#4CC9F0', name: 'CLEAN POOL' },
    ];

    return (
        <ZoloDropdown
            className="zolo-color-picker-btn"
            popoverProps={{
                placement: 'bottom-end',
            }}
            renderToggle={({ isOpen, onToggle }) => (
                <ZoloButton onClick={onToggle} aria-expanded={isOpen} className="color-ball-btn">
                    <ZoloColorIndicator colorValue={color} className="color-ball" />
                </ZoloButton>
            )}
            renderContent={() => (
                <div className="zolo-color-picker">
                    <ZoloColorPicker color={color} disableAlpha={false} onChangeComplete={(value) => onChange(value.hex)} />
                    {COLORS && (
                        <>
                            <p className="zolo-theme-color-label">{__('Theme Colors', 'zoloblocks')}</p>
                            <div className="zolo-color-circular-option-grid">
                                {COLORS.map((paletteColor, index) => (
                                    <div
                                        key={`theme-color-${paletteColor.color}-${index}`}
                                        className="components-circular-option-picker__option-wrapper"
                                    >
                                        <ZoloButton
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
                        </>
                    )}

                    {/* default Color  */}

                    {DEFAULTCOLORS && (
                        <>
                            <p className="zolo-theme-color-label">{__('Default Colors', 'zoloblocks')}</p>
                            <div className="zolo-color-circular-option-grid">
                                {DEFAULTCOLORS.map((paletteColor, index) => (
                                    <div
                                        key={`default-color-${paletteColor.color}-${index}`}
                                        className="components-circular-option-picker__option-wrapper"
                                    >
                                        <ZoloButton
                                            className={`components-button components-circular-option-picker__option ${paletteColor.color === color ? 'is-pressed' : ''}`}
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
                        </>
                    )}
                </div>
            )}
        />
    );
};

export default ColorBtn;
