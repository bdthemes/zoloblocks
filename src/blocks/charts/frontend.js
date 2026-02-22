import ApexCharts from "apexcharts";

document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll(".zolo-block-charts");
  if (!blocks.length) return;

  blocks.forEach((block) => {
    const options = JSON.parse(block.dataset.options);
    console.log("options", options);

    const chartOptions = {
          series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
          chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
        };

    var chart = new ApexCharts(block, chartOptions);
    chart.render();
  });
});