import { AuthActionTypes } from "../constants/action-types";

const initialState = {
    user: []
}

export const authRegisterReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case AuthActionTypes.REGISTER_SUCCESS:
            return {...state, user:payload}        
        default:
            return state;
    }
}