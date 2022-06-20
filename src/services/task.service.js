import taskAPI from '../common/apis/taskApi'

export const getAllTask = (param) => {
    return taskAPI.get(param)
}