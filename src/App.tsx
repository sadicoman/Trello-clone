import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import "./App.css";
import ItemsContainer from "./composant/ItemsContainer";
import AddNewContainer from "./composant/AddNewContainer";

function App() {
    const [containers, setContainers] = useState([
        { title: "Actuel", items: ["Tâche 1", "Tâche 2"] }, // Des tâches en français
        { title: "À Faire", items: ["Tâche 3"] },
        { title: "Terminé", items: [] },
    ]);

    const [showAddContainerForm, setShowAddContainerForm] = useState(false);

    const onDragEnd = (result) => {
        // console.log("Drag result:", result);
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        const start = containers.find(({ title }) => title === source.droppableId);
        const finish = containers.find(({ title }) => title === destination.droppableId);

        if (start === finish) {
            const newItems = Array.from(start.items);
            const [reorderedItem] = newItems.splice(source.index, 1);
            newItems.splice(destination.index, 0, reorderedItem);

            const newContainer = {
                ...start,
                items: newItems,
            };

            setContainers((prev) =>
                prev.map((container) =>
                    container.title === newContainer.title ? newContainer : container,
                ),
            );
        } else {
            const startItems = Array.from(start.items);
            const [movedItem] = startItems.splice(source.index, 1);
            const finishItems = Array.from(finish.items);
            finishItems.splice(destination.index, 0, movedItem);

            const newStart = {
                ...start,
                items: startItems,
            };
            const newFinish = {
                ...finish,
                items: finishItems,
            };

            setContainers((prev) =>
                prev.map((container) =>
                    container.title === newStart.title
                        ? newStart
                        : container.title === newFinish.title
                        ? newFinish
                        : container,
                ),
            );
        }
    };

    const handleAddContainer = (title) => {
        setContainers([...containers, { title, items: [] }]);
        setShowAddContainerForm(false);
    };

    const handleDeleteContainer = (indexToDelete) => {
        setContainers(containers.filter((_, index) => index !== indexToDelete));
    };

    const toggleAddContainerForm = () => {
        setShowAddContainerForm(!showAddContainerForm);
    };

    const handleDropItem = (newItem, originTitle, destinationTitle) => {
        setContainers((prevContainers) => {
            return prevContainers.map((container) => {
                if (container.title === destinationTitle) {
                    // Ajout d'un nouvel élément si le titre correspond
                    return { ...container, items: [...container.items, newItem] };
                } else if (container.title === originTitle) {
                    // Suppression de l'élément de son container d'origine si nécessaire
                    return {
                        ...container,
                        items: container.items.filter((item) => item !== newItem),
                    };
                }
                return container;
            });
        });
    };

    const handleItemDeletion = (item, containerTitle) => {
        setContainers((prev) =>
            prev.map((container) => {
                if (container.title === containerTitle) {
                    return {
                        ...container,
                        items: container.items.filter((i) => i !== item),
                    };
                }
                return container;
            }),
        );
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="main-content">
                {containers.map((container, index) => {
                    return (
                        <ItemsContainer
                            key={container.title}
                            containerId={container.title}
                            title={container.title}
                            items={container.items}
                            onDelete={() => handleDeleteContainer(index)}
                            onDropItem={handleDropItem}
                            onDeleteItem={handleItemDeletion}
                        />
                    );
                })}
                <div
                    className={`add-new-container ${
                        showAddContainerForm ? "visible" : ""
                    }`}
                >
                    <button
                        className="add-container-btn"
                        onClick={toggleAddContainerForm}
                    >
                        Add another container
                    </button>
                    {showAddContainerForm && (
                        <AddNewContainer onAdd={handleAddContainer} />
                    )}
                </div>
            </div>
        </DragDropContext>
    );
}

export default App;
