import { createRoot } from 'react-dom/client';
import React from 'react';

import ApexCharts from 'react-apexcharts';
import { v4 as uuidv4 } from 'uuid';
document.addEventListener('DOMContentLoaded', () => {
    const uid = uuidv4();
    const apexChartsItems = document.querySelectorAll('.zolo-chart');

    if (apexChartsItems.length > 0) {
        apexChartsItems.forEach((item) => {
            const options = JSON.parse(item.dataset.options);
            try {
                          const {
                              chartType,
                              showTitle,
                              showSubTitle,
                              chartHeight,
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
                              showToolbar,
                              showDownload,
                              showSelection,
                              showZoom,
                              showZoomIn,
                              showZoomOut,
                              showPanel,
                              showReset,
                          } = options;

                          const commonOptions = {
                              dataLabels: { enabled: false },
                              colors: pieChartColor,
                              chart: {
                                  id: `chart-${uid}`,
                                  background: 'transparent',
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
                                      colors: legendObject.labels?.colors,
                                      useSeriesColors: legendObject.labels?.useSeriesColors,
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
                              labels: barChartData.options.labels,
                          };
                          const newChartOptions = {
                              ...commonOptions,
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
                          const newPieChartOptions = {
                              ...commonOptions,
                              labels: pieChartData.labels,
                          };

                          const root = createRoot(item);
                          root.render(
                              <ApexCharts
                                  options={chartType === 'pie' || chartType === 'donut' ? newPieChartOptions : newChartOptions}
                                  series={chartType === 'pie' || chartType === 'donut' ? pieChartData.series : barChartData.series}
                                  type={chartType}
                                  width={'100%'}
                                  height={chartHeight !== undefined ? chartHeight : 300}
                              />
                          );
            } catch (error) {
                console.error(error);
            }
        });
    }
});
