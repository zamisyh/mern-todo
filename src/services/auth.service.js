import authAPI from "../common/apis/authApi"

export const register = (param) => {
    return authAPI.post("register", param);
}