import { BaseControl } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';

const MultiRangeControl = (props) => {
    const min = parseFloat(props.min || 0);
    const max = parseFloat(props.max || 100);
    const step = parseFloat(props.step || 1);

    // control title
    const label = props.label || 'Multirange Control';

    // top labels
    const fromLabel = props.fromLabel || 'From';
    const toLabel = props.toLabel || 'To';

    // rangle unit
    const unit = props.unit || 'px';

    const preventWheel = props.preventWheel === 'true' || props.preventWheel === true || false;
    const [minValue, set_minValue] = useState(parseFloat(props.minValue || 25));
    const [maxValue, set_maxValue] = useState(parseFloat(props.maxValue || 75));
    const [barMin, set_barMin] = useState(((minValue - min) / (max - min)) * 100);
    const [barMax, set_barMax] = useState(((max - maxValue) / (max - min)) * 100);

    let refThis = useRef();

    let barBox = null;
    let startX = null;
    let barValue = 0;
    let bar = null;
    const onBarLeftClick = (e) => {
        let _minValue = minValue - step;
        if (_minValue < min) {
            _minValue = min;
        }
        set_minValue(_minValue);
        let _barMin = ((_minValue - min) / (max - min)) * 100;
        set_barMin(_barMin);
        triggerInput(_minValue, maxValue);
    };
    const onInputMinChange = (e) => {
        let _minValue = parseFloat(e.target.value);
        if (_minValue > maxValue - step) {
            _minValue = maxValue - step;
        }
        set_minValue(_minValue);
        let _barMin = ((_minValue - min) / (max - min)) * 100;
        set_barMin(_barMin);
        triggerInput(_minValue, maxValue);
    };
    const onLeftThumbMousedown = (e) => {
        startX = e.clientX;
        if (e.type === 'touchstart') {
            if (e.touches.length === 1) {
                startX = e.touches[0].clientX;
            } else {
                return;
            }
        }

        barValue = minValue;
        bar = e.target.parentNode;
        barBox = bar.getBoundingClientRect();
        document.addEventListener('mousemove', onLeftThumbMousemove);
        document.addEventListener('mouseup', onLeftThumbMouseup);
        document.addEventListener('touchmove', onLeftThumbMousemove);
        document.addEventListener('touchend', onLeftThumbMouseup);
        bar.classList.add('active');
        e.target.classList.add('active');
    };
    const onLeftThumbMousemove = (e) => {
        let clientX = e.clientX;
        if (e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        }
        let dx = clientX - startX;
        let per = dx / barBox.width;
        let val = barValue + (max - min) * per;
        let strSetp = '' + step;
        let fixed = 0;
        strSetp.indexOf('.') >= 0 && (fixed = 2);
        val = parseFloat(val.toFixed(fixed));
        if (val < min) {
            val = min;
        } else if (val > maxValue - step) {
            val = maxValue - step;
        }
        set_minValue(val);
        let _barMin = ((val - min) / (max - min)) * 100;
        set_barMin(_barMin);
        triggerInput(val, maxValue);
    };
    const onLeftThumbMouseup = (e) => {
        document.removeEventListener('mousemove', onLeftThumbMousemove);
        document.removeEventListener('mouseup', onLeftThumbMouseup);
        document.removeEventListener('touchmove', onLeftThumbMousemove);
        document.removeEventListener('touchend', onLeftThumbMouseup);
        bar.classList.remove('active');
        e.target.classList.remove('active');
    };
    const onInnerBarLeftClick = (e) => {
        let _minValue = minValue + step;
        if (_minValue > maxValue - step) {
            _minValue = maxValue - step;
        }
        set_minValue(_minValue);
        let _barMin = ((_minValue - min) / (max - min)) * 100;
        set_barMin(_barMin);
        triggerInput(_minValue, maxValue);
    };
    const onInnerBarRightClick = (e) => {
        let _maxValue = maxValue - step;
        if (_maxValue < minValue + step) {
            _maxValue = minValue + step;
        }
        set_maxValue(_maxValue);
        let _barMax = ((max - _maxValue) / (max - min)) * 100;
        set_barMax(_barMax);
        triggerInput(minValue, _maxValue);
    };
    const onInputMaxChange = (e) => {
        let _maxValue = parseFloat(e.target.value);
        if (_maxValue < minValue + step) {
            _maxValue = minValue + step;
        }
        set_maxValue(_maxValue);
        let _barMax = ((max - _maxValue) / (max - min)) * 100;
        set_barMax(_barMax);
        triggerInput(minValue, _maxValue);
    };
    const onRightThumbMousedown = (e) => {
        startX = e.clientX;
        if (e.type === 'touchstart') {
            if (e.touches.length === 1) {
                startX = e.touches[0].clientX;
            } else {
                return;
            }
        }

        barValue = maxValue;
        bar = e.target.parentNode;
        barBox = bar.getBoundingClientRect();
        document.addEventListener('mousemove', onRightThumbMousemove);
        document.addEventListener('mouseup', onRightThumbMouseup);
        document.addEventListener('touchmove', onRightThumbMousemove);
        document.addEventListener('touchend', onRightThumbMouseup);
        bar.classList.add('active');
        e.target.classList.add('active');
    };
    const onRightThumbMousemove = (e) => {
        let clientX = e.clientX;
        if (e.type === 'touchmove') {
            clientX = e.touches[0].clientX;
        }
        let dx = clientX - startX;
        let per = dx / barBox.width;
        let val = barValue + (max - min) * per;
        let strSetp = '' + step;
        let fixed = 0;
        strSetp.indexOf('.') >= 0 && (fixed = 2);
        val = parseFloat(val.toFixed(fixed));
        if (val < minValue + step) {
            val = minValue + step;
        } else if (val > max) {
            val = max;
        }
        set_maxValue(val);
        let _barMax = ((max - val) / (max - min)) * 100;
        set_barMax(_barMax);
        triggerInput(minValue, val);
    };
    const onRightThumbMouseup = (e) => {
        document.removeEventListener('mousemove', onRightThumbMousemove);
        document.removeEventListener('mouseup', onRightThumbMouseup);
        document.removeEventListener('touchmove', onRightThumbMousemove);
        document.removeEventListener('touchend', onRightThumbMouseup);
        bar.classList.remove('active');
        e.target.classList.remove('active');
    };
    const onBarRightClick = (e) => {
        let _maxValue = maxValue + step;
        if (_maxValue > max) {
            _maxValue = max;
        }
        set_maxValue(_maxValue);
        let _barMax = ((max - _maxValue) / (max - min)) * 100;
        set_barMax(_barMax);
        triggerInput(minValue, _maxValue);
    };
    const onMouseWheel = (e) => {
        if (preventWheel === true) {
            return;
        }

        if (!e.shiftKey && !e.ctrlKey) {
            return;
        }

        let val = (max - min) / 100;
        if (val > 1) {
            val = 1;
        }
        if (e.deltaY < 0) {
            val = -val;
        }

        let _minValue = minValue;
        let _maxValue = maxValue;
        if (e.shiftKey && e.ctrlKey) {
            if (_minValue + val >= min && _maxValue + val <= max) {
                _minValue = _minValue + val;
                _maxValue = _maxValue + val;
            }
        } else if (e.ctrlKey) {
            val = _maxValue + val;
            if (val < _minValue + step) {
                val = _minValue + step;
            } else if (val > max) {
                val = max;
            }
            _maxValue = val;
        } else if (e.shiftKey) {
            val = _minValue + val;
            if (val < min) {
                val = min;
            } else if (val > _maxValue - step) {
                val = _maxValue - step;
            }
            _minValue = val;
        }

        set_maxValue(_maxValue);

        set_minValue(_minValue);
        let _barMin = ((_minValue - min) / (max - min)) * 100;
        set_barMin(_barMin);
        let _barMax = ((max - _maxValue) / (max - min)) * 100;
        set_barMax(_barMax);
        triggerInput(_minValue, _maxValue);
    };

    const triggerInput = (minValue, maxValue) => {
        let retObj = { min, max, minValue, maxValue };
        props.onInput && props.onInput(retObj);
        props.onChange && props.onChange(retObj);
    };
    useEffect(() => {
        refThis.current.parentNode.addEventListener('wheel', (e) => {
            if (preventWheel === true || (!e.shiftKey && !e.ctrlKey)) {
                return;
            }
            e.preventDefault();
        });
    }, [preventWheel]);

    useEffect(() => {
        const parsedMinValue = parseFloat(props.minValue);
        const parsedMaxValue = parseFloat(props.maxValue);
        if (!isNaN(parsedMinValue) && !isNaN(parsedMaxValue)) {
            set_minValue(parsedMinValue);
            set_maxValue(parsedMaxValue);
            set_barMin(((parsedMinValue - min) / (max - min)) * 100);
            set_barMax(((max - parsedMaxValue) / (max - min)) * 100);
        }
    }, [props.minValue, props.maxValue, min, max]);

    //.zolo-multi-rangle-control
    return (
        <BaseControl>
            <div className="zolo-control-container zolo-multi-rangle-control" onWheel={onMouseWheel} ref={refThis}>
                <label className="zolo-control-label" htmlFor="zolo-control-label">
                    {label}
                </label>
                <div className="top-label">
                    <div className="label-min">{fromLabel}</div>
                    <div className="label-max">{toLabel}</div>
                </div>
                <div className="bar" ref={refThis}>
                    <div className="bar-left" style={{ width: barMin + '%' }} onClick={onBarLeftClick}></div>
                    <input
                        className="input-type-range input-type-range-min"
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={minValue}
                        onInput={onInputMinChange}
                    />
                    <div className="thumb thumb-left" onMouseDown={onLeftThumbMousedown} onTouchStart={onLeftThumbMousedown}>
                        <div className="min-value">{minValue + unit}</div>
                    </div>
                    <div className="bar-inner">
                        <div className="bar-inner-left" onClick={onInnerBarLeftClick}></div>
                        <div className="bar-inner-right" onClick={onInnerBarRightClick}></div>
                    </div>
                    <input
                        className="input-type-range input-type-range-max"
                        type="range"
                        min={min}
                        max={max}
                        step={step}
                        value={maxValue}
                        onInput={onInputMaxChange}
                    />
                    <div className="thumb thumb-right" onMouseDown={onRightThumbMousedown} onTouchStart={onRightThumbMousedown}>
                        <div className="max-value">{maxValue + unit}</div>
                    </div>
                    <div className="bar-right" style={{ width: barMax + '%' }} onClick={onBarRightClick}></div>
                </div>
            </div>
        </BaseControl>
    );
};

export default MultiRangeControl;
