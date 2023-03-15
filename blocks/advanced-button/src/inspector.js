/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import {
  PanelBody,
  SelectControl,
  TabPanel,
  ColorPalette
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal depencencies
 */
import ResAlignmentControl from "../../../src/controls/res-alignment-control";
import ResRangeControl from "../../../src/controls/res-range-control";

// import { PRESETS } from "../../../src/global/constants";
import objAttributes from "./attributes";
import { BUTTON_ALIGNMENT, BUTTON_WIDTH, PRESETS } from "./constants";

function Inspector(props) {
  const { attributes, setAttributes } = props;
  const {
    uniqueId,
    preset,
    resDevice,
    bgColor,
    textColor
  } = attributes;

  const changePreset = (selected) => {
    setAttributes({ preset: selected });
    switch (selected) {
      case "preset-1":
        //Write code here
        setAttributes({
          bgColor: "#551ef7",
          textColor: "#ffffff",
        });
        break;
      case "preset-2":
        //Write code here
        break;
      default:
        return false;
    }
  };

  const resRequiredProps = {
    attributes,
    setAttributes,
    resDevice,
    objAttributes,
  };

  return (
    <InspectorControls key="controls">
      <div className="zolo-panel-control">
        <TabPanel
          className="eb-parent-tab-panel"
          activeClass="active-tab"
          // onSelect={onSelect}
          tabs={[
            {
              name: "settings",
              title: "Settings",
              className: "eb-tab settings",
            },
            {
              name: "design",
              title: "Design",
              className: "eb-tab design",
            },
            {
              name: "advanced",
              title: "Advanced",
              className: "eb-tab advanced",
            },
          ]}
        >
          {(tab) => (
            <div className={"eb-tab-controls" + tab.name}>
              {tab.name === "settings" && (
                <>
                  <PanelBody
                    title={__("General", "essential-blocks")}
                    initialOpen={true}
                  >
                    <SelectControl
                      label={__("Preset Designs", "essential-blocks")}
                      value={preset}
                      options={PRESETS}
                      onChange={(selected) => changePreset(selected)}
                    />

                    <ColorPalette
                      colors={[]}
                      value={bgColor}
                      onChange={(color) => setAttributes({ bgColor: color })}
                    />

                    <ColorPalette
                      colors={[]}
                      value={textColor}
                      onChange={(color) => setAttributes({ textColor: color })}
                    />

                    <ResRangeControl
                      label={__("Button Width", "zolo-blocks")}
                      resRequiredProps={resRequiredProps}
                      controlName={BUTTON_WIDTH}
                      min={0}
                      max={500}
                      step={1}
                    />

                    <ResAlignmentControl
                      label={__("Button Alignmet", "zolo-blocks")}
                      controlName={BUTTON_ALIGNMENT}
                      resRequiredProps={resRequiredProps}
                      alignOptions={[
                        { label: "Left", value: "left" },
                        { label: "Center", value: "center" },
                        { label: "Right", value: "right" },
                        { label: "Justify", value: "justify" },
                      ]}
                    />
                  </PanelBody>
                </>
              )}

              {tab.name === "design" && (
                <>
                  <PanelBody
                    title={__("Button", "essential-blocks")}
                    initialOpen={true}
                  >
                    {/* Color & Other styles */}
                  </PanelBody>
                </>
              )}

              {tab.name === "advance" && <>{/* Advanced Controls */}</>}
            </div>
          )}
        </TabPanel>
      </div>
    </InspectorControls>
  );
}

export default Inspector;
