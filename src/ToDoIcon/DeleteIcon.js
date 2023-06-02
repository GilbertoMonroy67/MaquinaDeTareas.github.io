import React from "react";
import { ToDoIcon } from './index'

function DeleteIcon({ onDelete }){
    return (
        <ToDoIcon 
            type="delete"
            color="#6C6C6C"
            onClick={onDelete}
        />
    )
};

export { DeleteIcon };