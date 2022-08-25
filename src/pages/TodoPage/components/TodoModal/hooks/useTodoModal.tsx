import { ChangeEvent, FormEvent, useState } from 'react'

interface TodoModalForm {
  title: string
  description: string
  category: string
}

const defaultFormState: TodoModalForm = {
  title: '',
  description: '',
  category: 'home'
}

const useTodoModal = () => {
  const [modalFormData, setModalFormData] = useState<TodoModalForm>(defaultFormState)
  const [hasError, setHasError] = useState<boolean>(false)

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

    console.log(modalFormData)
  }

  return { onChangeInput, onSubmitForm, hasError }
}
export default useTodoModal
