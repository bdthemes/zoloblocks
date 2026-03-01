import ApexCharts from 'apexcharts';

document.addEventListener('DOMContentLoaded', () => {
	const blocks = document.querySelectorAll('.zolo-block-charts');
	if (!blocks.length) return;

	blocks.forEach((block) => {
		const options = JSON.parse(block.dataset.options);
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
				uniqueId,
			} = options;

			const isPieOrDonut = chartType === 'pie' || chartType === 'donut';

			const commonOptions = {
				dataLabels: { enabled: false },
				colors: pieChartColor && pieChartColor.length ? pieChartColor : undefined,
				chart: {
					id: `chart-${uniqueId || Math.random().toString(36).substr(2, 9)}`,
					type: chartType,
					height: chartHeight !== undefined ? chartHeight : 300,
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
					dropShadow: {
						enabled: showDropshadow,
					},
				},
				title: {
					text: showTitle ? titleObject.text : undefined,
					align: titleObject.align,
					style: {
						color: titleObject.style?.color,
					},
				},
				subtitle: {
					text: showSubTitle ? subTitleObject.text : undefined,
					align: subTitleObject.align,
					style: {
						color: subTitleObject.style?.color,
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
					xaxis: {
						lines: {
							show: showGrid ? showGridY : false,
						},
					},
					yaxis: {
						lines: {
							show: showGrid ? showGridX : false,
						},
					},
				},
				labels: barChartData.options.labels,
			};

			let finalOptions;
			if (isPieOrDonut) {
				finalOptions = {
					...commonOptions,
					series: pieChartData.series,
					labels: pieChartData.labels,
				};
			} else {
				finalOptions = {
					...commonOptions,
					series: barChartData.series,
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

			const chart = new ApexCharts(block, finalOptions);
			chart.render();
		} catch (error) {
			console.error('Zolo Charts Error:', error);
		}
	});
});