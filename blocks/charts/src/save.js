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
    >
    </div>
  );
};

export default Save;
