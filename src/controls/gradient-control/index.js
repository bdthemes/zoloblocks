import { GradientPicker } from '@wordpress/components';


function GradientControl({ label, value, onChange }) {

	const setSettings = (val) => {
		onChange(val)
	}

	return (

		<div className="zb-gradient-control-wrap">

			{label && (
				<div className="zb-gradient-head">
					<span className="zb-label">{label}</span>
				</div>
			)}

			<div className="zb-gradient-body">
				<GradientPicker
					label={'helloooooo'}
					value={value}
					onChange={(val) => setSettings(val)}

					gradients={[
						{
							name: 'Green',
							gradient: 'linear-gradient(135deg, #80F1A6 0%, #EFD000 100%)',
							slug: 'green',
						},
						{
							name: 'Blue',
							gradient: 'linear-gradient(45deg, #0066FF 0%, #0A51BB 100%)',
							slug: 'blue',
						},
						{
							name: 'Dark Blue',
							gradient: 'linear-gradient(50deg, #15D2E3 10%, #11D6E2 40%, #10D7E2 80%)',
							slug: 'darkBlue',
						},
						{
							name: 'Yellow',
							gradient: 'linear-gradient(135deg, #FBDA61 2.88%, #F76B1C 98.13%)',
							slug: 'yellow',
						},
						{
							name: 'Merun',
							gradient: 'linear-gradient(135deg, #E25544 2.88%, #620C90 98.14%)',
							slug: 'merun',
						},
					]}
				/>
			</div>

		</div>
	)
}

export default GradientControl;