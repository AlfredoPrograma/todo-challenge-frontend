import { TodoCategoriesValues } from 'pages/TodoPage/constants/todoCategories'

interface Todo {
  id: string
  title: string
  description: string
  category: TodoCategoriesValues
  isCompleted: boolean
  createdAt: Date
}

type TodoDTO = Pick<Todo, 'title' | 'description' | 'category'>

export type { Todo, TodoDTO }
