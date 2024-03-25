import React, { useState } from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import Chart from "react-apexcharts";
import { v4 as uuidv4 } from "uuid";

const { handleUniqueId, classArrayToStr } = window.zoloModule;
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
    chartTypes,
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

  const [chartOptions, setChartOptions] = useState({ barChartData });
  const [pieChartOptions, setPieChartOptions] = useState({ pieChartData });
  // set chart options

  const getChartOptions = (showTitle, showSubTitle, showLegend, showTooltip, showGrid, showGridY, showGridX, titleObject, subTitleObject, legendObject, tooltipObject, gridObject, uid = '') => {
    return {
      dataLabels: { enabled: false },
      colors: pieChartColor,
      ...(showTitle && {
        title: {
          text: titleObject.text,
          align: titleObject.align,
          style: {
            color: titleObject.style.color,
            fontSize: titleObject.style.fontSize,
            // fontWeight: titleObject.style.fontWeight,
            // lineHeight: titleObject.style.lineHeight,
            // letterSpacing: titleObject.style.letterSpacing,
            // textAlign: titleObject.style.textAlign,
            // textTransform: titleObject.style.textTransform,
          },
        },
      }),
      ...(showSubTitle && {
        subtitle: {
          text: subTitleObject.text,
          align: subTitleObject.align,
          style: {
            color: subTitleObject.style.color,
            fontSize: subTitleObject.style.fontSize,
            // fontWeight: subTitleObject.style.fontWeight,
            // lineHeight: subTitleObject.style.lineHeight,
            // letterSpacing: subTitleObject.style.letterSpacing,
            // textAlign: subTitleObject.style.textAlign,
            // textTransform: subTitleObject.style.textTransform,
          },
        },
      }),
      ...(showLegend && {
        legend: {
          show: showLegend,
          position: legendObject.position,
          horizontalAlign: legendObject.horizontalAlign,
          floating: legendObject.floating,
          offsetY: legendObject.offsetY,
          offsetX: legendObject.offsetX,
          lebels: {
           style:{
             colors: '#f00',
            // useSeriesColors: legendObject.lebels.useSeriesColors,
           }
          },
        },
      }),
      ...(showTooltip && {
        tooltip: {
          enabled: true,
          shared: true,
          followCursor: false,
          intersect: false,
          inverseOrder: false,
          hideEmptySeries: true,
          fillSeriesColor: false,
          theme: tooltipObject.theme,
        },
      }),
      ...(showGrid && {
        grid: {
          show: showGrid,
          position: gridObject.position,
          xaxis: { lines: { show: showGridY } },
          yaxis: { lines: { show: showGridX } },
        },
      }),
      chart: {
        id: `chart-${uid}`,
        background: chartBackground,
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
  }
  useEffect(() => {
    const uid = uuidv4();
    const newChartOptions = {
      ...chartOptions,
      barChartData: {
        ...chartOptions.barChartData,
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
      },
    };
    const newPieChartData = {
      ...pieChartData,
      pieChartData: {
        ...pieChartOptions.pieChartData,
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
      },
    };
    setPieChartOptions(newPieChartData);
    setChartOptions(newChartOptions);
  }, [
    chartTypes,
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
    if (chartTypes === 'pie' || chartTypes === 'donut') {
      return pieChartOptions.pieChartData.options;
    } else {
      return chartOptions.barChartData.options;
    }
  };
  const renderSeries = () => {
    if (chartTypes === 'pie' || chartTypes === 'donut') {
      return pieChartOptions.pieChartData.series;
    } else {
      return chartOptions.barChartData.series;
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
      <Style props={props} />
      <div {...blockProps}>
        <Chart
          options={renderOptions()}
          series={renderSeries()}
          type={chartTypes}
          width={"100%"}
          height={320}
        />
      </div>
    </>
  );
}
