import BGControl from "./bg-control";
import OverlayControl from "./overlay-control";

const BackgroundControl = ({
	controlName,
	resRequiredProps
}) => {


	return (
		<>
			<BGControl
				controlName={controlName}
				resRequiredProps={resRequiredProps}
				noMainBGImg={false}
			/>

			<h1>Background control</h1>

			<OverlayControl
				controlName={controlName}
				resRequiredProps={resRequiredProps}
			/>
		</>

	)
}

export default BackgroundControl;