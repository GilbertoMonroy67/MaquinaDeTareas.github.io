import React from "react";
import { ToDoIcon } from './index'

function CompleteIcon({completed, onComplete}){
    return (
        <ToDoIcon 
            type="check"
            color={completed ? 'green' : "#6C6C6C"}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };