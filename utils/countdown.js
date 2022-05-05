export function countdown(secondsTime) {
  const days = Math.floor(secondsTime / 86400);
  const hours = Math.floor(secondsTime / 3600);
  const minutes = Math.floor(secondsTime / 60);
  const seconds = secondsTime;

  let h = 0;
  let m = 0;
  let s = 0;

  if (hours > 0) {
    const tmp = days > 0 ? hours - 24 * days : hours;
    if (tmp > 0) {
      h = tmp;
    }
  }
  if (minutes > 0) {
    const tmp = hours > 0 ? minutes - 60 * hours : minutes;
    if (tmp > 0) {
      m = tmp;
    }
  }
  return {
    // days,
    // hours: h,
    // minutes: m,
    // seconds: s,
    seconds: secondsTime % 60,
    minutes: parseInt(secondsTime / 60, 10) % 60,
    hours: parseInt(secondsTime / (60 * 60), 10) % 24,
    days: parseInt(secondsTime / (60 * 60 * 24), 10),
  };
}
