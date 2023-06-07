import React from 'react';
import './ToDoCounter.css'
import { ToDoContext } from '../ToDoContext';

function ToDoCounter( ){
    const {
        completedToDos,
        totalToDos,
    }=  React.useContext(ToDoContext)
    
    if (totalToDos >0){
        return (
            <h1 
                className='ToDoCounter'>
                    Haz completado {completedToDos} de {totalToDos} Tareas
            </h1>
        )
    }else
        return (
            <h1
                className='ToDoCounter'
            >
                    ¡Felicidades, haz completado <br/> todas las tareas!
            </h1>
        );
}
export { ToDoCounter };