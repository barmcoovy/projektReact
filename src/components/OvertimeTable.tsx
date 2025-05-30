import React, { useState } from "react";
import Months from "./Months";
import Hours from "./Hours";
import { getFourFullWeeks } from "./utils/dateUtils";
import type { WeekRange } from "./utils/dateUtils";

type MonthArray = {
  month: string;
  number: number;
};
function toRoman(num: number): string {
  const romanMap: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let result = "";
  for (const [value, letter] of romanMap) {
    while (num >= value) {
      result += letter;
      num -= value;
    }
  }
  return result;
}

const OvertimeTable: React.FC = () => {
  const years: number[] = [2025, 2024, 2023, 2022, 2021, 2020];
  const months: MonthArray[] = [
    {
      month: "styczeń",
      number: 1,
    },
    {
      month: "luty",
      number: 2,
    },
    {
      month: "marzec",
      number: 3,
    },
    {
      month: "kwiecień",
      number: 4,
    },
    {
      month: "maj",
      number: 5,
    },
    {
      month: "czerwiec",
      number: 6,
    },
    {
      month: "lipiec",
      number: 7,
    },
    {
      month: "sierpień",
      number: 8,
    },
    {
      month: "wrzesień",
      number: 9,
    },
    {
      month: "październik",
      number: 10,
    },
    {
      month: "listopad",
      number: 11,
    },
    {
      month: "grudzień",
      number: 12,
    },
  ];

  function formatHoursMinutes(value: number) {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    if (hours === 0 && minutes === 0) return "";
    if (hours > 0 && minutes > 0) return `${hours} godz ${minutes} min`;
    if (hours > 0) return `${hours} godz`;
    return `${minutes} min`;
  }
  const [selected, setSelected] = useState({
    month: months[0].number,
    year: years[0],
  });
  const [hours, setHours] = React.useState<number>(0);
  const [editing, setEditing] = React.useState<boolean>(false);

  const [weeks, setWeeks] = useState<WeekRange[]>(getFourFullWeeks(1, 2025));

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center uppercase">
        <Months
          years={years}
          selected={selected}
          setSelected={setSelected}
          months={months}
          setWeekRange={setWeeks}
        />
      </h2>
      <h3 className="text-md mb-4 text-center uppercase">
        <Hours
          hours={hours}
          setHours={setHours}
          setEditing={setEditing}
          editing={editing}
        />
      </h3>
      <table className="w-full border border-black text-sm text-center">
        <tr>
          <th colSpan={2} rowSpan={4} className="border border-black p-1">
            Tydzień <br /> od <br /> ------- <br />
            do
          </th>
          <th rowSpan={2} className="border border-black p-1">
            Ilość godzin
          </th>
          <th colSpan={6} className="border border-black p-1">
            Ilość godzin w poszczególnych dniach
          </th>
          <th colSpan={9} className="border border-black p-1">
            Ilość godzin w tygodniu
          </th>
        </tr>
        <tr>
          <th className="border border-black p-1">P</th>
          <th className="border border-black p-1">W</th>
          <th className="border border-black p-1">S</th>
          <th className="border border-black p-1">CZ</th>
          <th className="border border-black p-1">P</th>
          <th className="border border-black p-1">S</th>
          <th rowSpan={3} className="border border-black">
            ponadwymiarowych niezrealizowanych
          </th>
          <th rowSpan={3} className="border border-black p-1">
            przydzielonych ponadwymiarowych
          </th>
          <th rowSpan={2} className="border border-black p-1">
            przepracowanych ponadwymiarowych
          </th>
          <th rowSpan={3} className="border border-black p-1">
            płatnych zastępstw
          </th>
          <th rowSpan={2} className="border border-black p-1">
            razem ponadwymiarowych do wypłaty
          </th>
        </tr>
        <tr>
          <th className="border border-black p-2">Według planu nauczania</th>
          <td className="border border-black"></td>
          <td className="border border-black"></td>
          <td className="border border-black"></td>
          <td className="border border-black"></td>
          <td className="border border-black"></td>
          <td className="border border-black">-</td>
        </tr>
        <tr>
          <th className="border border-black p-2">Przeciętna dzienna</th>
          <td className="border border-black"></td>
          <td className="border border-black"></td>
          <td className="border border-black"></td>
          <td className="border border-black"></td>
          <td className="border border-black"></td>
          <td className="border border-black">-</td>
          <th className="border border-black">10 - 9</th>
          <th className="border border-black">11 + 12</th>
        </tr>
        <tr>
          <th colSpan={2}>1</th>
          {[...Array(12)].map((_, i) => (
            <th key={i} className="border border-black p-1">
              {i + 2}
            </th>
          ))}
        </tr>
        {weeks.map((week, index) => (
          <tr key={index}>
            <td className="border border-black text-center font-bold">
              {toRoman(index + 1)}
            </td>
            <td className="border border-black text-center p-3">
              {week.start.toLocaleDateString()} -<br />
              {week.end.toLocaleDateString()}
            </td>

            <td className="">{formatHoursMinutes(hours)}</td>
            {[...Array(5)].map((_, i) => (
              <td key={i} className="border border-black p-1">
                {hours > 0 ? formatHoursMinutes(hours / 5) : ""}
              </td>
            ))}
            <td className="border border-black">-</td>
            {[...Array(5)].map((_, i) => (
              <td key={i} className="border border-black p-1"></td>
            ))}
          </tr>
        ))}
        <th className="border border-black">V</th>
        <th className="border border-black">-</th>
        <th className=""></th>
        {[...Array(11)].map((_, i) => (
          <th key={i} className="border border-black p-1">
            {"-"}
          </th>
        ))}
        <tr>
          <td className="border border-black p-10"></td>
          <td colSpan={12} className="border border-black p-10 text-left">
            Nauczanie indywidualne:
          </td>
        </tr>
      </table>
      <h2 className="mt-12">
        Sporządził....................................................
      </h2>
    </div>
  );
};

export default OvertimeTable;
