import { Button, ColorPicker, Flex, FlexBlock, FlexItem, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ResetBtn from '../reset-btn';
import { getContrastRatio } from '../../helpers/helper';
import { Fragment } from 'react';

const ColorControl = ({ label, defaultColor = '', color, onChange, disableAlpha = false }) => {
    const [colorPanel, setColorPanel] = useState(false);

    // fetch theme colors from api
    const COLORS = wp.data.select('core/editor').getEditorSettings().colors;
    //Default Color
    const DEFAULTCOLORS = [
        { color: '#F72585', name: 'PINK PIANO' },

        { color: '#7209B7', name: 'INDIVIOLET SUNSET' },

        { color: '#3A0CA3', name: 'DEEP DAIJIN BLUE' },

        { color: '#4361EE', name: 'THE RAINBOW FISH' },

        { color: '#4CC9F0', name: 'CLEAN POOL' },
    ];

    return (
        <div className="zb-color-control-wrapper">
            <Flex>
                <FlexBlock>{label || __('Color', 'zoloblocks')}</FlexBlock>
                {color && (
                    <FlexItem>
                        <ResetBtn
                            customClass="zb-reset-has-value"
                            onReset={() => {
                                onChange(defaultColor);
                            }}
                        />
                    </FlexItem>
                )}
                <FlexItem>
                    <Button
                        className="color-ball"
                        onClick={() => setColorPanel(true)}
                        style={{
                            background: color || defaultColor,
                        }}
                    ></Button>
                </FlexItem>
            </Flex>
            {colorPanel && (
                <Popover
                    position="bottom center"
                    onClose={() => {
                        setColorPanel(false);
                    }}
                    onFocusOutside={() => {
                        setColorPanel(false);
                    }}
                >
                    <ColorPicker
                        color={color}
                        onChange={(color) => {
                            onChange(color);
                        }}
                        // onChangeComplete={({ rgb }) => {
                        //     onChange(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`);
                        // }}
                     {...(!disableAlpha && { enableAlpha: true })}
                    />
                    {COLORS && (
                        <Fragment>
                            <p className="zolo-theme-color-label">{__('Theme Colors', 'zoloblocks')}</p>
                            <div className="zolo-color-circular-option-grid">
                                {COLORS.map((paletteColor) => (
                                    <div className="components-circular-option-picker__option-wrapper">
                                        <Button
                                            className={`components-button components-circular-option-picker__option ${`var(--wp--preset--color--${paletteColor.slug})` === color || paletteColor.color === color ? 'is-pressed' : ''}`}
                                            style={{
                                                backgroundColor: paletteColor.color,
                                                color: paletteColor.color,
                                            }}
                                            onClick={() => {
                                                onChange(`var(--wp--preset--color--${paletteColor.slug})` || paletteColor.color);
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

                    {/* default Color  */}

                    {DEFAULTCOLORS && (
                        <Fragment>
                            <p className="zolo-theme-color-label">{__('Default Colors', 'zoloblocks')}</p>
                            <div className="zolo-color-circular-option-grid">
                                {DEFAULTCOLORS.map((paletteColor) => (
                                    <div className="components-circular-option-picker__option-wrapper">
                                        <Button
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
                        </Fragment>
                    )}
                </Popover>
            )}
        </div>
    );
};

export default ColorControl;
