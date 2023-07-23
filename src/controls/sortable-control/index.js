/**
 * External dependencies
 */
import { DndContext } from '@dnd-kit/core';
import { arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';

/**
 * Internal dependencies
 */
import Droppable from './droppable';

const SortableControl = ({
	defaultItems,
	attributeName,
	setAttributes,
	children,
}) => {
	const handleDragEnd = ({ active, over }) => {
		if (!over) {
			return;
		}
		if (active.id !== over.id) {
			const activeIndex = active.data.current.sortable.index;
			const overIndex = over.data.current?.sortable.index || 0;
			const newItems = arrayMove(defaultItems, activeIndex, overIndex);
			setAttributes({ [attributeName]: newItems });
		}
	};

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<Droppable
				strategy={verticalListSortingStrategy}
				id="group"
				items={defaultItems}
				key="group"
			>
				{children}
			</Droppable>
		</DndContext>
	);
};

export default SortableControl;
