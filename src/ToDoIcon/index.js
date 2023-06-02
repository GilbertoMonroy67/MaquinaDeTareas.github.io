import { RiDeleteBin6Line } from 'react-icons/ri'
import { VscCheck } from 'react-icons/vsc'
import './ToDoIcon.css'

const iconTypes = {
    "check": (color) => <VscCheck className='Icon-svg'fill={color}/>,
    "delete": (color) => <RiDeleteBin6Line className='Icon-svg'fill={color}/>,
}

function ToDoIcon({type, color, onClick}){
    return (
        <span  className={`Icon-container Icon-container-${type}`}
        onClick={onClick}
        >
            {iconTypes[type](color)}    
        </span>
    )
}

export { ToDoIcon };