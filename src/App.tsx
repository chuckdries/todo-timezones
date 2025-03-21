import { css } from "../styled-system/css"
import { useAppSelector } from "./app/hooks"
import { NewTodo } from "./features/TodoList/NewTodo"
import { TodoCard } from "./features/TodoList/TodoCard"
const App = () => {
  const todos = useAppSelector(state => state.todoList.todos)
  return (
    <div
      className={css({
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 4,
        backgroundColor: "slate.900",
        color: "white",
      })}
    >
      <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Tasks</h1>
      <ul
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mb: 4
        })}
      >
        {!todos.length && (
          <p
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: 2,
              p: 3,
              color: "slate.400",
            })}
          >
            No tasks yet
          </p>
        )}
        {todos.map(todo => (
          <TodoCard key={todo.id} card={todo} />
        ))}
      </ul>
      <NewTodo />
    </div>
  )
}

export default App
