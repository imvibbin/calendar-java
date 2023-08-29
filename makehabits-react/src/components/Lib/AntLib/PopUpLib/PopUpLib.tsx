import React, { useState } from "react";
import {
  Button,
  Modal,
  ConfigProvider,
  DatePicker,
  Input,
  Form,
  TimePicker,
} from "antd";
import { EventInterface, Habit, Appointment, FormEvent } from '../../../../models/EventInterface';
import "./PopUpLib.scss";

/* import TimePickerLib from '../TimePickerLib/TimePickerLib'; */
const PopUpLib: React.FC = () => {
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm<EventInterface>();
  const format = "HH:mm";


  const [selectedInput, setSelectedInput] = useState<string>("appointment");
  const [eventData, setEventData] = useState<EventInterface>(  {
    task_id: 1,
    user_id: 2,
    task_name: '',
    task_description: '',
    task_hourrange: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

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
        task_hourrange: '',
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
        task_hourrange: '',
        task_habit_repetitions: '[1, 4, 6]',
        // ...initialize the object
      }; 
      setEventData(habit);
    }
/*     const defaultEventData: EventInterface = {
      task_id: 1,
      task_name: "",
      task_description: "",
      task_hourrange: "",
      task_type: e.target.value,
      task_daterange: newType === "appointment" ? [] : [],
      task_habitRepeated: newType === "habit" ? 0 : 0,
    }; */

    
  };

  const onFinish = (values: any) => {
    let currentEventData = values;
    currentEventData.task_hourrange
  /*   console.log(currentEventData.task_hourrange[0].format('HH:mm'));
    console.log(currentEventData.task_hourrange[1].format('HH:mm')); */
    
    
      if(selectedInput === "appointment"){
        
        const appointment: Appointment = {
          task_id: currentEventData.task_id,
          user_id: currentEventData.user_id,
          task_name: currentEventData.task_name,
          task_type: 'appointment',
          task_description: currentEventData.task_description,
          task_hourrange: currentEventData.task_hourrange[0].format('HH:mm') + '|'  + currentEventData.task_hourrange[1].format('HH:mm'),
          task_date_range: currentEventData.task_date_range[0].format('YYYY-MM-DD') + '|'  + currentEventData.task_date_range[1].format('YYYY-MM-DD'),
        };
        setEventData(appointment);
      }
      else if(selectedInput === "habit"){
        const habit: Habit = {
          task_id: currentEventData.task_id,
          user_id: currentEventData.user_id,
          task_name: currentEventData.task_name,
          task_type: 'habit',
          task_description: currentEventData.task_description,
          task_hourrange: currentEventData.task_hourrange[0].format('HH:mm') + '|'  + currentEventData.task_hourrange[1].format('HH:mm'),
          task_habit_repetitions: '[1, 4, 6]',
          // ...initialize the object
        };
        setEventData(habit);
      }
      setIsModalOpen(false);
      form.resetFields();
      console.log(eventData);
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
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
 
  return (
    <>
      <ConfigProvider
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
            <div className="ticket-time">
              {selectedInput === "appointment" && <div>HI</div>}

              {selectedInput === "habit" && <div>Byee</div>}
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
              <Form
                form={form}
                name="basic"
                labelCol={{ span: 7 }}
                wrapperCol={{ span: 17 }}
                style={{ maxWidth: 700, padding: 5 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
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

                {selectedInput === "appointment" && (
                  <Form.Item name="task_hourrange" label="Date Range">
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
                )}
                <Form.Item name="task_hourrange" label="Time Range">
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
              </Form>
            </div>
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
