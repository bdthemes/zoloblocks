import { registerBlockType } from "@wordpress/blocks";
import metadata from "../block.json";
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import "./style.scss";

registerBlockType(metadata, {
  icon: {
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.412 3.75a6.662 6.662 0 1 0 0 13.324 6.662 6.662 0 0 0 0-13.324zM2.25 10.412a8.162 8.162 0 1 1 14.439 5.216l4.841 4.842a.75.75 0 1 1-1.06 1.06l-4.842-4.84A8.162 8.162 0 0 1 2.25 10.412zm6.278-2.436a.75.75 0 1 0-.799-1.27c-1.296.816-2.282 2.822-1.895 5.157a.75.75 0 0 0 1.48-.246c-.304-1.833.506-3.196 1.214-3.64z"
          fill="#2667FF"
        />
      </svg>
    ),
  },
  attributes,
  edit: Edit,
  save: Save,
});
