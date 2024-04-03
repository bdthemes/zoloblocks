import { render } from "@wordpress/element";
import ApexCharts from "react-apexcharts";

const PieChart = ({ options, series, type }) => {
  return (
    <ApexCharts
      options={options}
      series={series}
      type={type}
      width={"100%"}
      height={320}
    />
  );
};

const BarChart = ({ options, series, type }) => {
  return (
    <ApexCharts
      options={options}
      series={series}
      type={type}
      width={"100%"}
      height={320}
    />
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const apexChartsItems = document.querySelectorAll(".zolo-chart");

  if (apexChartsItems.length) {
    apexChartsItems.forEach((item) => {
      const options = JSON.parse(item.dataset.options);

      const { chartType, barChartData, pieChartData } = options;

      if (chartType === "pie" || chartType === "donut") {
        render(
          <PieChart
            options={options}
            series={pieChartData.series}
            type={chartType}
          />,
          item,
        );
      } else {
        render(
          <BarChart
            options={options}
            series={barChartData.series}
            type={chartType}
          />,
          item,
        );
      }
    });
  }
});
