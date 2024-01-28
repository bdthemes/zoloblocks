import { Button, ColorPicker, Flex, FlexBlock, FlexItem, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import ResetBtn from '../reset-btn';
import { getContrastRatio } from '../../helpers/helper';
import { Fragment } from 'react';

const ColorControl = ({ label, defaultColor = '', color, onChange }) => {
    const [colorPanel, setColorPanel] = useState(false);

    // fetch theme colors from api
    const COLORS = wp.data.select('core/editor').getEditorSettings().colors;

    return (
        <div className="zb-color-control-wrapper">
            <Flex>
                <FlexBlock>{label || __('Color', 'zolo-blocks')}</FlexBlock>
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
                        onChangeComplete={({ rgb }) => {
                            onChange(`rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`);
                        }}
                    />
                    {COLORS && (
                        <Fragment>
                            <p className="zolo-theme-color-label">{__('Theme Colors', 'zolo-blocks')}</p>
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
                </Popover>
            )}
        </div>
    );
};

export default ColorControl;
