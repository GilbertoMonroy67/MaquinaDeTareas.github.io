import React from 'react';
import './ToDoSearch.css'

function ToDoSearch({
    searchValue,
    setSearchValue,
}){

    return (
        <input 
            placeholder="Agrega aquí tu nueva tarea"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { ToDoSearch };