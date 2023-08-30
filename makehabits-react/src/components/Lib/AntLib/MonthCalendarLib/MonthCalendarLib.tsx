import React, { useState } from 'react';
import { Calendar, Col, Row, Select, ConfigProvider } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import 'dayjs/locale/es';
import locale from 'antd/locale/es_ES';
import './MonthCalendarLib.scss';

dayjs.extend(isoWeek);
dayjs.locale('es');
interface MonthCalendarLibProps {
  onCalendarWeekChange: (newData: string[]) => void;
}

const MonthCalendarLib: React.FC<MonthCalendarLibProps> = ({ onCalendarWeekChange }) => {
  const [value, setValue] = useState<Dayjs>(dayjs());

  const onSelect = (newValue: Dayjs) => {
    const currentWeek = newValue.locale('es');
    setValue(currentWeek);
/*     let startCurrentWeek = currentWeek.startOf('week').format('DD');
    let endCurrentWeek = currentWeek.endOf('week').format('DD');
    let currentMonth = currentWeek.month(); */
/*     console.log('Mes' + currentMonth);
    console.log('Primero' +startCurrentWeek);
    console.log('Ultimo' +endCurrentWeek);  */
    const daysOfWeek = [];
    for (let i = 0; i < 7; i++) {
    const day = currentWeek.startOf('week').add(i, 'day');
      daysOfWeek.push(day.format('YYYY-MM-DD'));
    }
    console.log(daysOfWeek);
    onCalendarWeekChange(daysOfWeek);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  return (
    <div>
      <ConfigProvider locale={locale}>
        <Calendar
          value={value}
          onSelect={onSelect}
          onPanelChange={onPanelChange}
          fullscreen={false}
           // Set the start of the week to Monday
          headerRender={({ value, onChange }) => {
            const year = value.year();
            const month = value.month();
            return (
              <div style={{ padding: 8 }}>
                <Row gutter={8}>
                  <Col>
                    <Select
                      size="small"
                      className="my-year-select"
                      value={year}
                      onChange={(newYear) => {
                        const now = value.clone().year(newYear);
                        onChange(now);
                      }}
                    >
                      {Array.from({ length: 7 }, (_, i) => year - 1 + i).map((yearOption) => (
                        <Select.Option key={yearOption} value={yearOption} className="year-item">
                          {yearOption}
                        </Select.Option>
                      ))}
                    </Select>
                  </Col>
                  <Col>
                    <Select
                      size="small"
                      popupMatchSelectWidth={true}
                      value={month}
                      onChange={(newMonth) => {
                        const now = value.clone().month(newMonth);
                        onChange(now);
                      }}
                    >
                      {Array.from({ length: 12 }, (_, i) => i).map((monthOption) => (
                        <Select.Option key={monthOption} value={monthOption} className="month-item">
                          {dayjs().month(monthOption).format('MMM')}
                        </Select.Option>
                      ))}
                    </Select>
                  </Col>
                </Row>
              </div>
            );
          }}
        />
      </ConfigProvider>
    </div>
  );
};

export default MonthCalendarLib;
