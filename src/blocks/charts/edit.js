import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import ApexCharts from 'react-apexcharts';
import { v4 as uuidv4 } from 'uuid';
import { applyFilters } from '@wordpress/hooks';

const { handleUniqueId, classArrayToStr, SidebarOpener } = window.zoloModule;

import { BLOCK_PREFIX } from './constants';
import Inspector from './inspector';
import Style from './style';
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
        pieChartLabels,
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
        uid = ''
    ) => {
        return {
            dataLabels: { enabled: false },
            colors: pieChartColor,
            title: {
                text: showTitle ? titleObject.text : undefined,
                align: titleObject.align,
                style: {
                    color: titleObject.style.color
                },
            },
            subtitle: {
                text: showSubTitle ? subTitleObject.text : undefined,
                align: subTitleObject.align,
                style: {
                    color: subTitleObject.style.color
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
                    colors: legendObject.labels.colors,
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
                id: `chart-${uniqueId}`,
                background: 'transparent',
                height: 320,
                type: chartType,
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
            labels: barChartData.options.labels,
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
                showReset
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
                uid
            ),
            series: pieChartData.series,
            labels: pieChartData.labels,
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
        className: classnames(className, `${uniqueId}`, classArrayToStr(parentClasses)),
    });
    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);
    const renderOptions = () => {
        if (chartType === 'pie' || chartType === 'donut') {
            const newOptions = {
                ...pieChartData.options,
                labels: pieChartData.labels,
            };
            return newOptions;
        } else {
            const newOptions = {
                ...barChartData.options,
                labels: barChartData.options.labels,
            };
            return newOptions;
        }
    };

    const renderSeries = () => {
        if (chartType === 'pie' || chartType === 'donut') {
            return pieChartData.series;
        } else {
            return barChartData.series;
        }
    };

    if (preview) {
        return <img src={zoloParams.blocksPreview.charts} alt={__('Charts Preview', 'zoloblocks')} />;
    }
    return (
        <>
            {isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}
            <Style props={props} />
            <div {...blockProps}>
                {renderHookBefore && renderHookBefore}
                <SidebarOpener clientId={clientId} />
                <ApexCharts
                    options={renderOptions()}
                    series={renderSeries()}
                    type={chartType}
                    width={'100%'}
                    height={chartHeight !== undefined ? chartHeight : 300}
                />
                {renderHookAfter && renderHookAfter}
            </div>
        </>
    );
}
