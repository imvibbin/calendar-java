import React from 'react';
import { TimePicker } from 'antd';
/* import dayjs from 'dayjs'; */
const format = 'HH:mm';


const TotaDisableHours = (start: number, end: number) => {
    const TotaDisableHours = [start,end];
   /*  const Events = localStorage.getItem(); */
    
    for (let i = start; i < end; i++) {
        TotaDisableHours.push(i);
    }
    return TotaDisableHours;
  };

const disabledDateTime = () => ({
    disabledHours: () => TotaDisableHours(0, 9),

  });

const TimePickerLib: React.FC = () => {
     // or 'end'
  return(
    <>
        <TimePicker.RangePicker minuteStep={30} disabledTime={disabledDateTime} format={format} hourStep={1} />
    </>
  );
};
export default TimePickerLib;
