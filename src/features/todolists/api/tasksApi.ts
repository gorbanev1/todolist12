import { instance } from "@/common/instance"
import { DomainTask, GetTasksResponse, UpdateTaskModel } from "@/features/todolists/api/taskApi.types.ts"
import { BaseResponse } from "@/common/types"

export const tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
  },
  setTask(todolistId: string, task: DomainTask) {
    return instance.post(`/todo-lists/${todolistId}/tasks`, task)
  },
  deleteTask(todolistID: string, taskId: string) {
    return instance.delete<BaseResponse<{ item: DomainTask }>>(`todo-lists/${todolistID}/tasks/${taskId}`)
  },
  changeTask(todolistID: string, taskId: string, task: UpdateTaskModel) {
    return instance.put<BaseResponse<{ item: DomainTask }>>(`todo-lists/${todolistID}/tasks/${taskId}`, task)
  },
}
