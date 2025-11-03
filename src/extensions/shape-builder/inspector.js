import { __ } from '@wordpress/i18n';

const {
    ZoloToggleControl,
    ZoloSelectControl,
    ZoloCardDivider,
    ResRangeControl,
    ColorControl,
    BorderControl,
    BoxShadowControl,
    NormalBGControl,
    ZoloPanelBody,
    PopoverControl,
    ZoloRepeater,
    ZoloRangeControl,
    ZoloTextControl,
} = window.zoloModule;

import { SHAPES_DATA } from './constants';

const Inspector = ({ panelProps }) => {
    const { attributes, setAttributes } = panelProps;
    const { shapeBuilder, shape = [] } = attributes;

    if (!shapeBuilder) return null;

    return (
        <ZoloPanelBody title={__('Shape Builder', 'zoloblocks')} panelProps={panelProps} isNew={true}>
            <ZoloToggleControl
                label={__('Enable Shape Builder', 'zoloblocks')}
                checked={shapeBuilder?.enabled || false}
                onChange={() =>
                    setAttributes({
                        shapeBuilder: {
                            ...shapeBuilder,
                            enabled: !shapeBuilder.enabled,
                        },
                    })
                }
            />

            {shapeBuilder.enabled && (
                <>
                    <ZoloRepeater
                        repeaterItems={shape}
                        onChange={(newShape) => setAttributes({ shape: newShape })}
                        itemLabelName="shapeType"
                        defaultLabel="Shape"
                        addUniqueId={true}
                    >
                        <ZoloSelectControl label={__('Shape Type', 'zoloblocks')} name="shapeType" default="circle" options={SHAPES_DATA} />
                        <ColorControl label={__('Color', 'zoloblocks')} name="color" default="" />

                        <div className="zolo-flex-col-control">
                            <ZoloRangeControl label={__('Width', 'zoloblocks')} name="width" default={100} min={10} max={500} />
                        </div>

                        <div className="zolo-flex-col-control">
                            <ZoloRangeControl label={__('Height', 'zoloblocks')} name="height" default={100} min={10} max={500} />
                        </div>
                    </ZoloRepeater>
                </>
            )}
        </ZoloPanelBody>
    );
};

export default Inspector;
