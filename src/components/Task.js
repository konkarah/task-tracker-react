import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, ontoggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : '' } `} onDoubleClick={() => {
            ontoggle(task.id)
        }}>
           <h3>{task.text} <FaTimes style= {{color:'red', cursor: 'pointer'}}
           onClick ={() => onDelete(task.id)}/></h3>
           <h3>{task.day}</h3> 
        </div>
    )
}

export default Task
