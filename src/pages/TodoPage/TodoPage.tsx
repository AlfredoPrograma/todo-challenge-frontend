import { SearchBar } from './components/SearchBar'
import { TodoCard } from './components/TodoCard'
import { TodoModal } from './components/TodoModal'
import { TodosList } from './components/TodosList'

const TodoPage = () => {
  return (
    <div>
      <SearchBar />
      <TodosList />
      <TodoCard />
      <TodoModal />
    </div>
  )
}
export default TodoPage
