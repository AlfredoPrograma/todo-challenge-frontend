import { useTodoPage } from 'pages/TodoPage/hooks/useTodoPage'
import { TodoCard } from '../TodoCard'
import styles from './TodosList.module.css'

const TodosList = () => {
  const { states: { todos } } = useTodoPage()

  return (
    <section className={styles.todosList}>
      { todos.map(_todo => <TodoCard key={_todo.id} todo={_todo} />)}
    </section>
  )
}
export default TodosList
