import { instance } from "@/common/instance"
import { DomainTask, GetTasksResponse, UpdateTaskModel } from "@/features/todolists/api/taskApi.types.ts"

export const tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
  },
  setTask(todolistId: string, task: DomainTask) {
    return instance.post(`/todo-lists/${todolistId}/tasks`, task)
  },
  deleteTask(todolistID: string, taskId: string) {
    return instance.delete(`todo-lists/${todolistID}/tasks/${taskId}`)
  },
  changeTaskStatus(todolistID: string, taskId: string, task: UpdateTaskModel) {
    return instance.put(`todo-lists/${todolistID}/tasks/${taskId}`, task)
  },
}
