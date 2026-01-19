import { SHAPES_DATA } from '../constants';
import { __ } from '@wordpress/i18n';

const ShapeControl = ({ value, onChange }) => {
    const { ZoloSelectControl } = window.zoloModule;

    return <ZoloSelectControl label={__('Shape Type', 'zoloblocks')} options={SHAPES_DATA} value={value} onChange={onChange} />;
};

export default ShapeControl;
