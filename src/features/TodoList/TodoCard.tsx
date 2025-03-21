import { css, cva } from "../../../styled-system/css"
import { Checkbox } from "../../components/Checkbox"
import type { Card } from "./todoListSlice"
import { useAppDispatch } from "../../app/hooks"
import { toggleTodo } from "./todoListSlice"
import { Button } from "../../components/Button"
import { DateFormatter, parseZonedDateTime } from "@internationalized/date"
import { Edit, Trash } from "lucide-react"

export function TodoCard({ card }: { card: Card }) {
  const dispatch = useAppDispatch()
  const df = new DateFormatter(navigator.language, {
    dateStyle: "short",
  })
  const overdue =
    !card.completed && card.dueDate
      ? parseZonedDateTime(card.dueDate).toDate() < new Date()
      : false
  return (
    <li
      className={cva({
        base: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          p: 2,
          bg: "slate.800",
          borderRadius: "full",
          pr: 4,
          _selected: {
            color: "slate.400",
          },
        },
      })({ completed: card.completed })}
    >
      <Checkbox
        className={css({
          flex: 1,
          _selected: {
            textDecoration: "line-through",
            color: "slate.400",
          },
        })}
        onChange={() => dispatch(toggleTodo(card.id))}
        isSelected={card.completed}
      >
        {card.title}
      </Checkbox>
      <span
        className={cva({
          base: { fontSize: "sm", color: "slate.400" },
          variants: {
            overdue: {
              true: { color: "amber.400" },
            },
          },
        })({ overdue })}
      >
        {card.dueDate
          ? df.format(parseZonedDateTime(card.dueDate).toDate())
          : ""}
      </span>
      <div>
        <Button variant="quiet" circle>
          <Edit size={16} />
        </Button>
        <Button variant="quiet" circle>
          <Trash size={16} />
        </Button>
      </div>
    </li>
  )
}
