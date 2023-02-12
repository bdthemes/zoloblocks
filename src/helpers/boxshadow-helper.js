export const generateBoxShadowAttributies = (controlName, defaults = {}) => {
	const {
		noShdowHover = false,
	} = defaults;

	const shdAttrs = {
		// shadow attributes  ⬇
		[`${controlName}hOffset`]: {
			type: "number",
		},
		[`${controlName}vOffset`]: {
			type: "number",
		},
		[`${controlName}blur`]: {
			type: "number",
		},
		[`${controlName}spread`]: {
			type: "number",
		},
		[`${controlName}shadowColor`]: {
			type: "string",
		},
		[`${controlName}inset`]: {
			type: "boolean",
			default: false,
		},
	};

	const hvShdAttrs = {
		[`${controlName}shadowType`]: {
			type: "string",
			default: "normal",
		},
		[`${controlName}hoverHOffset`]: {
			type: "number",
		},
		[`${controlName}hoverVOffset`]: {
			type: "number",
		},
		[`${controlName}hoverBlur`]: {
			type: "number",
		},
		[`${controlName}hoverSpread`]: {
			type: "number",
		},
		[`${controlName}hoverShadowColor`]: {
			type: "string",
		},
		[`${controlName}hoverInset`]: {
			type: "boolean",
			default: false,
		},
	};

	if (noShdowHover) {
		return {
			...shdAttrs,
		}
	} else {
		return {
			...shdAttrs,
			...hvShdAttrs,
			[`${controlName}shadowTransition`]: {
				type: "number",
				default: 0.5,
			},
		}
	}
};

export const generateBoxShadowStyles = ({
	controlName,
	attributes,
}) => {

	const {

		[`${controlName}shadowColor`]: shadowColor,
		[`${controlName}hOffset`]: hOffset = 0,
		[`${controlName}vOffset`]: vOffset = 0,
		[`${controlName}blur`]: blur = 0,
		[`${controlName}spread`]: spread = 0,
		[`${controlName}inset`]: inset,

		[`${controlName}hoverShadowColor`]: hoverShadowColor = shadowColor,
		[`${controlName}hoverHOffset`]: hoverHOffset = hOffset,
		[`${controlName}hoverVOffset`]: hoverVOffset = vOffset,
		[`${controlName}hoverBlur`]: hoverBlur = blur,
		[`${controlName}hoverSpread`]: hoverSpread = spread,
		[`${controlName}shadowTransition`]: shadowTransition,
	} = attributes;


	const boxShadowStyle = `${shadowColor
		? `box-shadow: ${shadowColor} ${hOffset}px ${vOffset}px ${blur}px ${spread}px ${inset ? "inset" : ""};`
		: " "}
	`;

	const hoverBoxShadowstyle = `${hoverShadowColor
		? `box-shadow: ${hoverShadowColor} ${hoverHOffset}px ${hoverVOffset}px ${hoverBlur}px ${hoverSpread}px ${inset ? "inset" : " "};`
		: " "}
	`;

	const transitionStyle = `box-shadow ${shadowTransition || 0}s `;

	return {
		boxShadowStyle,
		hoverBoxShadowstyle,
		transitionStyle
	}

}

