import { useBlockProps } from "@wordpress/block-editor";
import classnames from "classnames";

const { classArrayToStr } = window.zoloModule;

const Save = ({ attributes }) => {
  const {
    uniqueId,
    parentClasses,
    zoloId,
    chartTypes,
    sourceType,
    uploadStatus,
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

  const dataAttributes = {
    uid: uniqueId,
    chartType: chartTypes,
    pieChartData: pieChartData,
    barChartData: barChartData,
    // sourceType,
    // uploadStatus,
    // showTitle,
    // showSubTitle,
    // showLegend,
    // showTooltip,
    // showGrid,
    // showGridY,
    // showGridX,
    // showDropshadow,
    // title: titleObject,
    // subTitle: subTitleObject,
    // legend: legendObject,
    // tooltip: tooltipObject,
    // grid: gridObject,
    // chartBackground,
    // pieChartColor,
    // xAxisColor,
    // xAxisFontSize,
    // yAxisColor,
    // yAxisFontSize,
    // barChartData,
    // pieChartData,
  };



  return (
    <div
      {...useBlockProps.save({
        className: classnames(
          `${uniqueId}`,
          classArrayToStr(parentClasses),
        ),
      })}
      {...(zoloId && {
        id: zoloId,
      })}
      data-zoloapexcharts={JSON.stringify(dataAttributes)}
    >
    </div>
  );
};

export default Save;
