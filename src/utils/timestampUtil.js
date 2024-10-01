
export class TimestampUtil {

  static convertToDateAndHour(timestamp) {
    const date = new Date(timestamp);

    const formattedDate = date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });

    const formattedTime = date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }) + ' hs';

    return {
      date: formattedDate,
      time: formattedTime
    }
  }

  static convertToDateForFilter(date) {
    return date.toLocaleString('en-CA', { 
      timeZone: 'America/Argentina/Buenos_Aires', 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    })
  }
}