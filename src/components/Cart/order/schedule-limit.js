const date = new Date();
const dayOfWeek = date.getUTCDay();
const hours = date.getUTCHours() + 2; // Spain is 2 hours ahead of UTC
const isWeekday = dayOfWeek >= 2 && dayOfWeek <= 6; // 2 = Tuesday, 6 = Saturday
const isWeekend = dayOfWeek === 0 || dayOfWeek === 1; // 0 = Sunday, 1 = Monday
const isMorning = hours >= 10 && hours < 14;
const isEvening = (hours >= 19 && hours < 24) || (hours >= 0 && hours < 10);

export const calcScheduleLimit = () => {
    //return (isWeekday && (isMorning || isEvening)) || (isWeekend && isEvening);
    return true
}