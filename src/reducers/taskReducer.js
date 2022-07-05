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
        case TaskActionTypes.ADD_TASK:
            return {
                ...state,
                task: [ ...state.task, payload ]
            }
        case TaskActionTypes.UPDATE_TASK: 
            return state.task.map((data) => {
                if (data.id === payload.id) {
                return {
                    ...data,
                    ...payload,
                };
                } else {
                return data;
                }
            });
        default:
            return state
    }
}

export const selectedTaskReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case TaskActionTypes.GET_TASK_ID:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}