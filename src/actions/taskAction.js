import { TaskActionTypes } from '../constants/action-types'

export const actionGetAllTask = (data) => {
    return {
        type: TaskActionTypes.GET_ALL_TASK,
        payload: data
    }
}   