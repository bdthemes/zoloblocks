import { hasVal } from './helper';

export const generateDimensionAttributes = (controlName, defaults = {}) => {
	const { top, bottom, left, right, isLinked = true } = defaults;

	const desktopTop = hasVal(top)
		? {
				[`${controlName}ZRPTop`]: {
					type: 'string',
					default: `${top}`,
				},
		  }
		: {
				[`${controlName}ZRPTop`]: {
					type: 'string',
				},
		  };

	const desktopRight = hasVal(right)
		? {
				[`${controlName}ZRPRight`]: {
					type: 'string',
					default: `${right}`,
				},
		  }
		: {
				[`${controlName}ZRPRight`]: {
					type: 'string',
				},
		  };

	const desktopBottom = hasVal(bottom)
		? {
				[`${controlName}ZRPBottom`]: {
					type: 'string',
					default: `${bottom}`,
				},
		  }
		: {
				[`${controlName}ZRPBottom`]: {
					type: 'string',
				},
		  };

	const desktopLeft = hasVal(left)
		? {
				[`${controlName}ZRPLeft`]: {
					type: 'string',
					default: `${left}`,
				},
		  }
		: {
				[`${controlName}ZRPLeft`]: {
					type: 'string',
				},
		  };
	return {
		...desktopTop,
		...desktopRight,
		...desktopBottom,
		...desktopLeft,

		[`TAB${controlName}ZRPTop`]: {
			type: 'string',
		},
		[`TAB${controlName}ZRPRight`]: {
			type: 'string',
		},
		[`TAB${controlName}ZRPBottom`]: {
			type: 'string',
		},
		[`TAB${controlName}ZRPLeft`]: {
			type: 'string',
		},

		[`MOB${controlName}ZRPTop`]: {
			type: 'string',
		},
		[`MOB${controlName}ZRPRight`]: {
			type: 'string',
		},
		[`MOB${controlName}ZRPBottom`]: {
			type: 'string',
		},
		[`MOB${controlName}ZRPLeft`]: {
			type: 'string',
		},

		[`${controlName}ZRPIsLinked`]: {
			type: 'string',
			default: isLinked,
		},

		[`${controlName}ZRPUnit`]: {
			type: 'string',
			default: 'px',
		},
		[`TAB${controlName}ZRPUnit`]: {
			type: 'string',
			default: 'px',
		},
		[`MOB${controlName}ZRPUnit`]: {
			type: 'string',
			default: 'px',
		},
	};
};

