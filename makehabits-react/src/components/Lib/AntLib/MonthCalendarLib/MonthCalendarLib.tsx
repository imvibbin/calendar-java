/* import type { Dayjs } from 'dayjs'; */

import React from 'react';
import type { CalendarProps } from 'antd';
import {  Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';

import { Col, Row, Select,} from 'antd';
import type {  } from 'antd';




import './MonthCalendarLib.scss'

const MonthCalendarLib: React.FC = () => {
/*   const wrapperStyle: React.CSSProperties = {
    width: '100%',
    borderRadius:  token.borderRadius,
    backgroundColor: '#FAA4BD',
  };  */

  return (
    <div /* style={wrapperStyle} */>
      <Calendar fullscreen={false}
        headerRender={({ value, onChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];

          let current = value.clone();
          const localeData = value.localeData();
          
          const months = [];
          for (let i = 0; i < 12; i++) {
            current = current.month(i);
            months.push(localeData.monthsShort(current));
          }
          /* onst firstDayOfWeek = value().startOf(value)
 */
          for (let i = start; i < end; i++) {
            monthOptions.push(
              <Select.Option key={i} value={i} className="month-item">
                {months[i]}
              </Select.Option>,
            );
          }
        
          const year = value.year();
          const month = value.month();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <Select.Option key={i} value={i} className="year-item">
                {i}
              </Select.Option>,
            );
          }
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
                    {options}
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
                    {monthOptions}
                  </Select>
                </Col>
              </Row>
            </div>
          );
        }}
        /* zzzzzz */
        
         /* cellRender={(current, info) => {
          if (info.type !== 'date') return info.originNode;
          const style: React.CSSProperties = {};
          if (current.date() === 1) {
            style.backgroundColor = '#1677ff';
            style.borderRadius = '50%';
          }
      }} */ 
      />
    </div>
  );
};

export default MonthCalendarLib;