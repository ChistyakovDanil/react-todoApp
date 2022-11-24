import Button from '../UI/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

function TodosActions({ resetTodo, deleteTodo, completedTodos }) {
  return (
    <>
      <Button title="Reset Todos" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteTodo}
        disabled={!completedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </>
  )
}

export default TodosActions
