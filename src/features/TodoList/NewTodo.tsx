import { css } from "../../../styled-system/css"
import { Button } from "../../components/Button"
import { TextField } from "../../components/TextField"
import { addTodo } from "./todoListSlice"
import { useAppDispatch } from "../../app/hooks"
import { useState } from "react"
import { DatePicker } from "../../components/DatePicker"
import { now } from "@internationalized/date"
import type { DateValue } from "react-aria-components"

export function NewTodo() {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState("")
  const [dueDate, setDueDate] = useState<DateValue | null>(now("UTC"))
  return (
    <form
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: 2,
        bg: "slate.800",
        p: 4,
        borderRadius: "xl",
      })}
      onSubmit={e => {
        e.preventDefault()
        dispatch(
          addTodo({ title, description: "", dueDate: dueDate?.toString() ?? "", completed: false }),
        )
        setTitle("")
      }}
    >
      <div className={css({ display: "flex", gap: 2 })}>
        <TextField
          flex={1}
          autoFocus
          label="Task"
          name="title"
          value={title}
          onChange={setTitle}
        />
        <DatePicker
          granularity="day"
          label="Due Date"
          value={dueDate}
          onChange={setDueDate}
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  )
}
