import taskAPI from '../common/apis/taskApi'

const config = {
    headers: {
        "Content-Type": "application/json"
    }
}

export const getAllTask = (param) => {
    return taskAPI.get(param)
}

export const deleteTask = (id) => {
    return taskAPI.delete(id)
}

export const addTask = (url, data) => {
    return taskAPI.post(url, data, config)
}

export const updateTask = (url, data) => {
    return taskAPI.put(url, data, config)
}

export const getTaskId = (url, data) => {
    return taskAPI.post(url, data, config)
}