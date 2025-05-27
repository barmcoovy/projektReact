type MonthArray = {
  month: string;
  number: number;
};
type MonthsProps = {
  years: number[];
  selected: { month: number; year: number };
  setSelected: (selected: { month: number; year: number }) => void;
  months: MonthArray[];
};
const Months: React.FC<MonthsProps> = ({
  years,
  selected,
  setSelected,
  months,
}) => {
  return (
    <div className="months-container">
      <h1>Rozliczenie godzin ponadwymiarowych za M-C</h1>
      <select
        value={selected.month}
        onChange={(e) =>
          setSelected({ ...selected, month: Number(e.target.value) })
        }
      >
        {months.map((month, index) => (
          <option key={index} value={month.month}>
            {month.month}
          </option>
        ))}
      </select>
      <select
        value={selected.year}
        onChange={(e) =>
          setSelected({ ...selected, year: Number(e.target.value) })
        }
      >
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
