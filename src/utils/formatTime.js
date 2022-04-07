const formatTime = (timeIso) => {
  const time = new Date(timeIso).toLocaleTimeString("en", {
    timeStyle: "short",
    hour12: true,
  });
  const date = new Date(timeIso);
  const day = date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dateStr = day + "/" + month + "/" + year;
  return `${time} ${dateStr}`;
};

export default formatTime;
