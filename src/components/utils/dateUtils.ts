export type WeekRange = { start: Date; end: Date };

export function getFourFullWeeks(month: number, year: number): WeekRange[] {
  const firstOfMonth = new Date(year, month - 1, 1);
  let firstMonday: Date;

  const dayOfWeek = firstOfMonth.getDay();

  if (dayOfWeek === 6) {
    // Sobota
    firstMonday = new Date(firstOfMonth);
    firstMonday.setDate(firstOfMonth.getDate() + 2);
  } else if (dayOfWeek === 0) {
    // Niedziela
    firstMonday = new Date(firstOfMonth);
    firstMonday.setDate(firstOfMonth.getDate() + 1);
  } else {
    // Poniedziałek-piątek: znajdź poniedziałek na lub przed pierwszym dniem miesiąca
    const diffToMonday = (dayOfWeek + 6) % 7;
    firstMonday = new Date(firstOfMonth);
    firstMonday.setDate(firstOfMonth.getDate() - diffToMonday);
  }

  const weeks: WeekRange[] = [];
  for (let i = 0; i < 4; i++) {
    const weekStart = new Date(firstMonday);
    weekStart.setDate(firstMonday.getDate() + i * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 4);
    weeks.push({ start: weekStart, end: weekEnd });
  }
  return weeks;
}
