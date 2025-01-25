import { styled } from "@stitches/react";

export const MainWrapper = styled("div", {
  display: 'grid',
  gridTemplateRows: 'auto auto 1fr',
  width: '100%',
  height: '100%',
  padding: 10,
  backgroundColor: 'rgb(240, 241, 244)',
  fontFamily: "Anek Telugu",
});

export const CalendarHeaderWrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gridRow: '1',
});

export const WeekDaysWrapper = styled("div", {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  justifyContent: "space-between",
  gridRow: '2',
});

export const WeekDayCell = styled("div", {
  height: 30,
  width: '100%',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#9BA4B4",
});

export const CalendarContentWrapper = styled("div", {
  display: 'grid',
  gridTemplateColumns: 'repeat(8, 1fr)', // 7 days + 1 for the time column
  gridRow: '3',
});

export const CalendarDayCell = styled("div", {
  height: 30,
  width: '100%',
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
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export const TimeSlot = styled("div", {
  gridColumn: '1',
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#f0f1f4",
  color: "#9BA4B4",
});
