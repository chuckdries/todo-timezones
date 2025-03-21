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
  type DatePickerProps as AriaDatePickerProps,
  type DateValue,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
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
      {({ isFocusWithin, isOpen }) => (
        <>
          <Label className={css({ fontSize: "sm" })}>{label}</Label>
          <Group
            className={cva({
              base: {
                display: "flex",
                alignItems: "baseline",
                backgroundColor: "slate.800",
                borderRadius: "md",
                borderWidth: 2,
                borderColor: "slate.700",
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
              },
            })({ isFocusWithin, isOpen })}
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
            <Button variant="quiet">▼</Button>
          </Group>

          <Popover
            className={css({
              color: "white",
              backgroundColor: "slate.800",
              borderRadius: "md",
              borderWidth: 2,
              borderColor: "slate.700",
              padding: 2,
              width: "340px",
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
                        className={({ isSelected, isOutsideMonth }) => {
                          return cva({
                            base: {
                              p: 2,
                              rounded: "md",
                              textAlign: "center",
                              _hover: {
                                bg: "blue.700",
                              },
                              borderWidth: 2,
                              borderColor: "transparent",
                            },
                            variants: {
                              isSelected: {
                                true: {
                                  borderColor: "blue.500",
                                },
                              },
                              isOutsideMonth: {
                                true: {
                                  color: "white/50",
                                },
                              },
                            },
                          })({ isSelected, isOutsideMonth })
                        }}
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
