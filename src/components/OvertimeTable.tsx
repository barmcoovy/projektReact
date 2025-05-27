import React, { useState } from "react";
import Months from "./Months";
import Hours from "./Hours";
import { getFourFullWeeks } from "./utils/dateUtils";
import type { WeekRange } from "./utils/dateUtils";

type MonthArray = {
  month: string;
  number: number;
};
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
        <thead>
          <tr>
            <th rowSpan={2} className="border border-black p-1">
              Tydzień <br /> od <br /> ------- <br />
              do
            </th>
            <th rowSpan={2} className="border border-black p-1">
              Ilość godzin
              <br />
              według planu nauczania
            </th>
            <th colSpan={7} className="border border-black p-1">
              Ilość godzin w poszczególnych dniach
            </th>
          </tr>
          <tr>
            <th className="border border-black p-1">P</th>
            <th className="border border-black p-1">W</th>
            <th className="border border-black p-1">S</th>
            <th className="border border-black p-1">CZ</th>
            <th className="border border-black p-1">P</th>
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, index) => (
            <tr key={index}>
              <td className="border border-black p-1">
                {week.start.toLocaleDateString()} –<br />
                {week.end.toLocaleDateString()}
              </td>
              <td className="border border-black p-1"></td>
              {[...Array(5)].map((_, i) => (
                <td key={i} className="border border-black p-1">
                  {hours > 0 ? hours / 5 : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OvertimeTable;
