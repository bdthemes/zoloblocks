import { useBlockProps } from "@wordpress/block-editor";
import classnames from "classnames";

const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
  const {
    uniqueId,
    parentClasses,
    chartHeight,
    zoloId,
    chartType,
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
    showGridY,
    showGridX,
    gridObject,
    chartBackground,
    pieChartColor,
    xAxisColor,
    xAxisFontSize,
    yAxisColor,
    yAxisFontSize,
    barChartData,
    pieChartData,
    showToolbar,
    showDownload,
    showSelection,
    showZoom,
    showZoomIn,
    showZoomOut,
    showPanel,
    showReset,
  } = attributes;

  const chartOptions = {
    chartType,
    showTitle,
    chartHeight,
    showSubTitle,
    showLegend,
    showTooltip,
    showGrid,
    showDropshadow,
    titleObject,
    subTitleObject,
    legendObject,
    tooltipObject,
    showGridY,
    showGridX,
    gridObject,
    // chartBackground,
    pieChartColor,
    xAxisColor,
    xAxisFontSize,
    yAxisColor,
    yAxisFontSize,
    barChartData,
    pieChartData,
    showDropshadow,
    showToolbar,
    showDownload,
    showSelection,
    showZoom,
    showZoomIn,
    showZoomOut,
    showPanel,
    showReset,
  };

  return (
    <div
      {...useBlockProps.save({
        className: classnames(`${uniqueId}`, classArrayToStr(parentClasses)),
      })}
      {...(zoloId && {
        id: zoloId,
      })}
    >
      <div
        className="zolo-chart"
        data-options={JSON.stringify(chartOptions)}
      ></div>
    </div>
  );
};

export default Save;
