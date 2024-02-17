import { MediaUpload } from '@wordpress/block-editor';
import {
    BaseControl,
    Button,
    ButtonGroup,
    RangeControl,
    SelectControl,
    Popover,
    Dropdown,
    Flex,
    FlexBlock,
    FlexItem,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { BACKGROUND_TYPES } from '../../global/constants';
import ColorControl from '../color-control';
import GradientControl from '../gradient-control';
import ImageAvatar from '../image-avatar';
import UnitBtn from '../unit-btn';
import WithResDeviceBtn from '../with-res-device-btn';
import ResetBtn from '../reset-btn';

const PopoverControl = ({ label = '', icon = '', children }) => {
    return (
        <>
            <div className="zolo-control-container zolo-border-control">
                <div className="zolo-control-flex">
                    <label className="zolo-control-label" htmlFor="zolo-control-label">
                        {label || __('Popover Control', 'zolo-blocks')}
                    </label>
                    <Dropdown
                        className="zolo-background-control-popover-dropdown"
                        contentClassName="zolo-background-control-popover"
                        popoverProps={{ placement: 'bottom-start' }}
                        renderToggle={({ isOpen, onToggle }) => (
                            <button onClick={onToggle} aria-expanded={isOpen} className="zolo-panel-opener-btn">
                                {icon || (
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x={9} y={9} width={12} height={12} rx={2} stroke="#4D4D4D" strokeWidth="1.5" />
                                        <path
                                            d="M9 15H5C3.89543 15 3 14.1046 3 13V5C3 3.89543 3.89543 3 5 3H13C14.1046 3 15 3.89543 15 5V9"
                                            stroke="#4D4D4D"
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                )}
                            </button>
                        )}
                        renderContent={() => <>{children}</>}
                    />
                </div>
            </div>
        </>
    );
};

export default PopoverControl;
