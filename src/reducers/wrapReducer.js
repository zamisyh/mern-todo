import { combineReducers } from "redux";
import { authRegisterReducer } from "./authReducer";
import { taskReducer } from "./taskReducer";

const reducers = combineReducers({
    AUTH_REGISTER: authRegisterReducer,
    TASK: taskReducer
})

export default reducers