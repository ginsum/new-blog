const timezoneOffset = new Date().getTimezoneOffset() * 60000;

export const getISOformat = (timeStamp: number) => {
  const timezoneDate = new Date(timeStamp - timezoneOffset);
  return timezoneDate.toISOString().slice(0, 10);
};
