/**
 * WordPress dependencies
 */
import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
  ToggleControl,
  TextControl,
  RangeControl,
  SelectControl,
  FormFileUpload,
  Button,
  TextareaControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal depencencies
 */
const {
  ResAlignmentControl,
  ResRangeControl,
  ColorControl,
  TypographyDropdown,
  HeaderTabs,
  TabPanelControl,
  IconicBtnGroup,
  AdvancedOptions,
  ZoloPanelBody,
} = window.zoloModule;

import objAttributes from "./attributes";

import { TITLE_TYPO } from "./constants/typoPrefixConstant";
import { CHART_TYPES, SOURCE_TYPES, POSITIONS } from "./constants";
import { DEFAULT_ALIGNS } from "../../../src/global/constants";

function Inspector(props) {
  const { attributes, setAttributes } = props;
  const { apexChartOptions } = attributes;
  const {
    resMode,
    chartTypes,
    sourceType,
    uploadStatus,
    apexChartData,
    // additional options
    showTitle,
    showSubTitle,
    showLegend,
    showTooltip,
    showGrid,
    showDropshadow,
    titleObject,
    subTitleObject,
    legendObject,
    tooltipObject,

  } = attributes;

  console.log(titleObject);

  const requiredProps = {
    attributes,
    setAttributes,
    resMode,
    objAttributes,
  };

  // handle CSV Upload from FormFileUpload Component and pass on result to DataPareser
  const handleCSVupload = (e) => {
    const CSVreader = new FileReader();
    CSVreader.onload = () => {
      parseCSVData(CSVreader.result);
    };
    CSVreader.readAsText(e.target.files[0]);

    setAttributes({ uploadStatus: !uploadStatus });
  };


  // Function to parse CSV data and prepare it for ApexCharts
  function parseCSVData(csvData) {
    // Split the CSV data by lines
    const lines = csvData.split("\n");

    // Initialize arrays for labels and series data
    let labels = [];
    let series = [];

    // Iterate over each line in the CSV data
    for (let i = 0; i < lines.length; i++) {
      // Split each line by comma to get individual values
      const values = lines[i].split(",");

      // If it's the first line, assume it contains series names
      if (i === 0) {
        // Iterate over the values starting from the second value
        for (let j = 1; j < values.length; j++) {
          const seriesName = values[j]; // Extract series name from first row
          series.push({
            name: seriesName,
            data: [],
          });
        }
      } else {
        // Extract label from the first column
        const label = values[0];
        labels.push(label);

        // Iterate over the values starting from the second value
        for (let j = 1; j < values.length; j++) {
          const dataPoint = parseFloat(values[j]); // Parse the value as float
          if (!isNaN(dataPoint)) {
            // Check if it's a valid number
            series[j - 1].data.push(dataPoint);
          }
        }
      }
    }

    // Set the parsed data to the block attributes
    // console.log(labels, series);
    setAttributes({
      apexChartOptions: {
        options: {
          xaxis: {
            categories: labels,
          },
        },
        series: series,
      },
    });
  }

  if (sourceType === "input" ) {
    useEffect(() => {
      if (!uploadStatus) {
        parseCSVData(apexChartData);
      }
    }, [uploadStatus]);
  }


  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/star-rating"
        attributes={attributes}
        setAttributes={setAttributes}
        generalTab={
          <>
            <ZoloPanelBody
              title={__("General", "zolo-blocks")}
              firstOpen={true}
              panelProps={props}
            >
              <SelectControl
                label={__("Inpur Source", "zolo-blocks")}
                value={sourceType}
                options={SOURCE_TYPES}
                onChange={(v) => setAttributes({ sourceType: v })}
              />
              {sourceType === "upload" && (
                <FormFileUpload
                  accept=".csv"
                  onChange={handleCSVupload}
                  render={({ openFileDialog }) => (
                    <div>
                      <Button
                        style={{ marginBottom: "10px" }}
                        isSecondary
                        onClick={openFileDialog}
                      >
                        Upload CSV File
                      </Button>
                    </div>
                  )}
                />
              )}
              {sourceType == "input" && (
                <TextareaControl
                  label={__("Enter chart data as CSV format")}
                  value={apexChartData}
                  onChange={(value) => setAttributes({ apexChartData: value })}
                />
              )}
              <SelectControl
                label={__("Chart Types", "zolo-blocks")}
                value={chartTypes}
                options={CHART_TYPES}
                onChange={(v) => setAttributes({ chartTypes: v })}
              />
            </ZoloPanelBody>
            <ZoloPanelBody
              title={__("Additional Options", "zolo-blocks")}
              firstOpen={false}
              panelProps={props}
            >
              <ToggleControl
                label={__("Show Title", "zolo-blocks")}
                checked={showTitle}
                onChange={() =>
                  setAttributes({
                    showTitle: !showTitle,
                  })
                }
              />
              <ToggleControl
                label={__("Show sub Title", "zolo-blocks")}
                checked={showSubTitle}
                onChange={() =>
                  setAttributes({
                    showSubTitle: !showSubTitle,
                  })
                }
              />
              <ToggleControl
                label={__("Show Legend", "zolo-blocks")}
                checked={showLegend}
                onChange={() =>
                  setAttributes({
                    showLegend: !showLegend,
                  })
                }
              />
              <ToggleControl
                label={__("Show Tooltip", "zolo-blocks")}
                checked={showTooltip}
                onChange={() =>
                  setAttributes({
                    showTooltip: !showTooltip,
                  })
                }
              />
              <ToggleControl
                label={__("Show Grid", "zolo-blocks")}
                checked={showGrid}
                onChange={() =>
                  setAttributes({
                    showGrid: !showGrid,
                  })
                }
              />
              <ToggleControl
                label={__("Show Dropshadow", "zolo-blocks")}
                checked={showDropshadow}
                onChange={() =>
                  setAttributes({
                    showDropshadow: !showDropshadow,
                  })
                }
              />
            </ZoloPanelBody>
            {showTitle && (
              <ZoloPanelBody
                title={__("Title", "zolo-blocks")}
                firstOpen={false}
                panelProps={props}
              >
                <TextControl
                  label={__("Text", "zolo-blocks")}
                  onChange={(newText) =>
                    setAttributes({
                      titleObject: {
                        ...titleObject,
                        text: newText,
                      },
                    })
                  }
                  value={titleObject.text}
                />
                <IconicBtnGroup
                  label={__("Alignment", "zolo-blocks")}
                  value={titleObject.align}
                  onChange={(v) =>
                    setAttributes({
                      titleObject: {
                        ...titleObject,
                        align: v,
                      },
                    })
                  }
                  options={DEFAULT_ALIGNS}
                />
              </ZoloPanelBody>
            )}
            {showSubTitle && (
              <ZoloPanelBody
                title={__("Sub Title", "zolo-blocks")}
                firstOpen={false}
                panelProps={props}
              >
                <TextControl
                  label={__("Text", "zolo-blocks")}
                  onChange={(newText) =>
                    setAttributes({
                      subTitleObject: {
                        ...subTitleObject,
                        text: newText,
                      },
                    })
                  }
                  value={subTitleObject.text}
                />
                <IconicBtnGroup
                  label={__("Alignment", "zolo-blocks")}
                  value={subTitleObject.align}
                  onChange={(v) =>
                    setAttributes({
                      subTitleObject: {
                        ...subTitleObject,
                        align: v,
                      },
                    })
                  }
                  options={DEFAULT_ALIGNS}
                />
              </ZoloPanelBody>
            )}
            {showLegend && (
              <ZoloPanelBody
                title={__("Legend", "zolo-blocks")}
                firstOpen={false}
                panelProps={props}
              >
                <IconicBtnGroup
                  label={__("Position", "zolo-blocks")}
                  value={legendObject.position}
                  onChange={(v) =>
                    setAttributes({
                      legendObject: {
                        ...legendObject,
                        position: v,
                      },
                    })
                  }
                  options={POSITIONS}
                />
                <IconicBtnGroup
                  label={__("Horizontal Alignment", "zolo-blocks")}
                  value={legendObject.horizontalAlign}
                  onChange={(v) =>
                    setAttributes({
                      legendObject: {
                        ...legendObject,
                        horizontalAlign: v,
                      },
                    })
                  }
                  options={DEFAULT_ALIGNS}
                />
                <ToggleControl
                  label={__("Floating", "zolo-blocks")}
                  checked={legendObject.floating}
                  onChange={() =>
                    setAttributes({
                      legendObject: {
                        ...legendObject,
                        floating: !legendObject.floating,
                      },
                    })
                  }
                />
                <RangeControl
                  label={__("Offset X", "zolo-blocks")}
                  value={legendObject.offsetX}
                  onChange={(v) =>
                    setAttributes({
                      legendObject: {
                        ...legendObject,
                        offsetX: v,
                      },
                    })
                  }
                  min={-100}
                  max={100}
                />
                <RangeControl
                  label={__("Offset Y", "zolo-blocks")}
                  value={legendObject.offsetY}
                  onChange={(v) =>
                    setAttributes({
                      legendObject: {
                        ...legendObject,
                        offsetY: v,
                      },
                    })
                  }
                  min={-100}
                  max={100}
                />
              </ZoloPanelBody>
            )}
            {showTooltip && (
              <ZoloPanelBody
                title={__("Tooltip", "zolo-blocks")}
                firstOpen={false}
                panelProps={props}
              >
                <ToggleControl
                  label={__("Shared", "zolo-blocks")}
                  checked={tooltipObject.shared}
                  onChange={() =>
                    setAttributes({
                      tooltipObject: {
                        ...tooltipObject,
                        shared: !tooltipObject.shared,
                      },
                    })
                  }
                />
                <ToggleControl
                  label={__("Intersect", "zolo-blocks")}
                  checked={tooltipObject.intersect}
                  onChange={() =>
                    setAttributes({
                      tooltipObject: {
                        ...tooltipObject,
                        intersect: !tooltipObject.intersect,
                      },
                    })
                  }
                />
                <ToggleControl
                  label={__("Enabled", "zolo-blocks")}
                  checked={tooltipObject.enabled}
                  onChange={() =>
                    setAttributes({
                      tooltipObject: {
                        ...tooltipObject,
                        enabled: !tooltipObject.enabled,
                      },
                    })
                  }
                />
                <ToggleControl
                  label={__("Follow Cursor", "zolo-blocks")}
                  checked={tooltipObject.followCursor}
                  onChange={() =>
                    setAttributes({
                      tooltipObject: {
                        ...tooltipObject,
                        followCursor: !tooltipObject.followCursor,
                      },
                    })
                  }
                />
                <ToggleControl
                  label={__("Inverse Order", "zolo-blocks")}
                  checked={tooltipObject.inverseOrder}
                  onChange={() =>
                    setAttributes({
                      tooltipObject: {
                        ...tooltipObject,
                        inverseOrder: !tooltipObject.inverseOrder,
                      },
                    })
                  }
                />
                <ToggleControl
                  label={__("Hide Empty Series", "zolo-blocks")}
                  checked={tooltipObject.hideEmptySeries}
                  onChange={() =>
                    setAttributes({
                      tooltipObject: {
                        ...tooltipObject,
                        hideEmptySeries: !tooltipObject.hideEmptySeries,
                      },
                    })
                  }
                />

                <ToggleControl
                  label={__("Fill Series Color", "zolo-blocks")}
                  checked={tooltipObject.fillSeriesColor}
                  onChange={() =>
                    setAttributes({
                      tooltipObject: {
                        ...tooltipObject,
                        fillSeriesColor: !tooltipObject.fillSeriesColor,
                      },
                    })
                  }
                />
                {/* <ToggleControl
                  label={__("Theme", "zolo-blocks")}
                  checked={tooltipObject.theme}
                  onChange={() =>
                    setAttributes({
                      tooltipObject: {
                        ...tooltipObject,
                        theme: !tooltipObject.theme,
                      },
                    })
                  }
                /> */}
                <SelectControl
                  label={__("Inpur Source", "zolo-blocks")}
                  value={sourceType}
                  options={SOURCE_TYPES}
                  onChange={(v) => setAttributes({ sourceType: v })}
                />
              </ZoloPanelBody>
            )}
          </>
        }
        advancedTab={
          <>
            <AdvancedOptions
              attributes={attributes}
              setAttributes={setAttributes}
              requiredProps={requiredProps}
              block="zolo/star-rating"
            />
          </>
        }
      />
    </InspectorControls>
  );
}
export default Inspector;
