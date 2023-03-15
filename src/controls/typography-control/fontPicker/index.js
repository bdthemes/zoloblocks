/**
 * WordPress dependencies
 */
import { BaseControl } from "@wordpress/components";
import { withInstanceId } from "@wordpress/compose";
import { __ } from "@wordpress/i18n";

/**
 * External Dependencies
 */
import Select2 from "react-select";

/**
 * Internal dependencies
 */
import { googleFonts } from "./googleFonts";

const FontFamilyPicker = ({
	label,
	value,
	help,
	instanceId,
	onChange,
	className,
	...props
}) => {

	const id = `inspector-zb-font-family-${instanceId}`;
	const fonts = [
		{ value: "", label: __("Default", "zolo-blocks") },
		{ value: "Arial", label: "Arial" },
		{ value: "Helvetica", label: "Helvetica" },
		{ value: "Times-New-Roman", label: "Times New Roman" },
		{ value: "Georgia", label: "Georgia" },
	];

	//Add Google Fonts
	Object.keys(googleFonts).map((font) => {
		fonts.push({ value: font, label: googleFonts[font].family });
	});


	const onChangeValue = (select) => {

		console.log("🚀 ~ file: index.js:44 ~ onChangeValue ~ select", select)


		let selectedFont = select.label;

		const meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
		let ba = "";
		const googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
		const link = document.createElement("link");
		link.rel = "stylesheet";

		if (typeof meta !== "undefined" && typeof meta._zb_attr !== "undefined") {
			ba = meta._zb_attr;
		}

		if (ba.length > 0) {
			//Load fonts on the header
			if (!ba.includes(selectedFont)) {
				link.href = "https://fonts.googleapis.com/css?family=" + selectedFont.replace(/ /g, "+") + googleFontsAttr;
				document.head.appendChild(link);
			}
			ba = ba.replace("," + selectedFont, "");
			ba = ba + "," + selectedFont;
		} else {
			link.href = "https://fonts.googleapis.com/css?family=" + selectedFont.replace(/ /g, "+") + googleFontsAttr;
			document.head.appendChild(link);
			ba = selectedFont;
		}

		//Save values to metadata
		wp.data.dispatch("core/editor").editPost({
			meta: { _zb_attr: ba },
		});

		onChange(selectedFont);
	};

	return (
		<BaseControl label={label} id={id} help={help} className={className}>
			<Select2
				name="zb-select-font"
				value={{
					value: (value || "").replace(/\s+/g, "-"),
					label: value,
				}}
				onChange={onChangeValue}
				options={fonts}
			/>
		</BaseControl>
	);
};

export default withInstanceId(FontFamilyPicker);


