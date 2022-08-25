import { TodoCard } from '../TodoCard'
import { useTodoPage } from 'pages/TodoPage/hooks/useTodoPage'
import styles from './TodosList.module.css'

const TodosList = () => {
  const { states: { todos } } = useTodoPage()

  return (
    <section className={styles.todosList}>
      <header>
        <h1 className={styles.header}>Todo App</h1>
      </header>

      <div className={styles.container}>
        {
          !todos.length
            ? <div className={styles.emptyTodoState}>
                <h2>No todos added yet</h2>
                <h3>Click the button to add your first TODO!!!</h3>
              </div>
            : todos.map(_todo => <TodoCard key={_todo.id} todo={_todo} />)
        }
      </div>
    </section>
  )
}
export default TodosList
