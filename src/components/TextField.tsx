import {
  TextField as AriaTextField,
  Input,
  Label,
  type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components"
import { css, cva, type Styles } from "../../styled-system/css"
import { splitCssProps } from "../../styled-system/jsx"
import type { JsxStyleProps } from "../../styled-system/types"

type TextFieldProps = Omit<AriaTextFieldProps, "className"> &
  JsxStyleProps & {
    label?: string
  }

export function TextField({ label, ...props }: TextFieldProps) {
  const [cssProps, restProps] = splitCssProps(props)
  const { css: cssProp, ...styleProps } = cssProps
  return (
    <AriaTextField
      {...restProps}
      className={css(
        {
          display: "flex",
          flexDirection: "column",
          gap: 1,
        },
        styleProps,
        cssProp,
      )}
    >
      <Label
        className={css({
          mr: 2,
          fontSize: "sm",
        })}
      >
        {label}
      </Label>
      <Input
        className={state => {
          return cva({
            base: {
              backgroundColor: "slate.900",
              borderRadius: "xl",
              borderWidth: 2,
              borderColor: "slate.700",
              p: 2,
              color: "white",
            },
            variants: {
              isFocused: {
                true: {
                  outline: "none",
                  borderColor: "blue.500",
                },
              },
            },
          })(state)
        }}
      />
    </AriaTextField>
  )
}
