document.addEventListener("DOMContentLoaded", () => {
  const apexChartsItems = document.querySelectorAll(".wp-block-zolo-charts");

  if (apexChartsItems.length) {
    apexChartsItems.forEach((item) => {
      const uid = item.dataset.uid; // Extract UID from dataset
      const data = JSON.parse(item.dataset.zoloapexcharts); // Extract data from dataset
      console.log(data.barChartData.options);
      var chart = new ApexCharts(item, data.barChartData.options);
      chart.render();
    });
  }
});
