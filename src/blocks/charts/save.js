import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { applyFilters } from '@wordpress/hooks';
const { classArrayToStr } = window.zoloModule;

const Save = (props) => {
    const { attributes } = props;
    const {
        uniqueId,
        parentClasses,
        chartHeight ,
        zoloId,
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
        showToolbar,
        showDownload,
        showSelection,
        showZoom,
        showZoomIn,
        showZoomOut,
        showPanel,
        showReset,
    } = attributes;

    const chartOptions = {
        chartType,
        showTitle,
        chartHeight : chartHeight ? chartHeight : 300,
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
        // chartBackground,
        pieChartColor,
        xAxisColor,
        xAxisFontSize,
        yAxisColor,
        yAxisFontSize,
        barChartData,
        pieChartData,
        showDropshadow,
        showToolbar,
        showDownload,
        showSelection,
        showZoom,
        showZoomIn,
        showZoomOut,
        showPanel,
        showReset,
    };

    // filter hooks for render
    const renderHookBefore = applyFilters('zolo.blocks.render.hook.before', [], props);
    const renderHookAfter = applyFilters('zolo.blocks.render.hook.after', [], props);

    return (
        <div
            {...useBlockProps.save({
                className: classnames(`${uniqueId}`, classArrayToStr(parentClasses)),
            })}
            {...(zoloId && {
                id: zoloId,
            })}
        >
            {renderHookBefore && renderHookBefore}
            <div className="zolo-chart" data-options={JSON.stringify(chartOptions)}></div>
            {renderHookAfter && renderHookAfter}
        </div>
    );
};

export default Save;
