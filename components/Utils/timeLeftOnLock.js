const timeLeftOnLock = (endDate) => {
  const dateNow = new Date();
  dateNow = dateNow.getTime() / 1000; // Convert ms to s
  const timeLeft = (endDate - dateNow).toFixed();
  let timeMessage;
  let year, month, day, hour, minute, second;

  second = timeLeft;
  minute = Math.floor(second / 60);
  second = second % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  month = Math.floor(day / 30);
  day = day % 30;
  year = Math.floor(month / 12);
  month = month % 12;

  if (year === 1 && month == 1) {
    timeMessage = `${year} year ${month} month`;
  } else if (year == 1) {
    timeMessage = `${year} year ${month} months`;
  } else if (year > 1 && month > 1) {
    timeMessage = `${year} years ${month} months`;
  } else if (year > 1) {
    timeMessage = `${year} years ${month} month`;
  } else if (year < 1) {
    if (month === 1 && day == 1) {
      timeMessage = `${month} month ${day} day`;
    } else if (month == 1) {
      timeMessage = `${month} month ${day} days`;
    } else if (month > 1 && day > 1) {
      timeMessage = `${month} months ${day} days`;
    } else if (month > 1) {
      timeMessage = `${month} months ${day} day`;
    } else if (month < 1) {
      if (day === 1 && hour == 1) {
        timeMessage = `${day} day ${hour} hour`;
      } else if (day == 1) {
        timeMessage = `${day} day ${hour} hours`;
      } else if (day > 1) {
        timeMessage = `${day} days ${hour} hours`;
      } else if (day > 1 && hour == 1) {
        timeMessage = `${day} days ${hour} hour`;
      } else if (day < 1) {
        if (hour === 1 && minute == 1) {
          timeMessage = `${hour} hour ${minute} minute`;
        } else if (hour == 1) {
          timeMessage = `${hour} hour ${minute} minutes`;
        } else if (hour > 1 && minute > 1) {
          timeMessage = `${hour} hours ${minute} minutes`;
        } else if (hour > 1) {
          timeMessage = `${hour} hours ${minute} minute`;
        } else if (hour < 1) {
          if (minute === 1 && second == 1) {
            timeMessage = `${minute} minute ${second} second`;
          } else if (minute == 1) {
            timeMessage = `${minute} minute ${second} seconds`;
          } else if (minute > 1 && second > 1) {
            timeMessage = `${minute} minutes ${second} seconds`;
          } else if (minute > 1) {
            timeMessage = `${minute} minutes ${second} second`;
          } else {
            if (second > 1) {
              timeMessage = `${second} seconds`;
            } else if (second === 1) {
              timeMessage = `${second} second`;
            } else {
              timeMessage = `Unlocked!`;
            }
          }
        }
      }
    }
  }

  return timeMessage;
};

export default timeLeftOnLock;
