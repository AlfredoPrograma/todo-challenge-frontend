import { Todo, TodoDTO } from 'models/Todo'
import { useTodoPage } from 'pages/TodoPage/hooks/useTodoPage'
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react'

const defaultFormState: TodoDTO = {
  title: '',
  description: '',
  category: 'home'
}

const useTodoModal = () => {
  const { states: { selectedTodo }, handlers: { createTodo, updateTodo, closeTodoModal } } = useTodoPage()
  const [modalFormData, setModalFormData] = useState<TodoDTO | Todo>(defaultFormState)
  const [hasError, setHasError] = useState<boolean>(false)

  const isEditing = useMemo(() => !!selectedTodo, [selectedTodo])

  useEffect(() => {
    if (selectedTodo) {
      const { isCompleted, id, createdAt, ...selectedTodoData }: Todo = selectedTodo
      setModalFormData(selectedTodoData)
    }
  }, [selectedTodo])

  const resetForm = () => setModalFormData(defaultFormState)

  const onChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setModalFormData(state => ({ ...state, [event.target.name]: event.target.value }))
  }

  const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setHasError(false)

    const hasEmptyValues = Object.values(modalFormData).some((_value: string) => !_value.trim().length)

    if (hasEmptyValues) {
      setHasError(true)
      return
    }

    isEditing ? updateTodo(selectedTodo?.id as string, modalFormData) : createTodo(modalFormData)
    closeTodoModal(resetForm)
  }

  return { modalFormData, hasError, onChangeInput, onSubmitForm, resetForm }
}

export default useTodoModal
