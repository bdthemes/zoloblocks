import { render } from "@wordpress/element";
import ApexCharts from "react-apexcharts";

document.addEventListener("DOMContentLoaded", () => {
  const apexChartsItems = document.querySelectorAll(".zolo-chart");

  if (apexChartsItems.length) {
    apexChartsItems.forEach((item) => {
      const options = JSON.parse(item.dataset.options);

      const {
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
        uid,
      } = options;

      const newChartOptions = {
        dataLabels: { enabled: false },
        colors: pieChartColor,
        // ...(showTitle && {
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

      render(
        <ApexCharts
          options={newChartOptions}
          series={
            chartType === "pie" || chartType === "donut"
              ? pieChartData.series
              : barChartData.series
          }
          type={chartType}
          width={"100%"}
          height={320}
        />,
        item,
      );
    });
  }
});
