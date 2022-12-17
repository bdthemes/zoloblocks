const attributes = {
	//Common Attributes
	uniqueId: {
		type: "string",
	},

	//Block specific Attributes
	preset: {
		type: "string",
		default: "button-1",
	},
	bgColor: {
		type: "string",
		default: "#000000"
	},
	textColor: {
		type: "string",
		default: "#ffffff"
	},
};

export default attributes;
