import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

// the consts defined here should be unique from one another
export const BLOCK_PREFIX = "zolo-advanced-button";

export const PRESETS = [
	{ label: __("Default", "essential-blocks"), value: "preset-0" },
	{ label: __("Preset 1", "essential-blocks"), value: "preset-1" },
	{ label: __("Preset 2", "essential-blocks"), value: "preset-2" },
	{ label: __("Preset 3", "essential-blocks"), value: "preset-3" },
];