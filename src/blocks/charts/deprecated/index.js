import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import attributes from '../attributes';

const deprecated = [
    {
        attributes,
        save: (props) => {
            const { attributes } = props;
            const {
                uniqueId,
                parentClasses,
                chartHeight,
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
                chartHeight: chartHeight ? chartHeight : 300,
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

            const { classArrayToStr } = window.zoloModule || {};

            return (
                <div
                    {...useBlockProps.save({
                        className: classnames(`${uniqueId}`, classArrayToStr ? classArrayToStr(parentClasses) : ''),
                    })}
                    {...(zoloId && {
                        id: zoloId,
                    })}
                >
                    <div className="zolo-chart" data-options={JSON.stringify(chartOptions)}></div>
                </div>
            );
        },
    },
];

export default deprecated;
