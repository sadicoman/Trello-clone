import { useState } from "react";
import Item from "./Item";

function ItemsContainer({ title, onDelete }) {
	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState("");
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [validationMsg, setValidationMsg] = useState("");

	const handleAddItem = e => {
		e.preventDefault();
		if (newItem) {
			setItems([...items, newItem]);
			setNewItem("");
		}
	};

	const handleDeleteItem = index => {
		const newItems = items.filter((_, i) => i !== index);
		setItems(newItems);
	};

	const toggleFormVisibility = () => {
		setIsFormVisible(!isFormVisible);
	};

	return (
		<div className="items-container" draggable="true">
			<div className="top-container">
				<h2>{title}</h2>
				<button onClick={onDelete} className="delete-container-btn">
					X
				</button>
			</div>
			<ul>
				{items.map((item, index) => (
					<Item key={index} content={item} onDelete={() => handleDeleteItem(index)} />
				))}
			</ul>
			<button
				onClick={toggleFormVisibility}
				// className="add-item-btn"
				className={isFormVisible ? "add-item-btn invisible" : "add-item-btn"}
			>
				Add an item
			</button>
			<form
				onSubmit={handleAddItem}
				className={isFormVisible ? "visible" : ""}
				autoComplete="off"
			>
				<div className="top-form-container">
					<label htmlFor="item">Add a new item</label>
					<button type="button" className="close-form-btn" onClick={toggleFormVisibility}>
						X
					</button>
				</div>
				<input
					type="text"
					id="item"
					value={newItem}
					onChange={e => setNewItem(e.target.value)}
				/>
				{validationMsg && <span className="validation-msg">{validationMsg}</span>}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default ItemsContainer;
