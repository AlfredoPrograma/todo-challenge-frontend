import { createContext, useCallback, useState } from 'react'

interface TodoContextProviderValues {
  states: {
    isOpenTodoModal: boolean
  }
  handlers: {
    openTodoModal: () => void
    closeTodoModal: () => void
  }
}
const TodoContext = createContext<TodoContextProviderValues | undefined>(undefined)

interface TodoContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [isOpenTodoModal, setIsOpenTodoModal] = useState<boolean>(false)

  const openTodoModal = useCallback(() => setIsOpenTodoModal(true), [])
  const closeTodoModal = useCallback(() => setIsOpenTodoModal(false), [])

  const providerValues: TodoContextProviderValues = {
    states: {
      isOpenTodoModal
    },
    handlers: {
      openTodoModal,
      closeTodoModal
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
