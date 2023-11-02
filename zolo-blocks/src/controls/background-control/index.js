import { ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import BGControl from "./bg-control";
import OverlayControl from "./overlay-control";

const BackgroundControl = ({
	requiredProps,
	controlName,
	noOverlay = false,
	noMainBGImg = false,
	noOverlayBGImg = false,
	noTransition = false,
}) => {

	const { setAttributes, attributes } = requiredProps;

	const { [`${controlName}isBgOverlay`]: isBgOverlay } = attributes;

	return (
		<>
			<BGControl
				controlName={controlName}
				requiredProps={requiredProps}
				noMainBGImg={noMainBGImg}
				noTransition={noTransition}
			/>

			{noOverlay === false && (<>
				<ToggleControl
					label={__("Enable Overlay", "zolo-blocks")}
					checked={isBgOverlay}
					onChange={() =>
						setAttributes({
							[`${controlName}isBgOverlay`]: !isBgOverlay,
						})
					}
				/>

				{isBgOverlay && (
					<OverlayControl
						controlName={controlName}
						requiredProps={requiredProps}
						noOverlayBGImg={noOverlayBGImg}
						noTransition={noTransition}
					/>
				)}
			</>
			)}

		</>
	)
}

export default BackgroundControl;
