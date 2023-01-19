import { RichText, useBlockProps } from "@wordpress/block-editor";
import { BLOCK_PREFIX } from "./constants";

const Save = ({ attributes }) => {
	const {
		uniqueId,
		preset,
		bgColor,
		textColor,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className={`zolo-block-wrapper zolo-advanced-button ${uniqueId}`}>
				<div
					className={`zolo-block-inner zolo-inner-${uniqueId} ${BLOCK_PREFIX} ${preset}`}
					data-id={uniqueId}
				>
					<div className={`zolo-content`}>
						<button>Advanced Button</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Save;
