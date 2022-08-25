import { TodoDTO, Todo } from 'models/Todo'
import { createContext, useState } from 'react'
import { generateId } from 'helpers/generateId'

interface TodoContextProviderValues {
  states: {
    isOpenTodoModal: boolean
    todos: Todo[]
    selectedTodo?: Todo
  }
  handlers: {
    openTodoModal: (todo?: Todo) => void
    closeTodoModal: (onCloseAction?: () => void) => void
    createTodo: (data: TodoDTO) => void
    updateTodo: (todoId: string, data: TodoDTO) => void
    deleteTodo: (todoId: string) => void
    toggleTodoCheck: (todoId: string) => void
  }
}
const TodoContext = createContext<TodoContextProviderValues | undefined>(undefined)

interface TodoContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  // ToDo's data state and handlers
  const [todos, setTodos] = useState<Todo[]>([])

  const createTodo = (data: TodoDTO) => {
    const { title, description, category } = data

    const newTodo: Todo = {
      title,
      category,
      description,
      id: generateId(),
      isCompleted: false,
      createdAt: new Date()
    }

    setTodos(prevState => [...prevState, newTodo])
  }

  const updateTodo = (todoId: string, data: TodoDTO) => {
    const updatedTodos = todos.map(_todo => {
      if (_todo.id === todoId) {
        return { ..._todo, ...data }
      }

      return _todo
    })

    setTodos([...updatedTodos])
  }

  const deleteTodo = (todoId: string) => {
    const filteredTodos = todos.filter(_todo => _todo.id !== todoId)

    setTodos([...filteredTodos])
  }

  const toggleTodoCheck = (todoId: string) => {
    const updatedTodos = todos.map(_todo => {
      if (_todo.id === todoId) {
        return { ..._todo, isCompleted: !_todo.isCompleted }
      }

      return _todo
    })

    setTodos([...updatedTodos])
  }

  // ToDo modal states and handlers
  const [isOpenTodoModal, setIsOpenTodoModal] = useState<boolean>(false)
  const [selectedTodo, setSelectedTodo] = useState<Todo>()

  const openTodoModal = (todo?: Todo) => {
    if (todo) setSelectedTodo(todo)
    setIsOpenTodoModal(true)
  }
  const closeTodoModal = (onCloseAction?: () => void) => {
    if (typeof onCloseAction === 'function') onCloseAction()
    setSelectedTodo(undefined)
    setIsOpenTodoModal(false)
  }

  const providerValues: TodoContextProviderValues = {
    states: {
      isOpenTodoModal,
      selectedTodo,
      todos
    },
    handlers: {
      openTodoModal,
      closeTodoModal,
      createTodo,
      updateTodo,
      deleteTodo,
      toggleTodoCheck
    }
  }

  return (
    <TodoContext.Provider value={providerValues}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoContextProvider }
export type { TodoContextProviderValues }
