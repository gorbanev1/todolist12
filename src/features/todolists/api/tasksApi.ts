import { instance } from "@/common/instance"
import {
  DeleteTaskResponse,
  DomainTask,
  GetTasksResponse,
  UpdateTaskModel,
  UpdateTaskResponse,
} from "@/features/todolists/api/taskApi.types.ts"

export const tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
  },
  setTask(todolistId: string, task: DomainTask) {
    return instance.post(`/todo-lists/${todolistId}/tasks`, task)
  },
  deleteTask(todolistID: string, taskId: string) {
    return instance.delete<DeleteTaskResponse>(`todo-lists/${todolistID}/tasks/${taskId}`)
  },
  changeTask(todolistID: string, taskId: string, task: UpdateTaskModel) {
    return instance.put<UpdateTaskResponse>(`todo-lists/${todolistID}/tasks/${taskId}`, task)
  },
}
