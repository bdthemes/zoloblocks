import { RichText, useBlockProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const {
		uniqueId,
		//settings
		titleText,
		subTitleText,
		showSubTitle,
		titleTagName,
		showSeparator,
		subTitleTagName,
		//style
		blockStyle
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<style>{`${blockStyle}`}</style>
			<div className={`zolo-block-wrapper zolo-advanced-heading ${uniqueId}`}>
				<RichText.Content
					tagName={titleTagName}
					className="zolo-ah-title"
					value={titleText}
					formattingControl={["bold", "italic"]}
				/>
				{showSubTitle && (
					<RichText.Content
						tagName={subTitleTagName}
						className="zolo-ah-subtitle"
						value={subTitleText}
						formattingControl={["bold", "italic"]}
					/>
				)}
				{showSeparator && (
					<div className={"zolo-ah-separator line"}></div>
				)}

			</div>
		</div>
	)
}

export default Save;