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
import { STAR_SIZE, TITLE_GAP, CHART_TYPES, SOURCE_TYPES } from "./constants";
import {
  FLEX_HORIZONTAL_OPTIONS,
  HEADING,
  ICON_POSITIONS,
} from "../../../src/global/constants";

function Inspector(props) {
  const { attributes, setAttributes } = props;
  const { apexChartOptions } = attributes;
  const {
    resMode,
    rating,
    showTitle,
    title,
    titleTag,
    titleColor,
    titlePosition,
    activeStarColor,
    inactiveStarColor,
    chartTypes,
    sourceType,
    uploadStatus,
    apexChartData,
  } = attributes;

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
    console.log(labels, series);
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

  useEffect(() => {
    parseCSVData(apexChartData);

  }, [apexChartData]);
  // }

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
                  onChange={(value) => setAttributes({ apexChartData:value })}
                />
              )}
              <SelectControl
                label={__("Chart Types", "zolo-blocks")}
                value={chartTypes}
                options={CHART_TYPES}
                onChange={(v) => setAttributes({ chartTypes: v })}
              />
            </ZoloPanelBody>
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