export const generateDimensionStyle = ({
	controlName,
	styleFor,
	attributes,
}) => {
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

		[`${controlName}ZRPIsLinked`]: isLinked,
	} = attributes;

	let dimensionStylesDesktop = ' ';
	let dimensionStylesTab = ' ';
	let dimensionStylesMobile = ' ';

	if (isLinked === true) {
		if (styleFor === 'border-radius') {
			dimensionStylesDesktop = `${dimensionTop
				? `border-radius: ${parseFloat(dimensionTop)}${dimensionUnit};`
				: ' '}
    	`;

			dimensionStylesTab = ` ${TABdimensionTop
				? `border-radius: ${parseFloat(
						TABdimensionTop
				  )}${TABdimensionUnit};`
				: ' '}
   		 `;

			dimensionStylesMobile = `
        ${
			MOBdimensionTop
				? `border-radius: ${parseFloat(
						MOBdimensionTop
				  )}${MOBdimensionUnit};`
				: ' '
		}
    `;
		} else {
			dimensionStylesDesktop = `
        ${
			dimensionTop
				? `${styleFor}: ${parseFloat(dimensionTop)}${dimensionUnit};`
				: ' '
				}
        `;

			dimensionStylesTab = `
            ${
				TABdimensionTop
					? `${styleFor}: ${parseFloat(
							TABdimensionTop
					  )}${TABdimensionUnit};`
					: ' '
			}

        `;

			dimensionStylesMobile = `
            ${
				MOBdimensionTop
					? `${styleFor}: ${parseFloat(
							MOBdimensionTop
					  )}${MOBdimensionUnit};`
					: ' '
			}

        `;
		}
	} else {
		if (styleFor === 'border-radius') {
			dimensionStylesDesktop = `
                ${
					dimensionTop
						? `border-top-left-radius: ${parseFloat(
								dimensionTop
						  )}${dimensionUnit};`
						: ' '
				}
                ${
					dimensionRight
						? `border-top-right-radius: ${parseFloat(
								dimensionRight
						  )}${dimensionUnit};`
						: ' '
				}
                ${
					dimensionLeft
						? `border-bottom-left-radius: ${parseFloat(
								dimensionLeft
						  )}${dimensionUnit};`
						: ' '
				}
                ${
					dimensionBottom
						? `border-bottom-right-radius: ${parseFloat(
								dimensionBottom
						  )}${dimensionUnit};`
						: ' '
				}
        
            `;

			dimensionStylesTab = `
                ${
					TABdimensionTop
						? `border-top-left-radius: ${parseFloat(
								TABdimensionTop
						  )}${TABdimensionUnit};`
						: ' '
				}
                ${
					TABdimensionRight
						? `border-top-right-radius: ${parseFloat(
								TABdimensionRight
						  )}${TABdimensionUnit};`
						: ' '
				}
                ${
					TABdimensionLeft
						? `border-bottom-left-radius: ${parseFloat(
								TABdimensionLeft
						  )}${TABdimensionUnit};`
						: ' '
				}
                ${
					TABdimensionBottom
						? `border-bottom-right-radius: ${parseFloat(
								TABdimensionBottom
						  )}${TABdimensionUnit};`
						: ' '
				}
    
            `;

			dimensionStylesMobile = `
                ${
					MOBdimensionTop
						? `border-top-left-radius: ${parseFloat(
								MOBdimensionTop
						  )}${MOBdimensionUnit};`
						: ' '
				}
                ${
					MOBdimensionRight
						? `border-top-right-radius: ${parseFloat(
								MOBdimensionRight
						  )}${MOBdimensionUnit};`
						: ' '
				}
                ${
					MOBdimensionLeft
						? `border-bottom-left-radius: ${parseFloat(
								MOBdimensionLeft
						  )}${MOBdimensionUnit};`
						: ' '
				}
                ${
					MOBdimensionBottom
						? `border-bottom-right-radius: ${parseFloat(
								MOBdimensionBottom
						  )}${MOBdimensionUnit};`
						: ' '
				}
    
            `;
		} else {
			dimensionStylesDesktop = `
            ${
				dimensionTop
					? `${styleFor}-top: ${parseFloat(
							dimensionTop
					  )}${dimensionUnit};`
					: ' '
			}
            ${
				dimensionRight
					? `${styleFor}-right: ${parseFloat(
							dimensionRight
					  )}${dimensionUnit};`
					: ' '
			}
            ${
				dimensionLeft
					? `${styleFor}-left: ${parseFloat(
							dimensionLeft
					  )}${dimensionUnit};`
					: ' '
			}
            ${
				dimensionBottom
					? `${styleFor}-bottom: ${parseFloat(
							dimensionBottom
					  )}${dimensionUnit};`
					: ' '
			}
        
        `;

			dimensionStylesTab = `
            ${
				TABdimensionTop
					? `${styleFor}-top: ${parseFloat(
							TABdimensionTop
					  )}${TABdimensionUnit};`
					: ' '
			}
            ${
				TABdimensionRight
					? `${styleFor}-right: ${parseFloat(
							TABdimensionRight
					  )}${TABdimensionUnit};`
					: ' '
			}
            ${
				TABdimensionLeft
					? `${styleFor}-left: ${parseFloat(
							TABdimensionLeft
					  )}${TABdimensionUnit};`
					: ' '
			}
            ${
				TABdimensionBottom
					? `${styleFor}-bottom: ${parseFloat(
							TABdimensionBottom
					  )}${TABdimensionUnit};`
					: ' '
			}
    
        `;

			dimensionStylesMobile = `
        ${
			MOBdimensionTop
				? `${styleFor}-top: ${parseFloat(
						MOBdimensionTop
				  )}${MOBdimensionUnit};`
				: ' '
		}
        ${
			MOBdimensionRight
				? `${styleFor}-right: ${parseFloat(
						MOBdimensionRight
				  )}${MOBdimensionUnit};`
				: ' '
		}
        ${
			MOBdimensionLeft
				? `${styleFor}-left: ${parseFloat(
						MOBdimensionLeft
				  )}${MOBdimensionUnit};`
				: ' '
		}
        ${
			MOBdimensionBottom
				? `${styleFor}-bottom: ${parseFloat(
						MOBdimensionBottom
				  )}${MOBdimensionUnit};`
				: ' '
		}
        `;
		}
	}

	return {
		dimensionStylesDesktop,
		dimensionStylesTab,
		dimensionStylesMobile,
	};
};
