import { TaskPriority, TaskStatus } from "@/common/enums/enums.ts"

export type DomainTask = {
  description: string
  title: string
  status: number
  priority: number
  starDate: string
  deadline: string
  id: number
  todolistId: number
  order: number
  addedDate: string
}

export type GetTasksResponse = {
  error: null | string
  totalCount: number
  items: DomainTask[]
}
export type DomainTask = {
  description: string
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
}


export type UpdateTaskModel = {
  description: string
  title: string
  status: TaskStatus
  priority: TaskPriority
  startDate: string
  deadline: string
}
