import React, { useState } from "react";
import { useBlockProps } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import classnames from "classnames";
import Chart from "react-apexcharts";


const { handleUniqueId, classArrayToStr } = window.zoloModule;
import { BLOCK_PREFIX } from "./constants";
import Inspector from "./inspector";
import Style from "./style";

export default function Edit(props) {
  const { attributes, setAttributes, className, clientId, isSelected } = props;
  const { preview, uniqueId, parentClasses, apexChartOptions, chartTypes } =
    attributes;
const [chartOptions, setChartOptions] = useState({ apexChartOptions});

// set chart options
useEffect(() => {
    const newChartOptions = {
        ...chartOptions,
        apexChartOptions: {
            ...chartOptions.apexChartOptions,
            options: {
            ...chartOptions.apexChartOptions.options,
            chart: {
                id: uniqueId,
            },
            },
        },
        };

setChartOptions(newChartOptions);
}, [chartTypes]);


  console.log("chartTypes", chartOptions);

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
          width={500}
          height={320}
        />
      </div>
    </>
  );
}
