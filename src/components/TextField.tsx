import {
  TextField as AriaTextField,
  Input,
  Label,
  type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components"
import { css, cva, type Styles } from "../../styled-system/css"
import { splitCssProps, type HTMLStyledProps } from "../../styled-system/jsx"

type TextFieldProps = Omit<AriaTextFieldProps, "className"> &
  Omit<HTMLStyledProps<"div">, "onChange"> & {
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
              borderRadius: "md",
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
