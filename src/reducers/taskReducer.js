import { TaskActionTypes } from "../constants/action-types";

const initalState = {
    task: [],
    loading: true
}

export const taskReducer = (state = initalState, {type, payload}) => {
    switch (type) {
        case TaskActionTypes.GET_ALL_TASK:
            return { ...state, loading:false, task: payload }
        case TaskActionTypes.DELETE_TASK:
            return { 
                ...state,
                task: state.task.filter(
                    task => task._id !== payload
                )
            } 
        default:
            return state
    }
}