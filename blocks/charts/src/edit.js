import { useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import ApexCharts from "react-apexcharts";
import { v4 as uuidv4 } from "uuid";

const { handleUniqueId, classArrayToStr, generateResRangeStyle } =
  window.zoloModule;

import { BLOCK_PREFIX } from "./constants";
import Inspector from "./inspector";
import Style from "./style";
export default function Edit(props) {
  const { attributes, setAttributes, className, clientId, isSelected } = props;
  const {
    preview,
    uniqueId,
    parentClasses,
    barChartData,
    chartType,
    uploadStatus,
    sourceType,
    chartInputData,
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
    pieChartData,
    chartBackground,
    pieChartColor,
    xAxisColor,
    xAxisFontSize,
    yAxisColor,
    yAxisFontSize,
    showToolbar,
    showDownload,
    showSelection,
    showZoom,
    showZoomIn,
    showZoomOut,
    showPanel,
    showReset,
    chartHeight,
    pieChartLabels
  } = attributes;

  // chart options
  const getChartOptions = (
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
    uid = "",
  ) => {
    return {
      dataLabels: { enabled: false },
      colors: pieChartColor,
      title: {
        text: showTitle ? titleObject.text : undefined,
        align: titleObject.align,
        style: {
          color: titleObject.style.color,
          fontSize: titleObject.style.fontSize,
        },
      },
      subtitle: {
        text: showSubTitle ? subTitleObject.text : undefined,
        align: subTitleObject.align,
        style: {
          color: subTitleObject.style.color,
          fontSize: subTitleObject.style.fontSize,
        },
      },
      legend: {
        show: showLegend,
        position: legendObject.position,
        horizontalAlign: legendObject.horizontalAlign,
        floating: legendObject.floating,
        offsetY: legendObject.offsetY,
        offsetX: legendObject.offsetX,
        labels: {
          useSeriesColors: legendObject.labels.useSeriesColors,
          colors: legendObject.labels.colors
        },
      },
      tooltip: {
        enabled: showTooltip,
        shared: tooltipObject.shared,
        followCursor: tooltipObject.followCursor,
        intersect: tooltipObject.intersect,
        inverseOrder: tooltipObject.inverseOrder,
        hideEmptySeries: tooltipObject.hideEmptySeries,
        fillSeriesColor: tooltipObject.fillSeriesColor,
        theme: tooltipObject.theme,
      },
      grid: {
        show: showGrid,
        xaxis: { lines: { show: showGrid ? showGridY : false } },
        yaxis: { lines: { show: showGrid ? showGridX : false } },
      },
      chart: {
        id: `chart-${uid}`,
        background: "transparent",
        height: 320,
        toolbar: {
          show: showToolbar,
          tools: {
            download: showDownload,
            selection: showSelection,
            zoom: showZoom,
            zoomin: showZoomIn,
            zoomout: showZoomOut,
            pan: showPanel,
            reset: showReset,
          },
        },
      },
      xaxis: {
        labels: {
          style: {
            colors: xAxisColor,
            fontSize: xAxisFontSize,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: yAxisColor,
            fontSize: yAxisFontSize,
          },
        },
      },
    };
  };

  useEffect(() => {
    const uid = uuidv4();
    const newChartOptions = {
      ...barChartData,
      options: getChartOptions(
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
        gridObject,
        uid,
        showToolbar,
        showDownload,
        showSelection,
        showZoom,
        showZoomIn,
        showZoomOut,
        showPanel,
        showReset,
      ),
      series: barChartData.series,
    };

    const newPieChartData = {
      ...pieChartData,
      options: getChartOptions(
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
        gridObject,
        uid,
      ),
      series: pieChartData.series,
    };
    setAttributes({
      barChartData: newChartOptions,
      pieChartData: newPieChartData,
    });
  }, [
    chartType,
    uploadStatus,
    sourceType,
    chartInputData,
    titleObject,
    subTitleObject,
    legendObject,
    tooltipObject,
    showGrid,
    showGridY,
    showGridX,
    showDropshadow,
    showTitle,
    showSubTitle,
    showLegend,
    showTooltip,
    chartBackground,
    pieChartColor,
    xAxisColor,
    xAxisFontSize,
    yAxisColor,
    yAxisFontSize,
    showToolbar,
    showDownload,
    showSelection,
    showZoom,
    showZoomIn,
    showZoomOut,
    showPanel,
    showReset,
  ]);


  useEffect(() => {
    handleUniqueId({
      BLOCK_PREFIX,
      uniqueId,
      setAttributes,
      clientId,
    });
  }, []);

  const blockProps = useBlockProps({
    className: classnames(
      className,
      `${uniqueId}`,
      classArrayToStr(parentClasses),
    ),
  });

  const renderOptions = () => {
    if (chartType === "pie" || chartType === "donut") {
      const newOptions = {
        ...pieChartData.options,
        labels: pieChartData.labels,
      };
      return newOptions;

    } else {
      return barChartData.options;
    }
  };

  const renderSeries = () => {
    if (chartType === "pie" || chartType === "donut") {
      return pieChartData.series;
    } else {
      return barChartData.series;
    }
  };

  if (preview) {
    return (
      <img
        src={zoloParams.blocksPreview.charts}
        alt={__("Charts Preview", "zolo-blocks")}
      />
    );
  }
  return (
    <>
      {isSelected && (
        <Inspector attributes={attributes} setAttributes={setAttributes} />
      )}
      <Style props={props}/>
      <div {...blockProps}>
        <ApexCharts
          options={renderOptions()}
          series={renderSeries()}
          type={chartType}
          width={"100%"}
          height={chartHeight}
        />
      </div>
    </>
  );
}
