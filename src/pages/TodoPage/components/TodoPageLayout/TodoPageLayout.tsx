import { useTodoPage } from 'pages/TodoPage/hooks/useTodoPage'
import styles from './TodoPageLayout.module.css'
interface TodoPageLayoutProps {
  children: JSX.Element | JSX.Element[]
}

const TodoPageLayout = ({ children }: TodoPageLayoutProps) => {
  const { states: { isOpenTodoModal } } = useTodoPage()

  return (
    <div className={`${styles.layout} ${isOpenTodoModal ? styles.isActiveModal : ''}` }>
      { children }
    </div>
  )
}
export default TodoPageLayout
