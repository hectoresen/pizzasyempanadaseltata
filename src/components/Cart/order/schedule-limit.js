const date = new Date();
const dayOfWeek = date.getUTCDay();
const hours = date.getUTCHours() + 2; // Spain is 2 hours ahead of UTC
const isWeekday = dayOfWeek >= 2 && dayOfWeek <= 5; // 2 = Tuesday, 5 = Friday
const isWeekend = dayOfWeek === 6 || dayOfWeek === 0; // 6 = Saturday, 0 = Sunday
const isMorning = hours >= 10 && hours < 14;
const isEvening = (hours >= 19.5 && hours < 24) || (hours >= 0 && hours < 10);

export const calcScheduleLimit = () => {
    return (isWeekday && isMorning) || (isWeekend && isEvening);
}

