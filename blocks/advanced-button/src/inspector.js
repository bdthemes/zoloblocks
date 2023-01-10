/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl, TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal depencencies
 */
import ColorControl from "../../../src/controls/color-control";
import ResDimensionsControl from "../../../src/controls/dimensions-control";
import ResAlignmentControl from "../../../src/controls/res-alignment-control";
import ResRangeControl from "../../../src/controls/res-range-control";

// import { PRESETS } from "../../../src/global/constants";
import objAttributes from "./attributes";
import {
  BUTTON_ALIGNMENT,
  BUTTON_BRADIUS,
  BUTTON_MARGIN,
  BUTTON_PADDING,
  BUTTON_WIDTH,
  PRESETS,
} from "./constants";

function Inspector(props) {
  const { attributes, setAttributes } = props;
  const { uniqueId, preset, resDevice, buttonBGColor, buttonColor } =
    attributes;

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
          className="zb-parent-tab-panel"
          activeClass="active-tab"
          // onSelect={onSelect}
          tabs={[
            {
              name: "settings",
              title: "Settings",
              className: "zb-tab settings",
            },
            {
              name: "design",
              title: "Design",
              className: "zb-tab design",
            },
            {
              name: "advanced",
              title: "Advanced",
              className: "zb-tab advanced",
            },
          ]}
        >
          {(tab) => (
            <div className={"zb-tab-controls" + tab.name}>
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

                    <ColorControl
                      label={__("Button color", "zolo-blocks")}
                      color={buttonColor}
                      defaultColor={"red"}
                      onChange={(val) => setAttributes({ buttonColor: val })}
                    />

                    <ColorControl
                      label={__("Button BG color", "zolo-blocks")}
                      color={buttonBGColor}
                      defaultColor={"green"}
                      onChange={(val) => setAttributes({ buttonBGColor: val })}
                    />

                    <ResDimensionsControl
                      label="Margin"
                      controlName={BUTTON_MARGIN}
                      resRequiredProps={resRequiredProps}
                    />

                    <ResDimensionsControl
                      label="Padding"
                      controlName={BUTTON_PADDING}
                      resRequiredProps={resRequiredProps}
                    />
                    <ResDimensionsControl
                      label="Border Radius"
                      controlName={BUTTON_BRADIUS}
                      resRequiredProps={resRequiredProps}
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
