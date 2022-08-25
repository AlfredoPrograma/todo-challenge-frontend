import { AddTodoControls } from './components/AddTodoControls'
import { TodoContextProvider } from './context/TodoContext'
import { TodoModal } from './components/TodoModal'
import { TodosList } from './components/TodosList'
import TodoPageLayout from './components/TodoPageLayout/TodoPageLayout'

const TodoPage = () => {
  return (
    <TodoContextProvider>
      <TodoPageLayout>
        <TodosList />
        <AddTodoControls />
      </TodoPageLayout>

      <TodoModal />
    </TodoContextProvider>
  )
}
export default TodoPage
