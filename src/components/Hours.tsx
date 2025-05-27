import React from "react";

type HoursProps = {
  hours: number;
  editing: boolean;
  setHours: (hours: number) => void;
  setEditing: (editing: boolean) => void;
};
const Hours: React.FC<HoursProps> = ({
  hours,
  editing,
  setHours,
  setEditing,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = Number(value);
    if (!isNaN(numericValue)) {
      setHours(numericValue);
    }
  };
  return (
    <div>
      <h3>
        Tygodniowa liczba godzin obowiązującego wymiaru zajęć:{" "}
        {editing ? (
          <input
            className="border border-gray-300 p-1 rounded"
            value={hours}
            onChange={(e) => handleChange(e)}
            onBlur={() => setEditing(false)}
            placeholder="Wprowadź liczbę godzin"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setEditing(false);
              }
            }}
          />
        ) : (
          <span
            className="font-bold "
            onClick={() => setEditing(true)}
            style={{ cursor: "pointer" }}
          >
            {hours ? hours : "Kliknij, aby dodać liczbę godzin"}
          </span>
        )}
      </h3>
    </div>
  );
};

export default Hours;
