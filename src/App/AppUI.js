import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoItem } from '../ToDoItem';
import { ToDoList } from '../ToDoList';
import { CreateToDoButton } from '../CreateToDoButton';
import React from 'react';


function AppUI({
    loading,
    error,
    completedToDos,
    totalToDos,
    searchValue,
    setSearchValue,
    searchedToDos,
    completeToDo,
    deleteToDo
}){
    return (

        <React.Fragment>
            <ToDoCounter 
                completed={completedToDos} total={totalToDos} 
            />
            <ToDoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
    
            <ToDoList >
                {loading && <ToDosLoading />}
                {error && <ToDosError />}
                {(!loading && searchedToDos.length === 0) && <EmptyToDos />}

                {searchedToDos.map(ToDo => (
                <ToDoItem 
                    key={ToDo.text} 
                    text={ToDo.text}
                    completed={ToDo.completed}
                    onComplete={() => completeToDo(ToDo.text)}
                    onDelete={() => deleteToDo(ToDo.text)}
                />
                ))}
            </ToDoList>
    
            <CreateToDoButton />
        </React.Fragment>
    
    );
}

export {AppUI}; 