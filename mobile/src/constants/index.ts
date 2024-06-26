// https://date-fns.org/v2.11.0/docs/format
const DateFormats = {
  timestamp: 'MMM d, yyyy h:mm a',
  extendedTimestamp: 'EEEE, MMM d, yyyy h:mm a',
  date: 'MMM d, yyyy',
  dateWithDay: 'EEEE MMM d, yyyy',
  dayOfMonth: 'do',
  timeOfDay: 'h:mm a',
};

export const formatStr = (str: string) => {
  const modified = str.charAt(0).toUpperCase() + str.slice(1);
  return modified;
};

export default DateFormats;
