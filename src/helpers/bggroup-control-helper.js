export const generateBgGroupControlAttributes = (
	controlName,
	defaults = {}
) => {
	const { BgColor } = defaults;

	return {
		[`${controlName}BgType`]: {
			type: 'string',
			default: 'classic',
		},
		[`${controlName}BgColor`]: {
			type: 'string',
			default: BgColor,
		},
		[`${controlName}bgImageURL`]: {
			type: 'string',
		},
		[`${controlName}bgImageID`]: {
			type: 'number',
		},
		[`${controlName}bgImgAttachment`]: {
			type: 'string',
		},

		[`${controlName}backgroundSize`]: {
			type: 'string',
		},
		[`${controlName}bgImgCustomSize`]: {
			type: 'string',
		},
		[`${controlName}bgImgCustomSizeUnit`]: {
			type: 'string',
		},
		[`${controlName}bgImgPos`]: {
			type: 'string',
		},
		[`${controlName}bgImgcustomPosX`]: {
			type: 'string',
		},
		[`${controlName}bgImgcustomPosXUnit`]: {
			type: 'string',
		},
		[`${controlName}bgImgcustomPosY`]: {
			type: 'string',
		},
		[`${controlName}bgImgcustomPosYUnit`]: {
			type: 'string',
		},
		[`${controlName}bgImgRepeat`]: {
			type: 'string',
		},

		[`TAB${controlName}backgroundSize`]: {
			type: 'string',
		},
		[`TAB${controlName}bgImgCustomSize`]: {
			type: 'string',
		},
		[`TAB${controlName}bgImgCustomSizeUnit`]: {
			type: 'string',
		},
		[`TAB${controlName}bgImgPos`]: {
			type: 'string',
		},
		[`TAB${controlName}bgImgcustomPosX`]: {
			type: 'string',
		},
		[`TAB${controlName}bgImgcustomPosXUnit`]: {
			type: 'string',
		},
		[`TAB${controlName}bgImgcustomPosY`]: {
			type: 'string',
		},
		[`TAB${controlName}bgImgcustomPosYUnit`]: {
			type: 'string',
		},
		[`TAB${controlName}bgImgRepeat`]: {
			type: 'string',
		},

		[`MOB${controlName}backgroundSize`]: {
			type: 'string',
		},
		[`MOB${controlName}bgImgCustomSize`]: {
			type: 'string',
		},
		[`MOB${controlName}bgImgCustomSizeUnit`]: {
			type: 'string',
		},
		[`MOB${controlName}bgImgPos`]: {
			type: 'string',
		},
		[`MOB${controlName}bgImgcustomPosX`]: {
			type: 'string',
		},
		[`MOB${controlName}bgImgcustomPosXUnit`]: {
			type: 'string',
		},
		[`MOB${controlName}bgImgcustomPosY`]: {
			type: 'string',
		},
		[`MOB${controlName}bgImgcustomPosYUnit`]: {
			type: 'string',
		},
		[`MOB${controlName}bgImgRepeat`]: {
			type: 'string',
		},
	};
};

