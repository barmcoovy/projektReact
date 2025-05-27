export type WeekRange = { start: Date; end: Date };

export function getFourFullWeeks(month: number, year: number): WeekRange[] {
  const firstOfMonth = new Date(year, month - 1, 1);
  let start = new Date(firstOfMonth);

  if (firstOfMonth.getDay() === 5) {
    const diffToMonday = (firstOfMonth.getDay() + 6) % 7;
    start.setDate(firstOfMonth.getDate() - diffToMonday);
  } else {
    const day = firstOfMonth.getDay();
    const diff = day === 0 ? 6 : day - 1;
    start.setDate(firstOfMonth.getDate() - diff);
  }

  const weeks: WeekRange[] = [];
  for (let i = 0; i < 4; i++) {
    const weekStart = new Date(start);
    weekStart.setDate(start.getDate() + i * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 4);
    weeks.push({ start: weekStart, end: weekEnd });
  }
  return weeks;
}
