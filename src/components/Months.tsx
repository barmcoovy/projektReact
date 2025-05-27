import type { WeekRange } from "./utils/dateUtils";
import { getFourFullWeeks } from "./utils/dateUtils";
type MonthArray = {
  month: string;
  number: number;
};
type MonthsProps = {
  years: number[];
  selected: { month: number; year: number };
  setSelected: (selected: { month: number; year: number }) => void;
  months: MonthArray[];
  setWeekRange: (weekRange: WeekRange[]) => void;
};
const Months: React.FC<MonthsProps> = ({
  years,
  selected,
  setSelected,
  months,
  setWeekRange,
}) => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newSelected = {
      ...selected,
      [name]: Number(value),
    };
    setSelected(newSelected);
    setWeekRange(getFourFullWeeks(newSelected.month, newSelected.year));
  };

  return (
    <div className="months-container">
      <h1>Rozliczenie godzin ponadwymiarowych za miesiąc</h1>
      <select name="month" value={selected.month} onChange={handleSelect}>
        {months.map((month, index) => (
          <option key={index} value={month.number}>
            {month.month}
          </option>
        ))}
      </select>
      <select name="year" value={selected.year} onChange={handleSelect}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Months;
