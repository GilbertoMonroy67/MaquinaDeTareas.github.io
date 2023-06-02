import { DeleteIcon } from '../ToDoIcon/DeleteIcon';
import { CompleteIcon } from '../ToDoIcon/CompleteIcon';
import './TodoItem.css'

function ToDoItem(props){
    return (
        <li className='ToDoItem'>
            <CompleteIcon 
                completed={props.completed}
                onComplete={props.onComplete}
            />
            {/* <span 
                className={`Icon ICon-check ${props.completed && "Icon-check--active"}`}
                onClick={props.onComplete}
            >
                V
            </span> */}

            <p 
                className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}>{props.text}
            </p>

            <DeleteIcon 
                onDelete={props.onDelete}
            />
            {/* <span 
                className='Icon ICon-delete'
                onClick={props.onDelete}
            >
                X
            </span> */}
        </li>
    );
}

export { ToDoItem }