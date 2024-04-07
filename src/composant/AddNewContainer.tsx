import { useState, FormEvent } from "react";

interface AddNewContainerProps {
	onAdd: (title: string) => void;
}

function AddNewContainer({ onAdd }: AddNewContainerProps) {
	const [newContainerTitle, setNewContainerTitle] = useState("");
	const [validationMsg, setValidationMsg] = useState("");
	const [showAddContainerForm, setShowAddContainerForm] = useState(false);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!newContainerTitle) {
			setValidationMsg("Le titre du conteneur doit être renseigné.");
		} else {
			onAdd(newContainerTitle);
			setNewContainerTitle("");
			setValidationMsg("");
			setShowAddContainerForm(false);
		}
	};

	const toggleAddContainerForm = () => {
		setShowAddContainerForm(!showAddContainerForm);
		setValidationMsg("");
	};

	return (
		<form
			className={showAddContainerForm ? "invisible" : ""}
			onSubmit={handleSubmit}
			autoComplete="off"
		>
			<div className="top-form-container">
				<label htmlFor="new-container">Ajouter un nouveau container</label>
				{/* Bouton pour fermer le formulaire si nécessaire */}
				<button
					onClick={toggleAddContainerForm}
					type="button"
					className="close-form-btn close-add-list"
				>
					X
				</button>
			</div>
			<input
				type="text"
				id="new-container"
				value={newContainerTitle}
				onChange={e => setNewContainerTitle(e.target.value)}
				placeholder="Nouveau titre container"
			/>
			{validationMsg && <span className="validation-msg">{validationMsg}</span>}
			<button type="submit">Submit</button>
		</form>
	);
}

export default AddNewContainer;
