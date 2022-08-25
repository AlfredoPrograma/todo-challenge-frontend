import { Button } from 'components/Button'
import { CATEGORIES_OPTIONS } from 'pages/TodoPage/constants/todoCategories'
import { IconButton } from 'components/IconButton'
import { Select } from 'components/Select'
import { TextArea } from 'components/TextArea'
import { TextInput } from 'components/TextInput'
import { useMemo } from 'react'
import { useTodoPage } from 'pages/TodoPage/hooks/useTodoPage'
import styles from './TodoModal.module.css'
import useTodoModal from './hooks/useTodoModal'

const TodoModal = () => {
  const {
    states: { isOpenTodoModal, selectedTodo },
    handlers: { closeTodoModal }
  } = useTodoPage()

  const { modalFormData, onChangeInput, onSubmitForm, hasError, resetForm } = useTodoModal()
  const isEditing = useMemo(() => !!selectedTodo, [selectedTodo])

  if (!isOpenTodoModal) return null

  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <IconButton onClick={() => closeTodoModal(resetForm)} icon={<i className="fa-solid fa-xmark" />} />
        <div className={styles.titleContainer}>
          <h1>{isEditing ? 'Edit todo' : 'Create new todo'}</h1>
        </div>
      </header>

      <form className={styles.form} onSubmit={onSubmitForm}>
        <TextInput
          placeholder='Ex: Go shopping'
          label='Title'
          id='todoTitleId'
          name='title'
          onChange={onChangeInput}
          value={modalFormData.title}
        />

        <TextArea
          rows={6}
          placeholder='Ex: Need to buy carrots, onions and milk'
          label='Description'
          id='todoDescriptionId'
          name='description'
          onChange={onChangeInput}
          value={modalFormData.description}
        />

        <Select
          id='todoCategoryId'
          name='category'
          onChange={onChangeInput}
          label='Category'
          options={CATEGORIES_OPTIONS}
          value={modalFormData.category}
        />

        <Button extraClasses={styles.submitButton}>{ isEditing ? 'Update' : 'Create' }</Button>
      </form>

      { hasError && (
        <footer className={styles.errorMessageContainer}>
          <h3 className={styles.errorMessage}>Remember to fill all fields before submit!</h3>
        </footer>
      )}
    </div>
  )
}
export default TodoModal
