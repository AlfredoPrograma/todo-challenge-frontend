import { useTodoPage } from 'pages/TodoPage/hooks/useTodoPage'

const AddTodoControls = () => {
  const { handlers: { openTodoModal } } = useTodoPage()

  return (
    <button onClick={openTodoModal}>Open modal</button>
  )
}
export default AddTodoControls
