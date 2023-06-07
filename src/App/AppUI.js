import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import React from 'react';
import { ToDoItem } from '../ToDoItem';
import { ToDosLoading} from '../ToDosLoading'
import { ToDosError } from '../ToDosError';
import { EmptyToDos } from '../EmptyToDos';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoContext } from '../ToDoContext';
import { Modal } from '../Modal';
import { ToDoForm } from '../ToDoForm';

function AppUI(){
    const {
        loading,
        error,
        searchedToDos,
        completeToDo,
        deleteToDo,
        oppenModal,
        setOpenModal
    } = React.useContext(ToDoContext)
    return (

        <React.Fragment>
            <ToDoCounter />
            <ToDoSearch />
            
            <ToDoList >
                {loading && (
                    <>
                        <ToDosLoading />
                        <ToDosLoading />
                        <ToDosLoading />
                    </>
                )}
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
    
            <CreateToDoButton 
                setOpenModal={setOpenModal}
            />

            {oppenModal && (
                <Modal>
                    <ToDoForm />
                </Modal>
            )}

        </React.Fragment>
    
    );
}

export {AppUI}; 