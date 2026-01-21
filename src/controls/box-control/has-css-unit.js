function hasCssUnit(input) {
	if (input === null || input === undefined) {
		return false;
	}

	return /^-?\d*\.?\d+[a-zA-Z%]+$/.test(String(input).trim());
}

export default hasCssUnit;
