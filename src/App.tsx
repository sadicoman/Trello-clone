import { useState } from "react";
import "./App.css";
import ItemsContainer from "./composant/ItemsContainer";
import AddNewContainer from "./composant/AddNewContainer";

function App() {
	const [containers, setContainers] = useState(["Current", "To Do", "Finished"]);
	const [showAddContainerForm, setShowAddContainerForm] = useState(false);

	const handleAddContainer = title => {
		setContainers([...containers, title]);
		setShowAddContainerForm(false); // Fermer le formulaire après l'ajout
	};

	const toggleAddContainerForm = () => {
		setShowAddContainerForm(!showAddContainerForm);
	};

	const handleDeleteContainer = indexToDelete => {
		setContainers(containers.filter((_, index) => index !== indexToDelete));
	};

	return (
		<div className="main-content">
			{containers.map((title, index) => (
				<ItemsContainer
					key={index}
					title={title}
					onDelete={() => handleDeleteContainer(index)}
				/>
			))}
			<div className={`add-new-container ${showAddContainerForm ? "visible" : ""}`}>
				<button
					className="add-container-btn"
					// className={`add-container-btn ${showAddContainerForm ? "invisible" : ""}`}
					onClick={toggleAddContainerForm}
				>
					Add another container
				</button>
				{showAddContainerForm && <AddNewContainer onAdd={handleAddContainer} />}
			</div>
		</div>
	);
}

export default App;
