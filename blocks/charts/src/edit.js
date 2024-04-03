import { useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import ApexCharts from "react-apexcharts";
import { v4 as uuidv4 } from "uuid";

const { handleUniqueId, classArrayToStr, generateResRangeStyle } =
  window.zoloModule;

import { BLOCK_PREFIX, CHART_HEIGHT } from "./constants";
import Inspector from "./inspector";

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
  } = attributes;

      const {
        desktopRangeStyle: chartDeskHeight,
        tabRangeStyle: chartTabHeight,
        mobRangeStyle: chartMobHeight,
      } = generateResRangeStyle({
        controlName: CHART_HEIGHT,
        noProperty: true,
        attributes,
      });

      console.log(chartDeskHeight, chartTabHeight, chartMobHeight);

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
    gridObject,
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
          lebels: {
            style: {
              colors: "#f00",
              useSeriesColors: legendObject.lebels.useSeriesColors,
            },
          },
        },
        tooltip: {
          enabled: showTooltip,
          shared: true,
          followCursor: false,
          intersect: false,
          inverseOrder: false,
          hideEmptySeries: true,
          fillSeriesColor: false,
          theme: tooltipObject.theme,
        },
        grid: {
          show: showGrid,
          xaxis: { lines: { show: showGrid ? showGridY : false
           } },
          yaxis: { lines: { show: showGrid ? showGridX: false } },
        },
      chart: {
        id: `chart-${uid}`,
        background: chartBackground,
        height: 320,
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
      ),
      series: barChartData.series,
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: chartMobHeight.replace(";", "")
            },
          },
        },
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: chartTabHeight.replace(";", "")
            },
          },
        },
        {
          breakpoint: 1440,
          options: {
            chart: {
              height: chartDeskHeight.replace(";", "")
            },
          },
        },
      ],
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
      return pieChartData.options;
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
        src={zoloParams.blocksPreview.starRating}
        alt={__("Charts Preview", "zolo-blocks")}
      />
    );
  }

  return (
    <>
      {isSelected && (
        <Inspector attributes={attributes} setAttributes={setAttributes} />
      )}
      <div {...blockProps}>
        <ApexCharts
          options={renderOptions()}
          series={renderSeries()}
          type={chartType}
          width={"100%"}
          height={chartDeskHeight.replace(";", "")}
        />
      </div>
    </>
  );
}
