import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker as AriaDatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
  Button as AriaButton,
  type DatePickerProps as AriaDatePickerProps,
  type DateValue,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  FieldError,
} from "react-aria-components"
import { css, cva } from "../../styled-system/css"
import { Button } from "./Button"
interface DatePickerProps extends AriaDatePickerProps<DateValue> {
  label?: string
}

export function DatePicker({ label, ...props }: DatePickerProps) {
  return (
    <AriaDatePicker
      className={css({ display: "flex", flexDirection: "column", gap: 1 })}
      {...props}
    >
      {({ isFocusWithin, isOpen, isInvalid }) => (
        <>
          <Label className={css({ fontSize: "sm" })}>{label}</Label>
          <Group
            className={cva({
              base: {
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                backgroundColor: "slate.900",
                borderRadius: "xl",
                borderWidth: 2,
                borderColor: "slate.700",
                overflow: "hidden",
              },
              variants: {
                isFocusWithin: {
                  true: {
                    borderColor: "blue.500",
                  },
                },
                isOpen: {
                  true: {
                    borderColor: "blue.500",
                    backgroundColor: "slate.700",
                  },
                },
                isInvalid: {
                  true: {
                    borderColor: "red.500",
                  },
                },
              },
            })({ isFocusWithin, isOpen, isInvalid })}
          >
            <DateInput className={css({ display: "flex", mx: 2 })}>
              {segment => (
                <DateSegment
                  className={css({
                    px: 1,
                    _focus: {
                      outline: "none",
                      bg: "blue.800",
                    },
                  })}
                  segment={segment}
                />
              )}
            </DateInput>
            <AriaButton
              className={css({
                p: 2,
                _hover: { bg: "slate.700" },
                _focus: { bg: "blue.800" },
              })}
            >
              ▼
            </AriaButton>
          </Group>
          <FieldError className={css({ color: "red.300" })} />
          <Popover
            className={css({
              color: "white",
              backgroundColor: "slate.700",
              borderRadius: "md",
              borderWidth: 2,
              borderColor: "slate.400",
              padding: 2,
              width: "340px",
              shadow: "lg",
            })}
          >
            <Dialog>
              <Calendar>
                <header
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  })}
                >
                  <Button variant="quiet" slot="previous">
                    ◀
                  </Button>
                  <Heading />
                  <Button variant="quiet" slot="next">
                    ▶
                  </Button>
                </header>
                <CalendarGrid
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                  })}
                >
                  <CalendarGridHeader
                    className={css({
                      "&>tr": {
                        display: "grid",
                        gridTemplateColumns: "repeat(7, 1fr)",
                      },
                    })}
                  >
                    {day => (
                      <CalendarHeaderCell
                        className={css({
                          fontWeight: "bold",
                          fontSize: "sm",
                          color: "white/30",
                        })}
                      >
                        {day}
                      </CalendarHeaderCell>
                    )}
                  </CalendarGridHeader>
                  <CalendarGridBody
                    className={css({
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                      "&>tr": {
                        display: "grid",
                        gridTemplateColumns: "repeat(7, 1fr)",
                      },
                    })}
                  >
                    {date => (
                      <CalendarCell
                        className={css({
                          p: 2,
                          rounded: "md",
                          textAlign: "center",
                          _hover: {
                            bg: "blue.700",
                          },
                          borderWidth: 2,
                          borderColor: "transparent",
                          _selected: {
                            borderColor: "blue.500",
                          },
                          _disabled: {
                            color: "white/40",
                            _hover: {
                              bg: "transparent",
                            },
                          },
                        })}
                        date={date}
                      />
                    )}
                  </CalendarGridBody>
                </CalendarGrid>
              </Calendar>
            </Dialog>
          </Popover>
        </>
      )}
    </AriaDatePicker>
  )
}
