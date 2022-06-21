import taskAPI from '../common/apis/taskApi'

export const getAllTask = (param) => {
    return taskAPI.get(param)
}

export const deleteTask = (id) => {
    return taskAPI.delete(id)
}