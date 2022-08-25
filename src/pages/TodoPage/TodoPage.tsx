import { AddTodoControls } from './components/AddTodoControls'
import { SearchBar } from './components/SearchBar'
import { TodoCard } from './components/TodoCard'
import { TodoModal } from './components/TodoModal'
import TodoPageLayout from './components/TodoPageLayout/TodoPageLayout'
import { TodosList } from './components/TodosList'
import { TodoContextProvider } from './context/TodoContext'

const TodoPage = () => {
  return (
    <TodoContextProvider>
      <TodoPageLayout>
        <SearchBar />
        <TodosList />
        <TodoCard />
        <AddTodoControls />
      </TodoPageLayout>

      <TodoModal />
    </TodoContextProvider>
  )
}
export default TodoPage
