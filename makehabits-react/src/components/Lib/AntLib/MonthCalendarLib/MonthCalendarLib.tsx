import type { Dayjs } from 'dayjs';

import React from 'react';
import { Calendar, theme } from 'antd';

import './MonthCalendarLib.scss'

const MonthCalendarLib: React.FC = () => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadius,
  };

  return (
    <div style={wrapperStyle}>
      <Calendar fullscreen={false} mode={'month'} />
    </div>
  );
};

export default MonthCalendarLib;