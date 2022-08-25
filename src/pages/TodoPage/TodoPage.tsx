import { AddTodoControls } from './components/AddTodoControls'
import { TodoModal } from './components/TodoModal'
import TodoPageLayout from './components/TodoPageLayout/TodoPageLayout'
import { TodosList } from './components/TodosList'
import { TodoContextProvider } from './context/TodoContext'

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
