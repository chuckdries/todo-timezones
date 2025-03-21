import {
  TextField as AriaTextField,
  Input,
  Label,
  type TextFieldProps as AriaTextFieldProps,
} from "react-aria-components"
import { css, cva, type Styles } from "../../styled-system/css"

type TextFieldProps = Omit<AriaTextFieldProps, "className"> & {
  label?: string;
  className?: Styles
}

export function TextField({ label, className, ...props }: TextFieldProps) {
  return (
    <AriaTextField
      {...props}
      className={css({
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }, className)}
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
              backgroundColor: "slate.800",
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
