/**
 * WordPress dependencies
 */
import { useDroppable } from '@dnd-kit/core';
import {
	SortableContext,
	verticalListSortingStrategy,
	rectSortingStrategy,
} from '@dnd-kit/sortable';

const Droppable = ({ id, items, children }) => {
	const { setNodeRef } = useDroppable({ id });

	return (
		<SortableContext id={id} items={items} strategy={rectSortingStrategy}>
			<div ref={setNodeRef} className="dnd-items-wrapper">
				{children}
			</div>
		</SortableContext>
	);
};

export default Droppable;
