import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionAddTask, actionUpdateTask } from '../../actions/taskAction'
import { addTask } from '../../services/task.service'
import axios from 'axios'

const AddTask = () => {
  const taskData = useSelector((state) => state.SELECTED_TASK)
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  
  
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      title: title,
      date: date,
      user_id: 1
    }

    await addTask('/', data).then(() => {
      dispatch(actionAddTask(data))
    }).catch((err) => {
      console.log(err.message)
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    console.log(title)
  }
  

  
  
  return (
    <div className="">
      <div className="max-w-md p-5 px-8 py-4 bg-white shadow-xl rounded-xl">
        <h2 className="mt-2 text-2xl font-semibold text-gray-800">Add Task</h2>
        <form className="mt-2" onSubmit={taskData.title !== undefined ? handleUpdate : handleSubmit}>
          <div className="w-full mt-4">
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              placeholder="Title"
              aria-label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              
            />
             <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="w-full mt-4">
            <button type="submit" className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              { taskData.title !== undefined ? 'Edit Task' : 'Save Task' }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask
