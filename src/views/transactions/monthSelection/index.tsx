import React from "react";
import { Calendar, theme } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import type { Dayjs } from "dayjs";
import { CalendarContainer } from "../transactions.styled";
import { Link } from "react-router-dom";

const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

export default function MonthSelection() {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <CalendarContainer>
      <div className="calendar">
        <Calendar
          fullscreen={false}
          onPanelChange={onPanelChange}
          style={wrapperStyle}
        />
      </div>
      <Link to="invoice">
        <button className="btn btn-blue mt-4">done</button>
      </Link>
    </CalendarContainer>
  );
}
