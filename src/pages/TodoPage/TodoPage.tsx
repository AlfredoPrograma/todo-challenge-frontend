import { SearchBar } from './components/SearchBar'
import { TodoCard } from './components/TodoCard'
import { TodoModal } from './components/TodoModal'
import { TodosList } from './components/TodosList'
import { TodoContextProvider } from './context/TodoContext'

const TodoPage = () => {
  return (
    <TodoContextProvider>
      <div>
        <SearchBar />
        <TodosList />
        <TodoCard />
        <TodoModal />
      </div>
    </TodoContextProvider>
  )
}
export default TodoPage
