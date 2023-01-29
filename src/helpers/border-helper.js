export const generateBorderAttributies = (controlName, defaults = {}) => {
	const { defaultBorder } = defaults;
	const desktopBorder = defaultBorder
		? {
			[`${controlName}Border`]: {
				type: 'object',
				default: defaultBorder,
			},
		}
		: {
			[`${controlName}Border`]: {
				type: 'object',
			},
		};

	return {
		...desktopBorder,
		[`TAB${controlName}Border`]: {
			type: 'object',
		},
		[`MOB${controlName}Border`]: {
			type: 'object',
		},
	};
};

//generate border style
export const generateBorderStyle = ({
	controlName,
	attributes,
}) => {
	const {
		[`${controlName}Border`]: desktopBorder,
		[`TAB${controlName}Border`]: tabBorder,
		[`MOB${controlName}Border`]: mobBorder,
	} = attributes;

	const desktopBorderStyle = desktopBorder ? `
		${desktopBorder?.width && desktopBorder?.width != undefined ? 'border-width:' + desktopBorder?.width + ';' : ''}
		${desktopBorder?.color && desktopBorder?.color != undefined ? 'border-color:' + desktopBorder?.color + ';' : ''}
		${desktopBorder?.style && desktopBorder?.style != undefined ? 'border-style:' + desktopBorder?.style + ';' : ''}
		${desktopBorder?.top?.width && desktopBorder?.top?.width != undefined ? 'border-top-width:' + desktopBorder?.top?.width + ';' : ''}
		${desktopBorder?.top?.color && desktopBorder?.top?.color != undefined ? 'border-top-color:' + desktopBorder?.top?.color + ';' : ''}
		${desktopBorder?.top?.style && desktopBorder?.top?.style != undefined ? 'border-top-style:' + desktopBorder?.top?.style + ';' : ''}
		${desktopBorder?.bottom?.width && desktopBorder?.bottom?.width != undefined ? 'border-bottom-width:' + desktopBorder?.bottom?.width + ';' : ''}
		${desktopBorder?.bottom?.color && desktopBorder?.bottom?.color != undefined ? 'border-bottom-color:' + desktopBorder?.bottom?.color + ';' : ''}
		${desktopBorder?.bottom?.style && desktopBorder?.bottom?.style != undefined ? 'border-bottom-style:' + desktopBorder?.bottom?.style + ';' : ''}
		${desktopBorder?.left?.width && desktopBorder?.left?.width != undefined ? 'border-left-width:' + desktopBorder?.left?.width + ';' : ''}
		${desktopBorder?.left?.color && desktopBorder?.left?.color != undefined ? 'border-left-color:' + desktopBorder?.left?.color + ';' : ''}
		${desktopBorder?.left?.style && desktopBorder?.left?.style != undefined ? 'border-left-style:' + desktopBorder?.left?.style + ';' : ''}
		${desktopBorder?.right?.width && desktopBorder?.right?.width != undefined ? 'border-right-width:' + desktopBorder?.right?.width + ';' : ''}
		${desktopBorder?.right?.color && desktopBorder?.right?.color != undefined ? 'border-right-color:' + desktopBorder?.right?.color + ';' : ''}
		${desktopBorder?.right?.style && desktopBorder?.right?.style != undefined ? 'border-right-style:' + desktopBorder?.right?.style + ';' : ''}
	`: '';

	const tabBorderStyle = tabBorder ? `
		${tabBorder?.width && tabBorder?.width != undefined ? 'border-width:' + tabBorder?.width + ';' : ''}
		${tabBorder?.color && tabBorder?.color != undefined ? 'border-color:' + tabBorder?.color + ';' : ''}
		${tabBorder?.style && tabBorder?.style != undefined ? 'border-style:' + tabBorder?.style + ';' : ''}
		${tabBorder?.top?.width && tabBorder?.top?.width != undefined ? 'border-top-width:' + tabBorder?.top?.width + ';' : ''}
		${tabBorder?.top?.color && tabBorder?.top?.color != undefined ? 'border-top-color:' + tabBorder?.top?.color + ';' : ''}
		${tabBorder?.top?.style && tabBorder?.top?.style != undefined ? 'border-top-style:' + tabBorder?.top?.style + ';' : ''}
		${tabBorder?.bottom?.width && tabBorder?.bottom?.width != undefined ? 'border-bottom-width:' + tabBorder?.bottom?.width + ';' : ''}
		${tabBorder?.bottom?.color && tabBorder?.bottom?.color != undefined ? 'border-bottom-color:' + tabBorder?.bottom?.color + ';' : ''}
		${tabBorder?.bottom?.style && tabBorder?.bottom?.style != undefined ? 'border-bottom-style:' + tabBorder?.bottom?.style + ';' : ''}
		${tabBorder?.left?.width && tabBorder?.left?.width != undefined ? 'border-left-width:' + tabBorder?.left?.width + ';' : ''}
		${tabBorder?.left?.color && tabBorder?.left?.color != undefined ? 'border-left-color:' + tabBorder?.left?.color + ';' : ''}
		${tabBorder?.left?.style && tabBorder?.left?.style != undefined ? 'border-left-style:' + tabBorder?.left?.style + ';' : ''}
		${tabBorder?.right?.width && tabBorder?.right?.width != undefined ? 'border-right-width:' + tabBorder?.right?.width + ';' : ''}
		${tabBorder?.right?.color && tabBorder?.right?.color != undefined ? 'border-right-color:' + tabBorder?.right?.color + ';' : ''}
		${tabBorder?.right?.style && tabBorder?.right?.style != undefined ? 'border-right-style:' + tabBorder?.right?.style + ';' : ''}
	`: '';

	const mobBorderStyle = mobBorder ? `
	${mobBorder?.width && mobBorder?.width != undefined ? 'border-width:' + mobBorder?.width + ';' : ''}
	${mobBorder?.color && mobBorder?.color != undefined ? 'border-color:' + mobBorder?.color + ';' : ''}
	${mobBorder?.style && mobBorder?.style != undefined ? 'border-style:' + mobBorder?.style + ';' : ''}
	${mobBorder?.top?.width && mobBorder?.top?.width != undefined ? 'border-top-width:' + mobBorder?.top?.width + ';' : ''}
	${mobBorder?.top?.color && mobBorder?.top?.color != undefined ? 'border-top-color:' + mobBorder?.top?.color + ';' : ''}
	${mobBorder?.top?.style && mobBorder?.top?.style != undefined ? 'border-top-style:' + mobBorder?.top?.style + ';' : ''}
	${mobBorder?.bottom?.width && mobBorder?.bottom?.width != undefined ? 'border-bottom-width:' + mobBorder?.bottom?.width + ';' : ''}
	${mobBorder?.bottom?.color && mobBorder?.bottom?.color != undefined ? 'border-bottom-color:' + mobBorder?.bottom?.color + ';' : ''}
	${mobBorder?.bottom?.style && mobBorder?.bottom?.style != undefined ? 'border-bottom-style:' + mobBorder?.bottom?.style + ';' : ''}
	${mobBorder?.left?.width && mobBorder?.left?.width != undefined ? 'border-left-width:' + mobBorder?.left?.width + ';' : ''}
	${mobBorder?.left?.color && mobBorder?.left?.color != undefined ? 'border-left-color:' + mobBorder?.left?.color + ';' : ''}
	${mobBorder?.left?.style && mobBorder?.left?.style != undefined ? 'border-left-style:' + mobBorder?.left?.style + ';' : ''}
	${mobBorder?.right?.width && mobBorder?.right?.width != undefined ? 'border-right-width:' + mobBorder?.right?.width + ';' : ''}
	${mobBorder?.right?.color && mobBorder?.right?.color != undefined ? 'border-right-color:' + mobBorder?.right?.color + ';' : ''}
	${mobBorder?.right?.style && mobBorder?.right?.style != undefined ? 'border-right-style:' + mobBorder?.right?.style + ';' : ''}
`: '';

	return { desktopBorderStyle, tabBorderStyle, mobBorderStyle };
};

