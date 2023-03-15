import { Button, ButtonGroup } from '@wordpress/components';

const UnitBtn = ({ selectedUnit, unitTypes, onClick }) => {
	return (
		<ButtonGroup className="zb-unit-control-btn-group">
			{unitTypes.map((unit) => (
				<Button
					className={`zb-unit-control-btn ${
						unit.value === selectedUnit && 'zb-unit-active'
					}`}
					isSmall
					variant={
						unit.value === selectedUnit ? 'primary' : 'secondary'
					}
					onClick={() => onClick(unit.value)}
				>
					{unit.label}
				</Button>
			))}
		</ButtonGroup>
	);
};

export default UnitBtn;
