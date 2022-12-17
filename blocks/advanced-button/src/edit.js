/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import {
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { select } from "@wordpress/data";

/**
 * Internal depencencies
 */
import { BLOCK_PREFIX } from "./constants";
import {handleUniqueId} from "../../../src/helpers/helper"

import classnames from "classnames";

import Inspector from "./inspector";

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } = props;
	const {
		uniqueId,
		preset,
		bgColor,
		textColor,
	} = attributes;

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		handleUniqueId({
			BLOCK_PREFIX,
			uniqueId,
			setAttributes,
			clientId,
		});
	}, []);

	const blockProps = useBlockProps({
		className: classnames(className, `zolo-block-wrapper zolo-${uniqueId}`),
	});

	return (
		<>
			{isSelected && <Inspector attributes={attributes} setAttributes={setAttributes} />}

			<div {...blockProps}>
				<div
					className={`zolo-block-inner zolo-inner-${uniqueId} ${BLOCK_PREFIX} ${preset}`}
					data-id={uniqueId}
				>
					<div className={`zolo-content`}>
						Advanced Button Block
					</div>
				</div>
			</div>
		</>
	)
}
