import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider({ children }){
    const {
        item: ToDos,
        saveItem: saveToDos, 
        loading,
        error,
    } = useLocalStorage('Tareas_V1', []);
    
    const [searchValue, setSearchValue] = React.useState('');
    const [oppenModal, setOpenModal] = React.useState(false);
    
    const completedToDos = ToDos.filter(ToDo => !!ToDo.completed).length;
    const totalToDos = ToDos.length;
    
    const searchedToDos = ToDos.filter(
        (ToDo) => {
            const ToDoText = ToDo.text.toLocaleLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return ToDoText.includes(searchText);
        }
    );

    const addToDo = (text) => {
        const newToDos = [...ToDos];
        newToDos.push({
            text,
            completed: false,
        })
        saveToDos (newToDos);
    };
    
    const completeToDo = (text) => {
        const newToDos = [...ToDos];
        const ToDoIndex = newToDos.findIndex(
            (ToDo) => ToDo.text === text
        );
        newToDos[ToDoIndex].completed = true;
        saveToDos (newToDos);
    };
    
    const deleteToDo = (text) => {
        const newToDos = [...ToDos];
        const ToDoIndex = newToDos.findIndex(
            (ToDo) => ToDo.text === text
        );
        newToDos.splice(ToDoIndex, 1);
        saveToDos (newToDos);
    };
    
    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            completedToDos,
            totalToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
            oppenModal,
            setOpenModal,
            addToDo,
        }}>
            {children}
        </ToDoContext.Provider>
    )
};

export { ToDoContext, ToDoProvider };