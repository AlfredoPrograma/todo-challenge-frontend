import { Badge } from 'components/Badge'
import { IconButton } from 'components/IconButton'
import { Todo } from 'models/Todo'
import { useTodoPage } from 'pages/TodoPage/hooks/useTodoPage'
import { CATEGORY_BADGE_MAP } from 'pages/TodoPage/constants/todoCategories'
import styles from './TodoCard.module.css'

interface TodoCardProps {
  todo: Todo
}

const TodoCard = ({ todo }: TodoCardProps) => {
  const { title, id, description, category, createdAt, isCompleted } = todo
  const { handlers: { openTodoModal, deleteTodo, toggleTodoCheck } } = useTodoPage()

  return (
    <article className={styles.card}>
      <div className={styles.body}>
        <header>
          <h3 className={`${styles.title} ${isCompleted ? styles.isCompleted : ''}`}>{title}</h3>
          <small className={styles.id}>{id}</small>
        </header>

        <div className={styles.content}>
          <Badge color={CATEGORY_BADGE_MAP[category].color} text={CATEGORY_BADGE_MAP[category].text} />
          <p className={`${styles.description} ${isCompleted ? styles.isCompleted : ''}`}>{description}</p>
        </div>

        <footer className={styles.footer}>
          <small>Created at: {createdAt.toLocaleDateString()}</small>

          { isCompleted && <small className={styles.doneText}>DONE</small>}
        </footer>
      </div>

      <div className={styles.actions}>
          <IconButton
            extraClasses={`${styles.editButton} ${styles.actionButton}`}
            onClick={() => openTodoModal(todo)}
            icon={<i className="fa-solid fa-pen"></i>}
          />

          <IconButton
            extraClasses={`${styles.deleteButton} ${styles.actionButton}`}
            onClick={() => deleteTodo(id)}
            icon={<i className="fa-solid fa-trash-can"></i>}
          />

          <IconButton
            extraClasses={`${styles.checkButton} ${styles.actionButton}`}
            onClick={() => toggleTodoCheck(id)}
            icon={<i className="fa-solid fa-check"></i>}
          />
        </div>
    </article>
  )
}
export default TodoCard
