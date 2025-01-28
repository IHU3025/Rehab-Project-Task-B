import { styled } from "@stitches/react";

const HOUR_BOX_HEIGHT = 55;

export const MainWrapper = styled("div", {
  display: 'flex',
  flexDirection: 'column',
  width: '98%',
  height: '0%',
  backgroundColor: 'rgb(240, 241, 244)',
  fontFamily: "Anek Telugu",
  zIndex: 0,
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
  zIndex: 1,
  
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
    zIndex: 1,
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

