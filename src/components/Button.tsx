import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components"
import { cva } from "../../styled-system/css"

interface ButtonProps extends AriaButtonProps {
  variant?: "primary" | "quiet"
  circle?: boolean
}

export function Button({ variant = "primary", circle, ...props }: ButtonProps) {
  return (
    <AriaButton
      {...props}
      className={state =>
        cva({
          base: {
            color: "white",
            borderRadius: "md",
            p: 2,
          },
          variants: {
            circle: {
              true: {
                borderRadius: "full",
              },
            },
            variant: {
              primary: {
                base: {
                  bg: "blue.900",
                  borderColor: "blue.700",
                  borderWidth: 2,
                },
                _hover: {
                  bg: "blue.800",
                  borderColor: "blue.600",
                },
              },
              quiet: {
                base: {
                  bg: "transparent",
                },
                _hover: {
                  bg: "slate.700",
                },
              },
            },
          },
        })({ ...state, variant, circle })
      }
    />
  )
}
