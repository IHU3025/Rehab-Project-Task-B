import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
    todaySchedule: {
      backgroundColor: ' rgb(240, 241, 244)',
    },
    header: {
      display: 'flex',
      paddingLeft: '10px',
      paddingRight: '10px',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    weatherWidget: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    eventsList: {
      listStyle: 'none',
      padding: 2,
      alignItems: 'center',
      margin: 0,
    },
    eventItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-even',
      gap: '25px',
      paddingBottom: '30px ',
      paddingLeft: '2px ',
      transition: 'all 0.3s ease',
      
        
    },
    bulletPointContainer: {
        position: 'relative' as 'relative', 
        width: '20px', 
        height: '20px',
        minWidth: '20px', 
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
      },
    bulletPoint: {
      width: '6px',
      height: '6px',
      backgroundColor: '#8a2be2',
      borderRadius: '50%',
      transition: 'transform 0.3s ease'
    },
    eventDetails: {
      display: 'flex',
      //flexDirection: 'column',
      flexGrow: 2,
      transition: 'max-height 0.3s ease, opacity 0.3s ease',
      maxHeight: '20px',
      overflow: 'hidden',
      
    },
    
    eventDetailsH4: {
      margin: 0,
      fontSize: '13px',
      fontWeight: '500',
      fontFamily: 'system-ui',
    },
    eventDetailsP: {
      margin: 0,
      fontSize: '12px',
      color: 'rgba(151, 142, 142, 0.81)',
      lineHeight: '1.5',
      fontFamily: 'system-ui',
      
    },
    eventDetailsTitleTime: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '30px',
        float: "right",
        width: 200,

        

    },
    participantsRow: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        margin: 0, 
    },

    avatarStack: {
        display: 'flex',
        position: 'relative',
        paddingTop: '25px',
    },

    avatar: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: '2px solid white',
        position: 'absolute',
    },

    /*extraParticipants: {
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        backgroundColor: 'rgba(197, 194, 201, 0.81)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        border: '2px solid white',
        left: '8px',
    },*/

    meetingButton: {
        marginLeft: 'auto',
        marginTop: '40px',
        backgroundColor: '#000',
        color: 'white',
        border: 'none',
        borderRadius: '30%',
        width: '35px',
        height: '35px',
        fontSize: '19px',
        cursor: 'pointer',
    },

    };
  
export default styles;
  