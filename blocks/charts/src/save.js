import { useBlockProps } from "@wordpress/block-editor";
import classnames from "classnames";

const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
  const {
    uniqueId,
    parentClasses,
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
  } = attributes;

  const chartOptions = {
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
    // chartBackground,
    pieChartColor,
    xAxisColor,
    xAxisFontSize,
    yAxisColor,
    yAxisFontSize,
    barChartData,
    pieChartData,
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
