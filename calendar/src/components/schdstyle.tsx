import { styled } from "@stitches/react";

const HOUR_MARGIN_TOP = 20;
const HOUR_BOX_HEIGHT = 30;

export const MainWrapper = styled("div", {
  display: 'flex',
  width: '100%',
  height: '100%',
  padding: 10,
  backgroundColor: 'rgb(240, 241, 244)',
  fontFamily: "Anek Telugu",
});

export const HGrid = styled("div", {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '50px repeat(7, 1fr)',
  height: '100%',
});

export const DayVWrapper = styled("div", {
  height: '100%',
  border: '1px solid green',
  position: 'relative',
  backgroundColor: '#EED2CC',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Hover effect
  },
});

export const VGrid = styled("div", {
  display: 'grid',
  gridTemplateRows: 'repeat(12, 1fr)',
  marginTop: HOUR_MARGIN_TOP,
});

export const Hour = styled("div", {
  height: HOUR_BOX_HEIGHT,
  display: 'flex',
  alignItems: 'center',
});

export const Wrapper = styled("div", {
  width: 'calc(100% - 30px)',
  border: '2px solid',
  margin: 15,
  position: 'relative',
});

export const HourLine = styled("div", {
  position: 'absolute',
  borderBottom: '1px solid red',
  width: '100%',
  variants: {
   
    },
  },
);

export const Event = styled("div", {
  background: '#5A6650',
  padding: '10px 3px',
  color: 'white',
  fontSize: 18,
  position: 'absolute',
  margin: 5,
  width: 'calc(100% - 10px)',
  borderRadius: 5,
  variants: {
  },
});

export const FlexBox = styled("div", {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: 10,
  alignItems: 'center',
  
  'button': {
    alignItems: 'center',
    display: 'flex',
    fontSize: 19,
    padding: '5px 10px',
  },
});