export const generateBgGroupControlStyle = ({ controlName, attributes }) => {
	const {
		[`${controlName}BgType`]: BgType,
		[`${controlName}BgColor`]: BgColor,
		[`${controlName}bgImageURL`]: bgImageURL,
		[`${controlName}bgImageID`]: bgImageID,
		[`${controlName}bgImgAttachment`]: bgImgAttachment,
		[`${controlName}backgroundSize`]: backgroundSize,
		[`${controlName}bgImgCustomSize`]: bgImgCustomSize,
		[`${controlName}bgImgCustomSizeUnit`]: bgImgCustomSizeUnit,
		[`${controlName}bgImgPos`]: bgImgPos,
		[`${controlName}bgImgcustomPosX`]: bgImgcustomPosX,
		[`${controlName}bgImgcustomPosXUnit`]: bgImgcustomPosXUnit,
		[`${controlName}bgImgcustomPosY`]: bgImgcustomPosY,
		[`${controlName}bgImgcustomPosYUnit`]: bgImgcustomPosYUnit,
		[`${controlName}bgImgRepeat`]: bgImgRepeat,

		[`TAB${controlName}backgroundSize`]: TABbackgroundSize,
		[`TAB${controlName}bgImgCustomSize`]: TABbgImgCustomSize,
		[`TAB${controlName}bgImgCustomSizeUnit`]: TABbgImgCustomSizeUnit,
		[`TAB${controlName}bgImgPos`]: TABbgImgPos,
		[`TAB${controlName}bgImgcustomPosX`]: TABbgImgcustomPosX,
		[`TAB${controlName}bgImgcustomPosXUnit`]: TABbgImgcustomPosXUnit,
		[`TAB${controlName}bgImgcustomPosY`]: TABbgImgcustomPosY,
		[`TAB${controlName}bgImgcustomPosYUnit`]: TABbgImgcustomPosYUnit,
		[`TAB${controlName}bgImgRepeat`]: TABbgImgRepeat,

		[`MOB${controlName}backgroundSize`]: MOBbackgroundSize,
		[`MOB${controlName}bgImgCustomSize`]: MOBbgImgCustomSize,
		[`MOB${controlName}bgImgCustomSizeUnit`]: MOBbgImgCustomSizeUnit,
		[`MOB${controlName}bgImgPos`]: MOBbgImgPos,
		[`MOB${controlName}bgImgcustomPosX`]: MOBbgImgcustomPosX,
		[`MOB${controlName}bgImgcustomPosXUnit`]: MOBbgImgcustomPosXUnit,
		[`MOB${controlName}bgImgcustomPosY`]: MOBbgImgcustomPosY,
		[`MOB${controlName}bgImgcustomPosYUnit`]: MOBbgImgcustomPosYUnit,
		[`MOB${controlName}bgImgRepeat`]: MOBbgImgRepeat,
	} = attributes;

	const bgColor = BgColor ? BgColor : '';
	const bgImage = bgImageURL ? bgImageURL : '';
	const bgImageId = bgImageID ? bgImageID : '';
	const bgAttachment = bgImgAttachment ? bgImgAttachment : '';
	const bgSize = backgroundSize ? backgroundSize : '';
	const bgCustomSize = bgImgCustomSize ? bgImgCustomSize : '';
	const bgCustomSizeUnit = bgImgCustomSizeUnit ? bgImgCustomSizeUnit : '';
	const bgPos = bgImgPos ? bgImgPos : '';
	const bgCustomPosX = bgImgcustomPosX ? bgImgcustomPosX : '';
	const bgCustomPosXUnit = bgImgcustomPosXUnit ? bgImgcustomPosXUnit : '';
	const bgCustomPosY = bgImgcustomPosY ? bgImgcustomPosY : '';
	const bgCustomPosYUnit = bgImgcustomPosYUnit ? bgImgcustomPosYUnit : '';
	const bgRepeat = bgImgRepeat ? bgImgRepeat : '';

	const TABbgSize = TABbackgroundSize ? TABbackgroundSize : '';
	const TABbgCustomSize = TABbgImgCustomSize ? TABbgImgCustomSize : '';
	const TABbgCustomSizeUnit = TABbgImgCustomSizeUnit
		? TABbgImgCustomSizeUnit
		: '';
	const TABbgPos = TABbgImgPos ? TABbgImgPos : '';
	const TABbgCustomPosX = TABbgImgcustomPosX ? TABbgImgcustomPosX : '';
	const TABbgCustomPosXUnit = TABbgImgcustomPosXUnit
		? TABbgImgcustomPosXUnit
		: '';
	const TABbgCustomPosY = TABbgImgcustomPosY ? TABbgImgcustomPosY : '';
	const TABbgCustomPosYUnit = TABbgImgcustomPosYUnit
		? TABbgImgcustomPosYUnit
		: '';
	const TABbgRepeat = TABbgImgRepeat ? TABbgImgRepeat : '';

	const MOBbgSize = MOBbackgroundSize ? MOBbackgroundSize : '';
	const MOBbgCustomSize = MOBbgImgCustomSize ? MOBbgImgCustomSize : '';
	const MOBbgCustomSizeUnit = MOBbgImgCustomSizeUnit
		? MOBbgImgCustomSizeUnit
		: '';
	const MOBbgPos = MOBbgImgPos ? MOBbgImgPos : '';
	const MOBbgCustomPosX = MOBbgImgcustomPosX ? MOBbgImgcustomPosX : '';
	const MOBbgCustomPosXUnit = MOBbgImgcustomPosXUnit
		? MOBbgImgcustomPosXUnit
		: '';
	const MOBbgCustomPosY = MOBbgImgcustomPosY ? MOBbgImgcustomPosY : '';
	const MOBbgCustomPosYUnit = MOBbgImgcustomPosYUnit
		? MOBbgImgcustomPosYUnit
		: '';
	const MOBbgRepeat = MOBbgImgRepeat ? MOBbgImgRepeat : '';

	const bgDesktopStyle = `
        background-color: ${bgColor};
        background-image: url(${bgImage});
        background-attachment: ${bgAttachment};
        background-size: ${
			bgSize === 'custom' ? `${bgCustomSize}${bgCustomSizeUnit}` : bgSize
		};
        background-position: ${
			bgPos === 'custom'
				? `${bgCustomPosX}${bgCustomPosXUnit} ${bgCustomPosY}${bgCustomPosYUnit}`
				: bgPos
		};
        background-repeat: ${bgRepeat};
    `;

	const bgTabletStyle = `
        background-size: ${
			TABbgSize === 'custom'
				? `${TABbgCustomSize}${TABbgCustomSizeUnit}`
				: TABbgSize
		};
        background-position: ${
			TABbgPos === 'custom'
				? `${TABbgCustomPosX}${TABbgCustomPosXUnit} ${TABbgCustomPosY}${TABbgCustomPosYUnit}`
				: TABbgPos
		};
        background-repeat: ${TABbgRepeat};
    `;

	const bgMobileStyle = `
        background-size: ${
			MOBbgSize === 'custom'
				? `${MOBbgCustomSize}${MOBbgCustomSizeUnit}`
				: MOBbgSize
		};
        background-position: ${
			MOBbgPos === 'custom'
				? `${MOBbgCustomPosX}${MOBbgCustomPosXUnit} ${MOBbgCustomPosY}${MOBbgCustomPosYUnit}`
				: MOBbgPos
		};
        background-repeat: ${MOBbgRepeat};
    `;

	const bgGradient = `
        background-image: ${bgColor};
    `;

	// if BgType is classic then return bgDesktopStyle + bgTabletStyle + bgMobileStyle else return bgGradient
	if (BgType === 'classic') {
		return {
			bgDesktopStyle,
			bgTabletStyle,
			bgMobileStyle,
		};
	} else {
		bgGradient;
	}
};
