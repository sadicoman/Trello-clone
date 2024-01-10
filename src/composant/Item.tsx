import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Item({ item, index, onDeleteItem }) {
    return (
        <Draggable draggableId={item} index={index}>
            {(provided) => (
                <li
                    className="item"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {item}
                    <button
                        onClick={() => onDeleteItem(index)}
                        className="delete-item-btn"
                    >
                        X
                    </button>
                </li>
            )}
        </Draggable>
    );
}

export default Item;
