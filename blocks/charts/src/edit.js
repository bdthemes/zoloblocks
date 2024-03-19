import React, { useState } from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import Chart from "react-apexcharts";
import { v4 as uuidv4 } from "uuid";


const { handleUniqueId, classArrayToStr } = window.zoloModule;
import { BLOCK_PREFIX } from "./constants";
import Inspector from "./inspector";
import Style from "./style";

export default function Edit(props) {
  const { attributes, setAttributes, className, clientId, isSelected } = props;
  const {
    preview,
    uniqueId,
    parentClasses,
    apexChartOptions,
    chartTypes,
    uploadStatus,
    sourceType,
    apexChartData
  } = attributes;

    console.log(apexChartData);
const [chartOptions, setChartOptions] = useState({ apexChartOptions});
console.log(chartOptions)

// set chart options
useEffect(() => {
  const uid = uuidv4();
  const newChartOptions = {
    ...chartOptions,
    apexChartOptions: {
      ...chartOptions.apexChartOptions,
      options: {
        ...chartOptions.apexChartOptions.options,
        chart: {
          id: `chart-${uid}`,
        },
      },
    },
  };

  setChartOptions(newChartOptions);
}, [chartTypes,uploadStatus]);




  useEffect(() => {
    handleUniqueId({
      BLOCK_PREFIX,
      uniqueId,
      setAttributes,
      clientId,
    });
  }, []);

  const blockProps = useBlockProps({
    className: classnames(
      className,
      `${uniqueId}`,
      classArrayToStr(parentClasses),
    ),
  });

  if (preview) {
    return (
      <img
        src={zoloParams.blocksPreview.starRating}
        alt={__("Star Rating Preview", "zolo-blocks")}
      />
    );
  }

  return (
    <>
      {isSelected && (
        <Inspector attributes={attributes} setAttributes={setAttributes} />
      )}
      <Style props={props} />
      <div {...blockProps}>
        <Chart
          options={chartOptions.apexChartOptions.options}
          series={chartOptions.apexChartOptions.series}
          type={chartTypes}
          width={'100%'}
          height={320}
        />
      </div>
    </>
  );
}
