/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import {
  ToggleControl,
  TextControl,
  RangeControl,
  SelectControl,
  FormFileUpload,
  Button,
  TextareaControl,
  CardDivider,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal depencencies
 */
const {
  ResRangeControl,
  SimpleRangeControl,
  ColorControl,
  HeaderTabs,
  IconicBtnGroup,
  AdvancedOptions,
  ZoloPanelBody,
  NormalBGControl,
  BoxShadowControl,
  BorderControl,
  ResDimensionsControl,
} = window.zoloModule;

import objAttributes from "./attributes";

import {
  CHART_TYPES,
  SOURCE_TYPES,
  POSITIONS,
  THEME_TYPES,
  CHART_HEIGHT,
} from "./constants";
import { CHART_BG_COLOR, CHART_BORDER, CHART_BORDER_RADIUS, CHART_MARGIN, CHART_PADDING, CHART_BOX_SHADOW} from "./constants";
import { DEFAULT_ALIGNS } from "../../../src/global/constants";
function Inspector(props) {
  const { attributes, setAttributes } = props;
  const {
    resMode,
    chartType,
    chartHeight,
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
    titleObject,
    subTitleObject,
    legendObject,
    tooltipObject,
    chartBackground,
    pieChartLength,
    barChartLength,
    pieChartLabels,
    xAxisColor,
    yAxisColor,
    showToolbar,
    showDownload,
    showSelection,
    showZoom,
    showZoomIn,
    showZoomOut,
    showPanel,
    showReset,
    showDropshadow,
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

  // handle CSV Input from TextareaControl Component and pass on result to DataPareser
  const handleInputData = (e) => {
    parseCSVData(e);
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
        labels: labels,
      },
      pieChartLength: pieSeries.length,
      barChartLength: series.length,
      pieChartLabels: labels,
    });
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
              title={__("General", "zoloblocks")}
              firstOpen={true}
              panelProps={props}
            >
              <SelectControl
                label={__("Inpur Source", "zoloblocks")}
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
                        className="zolo-action-button"
                        variant="primary"
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
                  onChange={(value) => {
                    setAttributes({ chartInputData: value });
                    handleInputData(value);
                  }}
                />
              )}
              <SelectControl
                label={__("Chart Type", "zoloblocks")}
                value={chartType}
                options={CHART_TYPES}
                onChange={(v) => {
                  setAttributes({ chartType: v });
                }}
              />
              {/* <ResRangeControl
                label={__("Height", "zoloblocks")}
                controlName={CHART_HEIGHT}
                requiredProps={requiredProps}
                min={200}
                max={1000}
                units={[{ label: __("px", "zoloblocks"), value: "px" }]}
              /> */}
              <SimpleRangeControl
                label={__("Height", "zoloblocks")}
                value={chartHeight}
                onChange={(height) =>
                  setAttributes({
                    chartHeight: height,
                  })
                }
                min={200}
                max={1000}
              />
            </ZoloPanelBody>
            <ZoloPanelBody
              title={__("Additional Options", "zoloblocks")}
              firstOpen={false}
              panelProps={props}
            >
              <ToggleControl
                label={__("Show Title", "zoloblocks")}
                checked={showTitle}
                onChange={() =>
                  setAttributes({
                    showTitle: !showTitle,
                  })
                }
              />
              <ToggleControl
                label={__("Show sub Title", "zoloblocks")}
                checked={showSubTitle}
                onChange={() =>
                  setAttributes({
                    showSubTitle: !showSubTitle,
                  })
                }
              />
              <ToggleControl
                label={__("Show Legend", "zoloblocks")}
                checked={showLegend}
                onChange={() =>
                  setAttributes({
                    showLegend: !showLegend,
                  })
                }
              />
              <ToggleControl
                label={__("Show Tooltip", "zoloblocks")}
                checked={showTooltip}
                onChange={() =>
                  setAttributes({
                    showTooltip: !showTooltip,
                  })
                }
              />
              <ToggleControl
                label={__("Show Grid", "zoloblocks")}
                checked={showGrid}
                onChange={() =>
                  setAttributes({
                    showGrid: !showGrid,
                  })
                }
              />
              <ToggleControl
                label={__("Show Toolbar", "zoloblocks")}
                checked={showToolbar}
                onChange={() =>
                  setAttributes({
                    showToolbar: !showToolbar,
                  })
                }
              />
              {showToolbar && (
                <>
                  <ToggleControl
                    label={__("Show Download", "zoloblocks")}
                    checked={showDownload}
                    onChange={() =>
                      setAttributes({
                        showDownload: !showDownload,
                      })
                    }
                  />
                  {/* <ToggleControl
                    label={__("Show Selection", "zoloblocks")}
                    checked={showSelection}
                    onChange={() =>
                      setAttributes({
                        showSelection: !showSelection,
                      })
                    }
                  /> */}
                  <ToggleControl
                    label={__("Show Zoom", "zoloblocks")}
                    checked={showZoom}
                    onChange={() =>
                      setAttributes({
                        showZoom: !showZoom,
                      })
                    }
                  />
                  <ToggleControl
                    label={__("Show ZoomIn", "zoloblocks")}
                    checked={showZoomIn}
                    onChange={() =>
                      setAttributes({
                        showZoomIn: !showZoomIn,
                      })
                    }
                  />
                  <ToggleControl
                    label={__("Show ZoomOut", "zoloblocks")}
                    checked={showZoomOut}
                    onChange={() =>
                      setAttributes({
                        showZoomOut: !showZoomOut,
                      })
                    }
                  />
                  <ToggleControl
                    label={__("Show Pan", "zoloblocks")}
                    checked={showPanel}
                    onChange={() =>
                      setAttributes({
                        showPanel: !showPanel,
                      })
                    }
                  />
                  <ToggleControl
                    label={__("Show Reset", "zoloblocks")}
                    checked={showReset}
                    onChange={() =>
                      setAttributes({
                        showReset: !showReset,
                      })
                    }
                  />
                </>
              )}
              {/* <ToggleControl
                label={__("Show Dropshadow", "zoloblocks")}
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
                title={__("Title", "zoloblocks")}
                firstOpen={false}
                panelProps={props}
              >
                <TextControl
                  label={__("Text", "zoloblocks")}
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
                  label={__("Alignment", "zoloblocks")}
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
                title={__("Sub Title", "zoloblocks")}
                firstOpen={false}
                panelProps={props}
              >
                <TextControl
                  label={__("Text", "zoloblocks")}
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
                  label={__("Alignment", "zoloblocks")}
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
                title={__("Legend", "zoloblocks")}
                firstOpen={false}
                panelProps={props}
              >
                <IconicBtnGroup
                  label={__("Position", "zoloblocks")}
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
                  label={__("Horizontal Alignment", "zoloblocks")}
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
                  label={__("Floating", "zoloblocks")}
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
                  label={__("Offset X", "zoloblocks")}
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
                  label={__("Offset Y", "zoloblocks")}
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
                title={__("Tooltip", "zoloblocks")}
                firstOpen={false}
                panelProps={props}
              >
                {/* <ToggleControl
                  label={__("Shared", "zoloblocks")}
                  checked={tooltipObject.shared}
                  onChange={() =>
                    setAttributes({
                      tooltipObject: {
                        ...tooltipObject,
                        shared: !tooltipObject.shared,
                      },
                    })
                  }
                /> */}
                {/* <ToggleControl
                  label={__("Intersect", "zoloblocks")}
                  checked={tooltipObject.intersect}
                  onChange={() =>
                    setAttributes({
                      tooltipObject: {
                        ...tooltipObject,
                        intersect: !tooltipObject.intersect,
                      },
                    })
                  }
                /> */}
                <ToggleControl
                  label={__("Enabled", "zoloblocks")}
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
                  label={__("Follow Cursor", "zoloblocks")}
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
                  label={__("Inverse Order", "zoloblocks")}
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
                  label={__("Hide Empty Series", "zoloblocks")}
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
                  label={__("Fill Series Color", "zoloblocks")}
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
                  label={__("Theme", "zoloblocks")}
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
                title={__("Grid", "zoloblocks")}
                firstOpen={false}
                panelProps={props}
              >
                <ToggleControl
                  label={__("Show Grid X", "zoloblocks")}
                  checked={showGridX}
                  onChange={() =>
                    setAttributes({
                      showGridX: !showGridX,
                    })
                  }
                />
                <ToggleControl
                  label={__("Show Grid Y", "zoloblocks")}
                  checked={showGridY}
                  onChange={() =>
                    setAttributes({
                      showGridY: !showGridY,
                    })
                  }
                />
                <CardDivider />
                {/* <IconicBtnGroup
                  label={__("Position", "zoloblocks")}
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
                /> */}
              </ZoloPanelBody>
            )}
          </>
        }
        styleTab={
          <>
            <ZoloPanelBody
              title={__("Charts", "zoloblocks")}
              firstOpen={true}
              stylePanel={true}
              panelProps={props}
            >
              <BorderControl
                label={__("Border", "zoloblocks")}
                controlName={CHART_BORDER}
                requiredProps={requiredProps}
              />
              <ResDimensionsControl
                label={__("Border Radius", "zoloblocks")}
                controlName={CHART_BORDER_RADIUS}
                requiredProps={requiredProps}
                forBorderRadius={true}
              />
              <ResDimensionsControl
                label={__("Padding", "zoloblocks")}
                controlName={CHART_PADDING}
                requiredProps={requiredProps}
                forBorderRadius={false}
              />
              <ResDimensionsControl
                label={__("Margin", "zoloblocks")}
                controlName={CHART_MARGIN}
                requiredProps={requiredProps}
                forBorderRadius={false}
              />
              <NormalBGControl
                requiredProps={requiredProps}
                controlName={CHART_BG_COLOR}
                noMainBGImg={false}
              />
              <BoxShadowControl
                controlName={CHART_BOX_SHADOW}
                requiredProps={requiredProps}
              />
            </ZoloPanelBody>
            <ZoloPanelBody
              title={__("Colors", "zoloblocks")}
              firstOpen={true}
              stylePanel={true}
              panelProps={props}
            >
              {/* <NormalBGControl
                requiredProps={requiredProps}
                controlName={CHART_BG_COLOR}
                noMainBGImg={false}
              /> */}
              {/* <ColorControl
                label={__("Background Color", "zoloblocks")}
                color={chartBackground}
                onChange={(color) => setAttributes({ chartBackground: color })}
              /> */}
              <ColorControl
                label={__("xAxis Color", "zoloblocks")}
                color={xAxisColor}
                onChange={(color) => setAttributes({ xAxisColor: color })}
              />
              <ColorControl
                label={__("yAxis Color", "zoloblocks")}
                color={yAxisColor}
                onChange={(color) => setAttributes({ yAxisColor: color })}
              />
              <CardDivider />
              {chartType === "pie" || chartType === "donut"
                ? Array.from(
                    { length: pieChartLength },
                    (_, index) => index,
                  ).map((i) => (
                    <ColorControl
                      label={__(`${chartType} color ${i + 1}`, "zoloblocks")}
                      color={attributes.pieChartColor[i]}
                      onChange={(color) => {
                        const pieChartColor = [...attributes.pieChartColor];
                        pieChartColor[i] = color;
                        setAttributes({ pieChartColor });
                      }}
                    />
                  ))
                : // Else condition
                  Array.from(
                    { length: barChartLength },
                    (_, index) => index,
                  ).map((i) => (
                    <ColorControl
                      label={__(`${chartType} color ${i + 1}`, "zoloblocks")}
                      color={attributes.pieChartColor[i]}
                      onChange={(color) => {
                        const pieChartColor = [...attributes.pieChartColor];
                        pieChartColor[i] = color;
                        setAttributes({ pieChartColor });
                      }}
                    />
                  ))}
            </ZoloPanelBody>
            {showTitle && (
              <>
                <ZoloPanelBody
                  title={__("Title", "zoloblocks")}
                  firstOpen={false}
                  panelProps={props}
                >
                  <ColorControl
                    label={__("Title Color", "zoloblocks")}
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
                    label={__("Title Font Size", "zoloblocks")}
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
                  title={__("Sub Title", "zoloblocks")}
                  firstOpen={false}
                  panelProps={props}
                >
                  <ColorControl
                    label={__("Sub Title Color", "zoloblocks")}
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
                    label={__("Sub Title Font Size", "zoloblocks")}
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
                  title={__("Legend Color", "zoloblocks")}
                  firstOpen={false}
                  panelProps={props}
                >
                  <ToggleControl
                    label={__("useSeriesColors", "zoloblocks")}
                    checked={legendObject.labels.useSeriesColors}
                    onChange={() =>
                      setAttributes({
                        legendObject: {
                          ...legendObject,
                          labels: {
                            useSeriesColors:
                              !legendObject.labels.useSeriesColors,
                          },
                        },
                      })
                    }
                  />
                  {
                    // If condition
                    !legendObject.labels.useSeriesColors && (
                      <ColorControl
                        label={__("Legend Color", "zoloblocks")}
                        color={legendObject.labels.colors}
                        onChange={(color) =>
                          setAttributes({
                            legendObject: {
                              ...legendObject,
                              labels: {
                                ...legendObject.labels,
                                colors: color,
                              },
                            },
                          })
                        }
                      />
                    )
                  }
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
