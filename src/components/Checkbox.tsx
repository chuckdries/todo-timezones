import {
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps,
} from "react-aria-components"
import { css } from "../../styled-system/css"
import type { ReactNode } from "react"

interface CheckboxProps extends AriaCheckboxProps {
  children: ReactNode
}
export function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <AriaCheckbox {...props}>
      {({ isIndeterminate, isSelected }) => (
        <div className={css({ display: "flex", alignItems: "center", gap: 2 })}>
          <div
            aria-selected={isSelected}
            className={css({
              w: 8,
              h: 8,
              borderRadius: "full",
              borderWidth: 2,
              p: 1,
              _selected: {
                borderColor: "slate.700",
                shadow: "none",
              },
              borderColor: "blue.500",
              shadow: "glow",
            })}
          >
            <svg
              className={css({
                fill: "none",
                stroke: "green.700",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                opacity: isSelected ? 1 : 0,
              })}
              viewBox="0 0 18 18"
              aria-hidden="true"
            >
              {isIndeterminate ? (
                <rect x={1} y={7.5} width={15} height={3} />
              ) : (
                <polyline points="1 9 7 14 15 4" />
              )}
            </svg>
          </div>
          {children}
        </div>
      )}
    </AriaCheckbox>
  )
}
