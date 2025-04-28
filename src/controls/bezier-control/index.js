import BezierEditor from 'bezier-easing-editor';
import { useState } from '@wordpress/element';
import { ZoloBaseControl } from '../core-controls';

const BazierControl = ({ label = '', help = '', value = [], onChange, handleStroke = 3, handleRadius = 6, curveWidth = 2 }) => {
    return (
        <div className="zolo-control-container zolo-bazier-control">
            <ZoloBaseControl {...(label && { label: label })} {...(help && { help: help })}>
                <div className="zolo-bazier-wrapper">
                    <BezierEditor
                        value={value}
                        onChange={(v) => onChange(v)}
                        handleStroke={handleStroke}
                        handleRadius={handleRadius}
                        curveWidth={curveWidth}
                    />
                </div>
            </ZoloBaseControl>
        </div>
    );
};

export default BazierControl;
