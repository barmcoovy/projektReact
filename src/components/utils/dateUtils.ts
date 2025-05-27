export type WeekRange = { start: Date; end: Date };

export function getFourFullWeeks(month: number, year: number): WeekRange[] {
  const firstOfMonth = new Date(year, month - 1, 1);
  let start = new Date(firstOfMonth);

  // Jeśli 1. dzień miesiąca to niedziela, zaczynamy od 2. dnia miesiąca
  if (firstOfMonth.getDay() === 0) {
    start.setDate(2);
  } else {
    // W innym przypadku szukamy pierwszego poniedziałku miesiąca
    const diff = (8 - firstOfMonth.getDay()) % 7;
    start.setDate(firstOfMonth.getDate() + diff);
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
