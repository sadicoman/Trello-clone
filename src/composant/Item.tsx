import { Draggable } from "react-beautiful-dnd";

interface ItemProps {
	item: string;
	index: number;
	onDeleteItem: (index: number) => void;
}

function Item({ item, index, onDeleteItem }: ItemProps) {
	return (
		<Draggable draggableId={item} index={index}>
			{provided => (
				<li
					className="item"
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					{item}
					<button onClick={() => onDeleteItem(index)} className="delete-item-btn">
						X
					</button>
				</li>
			)}
		</Draggable>
	);
}

export default Item;
