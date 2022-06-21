import React from 'react'
import { useDispatch } from 'react-redux'
import {actionGetAllTask } from '../../actions/taskAction'
import { useEffect } from 'react'
import {getAllTask } from '../../services/task.service'

import ListTaskComponent from './ListTaskComponent'

const ListTask = () => {
  const dispatch = useDispatch()
  
  const fetchTask = async () => {
    const response = await getAllTask('/').catch((err) => {
      console.log(err)
    })

    dispatch(actionGetAllTask(response.data))
  }

  useEffect(() => {
    fetchTask()
  }, [])
  

  return (
    <ListTaskComponent />
  )
}

export default ListTask
