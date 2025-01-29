import { styled } from "@stitches/react";

/*code from https://dev.to/franciscomendes10866/how-to-build-a-custom-calendar-component-in-react-26kj*/

export const MainWrapper = styled("div", {
  width: 260,
  padding: 10,
  backgroundColor: 'rgb(240, 241, 244)',
  fontFamily: "Anek Telugu",
});

export const CalendarHeaderWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const WeekDaysWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const WeekDayCell = styled("div", {
  height: 25,
  width: 30,
  margin: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9BA4B4",
});

export const CalendarContentWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
});

export const CalendarDayCell = styled("div", {
  height: 30,
  width: 50,
  display: 'flex',
  alignItems: "center",
  justifyContent: "center",
  margin: 2,

  variants: {
    variant: {
      default: {
        color: "#1B1B2F",
      },
      today: {
        color: "#E43F5A",
      },
      nextMonth: {
        color: "#DAE1E7",
      },
    },
  },
});