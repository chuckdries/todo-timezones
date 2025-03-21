import { css } from "../styled-system/css"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import { addTodo } from "./features/TodoList/todoListSlice"
import { TextField } from "./components/TextField"
import { Button } from "./components/Button"
import { NewTodo } from "./features/TodoList/NewTodo"
import { TodoCard } from "./features/TodoList/TodoCard"
const App = () => {
  const dispatch = useAppDispatch()
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
              p: 2,
              color: "slate.400",
              bg: "slate.800",
              borderRadius: "md",
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
