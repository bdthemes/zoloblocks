import Select from 'react-select'

const FontFamilyPicker = () => {
	const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
	return (
		<div>
			<h1>Font family picker</h1>
			{/* <Select options={options} /> */}
		</div>
	);
};

export default FontFamilyPicker;

