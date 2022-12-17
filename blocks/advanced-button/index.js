import { __ } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

import "./src/style.scss";
import Edit from "./src/edit";
import Save from "./src/save";
import attributes from "./src/attributes";
import Example from "./src/example";
import metadata from "./block.json";

const { name } = metadata;
registerBlockType(
    { name, ...metadata },
    {
        attributes,
        edit: Edit,
        save: Save,
        example: Example,
    }
);