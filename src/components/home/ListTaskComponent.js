import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Moment from 'react-moment'
import swal from 'sweetalert'
import { deleteTask } from '../../services/task.service'
import { actionDeleteTask } from '../../actions/taskAction'

const ListTaskComponent = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.TASK.task)

  const deleteTaskId = async (id) => {
    const response = await deleteTask(id).catch((err) => {
      console.log(err)
    })

    dispatch(actionDeleteTask(id))
  }

  const handleDelete = (id) => {
    swal({
      title: 'Are you sure delete this task ?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteTaskId(id)
        swal('Succesfully delete', {
          icon: 'success',
        })
      }
    })
  }
  const renderList = tasks.map((task, id) => {
    return (
      <div key={id} className="p-5 px-8 py-4 mt-5 transition duration-300 ease-in-out delay-150 bg-white shadow-xl w-96 rounded-xl hover:-translate-y-1 hover:scale-180 hover:bg-slate-100">
        <div className="w-full">
          <p className="">{task.title}</p>
          <div className="flex justify-between mt-5">
            <p className="text-sm font-thin">
              <Moment fromNow>{task.reatedAt}</Moment>
            </p>
            <div className="flex gap-3">
              <span>
                <input
                  type="checkbox"
                  className="w-4 h-4 mt- checked:bg-blue-500"
                />
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pencil-square hover:text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                  <path
                    fillRule="evenodd"
                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                  />
                </svg>
              </span>
              <span onClick={() => handleDelete(task._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-trash3-fill hover:text-red-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="mt-10 lg:ml-10 lg:mt-0">
      <h2 className="mt-2 text-2xl font-semibold text-gray-800">List Task</h2>
      {renderList}
    </div>
  )
}

export default ListTaskComponent
