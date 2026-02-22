import { useBlockProps } from '@wordpress/block-editor';
import { useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import ApexCharts from 'react-apexcharts';

const { classArrayToStr, SidebarOpener, sanitizeText } = window.zoloModule;

import Inspector from './inspector';
import Style from './style';

/**
 * Build ApexCharts `options` object purely from block attributes.
 * Defined at module scope so it is never re-created on re-renders.
 *
 * @param {Object} attrs - Relevant block attributes.
 * @returns {Object} ApexCharts options object.
 */
function getChartOptions( attrs ) {
    const {
        uniqueId,
        chartType,
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
        barChartData,
    } = attrs;

    return {
        dataLabels: { enabled: false },
        colors: pieChartColor,
        title: {
            text: showTitle ? sanitizeText( titleObject.text ) : undefined,
            align: titleObject.align,
            style: {
                color: titleObject.style.color,
            },
        },
        subtitle: {
            text: showSubTitle ? sanitizeText( subTitleObject.text ) : undefined,
            align: subTitleObject.align,
            style: {
                color: subTitleObject.style.color,
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
            id: `chart-${ uniqueId }`,
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
}

export default function Edit( props ) {
    const { attributes, setAttributes, className, clientId, isSelected } = props;
    const {
        preview,
        uniqueId,
        parentClasses,
        barChartData,
        chartType,
        showTitle,
        showSubTitle,
        showLegend,
        showTooltip,
        showGrid,
        titleObject,
        subTitleObject,
        legendObject,
        tooltipObject,
        showGridY,
        showGridX,
        pieChartData,
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
        chartHeight = 300,
    } = attributes;

    /**
     * Derive chart display options purely from attributes — no setAttributes call,
     * no mutation loop. Recomputes only when actual inputs change.
     */
    const chartOptions = useMemo( () => {
        const opts = getChartOptions( {
            uniqueId,
            chartType,
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
            barChartData,
        } );

        const isPieOrDonut = chartType === 'pie' || chartType === 'donut';
        if ( isPieOrDonut ) {
            return {
                ...opts,
                labels: pieChartData.labels,
            };
        }
        return {
            ...opts,
            labels: barChartData.options.labels,
        };
    }, [
        uniqueId,
        chartType,
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
        barChartData,
        pieChartData.labels,
    ] );

    /**
     * Pick the correct data series based on chart type.
     * Recomputes only when chartType or series data changes.
     */
    const chartSeries = useMemo( () => {
        const isPieOrDonut = chartType === 'pie' || chartType === 'donut';
        return isPieOrDonut ? pieChartData.series : barChartData.series;
    }, [ chartType, pieChartData.series, barChartData.series ] );

    const blockProps = useBlockProps( {
        className: classnames( className, `${ uniqueId }`, classArrayToStr( parentClasses ) ),
    } );

    if ( preview ) {
        return <img src={ zoloParams.blocksPreview.charts } alt={ __( 'Charts Preview', 'zoloblocks' ) } />;
    }
    return (
        <>
            { isSelected && <Inspector attributes={ attributes } setAttributes={ setAttributes } /> }
            <Style props={ props } />
            <div { ...blockProps }>
                <SidebarOpener clientId={ clientId } />
                <ApexCharts
                    options={ chartOptions }
                    series={ chartSeries }
                    type={ chartType }
                    width={ '100%' }
                    height={ chartHeight }
                />
            </div>
        </>
    );
}
