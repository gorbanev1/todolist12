export type DomainTask = {
  description: string
  title: string
  status: number
  priority: number
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
}
export type GetTasksResponse = {
  error: string | null
  totalCount: number
  items: DomainTask[]
}

export type DeleteTaskResponse = {
  resultCode: number
  messages: string[]
  data: {}
}

export type UpdateTaskModel = {
  description: string | null
  title: string
  status: number
  priority: number
  startDate: string | null
  deadline: string | null
}

export type UpdateTaskResponse = {
  data: {
    item: DomainTask
  }
  messages: string[]
  fieldsErrors: string[]
  resultCode: number
}
