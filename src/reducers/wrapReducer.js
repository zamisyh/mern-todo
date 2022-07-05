import { combineReducers } from "redux";
import { authRegisterReducer } from "./authReducer";
import { taskReducer, selectedTaskReducer } from "./taskReducer";

const reducers = combineReducers({
    AUTH_REGISTER: authRegisterReducer,
    TASK: taskReducer,
    SELECTED_TASK: selectedTaskReducer
})

export default reducers