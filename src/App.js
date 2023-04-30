import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from 'react'
import AddTask from "./components/AddTask";

function App() {
  const [showAddTasks, setShowAddTasks] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect (()=> {
    const getTasks = async () =>{
      const tasksfromserver = await fetchTasks()
      setTasks(tasksfromserver)
    }

    getTasks()
  }, [])

  //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch ('http://localhost:5000/tasks')
    const data = await res.json()

      return data
    console.log(data)
  }

//Add Task 
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==id))
}

//toggle reminder
const togglereminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? { ...task, reminder : ! task.reminder}: task))
}
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTasks(!showAddTasks)} showAdd={showAddTasks}/>
      {showAddTasks && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks } onDelete={deleteTask} ontoggle = {togglereminder} /> : 'No Tasks to Show'}
    </div>
  );
}


export default App;
