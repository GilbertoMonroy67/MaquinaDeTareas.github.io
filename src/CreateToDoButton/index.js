import './CreateToDoButton.css'

function CreateToDoButton(props){
    return (
        <button className='CreateToDoButton' 
        onClick={
            (event) => {
                console.log('El usuario dio click')
                console.log(event)
                console.log(event.target)
            } 
        }>
            <p>+</p>
        </button>
    );
}

export { CreateToDoButton }