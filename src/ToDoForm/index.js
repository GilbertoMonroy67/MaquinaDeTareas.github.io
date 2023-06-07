import React from "react";
import './ToDoForm.css'
import { ToDoContext } from '../ToDoContext'

function ToDoForm(){
    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext);
    const [newToDoValue, setNewToDoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    }

    const onCancel = () => {
        setOpenModal(false);
    }
    
    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva Tarea</label>
            <textarea
                placeholder="Escribe aqui tu nueva tarea"
                value={newToDoValue}
                onChange={onChange}
            />
            <div className="ToDoForm-buttonContainer">
                <button
                    type="submit"
                    className="ToDoForm-button--acept"
                >Aceptar</button>
                <button
                    type="button"
                    className="ToDoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
            </div>
            
        </form>
    )
}

export { ToDoForm };