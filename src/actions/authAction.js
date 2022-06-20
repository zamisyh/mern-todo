import { AuthActionTypes } from '../constants/action-types'

export const register = (data) => {
    return {
        type: AuthActionTypes.REGISTER_SUCCESS,
        payload: data
    }
}