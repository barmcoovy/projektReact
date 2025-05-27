export type WeekRange = { start: Date; end: Date };

/**
 * Zwraca cztery pełne tygodnie (od poniedziałku do piątku) dla podanego miesiąca i roku.
 * Każdy tydzień reprezentowany jest przez obiekt z datą początku i końca tygodnia.
 *
 * @param month - Numer miesiąca (1-12)
 * @param year - Rok (np. 2024)
 * @returns Tablica czterech tygodni jako obiekty WeekRange z datą początku i końca tygodnia
 */
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
    // Poniedziałek-piątek:
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
