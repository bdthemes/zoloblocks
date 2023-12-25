import { Button, ColorPicker, Flex, FlexBlock, FlexItem, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
import ResetBtn from '../reset-btn';

const ColorControl = ({ label, defaultColor = '', color, onChange }) => {
    const [colorPanel, setColorPanel] = useState(false);
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
                </Popover>
            )}
        </div>
    );
};

export default ColorControl;
