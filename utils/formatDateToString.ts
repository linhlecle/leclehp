export const formatDateToString = (time: Date) => {
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  return `${year}-${month}-${date}`;
};

export const dateToUpdated = (time: string) => {
  const datetime = new Date(time);
  const year = datetime.getFullYear();
  const month = datetime.getMonth() + 1;
  const date = datetime.getDate();
  const hour = datetime.getHours();
  const minute = datetime.getMinutes() >= 30 ? '30' : '00';
  return `${year}.${month}.${date} ${hour}:${minute}`;
};
