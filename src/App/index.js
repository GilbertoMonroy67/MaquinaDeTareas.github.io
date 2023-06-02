import React from 'react';
import {useLocalStorage} from './useLocalStorage'
import { AppUI } from './AppUI';

// localStorage.removeItem('Tareas_V1');
// const defaultToDos = [
//   { text: 'Rehacer mi app', completed: true },
//   { text: 'Tender mi cama', completed: false },
//   { text: 'Lavarme los dientes', completed: true },
//   { text: 'Desayunar', completed: false },
//   { text: 'Estudiar', completed: true },
//   { text: 'Hacer ejercicio', completed: false },
//   { text: 'Bañarme', completed: true },
//   { text: 'ir al trabajo', completed:  false},
//   { text: 'Hablar con made💖', completed: false },
//   { text: 'Usar estados derivados', completed: false },
// ]


// localStorage.setItem('Tareas_V1', JSON.stringify(defaultToDos));
// localStorage.removeItem('Tareas_V1')

function App() {

  const {
    item: ToDos,
    saveItem: saveToDos, 
    loading,
    error,
  } = useLocalStorage('Tareas_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedToDos = ToDos.filter(ToDo => !!ToDo.completed).length;
  const totalToDos = ToDos.length;

  const searchedToDos = ToDos.filter(
    (ToDo) => {
      const ToDoText = ToDo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return ToDoText.includes(searchText);
    }
  );

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

  return(
    <AppUI 
      loading={loading}
      error={error}
      completedToDos={completedToDos}
      totalToDos={totalToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  )
}

export default App;