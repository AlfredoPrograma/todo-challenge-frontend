import { IconButton } from 'components/IconButton'
import { useTodoPage } from 'pages/TodoPage/hooks/useTodoPage'
import styles from './AddTodoControls.module.css'

const AddTodoControls = () => {
  const { handlers: { openTodoModal } } = useTodoPage()

  return (
    <IconButton title='Add new todo' extraClasses={styles.addTodoButton} onClick={() => openTodoModal()} icon={<i className="fa-solid fa-plus" />} />
  )
}
export default AddTodoControls
