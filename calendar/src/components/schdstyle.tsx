import { styled } from "@stitches/react";

const HOUR_MARGIN_TOP = 53;
const HOUR_BOX_HEIGHT = 55;

export const MainWrapper = styled("div", {
  display: 'flex',
  flexDirection: 'column',
  width: '98%',
  height: '0%',
  backgroundColor: 'rgb(240, 241, 244)',
  fontFamily: "Anek Telugu",
});

export const HGrid = styled("div", {
  display: 'grid',
  gridTemplateColumns: '50px repeat(7, 1fr) 50px',
  height: '100%',
});

export const DayVWrapper = styled("div", {
  height: '100%',
  backgroundImage: 'linear-gradient(to right, rgb(230, 231, 235) 1.5px, transparent 1px)',
  position: 'relative',
  display: 'grid',
  paddingTop: "2px", 
  
  gridTemplateRows: `1fr repeat(11, ${HOUR_BOX_HEIGHT}px)`,
  '&::after': {
    paddingTop: "2px", 
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundSize: `${HOUR_BOX_HEIGHT}px ${HOUR_BOX_HEIGHT}px`,
    backgroundImage: 'linear-gradient(to bottom, rgb(216, 219, 225) 1.5px, transparent 1px)',
  
  },
});

export const VGrid = styled("div", {
  display: 'grid',
  gridTemplateRows: `repeat(12, ${HOUR_BOX_HEIGHT}px)`,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  
});

export const Hour = styled("div", {
  height: HOUR_BOX_HEIGHT,
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
  fontSize: "14px",
});

export const Wrapper = styled("div", {
  width: 'calc(100% - 30px)',
  border: '2px solid',
  margin: 15,
  position: 'relative',
});


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
