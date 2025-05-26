/**
 * WordPress dependencies
 */
import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { store as noticesStore } from '@wordpress/notices';
import { applyFilters } from '@wordpress/hooks';
import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import Papa from 'papaparse';
import axios from 'axios';

/**
 * Internal depencencies
 */

const {
    ZoloToggleControl,
    ZoloSelectControl,
    ZoloButton,
    ZoloTextControl,
    ZoloCardDivider,
    ZoloTextareaControl,
    ZoloRangeControl,
    ZoloSpinner,
    SimpleRangeControl,
    ColorControl,
    HeaderTabs,
    IconicBtnGroup,
    AdvancedOptions,
    ZoloPanelBody,
    NormalBGControl,
    BoxShadowControl,
    BorderControl,
    ResDimensionsControl,
    TypographyDropdown,
} = window.zoloModule;

import objAttributes from './attributes';

import { CHART_TYPES, SOURCE_TYPES, POSITIONS, THEME_TYPES, CHART_HEIGHT } from './constants';
import { CHART_BG_COLOR, CHART_BORDER, CHART_BORDER_RADIUS, CHART_MARGIN, CHART_PADDING, CHART_BOX_SHADOW } from './constants';
import { DEFAULT_ALIGNS } from '../../../src/global/constants';
import { TITLE_TYPO, SUB_TITLE_TYPO } from './constants/typoPrefixConstant';
function Inspector(props) {
    const { attributes, setAttributes } = props;
    const {
        resMode,
        chartType,
        gssUrl,
        chartHeight,
        sourceType,
        uploadStatus,
        chartInputData,
        // additional options
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
        chartBackground,
        pieChartLength,
        barChartLength,
        pieChartLabels,
        xAxisColor,
        yAxisColor,
        showToolbar,
        showDownload,
        showSelection,
        showZoom,
        showZoomIn,
        showZoomOut,
        showPanel,
        showReset,
        showDropshadow,
        fileUrl,
        barChartData,
        pieChartData,
    } = attributes;

    const requiredProps = {
        attributes,
        setAttributes,
        resMode,
        objAttributes,
    };

    /**
     * On Select File
     */
    const onSelectFile = (file) => {
        const csvFile = file.url;

        Papa.parse(csvFile, {
            header: true,
            download: true,
            complete: (result) => {
                const { data } = result;
                const headers = Object.keys(data[0]);

                const labels = data.map((row) => row[headers[0]]);

                const series = headers.slice(1).map((header) => ({
                    name: header,
                    data: data.map((row) => row[header]),
                }));

                const pieSeries = headers
                    .slice(1)
                    .flatMap((header) => data.map((row) => Number(row[header])))
                    .filter((value) => !isNaN(value));

                setAttributes({
                    barChartData: {
                        options: { labels },
                        series,
                    },
                    pieChartData: {
                        series: pieSeries,
                        labels,
                    },
                    pieChartLength: pieSeries.length,
                    barChartLength: series.length,
                    pieChartLabels: labels,
                    fileUrl: csvFile,
                    uploadStatus: !uploadStatus,
                });
            },
        });
    };

    // handle CSV Input from TextareaControl Component and pass on result to DataPareser
    const handleInputData = (e) => {
        parseCSVData(e);
    };

    /**
     * Parse CSV Data
     */
    function parseCSVData(csvData) {
        const rows = csvData.trim().split('\n');
        const headers = rows[0].split(',');
        const parsedData = [];

        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(',');
            const obj = {};

            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = rowData[j];
            }

            parsedData.push(obj);
        }
        const labels = parsedData.map((data) => data[headers[0]]);
        const series = headers.slice(1).map((header) => ({
            name: header,
            data: parsedData.map((data) => data[header]),
        }));

        const pieSeries = parsedData.map((data, index) => data[headers[1]]).map((i) => Number(i));

        setAttributes({
            barChartData: {
                options: {
                    labels: labels,
                },
                series: series,
            },
            pieChartData: {
                options: {
                    labels: labels,
                },
                series: pieSeries,
                labels: labels,
            },
            pieChartLength: pieSeries.length,
            barChartLength: series.length,
            pieChartLabels: labels,
        });
    }

    // extract Ids
    function extractIdsFromUrl(url) {
        const regex = /\/d\/(.*?)\/edit.*?gid=(\d+)/;
        const match = url.match(regex);

        if (match) {
            const spreadsheetId = match[1];
            const sheetId = match[2];
            return { spreadsheetId, sheetId };
        } else {
            return {};
        }
    }

    // Fetch Google Sheet Data
    const { createErrorNotice } = useDispatch(noticesStore);
    const [loading, setLoading] = useState(false);
    /**
     * Fetch Google Sheet Data
     */
    const fetchGoogleSheetData = () => {
        if (!gssUrl) {
            createErrorNotice(__('😔 Please provide a Google Spreadsheet URL.', 'zoloblocks'));
            return;
        }

        // Start loading
        setLoading(true);

        const { spreadsheetId, sheetId } = extractIdsFromUrl(gssUrl);

        if (!spreadsheetId || !sheetId) {
            createErrorNotice(__('😔 Invalid Google Spreadsheet URL.', 'zoloblocks'));
            setLoading(false);
            return;
        }

        // Google Spreadsheet URL
        const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=${sheetId}`;

        // Use axios to fetch the data from the Google Spreadsheet
        axios
            .get(url)
            .then((response) => {
                const data = response.data;

                // check if the data is empty
                if (!data) {
                    createErrorNotice(__('😔 Sorry, No data found', 'zoloblocks'));
                    setLoading(false);
                    return;
                }

                // parse the data
                parseCSVData(data);
                // Stop loading
                setLoading(false);
            })
            .catch((error) => {
                createErrorNotice(error.message);
                setLoading(false);
            });
    };

    return (
        <InspectorControls key="controls">
            <HeaderTabs
                block="zolo/charts"
                attributes={attributes}
                setAttributes={setAttributes}
                generalTab={
                    <>
                        <ZoloPanelBody title={__('General', 'zoloblocks')} firstOpen={true} panelProps={props}>
                            <ZoloSelectControl
                                label={__('Source Type', 'zoloblocks')}
                                value={sourceType}
                                options={applyFilters('zolo.charts.sourceTypes', SOURCE_TYPES)}
                                onChange={(v) => setAttributes({ sourceType: v })}
                            />
                            {sourceType === 'upload' && (
                                <MediaUpload
                                    onSelect={onSelectFile}
                                    type="file"
                                    value={fileUrl}
                                    render={({ open }) => (
                                        <ZoloButton
                                            style={{ marginBottom: '10px' }}
                                            className="zolo-action-button"
                                            variant="primary"
                                            onClick={open}
                                        >
                                            {fileUrl ? __('Change CSV File', 'zoloblocks-pro') : __('Select CSV File', 'zoloblocks-pro')}
                                        </ZoloButton>
                                    )}
                                    allowedTypes={['text/csv']}
                                />
                            )}
                            {sourceType == 'input' && (
                                <div className="zolo-flex-col-control">
                                    <ZoloTextareaControl
                                        label={__('Enter chart data separated by commas', 'zoloblocks')}
                                        placeholder={__(
                                            `Label, Value
                                            Team A, 10
                                            Team B, 15
                                            Team C, 20,
                                            Team D, 5`,
                                            'zoloblocks'
                                        )}
                                        value={chartInputData}
                                        rows={10}
                                        onChange={(value) => {
                                            setAttributes({ chartInputData: value });
                                            handleInputData(value);
                                        }}
                                    />
                                </div>
                            )}

                            {zoloParams?.zolo_pro_status === 'active' && sourceType === 'google-spreadsheet' && (
                                <>
                                    <ZoloCardDivider />
                                    <p className="zolo-custom-help-note">
                                        {__('Make sure your Google Spreadsheet is public.', 'zoloblocks')}
                                    </p>
                                    <ZoloTextControl
                                        label={__('Google Spreadsheet URL', 'zoloblocks')}
                                        value={gssUrl}
                                        onChange={(v) =>
                                            setAttributes({
                                                gssUrl: v,
                                            })
                                        }
                                    />
                                    <ZoloButton
                                        style={{ marginBottom: '10px' }}
                                        className="zolo-action-button"
                                        variant="primary"
                                        onClick={fetchGoogleSheetData}
                                    >
                                        {__('Fetch Data', 'zoloblocks')}
                                        {
                                            // loading
                                            loading && <ZoloSpinner />
                                        }
                                    </ZoloButton>
                                    <ZoloCardDivider />
                                </>
                            )}

                            <ZoloCardDivider />

                            <ZoloSelectControl
                                label={__('Chart Type', 'zoloblocks')}
                                value={chartType}
                                options={CHART_TYPES}
                                onChange={(v) => {
                                    setAttributes({ chartType: v });
                                }}
                                help={
                                    chartType === 'line'
                                        ? __('You may need to save and refresh the page to see the changes.', 'zoloblocks')
                                        : ''
                                }
                            />

                            <div className="zolo-flex-col-control">
                                <SimpleRangeControl
                                    label={__('Height', 'zoloblocks')}
                                    value={chartHeight}
                                    onChange={(height) =>
                                        setAttributes({
                                            chartHeight: height,
                                        })
                                    }
                                    onReset={() =>
                                        setAttributes({
                                            chartHeight: undefined,
                                        })
                                    }
                                    min={200}
                                    max={1000}
                                />
                            </div>
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Additional Options', 'zoloblocks')} firstOpen={false} panelProps={props}>
                            <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                {__('Show/hide elements', 'zoloblocks')}
                            </div>
                            <ZoloToggleControl
                                label={__('Title', 'zoloblocks')}
                                checked={showTitle}
                                onChange={() =>
                                    setAttributes({
                                        showTitle: !showTitle,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('sub Title', 'zoloblocks')}
                                checked={showSubTitle}
                                onChange={() =>
                                    setAttributes({
                                        showSubTitle: !showSubTitle,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Legend', 'zoloblocks')}
                                checked={showLegend}
                                onChange={() =>
                                    setAttributes({
                                        showLegend: !showLegend,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Tooltip', 'zoloblocks')}
                                checked={showTooltip}
                                onChange={() =>
                                    setAttributes({
                                        showTooltip: !showTooltip,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Grid', 'zoloblocks')}
                                checked={showGrid}
                                onChange={() =>
                                    setAttributes({
                                        showGrid: !showGrid,
                                    })
                                }
                            />
                            <ZoloToggleControl
                                label={__('Toolbar', 'zoloblocks')}
                                checked={showToolbar}
                                onChange={() =>
                                    setAttributes({
                                        showToolbar: !showToolbar,
                                    })
                                }
                            />
                            {showToolbar && (
                                <>
                                    <ZoloToggleControl
                                        label={__('Download', 'zoloblocks')}
                                        checked={showDownload}
                                        onChange={() =>
                                            setAttributes({
                                                showDownload: !showDownload,
                                            })
                                        }
                                    />
                                    <ZoloToggleControl
                                        label={__('Zoom', 'zoloblocks')}
                                        checked={showZoom}
                                        onChange={() =>
                                            setAttributes({
                                                showZoom: !showZoom,
                                            })
                                        }
                                    />
                                    <ZoloToggleControl
                                        label={__('Zoom In', 'zoloblocks')}
                                        checked={showZoomIn}
                                        onChange={() =>
                                            setAttributes({
                                                showZoomIn: !showZoomIn,
                                            })
                                        }
                                    />
                                    <ZoloToggleControl
                                        label={__('Zoom Out', 'zoloblocks')}
                                        checked={showZoomOut}
                                        onChange={() =>
                                            setAttributes({
                                                showZoomOut: !showZoomOut,
                                            })
                                        }
                                    />
                                    <ZoloToggleControl
                                        label={__('Pan', 'zoloblocks')}
                                        checked={showPanel}
                                        onChange={() =>
                                            setAttributes({
                                                showPanel: !showPanel,
                                            })
                                        }
                                    />
                                    <ZoloToggleControl
                                        label={__('Reset', 'zoloblocks')}
                                        checked={showReset}
                                        onChange={() =>
                                            setAttributes({
                                                showReset: !showReset,
                                            })
                                        }
                                    />
                                </>
                            )}
                        </ZoloPanelBody>
                        {showTitle && (
                            <ZoloPanelBody title={__('Title', 'zoloblocks')} firstOpen={false} panelProps={props}>
                                <ZoloTextControl
                                    label={__('Text', 'zoloblocks')}
                                    onChange={(newText) =>
                                        setAttributes({
                                            titleObject: {
                                                ...titleObject,
                                                text: newText,
                                            },
                                        })
                                    }
                                    value={titleObject.text}
                                />
                                <ZoloCardDivider />
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Alignment', 'zoloblocks')}
                                        value={titleObject.align}
                                        onChange={(v) =>
                                            setAttributes({
                                                titleObject: {
                                                    ...titleObject,
                                                    align: v,
                                                },
                                            })
                                        }
                                        options={DEFAULT_ALIGNS}
                                    />
                                </div>
                            </ZoloPanelBody>
                        )}
                        {showSubTitle && (
                            <ZoloPanelBody title={__('Sub Title', 'zoloblocks')} firstOpen={false} panelProps={props}>
                                <ZoloTextControl
                                    label={__('Text', 'zoloblocks')}
                                    onChange={(newText) =>
                                        setAttributes({
                                            subTitleObject: {
                                                ...subTitleObject,
                                                text: newText,
                                            },
                                        })
                                    }
                                    value={subTitleObject.text}
                                />
                                <ZoloCardDivider />
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Alignment', 'zoloblocks')}
                                        value={subTitleObject.align}
                                        onChange={(v) =>
                                            setAttributes({
                                                subTitleObject: {
                                                    ...subTitleObject,
                                                    align: v,
                                                },
                                            })
                                        }
                                        options={DEFAULT_ALIGNS}
                                    />
                                </div>
                            </ZoloPanelBody>
                        )}
                        {showLegend && (
                            <ZoloPanelBody title={__('Legend', 'zoloblocks')} firstOpen={false} panelProps={props}>
                                <IconicBtnGroup
                                    label={__('Position', 'zoloblocks')}
                                    value={legendObject.position}
                                    onChange={(v) =>
                                        setAttributes({
                                            legendObject: {
                                                ...legendObject,
                                                position: v,
                                            },
                                        })
                                    }
                                    options={POSITIONS}
                                />
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Horizontal', 'zoloblocks')}
                                        value={legendObject.horizontalAlign}
                                        onChange={(v) =>
                                            setAttributes({
                                                legendObject: {
                                                    ...legendObject,
                                                    horizontalAlign: v,
                                                },
                                            })
                                        }
                                        options={DEFAULT_ALIGNS}
                                    />
                                </div>
                                <ZoloCardDivider />
                                <ZoloToggleControl
                                    label={__('Floating', 'zoloblocks')}
                                    checked={legendObject.floating}
                                    onChange={() =>
                                        setAttributes({
                                            legendObject: {
                                                ...legendObject,
                                                floating: !legendObject.floating,
                                            },
                                        })
                                    }
                                />
                                <div className="zolo-flex-col-control">
                                    <ZoloRangeControl
                                        label={__('Offset X', 'zoloblocks')}
                                        value={legendObject.offsetX}
                                        onChange={(v) =>
                                            setAttributes({
                                                legendObject: {
                                                    ...legendObject,
                                                    offsetX: v,
                                                },
                                            })
                                        }
                                        min={-100}
                                        max={100}
                                    />
                                </div>

                                <div className="zolo-flex-col-control">
                                    <ZoloRangeControl
                                        label={__('Offset Y', 'zoloblocks')}
                                        value={legendObject.offsetY}
                                        onChange={(v) =>
                                            setAttributes({
                                                legendObject: {
                                                    ...legendObject,
                                                    offsetY: v,
                                                },
                                            })
                                        }
                                        min={-100}
                                        max={100}
                                    />
                                </div>
                            </ZoloPanelBody>
                        )}
                        {showTooltip && (
                            <ZoloPanelBody title={__('Tooltip', 'zoloblocks')} firstOpen={false} panelProps={props}>
                                <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                    {__('Show/hide elements', 'zoloblocks')}
                                </div>
                                <ZoloToggleControl
                                    label={__('Enabled', 'zoloblocks')}
                                    checked={tooltipObject.enabled}
                                    onChange={() =>
                                        setAttributes({
                                            tooltipObject: {
                                                ...tooltipObject,
                                                enabled: !tooltipObject.enabled,
                                            },
                                        })
                                    }
                                />
                                <ZoloToggleControl
                                    label={__('Follow Cursor', 'zoloblocks')}
                                    checked={tooltipObject.followCursor}
                                    onChange={() =>
                                        setAttributes({
                                            tooltipObject: {
                                                ...tooltipObject,
                                                followCursor: !tooltipObject.followCursor,
                                            },
                                        })
                                    }
                                />
                                <ZoloToggleControl
                                    label={__('Inverse Order', 'zoloblocks')}
                                    checked={tooltipObject.inverseOrder}
                                    onChange={() =>
                                        setAttributes({
                                            tooltipObject: {
                                                ...tooltipObject,
                                                inverseOrder: !tooltipObject.inverseOrder,
                                            },
                                        })
                                    }
                                />
                                <ZoloToggleControl
                                    label={__('Hide Empty Series', 'zoloblocks')}
                                    checked={tooltipObject.hideEmptySeries}
                                    onChange={() =>
                                        setAttributes({
                                            tooltipObject: {
                                                ...tooltipObject,
                                                hideEmptySeries: !tooltipObject.hideEmptySeries,
                                            },
                                        })
                                    }
                                />

                                <ZoloToggleControl
                                    label={__('Fill Series Color', 'zoloblocks')}
                                    checked={tooltipObject.fillSeriesColor}
                                    onChange={() =>
                                        setAttributes({
                                            tooltipObject: {
                                                ...tooltipObject,
                                                fillSeriesColor: !tooltipObject.fillSeriesColor,
                                            },
                                        })
                                    }
                                />
                                <ZoloCardDivider />
                                <div className="zolo-flex-row-control-tab">
                                    <IconicBtnGroup
                                        label={__('Theme', 'zoloblocks')}
                                        value={tooltipObject.theme}
                                        onChange={(v) =>
                                            setAttributes({
                                                tooltipObject: {
                                                    ...tooltipObject,
                                                    theme: v,
                                                },
                                            })
                                        }
                                        options={THEME_TYPES}
                                    />
                                </div>
                            </ZoloPanelBody>
                        )}
                        {showGrid && (
                            <ZoloPanelBody title={__('Grid', 'zoloblocks')} firstOpen={false} panelProps={props}>
                                <div className="zolo-custom-heading" style={{ border: 0, paddingTop: 0 }}>
                                    {__('Show/hide elements', 'zoloblocks')}
                                </div>
                                <ZoloToggleControl
                                    label={__('Grid X', 'zoloblocks')}
                                    checked={showGridX}
                                    onChange={() =>
                                        setAttributes({
                                            showGridX: !showGridX,
                                        })
                                    }
                                />
                                <ZoloToggleControl
                                    label={__('Grid Y', 'zoloblocks')}
                                    checked={showGridY}
                                    onChange={() =>
                                        setAttributes({
                                            showGridY: !showGridY,
                                        })
                                    }
                                />
                            </ZoloPanelBody>
                        )}
                    </>
                }
                styleTab={
                    <>
                        <ZoloPanelBody title={__('Charts', 'zoloblocks')} firstOpen={true} stylePanel={true} panelProps={props}>
                            <NormalBGControl requiredProps={requiredProps} controlName={CHART_BG_COLOR} noMainBGImg={false} />
                            <ResDimensionsControl
                                label={__('Padding', 'zoloblocks')}
                                controlName={CHART_PADDING}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ResDimensionsControl
                                label={__('Margin', 'zoloblocks')}
                                controlName={CHART_MARGIN}
                                requiredProps={requiredProps}
                                forBorderRadius={false}
                            />
                            <ZoloCardDivider />
                            <BorderControl label={__('Border', 'zoloblocks')} controlName={CHART_BORDER} requiredProps={requiredProps} />
                            <BoxShadowControl controlName={CHART_BOX_SHADOW} requiredProps={requiredProps} />
                            <ResDimensionsControl
                                label={__('Border Radius', 'zoloblocks')}
                                controlName={CHART_BORDER_RADIUS}
                                requiredProps={requiredProps}
                                forBorderRadius={true}
                            />
                        </ZoloPanelBody>
                        <ZoloPanelBody title={__('Colors', 'zoloblocks')} firstOpen={false} stylePanel={true} panelProps={props}>
                            <ColorControl
                                label={__('xAxis Color', 'zoloblocks')}
                                color={xAxisColor}
                                onChange={(color) => setAttributes({ xAxisColor: color })}
                            />
                            <ColorControl
                                label={__('yAxis Color', 'zoloblocks')}
                                color={yAxisColor}
                                onChange={(color) => setAttributes({ yAxisColor: color })}
                            />
                            <ZoloCardDivider />
                            {chartType === 'pie' || chartType === 'donut'
                                ? Array.from({ length: pieChartLength }, (_, index) => index).map((i) => (
                                      <ColorControl
                                          key={`pie-color-${i}`}
                                          label={__(`${chartType} color ${i + 1}`, 'zoloblocks')}
                                          color={attributes.pieChartColor[i]}
                                          onChange={(color) => {
                                              const pieChartColor = [...attributes.pieChartColor];
                                              pieChartColor[i] = color;
                                              setAttributes({ pieChartColor });
                                          }}
                                      />
                                  ))
                                : Array.from({ length: barChartLength }, (_, index) => index).map((i) => (
                                      <ColorControl
                                          key={`bar-color-${i}`}
                                          label={__(`${chartType} color ${i + 1}`, 'zoloblocks')}
                                          color={attributes.pieChartColor[i]}
                                          onChange={(color) => {
                                              const pieChartColor = [...attributes.pieChartColor];
                                              pieChartColor[i] = color;
                                              setAttributes({ pieChartColor });
                                          }}
                                      />
                                  ))}
                        </ZoloPanelBody>
                        {showTitle && (
                            <>
                                <ZoloPanelBody title={__('Title', 'zoloblocks')} firstOpen={false} panelProps={props}>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={titleObject.style.color}
                                        onChange={(color) =>
                                            setAttributes({
                                                titleObject: {
                                                    ...titleObject,
                                                    style: {
                                                        ...titleObject.style,
                                                        color: color,
                                                    },
                                                },
                                            })
                                        }
                                    />
                                    <TypographyDropdown
                                        label={__('Typography', 'zoloblocks')}
                                        typoPrefixConstant={TITLE_TYPO}
                                        requiredProps={requiredProps}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        {showSubTitle && (
                            <>
                                <ZoloPanelBody title={__('Sub Title', 'zoloblocks')} firstOpen={false} panelProps={props}>
                                    <ColorControl
                                        label={__('Color', 'zoloblocks')}
                                        color={subTitleObject.style.color}
                                        onChange={(color) =>
                                            setAttributes({
                                                subTitleObject: {
                                                    ...subTitleObject,
                                                    style: {
                                                        ...subTitleObject.style,
                                                        color: color,
                                                    },
                                                },
                                            })
                                        }
                                    />
                                    <TypographyDropdown
                                        label={__('Typography', 'zoloblocks')}
                                        typoPrefixConstant={SUB_TITLE_TYPO}
                                        requiredProps={requiredProps}
                                    />
                                </ZoloPanelBody>
                            </>
                        )}
                        {showLegend && (
                            <>
                                <ZoloPanelBody title={__('Legend Color', 'zoloblocks')} firstOpen={false} panelProps={props}>
                                    <ZoloToggleControl
                                        label={__('Use series colors', 'zoloblocks')}
                                        checked={legendObject.labels.useSeriesColors}
                                        onChange={() =>
                                            setAttributes({
                                                legendObject: {
                                                    ...legendObject,
                                                    labels: {
                                                        useSeriesColors: !legendObject.labels.useSeriesColors,
                                                    },
                                                },
                                            })
                                        }
                                    />
                                    {
                                        // If condition
                                        !legendObject.labels.useSeriesColors && (
                                            <ColorControl
                                                label={__('Legend Color', 'zoloblocks')}
                                                color={legendObject.labels.colors}
                                                onChange={(color) =>
                                                    setAttributes({
                                                        legendObject: {
                                                            ...legendObject,
                                                            labels: {
                                                                ...legendObject.labels,
                                                                colors: color,
                                                            },
                                                        },
                                                    })
                                                }
                                            />
                                        )
                                    }
                                </ZoloPanelBody>
                            </>
                        )}
                    </>
                }
                advancedTab={
                    <>
                        {/* <AdvancedOptions
                            attributes={attributes}
                            setAttributes={setAttributes}
                            requiredProps={requiredProps}
                            block="zolo/charts"
                        /> */}
                    </>
                }
            />
        </InspectorControls>
    );
}
export default Inspector;
