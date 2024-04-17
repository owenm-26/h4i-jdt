import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Info from './components/info/info';
import Task from './components/task/task';

import { FaTasks, FaPlus } from "react-icons/fa";

function App() {

  const [taskinput, setTaskInput] = useState('')
  const [tasks, setTasks] = useState([
    'learn react',
    'learn javascript',
  ])

  function addTask() {
    if (taskinput === '') return
    setTasks([...tasks, taskinput])
    setTaskInput('')
  }

  function deleteTask(index) {
    let newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
  }

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(res => res.json())
      .then(data => {
        console.log(data) 
        let newTasks = []
        for (let i = 0; i < data.length; i++) {
          newTasks.push(data[i].name)
        }
        setTasks(newTasks)
      })
  }, [])

  return (
    <>
      <Navbar />
      <div className='seperator'></div>
      <Info />
      <main className="main">
        <section className="todo">
          <div className='todo-input'>
            <FaTasks color='#fff' size='1em' />
            <input type="text" placeholder="add a task"
              value={taskinput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <div className='add'>
              <FaPlus color='#fff' size='1em' onClick={addTask}/>
            </div>
          </div>
          {
            tasks.map((task, index) => (
              <Task key={index} name={task} index={index} deletefxn={deleteTask} />
            ))
          }
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App;



