const styles = {
    todaySchedule: {
      padding: '10px',
      backgroundColor: ' rgb(240, 241, 244)',
      borderRadius: '8px',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '2px solid #ddd',
      paddingBottom: '10px',
      marginBottom: '10px'
    },
    weatherWidget: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    weatherP: {
      margin: 0,
      fontSize: '14px',
      fontWeight: 'bold'
    },
    eventsList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    eventItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 0',
      borderBottom: '1px solid #ddd',
      transition: 'all 0.3s ease'
    },
    bulletPoint: {
      width: '12px',
      height: '12px',
      backgroundColor: '#007bff',
      borderRadius: '50%',
      marginRight: '15px',
      transition: 'transform 0.3s ease'
    },
    eventDetails: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      transition: 'max-height 0.3s ease, opacity 0.3s ease',
      maxHeight: '20px',
      opacity: 0.5,
      overflow: 'hidden'
    },
    eventDetailsExpanded: {
      maxHeight: '200px',
      opacity: 1
    },
    eventDetailsH4: {
      margin: 0,
      fontSize: '16px',
      fontWeight: 'bold'
    },
    eventDetailsP: {
      margin: 0,
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.5'
    }
  };
  
export default styles;
  