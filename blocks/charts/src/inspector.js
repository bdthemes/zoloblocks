/**
 * WordPress dependencies
 */
import { useEffect, useState } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import {
  ToggleControl,
  TextControl,
  RangeControl,
  SelectControl,
  FormFileUpload,
  Button,
  TextareaControl,
  ButtonGroup,
  BaseControl,
  CardDivider,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal depencencies
 */
const {
  ResAlignmentControl,
  ResRangeControl,
  SimpleRangeControl,
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
import {
  CHART_TYPES,
  SOURCE_TYPES,
  POSITIONS,
  THEME_TYPES,
  GRID_POSITION,
} from "./constants";
import { DEFAULT_ALIGNS } from "../../../src/global/constants";
function Inspector(props) {
  const { attributes, setAttributes } = props;
  const {
    resMode,
    chartTypes,
    sourceType,
    uploadStatus,
    chartInputData,
    // additional options
    showTitle,
    showSubTitle,
    showLegend,
    showTooltip,
    showGrid,
    showGridY,
    showGridX,
    showDropshadow,
    titleObject,
    subTitleObject,
    legendObject,
    tooltipObject,
    gridObject,
    chartBackground,
    pieChartLength,
    barChartLength,
    xAxisColor,
    yAxisColor,
  } = attributes;

  console.log("attributes", xAxisColor);

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

  function parseCSVData(csvData) {
    const rows = csvData.trim().split("\n");
    const headers = rows[0].split(",");
    const parsedData = [];

    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(",");
      const obj = {};

      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = rowData[j];
      }

      parsedData.push(obj);
    }
    const labels = parsedData.map((data) => data[headers[0]]);
    const series = headers.slice(1).map((header) => ({
      name: header,
      data: parsedData.map((data) => data[header]),
    }));
    const pieSeries = parsedData
      .map((data, index) => data[headers[1]])
      .map((i) => Number(i));


    setAttributes({
      barChartData: {
        options: {
          labels: labels,
        },
        series: series,
      },
      pieChartData: {
        options: {
          labels: labels,
        },
        series: pieSeries,
      },
      pieChartLength: pieSeries.length,
      barChartLength: series.length,
    });
  }

  if (sourceType === "input" && chartInputData !== "") {
    useEffect(() => {
      if (!uploadStatus) {
        parseCSVData(chartInputData);
      }
    }, [chartInputData]);
  }

  return (
    <InspectorControls key="controls">
      <HeaderTabs
        block="zolo/charts"
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
                        variant="secondary"
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
                  value={chartInputData}
                  rows={10}
                  onChange={(value) => setAttributes({ chartInputData: value })}
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
              {/* <ToggleControl
                label={__("Show Dropshadow", "zolo-blocks")}
                checked={showDropshadow}
                onChange={() =>
                  setAttributes({
                    showDropshadow: !showDropshadow,
                  })
                }
              /> */}
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
                <CardDivider />
                <IconicBtnGroup
                  label={__("Theme", "zolo-blocks")}
                  value={tooltipObject.theme}
                  onChange={(v) =>
                    setAttributes({
                      tooltipObject: {
                        ...tooltipObject,
                        theme: v,
                      },
                    })
                  }
                  options={THEME_TYPES}
                />
              </ZoloPanelBody>
            )}
            {showGrid && (
              <ZoloPanelBody
                title={__("Grid", "zolo-blocks")}
                firstOpen={false}
                panelProps={props}
              >
                <ToggleControl
                  label={__("Show Grid X", "zolo-blocks")}
                  checked={showGridX}
                  onChange={() =>
                    setAttributes({
                      showGridX: !showGridX,
                    })
                  }
                />
                <ToggleControl
                  label={__("Show Grid Y", "zolo-blocks")}
                  checked={showGridY}
                  onChange={() =>
                    setAttributes({
                      showGridY: !showGridY,
                    })
                  }
                />
                <CardDivider />
                <IconicBtnGroup
                  label={__("Position", "zolo-blocks")}
                  value={gridObject.position}
                  onChange={(v) =>
                    setAttributes({
                      gridObject: {
                        ...gridObject,
                        position: v,
                      },
                    })
                  }
                  options={GRID_POSITION}
                />
              </ZoloPanelBody>
            )}
          </>
        }
        styleTab={
          <>
            <ZoloPanelBody
              title={__("Colors", "zolo-blocks")}
              firstOpen={true}
              stylePanel={true}
              panelProps={props}
            >
              <ColorControl
                label={__("Background Color", "zolo-blocks")}
                color={chartBackground}
                onChange={(color) => setAttributes({ chartBackground: color })}
              />
              <ColorControl
                label={__("xAxis Color", "zolo-blocks")}
                color={xAxisColor}
                onChange={(color) => setAttributes({ xAxisColor: color })}
              />
              <ColorControl
                label={__("yAxis Color", "zolo-blocks")}
                color={yAxisColor}
                onChange={(color) => setAttributes({ yAxisColor: color })}
              />
              <CardDivider />
              {(chartTypes === "pie" || chartTypes === "donut") &&
                //loop for each chart length
                Array.from({ length: pieChartLength }, (_, index) => index).map(
                  (i) => (
                    <ColorControl
                      label={__(`${chartTypes} color ${i + 1}`, "zolo-blocks")}
                      color={attributes.pieChartColor[i]}
                      onChange={(color) => {
                        const pieChartColor = [...attributes.pieChartColor];
                        pieChartColor[i] = color;
                        setAttributes({ pieChartColor });
                      }}
                    />
                  ),
                )}
              {(chartTypes !== "pie" || chartTypes !== "donut") &&
                //loop for each chart length
                Array.from({ length: barChartLength }, (_, index) => index).map(
                  (i) => (
                    <ColorControl
                      label={__(`${chartTypes} color ${i + 1}`, "zolo-blocks")}
                      color={attributes.pieChartColor[i]}
                      onChange={(color) => {
                        const pieChartColor = [...attributes.pieChartColor];
                        pieChartColor[i] = color;
                        setAttributes({ pieChartColor });
                      }}
                    />
                  ),
                )}
            </ZoloPanelBody>
            {showTitle && (
              <>
                <ZoloPanelBody
                  title={__("Title", "zolo-blocks")}
                  firstOpen={false}
                  panelProps={props}
                >
                  <ColorControl
                    label={__("Title Color", "zolo-blocks")}
                    color={titleObject.style.color}
                    onChange={(color) =>
                      setAttributes({
                        titleObject: {
                          ...titleObject,
                          style: {
                            ...titleObject.style,
                            color: color,
                          },
                        },
                      })
                    }
                  />
                  <SimpleRangeControl
                    label={__("Title Font Size", "zolo-blocks")}
                    value={titleObject.style.fontSize}
                    onChange={(fontSize) =>
                      setAttributes({
                        titleObject: {
                          ...titleObject,
                          style: {
                            ...titleObject.style,
                            fontSize: fontSize,
                          },
                        },
                      })
                    }
                    min={0}
                    max={100}
                  />
                </ZoloPanelBody>
              </>
            )}
            {showSubTitle && (
              <>
                <ZoloPanelBody
                  title={__("Sub Title", "zolo-blocks")}
                  firstOpen={false}
                  panelProps={props}
                >
                  <ColorControl
                    label={__("Sub Title Color", "zolo-blocks")}
                    color={subTitleObject.style.color}
                    onChange={(color) =>
                      setAttributes({
                        subTitleObject: {
                          ...subTitleObject,
                          style: {
                            ...subTitleObject.style,
                            color: color,
                          },
                        },
                      })
                    }
                  />
                  <SimpleRangeControl
                    label={__("Sub Title Font Size", "zolo-blocks")}
                    value={subTitleObject.style.fontSize}
                    onChange={(fontSize) =>
                      setAttributes({
                        subTitleObject: {
                          ...subTitleObject,
                          style: {
                            ...subTitleObject.style,
                            fontSize: fontSize,
                          },
                        },
                      })
                    }
                    min={0}
                    max={100}
                  />
                </ZoloPanelBody>
              </>
            )}
            {showLegend && (
              <>
                <ZoloPanelBody
                  title={__("Legend", "zolo-blocks")}
                  firstOpen={false}
                  panelProps={props}
                >
                  <ColorControl
                    label={__("Legend Color", "zolo-blocks")}
                    color={legendObject.lebels.colors}
                    onChange={(color) =>
                      setAttributes({
                        legendObject: {
                          ...legendObject,
                          lebels: {
                            colors: color,
                          },
                        },
                      })
                    }
                  />
                </ZoloPanelBody>
              </>
            )}
          </>
        }
        advancedTab={
          <>
            <AdvancedOptions
              attributes={attributes}
              setAttributes={setAttributes}
              requiredProps={requiredProps}
              block="zolo/charts"
            />
          </>
        }
      />
    </InspectorControls>
  );
}
export default Inspector;
