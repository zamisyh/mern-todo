import { TaskActionTypes } from "../constants/action-types";

const initalState = {
    task: [],
    loading: false
}

export const taskReducer = (state = initalState, {type, payload}) => {
    switch (type) {
        case TaskActionTypes.GET_ALL_TASK:
            return { ...state, task: payload }
        default:
            return state
    }
}