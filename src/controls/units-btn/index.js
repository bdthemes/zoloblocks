/**
 * WordPress dependencies
 */
import { useState, useRef, useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import useClickOutside from './use-click-outside';
import classNames from 'classnames';

const UnitsBtn = ({ selectedUnit = 'px', unitTypes, onClick, children }) => {
    const [switcherIsOpen, setSwitcherIsOpen] = useState(false);
    const unitsRef = useRef();
    const closeUnits = useCallback(() => setSwitcherIsOpen(false), []);

    useClickOutside(unitsRef, closeUnits);

    return (
        <div className={`zb-units-wrapper`}>
            {children}
            <div
                ref={unitsRef}
                className={classNames('zb-units-switchers', `${switcherIsOpen ? 'zb-unit-switchers-open' : ''}`)}
                onClick={() => setSwitcherIsOpen(() => !switcherIsOpen)}
            >
                <div className="zb-units-switchers-wrap">
                    {unitTypes.map((unit, index) => (
                        <Button
                            className={classNames('zb-unit-switcher', `${unit.value === selectedUnit && 'active'}`)}
                            key={index}
                            onClick={() => {
                                onClick(unit.value);
                                setSwitcherIsOpen(false);
                            }}
                        >
                            {unit.label}
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UnitsBtn;
