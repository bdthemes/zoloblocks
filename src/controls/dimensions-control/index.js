import UnitBtn from '../unit-btn';
import DimensionControl from './dimension';

const ResDimensionsControl = ({
	label,
	controlName,
	resRequiredProps,
	forBorderRadius,
	units,
}) => {
	const { attributes, setAttributes, resMode } = resRequiredProps;

	const {
		[`${controlName}ZRPUnit`]: dimensionUnit,
		[`${controlName}ZRPTop`]: dimensionTop,
		[`${controlName}ZRPRight`]: dimensionRight,
		[`${controlName}ZRPBottom`]: dimensionBottom,
		[`${controlName}ZRPLeft`]: dimensionLeft,

		[`TAB${controlName}ZRPUnit`]: TABdimensionUnit,
		[`TAB${controlName}ZRPTop`]: TABdimensionTop,
		[`TAB${controlName}ZRPRight`]: TABdimensionRight,
		[`TAB${controlName}ZRPBottom`]: TABdimensionBottom,
		[`TAB${controlName}ZRPLeft`]: TABdimensionLeft,

		[`MOB${controlName}ZRPUnit`]: MOBdimensionUnit,
		[`MOB${controlName}ZRPTop`]: MOBdimensionTop,
		[`MOB${controlName}ZRPRight`]: MOBdimensionRight,
		[`MOB${controlName}ZRPBottom`]: MOBdimensionBottom,
		[`MOB${controlName}ZRPLeft`]: MOBdimensionLeft,

		[`${controlName}ZRPIsLinked`]: dimensionIsLinked,
	} = attributes;

	const defaultUnits = [
		{ label: 'px', value: 'px' },
		{ label: 'em', value: 'em' },
		{ label: '%', value: '%' },
	];

	const neededProps = {
		label,
		controlName,
		setAttributes,
		resMode,
		dimensionIsLinked,
		forBorderRadius,
		controlName,
	};

	return (
		<div className="dimensions-control-wraper">
			{resMode == 'Desktop' && (
				<>
					<UnitBtn
						selectedUnit={dimensionUnit}
						unitTypes={units || defaultUnits}
						onClick={(dimensionUnit) =>
							setAttributes({
								[`${controlName}ZRPUnit`]: dimensionUnit,
							})
						}
					/>
					<DimensionControl
						top={dimensionTop}
						right={dimensionRight}
						bottom={dimensionBottom}
						left={dimensionLeft}
						neededProps={neededProps}
						onChange={({ top, right, bottom, left }) => {
							setAttributes({
								[`${controlName}ZRPTop`]: top,
								[`${controlName}ZRPRight`]: right,
								[`${controlName}ZRPBottom`]: bottom,
								[`${controlName}ZRPLeft`]: left,
							});
						}}
					/>
				</>
			)}

			{resMode == 'Tablet' && (
			<>
				<UnitBtn
					selectedUnit={TABdimensionUnit}
					unitTypes={units || defaultUnits}
					onClick={(TABdimensionUnit) =>
						setAttributes({ [`TAB${controlName}ZRPUnit`]: TABdimensionUnit })
					}
				/>

				<DimensionControl
					top={TABdimensionTop}
					right={TABdimensionRight}
					bottom={TABdimensionBottom}
					left={TABdimensionLeft}
					neededProps={neededProps}
					onChange={({ top, right, bottom, left }) =>
						setAttributes({
							[`TAB${controlName}ZRPTop`]: top,
							[`TAB${controlName}ZRPRight`]: right,
							[`TAB${controlName}ZRPBottom`]: bottom,
							[`TAB${controlName}ZRPLeft`]: left,
						})
					}
				/>
			</>
			)}

			{resMode == 'Mobile' && (<>
			  <UnitBtn
            selectedUnit={MOBdimensionUnit}
						unitTypes={units || defaultUnits}
            onClick={(MOBdimensionUnit) =>
              setAttributes({ [`MOB${controlName}ZRPUnit`]: MOBdimensionUnit })
            }
          />

          <DimensionControl
            top={MOBdimensionTop}
            right={MOBdimensionRight}
            bottom={MOBdimensionBottom}
            left={MOBdimensionLeft}
            neededProps={neededProps}
            onChange={({ top, right, bottom, left }) =>
              setAttributes({
                [`MOB${controlName}ZRPTop`]: top,
                [`MOB${controlName}ZRPRight`]: right,
                [`MOB${controlName}ZRPBottom`]: bottom,
                [`MOB${controlName}ZRPLeft`]: left,
              })
            }
          />
			</>)}
		</div>
	);
};

export default ResDimensionsControl;
