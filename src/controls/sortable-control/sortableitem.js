import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = (props) => {
	const { attributes, listeners, setNodeRef, transform, transition, isOver } =
		useSortable({ id: props.id });

	const itemStyle = {
		transform: CSS.Transform.toString(transform),
		transition,
		border: isOver ? '2px solid #4747FF' : undefined,
		borderRadius: '6px',
	};

	return (
		<div style={itemStyle} ref={setNodeRef} className="dnd-fields-wrapper">
			{props.children}
			<button {...attributes} {...listeners} className="float-btn">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9 12.5C9.55228 12.5 10 12.0523 10 11.5C10 10.9477 9.55228 10.5 9 10.5C8.44772 10.5 8 10.9477 8 11.5C8 12.0523 8.44772 12.5 9 12.5Z"
						fill="#4D4D4D"
					/>
					<path
						d="M9 12.5C9.55228 12.5 10 12.0523 10 11.5C10 10.9477 9.55228 10.5 9 10.5C8.44772 10.5 8 10.9477 8 11.5C8 12.0523 8.44772 12.5 9 12.5Z"
						fill="#39394D"
					/>
					<path
						d="M9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7Z"
						fill="#4D4D4D"
					/>
					<path
						d="M9 7C9.55228 7 10 6.55228 10 6C10 5.44772 9.55228 5 9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7Z"
						fill="#39394D"
					/>
					<path
						d="M9 18C9.55228 18 10 17.5523 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18Z"
						fill="#4D4D4D"
					/>
					<path
						d="M9 18C9.55228 18 10 17.5523 10 17C10 16.4477 9.55228 16 9 16C8.44772 16 8 16.4477 8 17C8 17.5523 8.44772 18 9 18Z"
						fill="#39394D"
					/>
					<path
						d="M15 12.5C15.5523 12.5 16 12.0523 16 11.5C16 10.9477 15.5523 10.5 15 10.5C14.4477 10.5 14 10.9477 14 11.5C14 12.0523 14.4477 12.5 15 12.5Z"
						fill="#4D4D4D"
					/>
					<path
						d="M15 12.5C15.5523 12.5 16 12.0523 16 11.5C16 10.9477 15.5523 10.5 15 10.5C14.4477 10.5 14 10.9477 14 11.5C14 12.0523 14.4477 12.5 15 12.5Z"
						fill="#39394D"
					/>
					<path
						d="M15 7C15.5523 7 16 6.55228 16 6C16 5.44772 15.5523 5 15 5C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7Z"
						fill="#4D4D4D"
					/>
					<path
						d="M15 7C15.5523 7 16 6.55228 16 6C16 5.44772 15.5523 5 15 5C14.4477 5 14 5.44772 14 6C14 6.55228 14.4477 7 15 7Z"
						fill="#39394D"
					/>
					<path
						d="M15 18C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18Z"
						fill="#4D4D4D"
					/>
					<path
						d="M15 18C15.5523 18 16 17.5523 16 17C16 16.4477 15.5523 16 15 16C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18Z"
						fill="#39394D"
					/>
				</svg>
			</button>
		</div>
	);
};

export default SortableItem;
