function Item({ content, onDelete }) {
	return (
		<li className="item" draggable="true">
			<p>{content}</p>
			<button onClick={onDelete}>X</button>
		</li>
	);
}

export default Item;
