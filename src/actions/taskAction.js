import { TaskActionTypes } from '../constants/action-types'
import { addTask, getTaskId } from '../services/task.service'

export const actionGetAllTask = (data) => {
    return {
        type: TaskActionTypes.GET_ALL_TASK,
        payload: data
    }
}  

export const actionDeleteTask = (id) => {    
    return{
        type: TaskActionTypes.DELETE_TASK,
        payload: id
    }
}

export const actionAddTask = (task) => {
    return {
        type: TaskActionTypes.ADD_TASK,
        payload: task
    }
}

export const actionUpdateTask = (task) => {
    return {
        type: TaskActionTypes.UPDATE_TASK,
        payload: task
    }
}

export const actionGetTaskId = (data) => {
    return {
        type: TaskActionTypes.GET_TASK_ID,
        payload: data
    }
}