import { RichText, useBlockProps } from "@wordpress/block-editor";
import { BLOCK_PREFIX } from "./constants";

const Save = ({ attributes }) => {
	const {
		uniqueId,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`zolo-block-wrapper zolo-advanced-heading ${uniqueId}`}>
				<h3>Advance Heading From Edit</h3>
			</div>
		</div>
	)
}

export default Save;