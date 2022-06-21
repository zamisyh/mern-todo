import taskAPI from '../common/apis/taskApi'

export const getAllTask = (param) => {
    return taskAPI.get(param)
}

export const deleteTask = (id) => {
    return taskAPI.delete(id)
}

export const addTask = (url, data) => {
    return taskAPI.post(url, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}