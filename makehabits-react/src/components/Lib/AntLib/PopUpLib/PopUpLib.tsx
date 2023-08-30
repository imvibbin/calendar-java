import React, { useState } from "react";
import {
  Button,
  Modal,
  ConfigProvider,
  DatePicker,
  Input,
  Form,
  Checkbox,
  TimePicker,
} from "antd";
import { EventInterface, Habit, Appointment, /* FormEvent */ } from '../../../../models/EventInterface';
import "./PopUpLib.scss";
import dayjs from 'dayjs';
import locale from 'antd/locale/es_ES';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

/* import TimePickerLib from '../TimePickerLib/TimePickerLib'; */
const PopUpLib: React.FC = () => {
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm<EventInterface>();
  const format = "HH:mm";



  const [selectedInput, setSelectedInput] = useState<string>("appointment");
  const [eventData, setEventData] = useState<EventInterface>(  {
    task_id: 1,
    user_id: 1,
    task_name: '',
    task_type: 'appointment',
    task_description: '',
    task_date_range: '',
    task_hour_range: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateDaysOfWeekInRange = (startDate, endDate, dayIndex) => {
    const days = [];
  
    const currentDate = dayjs(startDate);
    const lastDate = dayjs(endDate);
  
    while (currentDate.isBefore(lastDate) || currentDate.isSame(lastDate, 'day')) {
      if (currentDate.day() === dayIndex) {
        days.push(currentDate.format('YYYY-MM-DD'));
      }
      currentDate.add(1, 'day');
    }
  
    return days;
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedInput(e.target.value);


    if(e.target.value === "appointment"){
       const appointment: Appointment = {
        task_id: 32,
        user_id: 1,
        task_name: '',
        task_type: 'appointment',
        task_description: '',
        task_date_range: '',
        task_hour_range: '',
      }; 
  
      setEventData(appointment);
    }
    else if(e.target.value === "habit"){


       const habit: Habit = {
        task_id: 1,
        user_id: 2,
        task_name: '',
        task_type: 'habit',
        task_description: '',
        task_hour_range: '',
        task_date_range: '',
        task_habit_repetitions: '',
        // ...initialize the object
      }; 
      setEventData(habit);
    }
/*     const defaultEventData: EventInterface = {
      task_id: 1,
      task_name: "",
      task_description: "",
      task_hour_range: "",
      task_type: e.target.value,
      task_date_range: newType === "appointment" ? [] : [],
      task_habitRepeated: newType === "habit" ? 0 : 0,
    }; */

    
  };

  const onFinish = (values: any) => {
    const currentEventData = values;

    console.log(values);
    /*  */
  /*   console.log(currentEventData.task_hour_range[0].format('HH:mm'));
    console.log(currentEventData.task_hour_range[1].format('HH:mm')); */
    
    
      if(selectedInput === "appointment"){
        
        const appointment: Appointment = {
          task_id: currentEventData.task_id,
          user_id: currentEventData.user_id,
          task_name: currentEventData.task_name,
          task_type: 'appointment',
          task_description: currentEventData.task_description,
          task_hour_range: (currentEventData.task_hour_range ?? [])[0]?.format('HH:mm') + '|' + (currentEventData.task_hour_range ?? [])[1]?.format('HH:mm'),
          task_date_range: (currentEventData.task_date_range ?? [])[0]?.format('YYYY-MM-DD') + '|' + (currentEventData.task_date_range ?? [])[1]?.format('YYYY-MM-DD'),
          };
        setEventData(appointment);
      }
      else if(selectedInput === "habit"){
        const habit: Habit = {  
       /*    generateDaysOfWeekInRange(){} */
          task_id: currentEventData.task_id,
          user_id: currentEventData.user_id,
          task_name: currentEventData.task_name,
          task_type: 'habit',
          task_description: currentEventData.task_description,
          task_hour_range: currentEventData.task_hour_range[0].format('HH:mm') + '|'  + currentEventData.task_hour_range[1].format('HH:mm'),
          task_date_range: currentEventData.task_date_range[0].format('HH:mm') + '|'  + currentEventData.task_date_range[1].format('HH:mm'),
          task_habit_repetitions: currentEventData.task_habit_repetitions,
          // ...initialize the object
        };
        setEventData(habit);
        console.log(habit);
      }
      setIsModalOpen(false);
      form.resetFields();
    }
  /*
  !UTILIZAR EVENT INTERFACE BEFORE UPDATING TO LOCAL STORAGE

  const jsonEventData: EventInterface = {
      ...eventData,
      ...values,
    }; 

    localStorage.setItem("eventData", JSON.stringify(jsonEventData));
    
   
    
  };
*/
/*   const onFinishFailed = (errorInfo: string) => {
    console.log("Failed:", errorInfo);
  }; */

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  const TotaDisableHours = (start: number, end: number) => {
    const TotaDisableHours = [start, end];
    /*  const Events = localStorage.getItem(); */

    for (let i = start; i < end; i++) {
      TotaDisableHours.push(i);
    }
    return TotaDisableHours;
  };

  const disabledDateTime = () => ({
    disabledHours: () => TotaDisableHours(0, 9),
  });

/*   const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  }; */


  return (
    <>
      <ConfigProvider locale={locale}
        theme={{
          components: {
            Button: {
              colorPrimary: "#f564a9",
              colorBorder: "#f564a9",
              colorPrimaryActive: "#f564a9",
              colorText: "#533b4d",
              colorLinkActive: "#fae3c6",
              colorPrimaryHover: "#f564a9",
            },
            Modal: {
              colorBgMask: "rgba(245, 100, 169, 0.15)",
            },
          },
        }}
      >
        <Button onClick={showModal}>+ New Activity</Button>
        <Modal
          className="modalLib"
          footer={null}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="ticket">
          <Form
                form={form}
                name="basic"
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 17 }}
                style={{ maxWidth: 700, padding: 5 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
              >
            <div className="ticket-time">
              {selectedInput === "appointment"  
                
              }

              {selectedInput === "habit" &&
                <Form.Item name="task_habit_repetitions" label="Checkbox.Group">
                <Checkbox.Group>
                      <Checkbox value="Lunes" style={{ lineHeight: '32px' }}>
                      Lunes
                      </Checkbox>
                  
                      <Checkbox value="Martes" style={{ lineHeight: '32px' }}>
                      Martes
                      </Checkbox>
                    
                      <Checkbox value="Miercoles" style={{ lineHeight: '32px' }}>
                      Miercoles
                      </Checkbox>
                    
                      <Checkbox value="Jueves" style={{ lineHeight: '32px' }}>
                        Jueves
                      </Checkbox>
                    
                      <Checkbox value="Viernes" style={{ lineHeight: '32px' }}>
                      Viernes
                      </Checkbox>
                      <Checkbox value="Sabado" style={{ lineHeight: '32px' }}>
                        Sabado
                      </Checkbox>
                </Checkbox.Group>
              </Form.Item>
              }
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="appointment"
                    checked={selectedInput === "appointment"}
                    onChange={handleCheckboxChange}
                  />
                  Appointment
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="habit"
                    checked={selectedInput === "habit"}
                    onChange={handleCheckboxChange}
                  />
                  Habit
                </label>
              </div>
            </div>
            <div className="ticket-info">
              
                <Form.Item
                  name="task_name"
                  label="Title"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="task_description"
                  label="Description"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>

                
                  <Form.Item name="task_date_range" label="Date Range">
                    <RangePicker
                      cellRender={(current, info) => {
                        if (info.type !== "date") return info.originNode;
                        const style: React.CSSProperties = {};
                        if (current.date() === 1) {
                          style.border = "1px solid #1677ff";
                          style.borderRadius = "50%";
                        }
                        return (
                          <div className="ant-picker-cell-inner" style={style}>
                            {current.date()}
                          </div>
                        );
                      }}
                    />
                  </Form.Item>
                      
                <Form.Item name="task_hour_range" label="Time Range">
                  <TimePicker.RangePicker
                    minuteStep={30}
                    format={format}
                    disabledTime={disabledDateTime}
                    hourStep={1}
                  />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default PopUpLib;
/* 
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
   
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
}; */
