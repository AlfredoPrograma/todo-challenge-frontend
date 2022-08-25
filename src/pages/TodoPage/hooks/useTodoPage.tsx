import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const useTodoPage = () => {
  const providerValues = useContext(TodoContext)

  if (typeof providerValues === 'undefined') throw new Error('Cannot access to the TODO context')

  return providerValues
}

export { useTodoPage }
