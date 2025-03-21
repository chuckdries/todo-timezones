import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components"
import { css, cva } from "../../styled-system/css"
import type { SystemStyleObject } from "../../styled-system/types"
interface ButtonProps extends AriaButtonProps {
  variant?: "primary" | "secondary" | "quiet"
  circle?: boolean
  css?: SystemStyleObject
}

const buttonVariants = cva({
  base: {
    color: "white",
    borderRadius: "xl",
    p: 2,
    _disabled: {
      bg: "slate.700!",
      borderColor: "slate.600!",
      color: "slate.400!",
    },
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
      secondary: {
        base: {
          bg: "slate.600",
          borderColor: "slate.500",
          borderWidth: 2,
        },
        _hover: {
          bg: "slate.500",
          borderColor: "slate.400",
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
})

export function Button({
  variant = "primary",
  css: cssProp,
  circle,
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      {...props}
      className={state =>
        css(buttonVariants.raw({ ...state, variant, circle }), cssProp)
      }
    />
  )
}
