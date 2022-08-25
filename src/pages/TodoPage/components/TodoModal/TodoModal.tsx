import { Button } from 'components/Button'
import { IconButton } from 'components/IconButton'
import { Select, SelectOption } from 'components/Select'
import { TextArea } from 'components/TextArea'
import { TextInput } from 'components/TextInput'
import { useTodoPage } from 'pages/TodoPage/hooks/useTodoPage'
import useTodoModal from './hooks/useTodoModal'
import styles from './TodoModal.module.css'

const CATEGORIES_OPTIONS: SelectOption[] = [
  {
    text: 'Home',
    value: 'home'
  },
  {
    text: 'Study',
    value: 'study'
  },
  {
    text: 'Work',
    value: 'work'
  }
]

const TodoModal = () => {
  const {
    states: { isOpenTodoModal },
    handlers: { closeTodoModal }
  } = useTodoPage()

  const { onChangeInput, onSubmitForm, hasError } = useTodoModal()

  if (!isOpenTodoModal) return null

  return (
    <div className={styles.modal}>
      <header className={styles.header}>
        <IconButton onClick={closeTodoModal} icon={<i className="fa-solid fa-xmark" />} />
        <div className={styles.titleContainer}>
          <h1>Create new todo</h1>
        </div>
      </header>

      <form className={styles.form} onSubmit={onSubmitForm}>
        <TextInput
          placeholder='Ex: Go shopping'
          label='Title'
          id='todoTitleId'
          name='title'
          onChange={onChangeInput}
        />

        <TextArea
          rows={6}
          placeholder='Ex: Need to buy carrots, onions and milk'
          label='Description'
          id='todoDescriptionId'
          name='description'
          onChange={onChangeInput}
        />

        <Select
          id='todoCategoryId'
          name='category'
          onChange={onChangeInput}
          label='Category'
          options={CATEGORIES_OPTIONS}
        />

        <Button extraClasses={styles.submitButton}>Create</Button>
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
