interface Todo {
  id: string
  title: string
  description: string
  category: string
  isCompleted: boolean
  createdAt: Date
}

type TodoDTO = Pick<Todo, 'title' | 'description' | 'category'>

export type { Todo, TodoDTO }
