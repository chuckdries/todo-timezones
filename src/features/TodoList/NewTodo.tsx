import { css } from "../../../styled-system/css"
import { Button } from "../../components/Button"
import { TextField } from "../../components/TextField"
import { addTodo } from "./todoListSlice"
import { useAppDispatch } from "../../app/hooks"
import { useState } from "react"
import { DatePicker } from "../../components/DatePicker"
import { now } from "@internationalized/date"
import type { DateValue } from "react-aria-components"
import { Calendar } from "lucide-react"

export function NewTodo() {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState("")
  const [dueDate, setDueDate] = useState<DateValue | null>(null)
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
          addTodo({
            title,
            description: "",
            dueDate: dueDate?.toString() ?? "",
            completed: false,
          }),
        )
        setTitle("")
        setDueDate(null)
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
        {dueDate ? (
          <>
            <DatePicker
              granularity="day"
              label="Due Date"
              // minValue={now("UTC")}
              value={dueDate}
              onChange={setDueDate}
            />
          </>
        ) : (
          <Button
            css={{ py: 3, alignSelf: "flex-end" }}
            variant="quiet"
            onPress={() => setDueDate(now("UTC"))}
          >
            <Calendar />
          </Button>
        )}
      </div>
      <div className={css({ display: "flex", gap: 2 })}>
        {title || dueDate ? (
          <Button
            variant="secondary"
            onPress={() => {
              setTitle("")
              setDueDate(null)
            }}
          >
            Cancel
          </Button>
        ) : null}
        <Button isDisabled={!title} css={{ flex: 1 }} type="submit">
          Add
        </Button>
      </div>
    </form>
  )
}
