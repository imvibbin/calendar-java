import React, { useState } from 'react';
import { Button, Modal, DatePicker, Input, Form, TimePicker } from 'antd';
import  EventInterface  from '../../../../models/EventInterface'; // Import the EventInterface

import './PopUpLib.scss';

/* import TimePickerLib from '../TimePickerLib/TimePickerLib'; */
const PopUpLib: React.FC = () => {
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  const format = 'HH:mm';
  const defaultEventData: EventInterface = {
    id: 1,
    name: '',
    description: '',
    hourrange: [],
  };
const [selectedInput, setSelectedInput] = useState<string>('appointment');
const [eventData, setEventData] = useState<EventInterface>(defaultEventData);
const [isModalOpen, setIsModalOpen] = useState(false);


const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSelectedInput(e.target.value);

  const newType = e.target.value as Form['type'];
  const defaultEventData: EventInterface = {
    id: 1,
    name: '',
    description: '',
    hourrange: [],
    type: newType,
    daterange: newType === 'appointment' ? [] : [],
    habitRepeated: newType === 'habit' ? 0 : 0,
  };

  setEventData(defaultEventData);
};

const onFinish = (values: any) => {
    const jsonEventData: EventInterface = {
    ...eventData,
    ...values,
  };

  localStorage.setItem('eventData', JSON.stringify(jsonEventData));
  console.log(jsonEventData);
  setIsModalOpen(false);
  form.resetFields();
};
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
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



  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal className='modalLib' footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className="ticket">
        <div className='ticket-time'>
          {selectedInput === 'appointment' && (
              <div>HI</div>
          )}

          {selectedInput === 'habit' && (
              <div>Byee</div>
          )}
        <div>
          <label>
            <input
              type="checkbox"
              value="appointment"
              checked={selectedInput === 'appointment'}
              onChange={handleCheckboxChange}
            />
            Appointment
          </label>
          <label>
            <input
              type="checkbox"
              value="habit"
              checked={selectedInput === 'habit'}
              onChange={handleCheckboxChange}
            />
            Habit
          </label>
      </div>

        </div>
        <div className='ticket-info'>
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
          <Form.Item name="event" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="description" label="Description"  rules={[{ required: true }]}>
            <Input
            />
          </Form.Item>
          
          {selectedInput === 'appointment' && (
              <Form.Item name="daterange" label="Date Range" >
              <RangePicker cellRender={(current, info) => {
                  if (info.type !== 'date') return info.originNode;
                  const style: React.CSSProperties = {};
                  if (current.date() === 1) {
                    style.border = '1px solid #1677ff';
                    style.borderRadius = '50%';
                  }
                  return (
                    <div className="ant-picker-cell-inner" style={style}>
                      {current.date()} 
              </div>);}}/>
              </Form.Item>
          )}
          <Form.Item name="hourrange" label="Time Range">
          <TimePicker.RangePicker minuteStep={30}  format={format} disabledTime={disabledDateTime}  hourStep={1} />
            </Form.Item>
                  
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" >
                Submit
              </Button>
            </Form.Item>
          </Form>

        </div>
      </div>
      </Modal>
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
    console.log('Clicked cancel button');
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