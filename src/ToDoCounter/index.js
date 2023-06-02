import './ToDoCounter.css'

function ToDoCounter( {completed, total} ){
    if (total >0){
        return (
            <h1 
                className='ToDoCounter'>
                    Haz completado {completed} de {total} Tareas
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