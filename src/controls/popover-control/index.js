import { Dropdown, Flex } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import ResetBtn from '../reset-btn';
import classNames from 'classnames';

const PopoverControl = ({ label = '', icon = '', isActive = false, isPro = false, children, onReset = null, onChange = null, hasValue = false }) => {
    return (
        <>
            <div className="zolo-control-container zolo-border-control">
                <div className="zolo-control-flex">
                    {label && (
                        <label className={classNames(`zolo-control-label ${isPro ? 'has-pro-feature' : ''}`)} htmlFor="zolo-control-label">
                            {label}
                            {isPro && <span className="zolo-pro-badge">{__('Pro', 'zoloblocks')}</span>}
                        </label>
                    )}

                    <Dropdown
                        className="zolo-background-control-popover-dropdown"
                        contentClassName="zolo-background-control-popover"
                        popoverProps={{ placement: 'bottom-start' }}
                        renderToggle={({ isOpen, onToggle }) => (
                            <Flex>
                                {hasValue && <ResetBtn onReset={onReset} />}
                                <button
                                    onClick={() => {
                                        onToggle();
                                        if (onChange) {
                                            onChange(hasValue);
                                        }
                                    }}
                                    aria-expanded={isOpen}
                                    style={
                                        isActive
                                            ? {
                                                  backgroundColor: '#f3f3f3',
                                                  border: '1px solid #F00',
                                              }
                                            : {}
                                    }
                                    className="zolo-panel-opener-btn"
                                >
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
                            </Flex>
                        )}
                        renderContent={() => <>{children}</>}
                    />
                </div>
            </div>
        </>
    );
};

export default PopoverControl;
