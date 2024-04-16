import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Info from './components/info/info';
import Task from './components/task/task';

import { FaTasks, FaPlus } from "react-icons/fa";

function App() {

  const [taskinput, setTaskInput] = useState('')
  function addTask() {
    if (taskinput === '') return
    setTasks([...tasks, taskinput])
    setTaskInput('')
  }

  const [tasks, setTasks] = useState([
    'learn react',
    'learn javascript',
  ])

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
              <Task key={index} name={task}/>
            ))
          }
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App;



