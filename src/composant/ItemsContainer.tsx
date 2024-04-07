import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import Item from "./Item";

interface ItemsContainerProps {
	containerId: string;
	title: string;
	items: string[];
	onDelete: () => void;
	onDropItem: (newItem: string, originTitle: string, destinationTitle: string) => void;
	onDeleteItem: (item: string, containerTitle: string) => void;
}

function ItemsContainer({
	containerId,
	title,
	items,
	onDelete,
	onDropItem,
	onDeleteItem,
}: ItemsContainerProps) {
	// console.log("ItemsContainer Droppable ID:", containerId);
	const [newItem, setNewItem] = useState("");
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [validationMsg, setValidationMsg] = useState("");

	const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (newItem) {
			onDropItem(newItem, title, title); // Ajoute l'élément à l'état global
			setNewItem("");
		} else {
			setValidationMsg("Veuillez entrer un texte valide.");
		}
	};

	const toggleFormVisibility = () => {
		setIsFormVisible(!isFormVisible);
		if (isFormVisible) {
			setValidationMsg("");
		}
	};

	const handleDeleteItem = (index: number) => {
		onDeleteItem(items[index], title); // Informe App.js de la suppression
	};

	return (
		<Droppable droppableId={containerId}>
			{provided => (
				<div
					className="items-container"
					{...provided.droppableProps}
					ref={provided.innerRef}
				>
					<div className="top-container">
						<h2>{title}</h2>
						<button onClick={onDelete} className="delete-container-btn">
							X
						</button>
					</div>
					<ul>
						{items.map((item, index) => (
							<Item
								key={index}
								item={item}
								index={index}
								onDeleteItem={handleDeleteItem}
							/>
						))}
						{provided.placeholder}
					</ul>
					<button onClick={toggleFormVisibility} className="add-item-btn">
						Ajouter un élément
					</button>
					<form
						onSubmit={handleAddItem}
						className={isFormVisible ? "visible" : ""}
						autoComplete="off"
					>
						<div className="top-form-container">
							<label htmlFor="item">Ajouter un nouvel élément</label>
							<button
								type="button"
								className="close-form-btn"
								onClick={toggleFormVisibility}
							>
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
						<button type="submit">Envoyer</button>
					</form>
				</div>
			)}
		</Droppable>
	);
}

export default ItemsContainer;
