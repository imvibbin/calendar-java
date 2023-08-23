import React, { useState } from 'react';
import { Button, Modal, DatePicker, Space, Input, Form, Checkbox  } from 'antd';
import './PopUpLib.scss';

const PopUpLib: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const jsonEventData = JSON.stringify(values);
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


  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal className='modalLib' footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className="ticket">
        <div className='ticket-time'>  
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
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="Description" label="Description"  rules={[{ required: true }]}>
            <Input
            />
          </Form.Item>

          <Form.Item name="range" label="Date Range" rules={[{ required: true }]}>
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