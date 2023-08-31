import { toast } from "react-toastify";
import CustomError from "../../../../models/CustomError";
import { getAllactivitiesByIdUser, createActivity } from "../../../../services/ActivityService";
import 'dayjs/locale/es';
import locale from 'antd/locale/es_ES';
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
import EventInterface from "../../../../models/EventInterface";
import Habit from "../../../../models/Habit";
import Appointment from "../../../../models/Appointment";
import "./PopUpLib.scss";
import UserInterface from "../../../../models/UserInterface";

/* import TimePickerLib from '../TimePickerLib/TimePickerLib'; */
const PopUpLib: React.FC = () => {
  const userData: UserInterface =
    JSON.parse(localStorage.getItem("USER_DATA") ?? "{}") || null;

  const { RangePicker } = DatePicker;
  const [form] = Form.useForm<EventInterface>();
  const format = "HH:mm";

  const [selectedInput, setSelectedInput] = useState<string>("appointment");
  const [eventData, setEventData] = useState<Habit | Appointment | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const notification = (updateSuccess: boolean) => {
    const toastMessage = updateSuccess
      ? "New event added"
      : "Event not created";

    toast[updateSuccess ? "success" : "error"](toastMessage, {
      position: "top-center",
      autoClose: updateSuccess ? 1000 : 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sendNewEvent = async (newEvent: Habit | Appointment | null) => {
    try {
      const response = await createActivity(newEvent);
      console.log(response);
      notification(true);
      getUpdatedListOfEvents(newEvent?.user_id);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      const backendError = error as CustomError; // Cast to custom error type
      if (backendError.message) {
        notification(false);
        console.error("Failed to add a new event", backendError.message);
      } else {
        console.error("Failed to add a new event: An unknown error occurred.");
      }
    }
  };

  const getUpdatedListOfEvents = async (userID: number) => {
    try {
      const response = await getAllactivitiesByIdUser(userID);
      console.log(response);
      // Add the new activity to the activities array

      userData.activities = response; 
      // Store the updated object back in localStorage
      localStorage.setItem("USER_DATA", JSON.stringify(userData));
    } catch (error) {
      const backendError = error as CustomError; // Cast to custom error type
      if (backendError.message) {
        notification(false);
        console.error("Failed to add a new event", backendError.message);
      } else {
        console.error("Failed to add a new event: An unknown error occurred.");
      }
    }
  };

  const onFinish = (currentEventData: any) => {
    let newEvent: Habit | Appointment | null = null;
    if (selectedInput === "appointment") {
      newEvent = {
        task_id: 0,
        user_id: userData.user_id,
        task_name: currentEventData.task_name,
        task_type: "appointment",
        task_description: currentEventData.task_description,
        task_hour_range:
          currentEventData.task_hour_range[0].format("HH:mm") +
          "|" +
          currentEventData.task_hour_range[1].format("HH:mm"),
        task_date_range:
          currentEventData.task_hour_range[0].format("DD-MM-YYYY") +
          "|" +
          currentEventData.task_hour_range[1].format("DD-MM-YYYY"),
      };
    } else if (selectedInput === "habit") {
      newEvent = {
        task_id: 0,
        user_id: userData.user_id,
        task_name: currentEventData.task_name,
        task_type: "habit",
        task_description: currentEventData.task_description,
        task_hour_range:
          currentEventData.task_hour_range[0].format("HH:mm") +
          "|" +
          currentEventData.task_hour_range[1].format("HH:mm"),
        task_habit_repetitions: "[1, 4, 6]",
        // ...initialize the object
      };
    }
    setEventData((prevState) => {
      if (prevState === null) {
        return newEvent;
      } else {
        return { ...prevState, ...newEvent };
      }
    });
    sendNewEvent(newEvent);
    setIsModalOpen(false);
    form.resetFields();
    console.log(eventData);
  };
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
locale={locale}
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
                    onChange={(e) => setSelectedInput(e.target.value)}
                  />
                  Appointment
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="habit"
                    checked={selectedInput === "habit"}
                    onChange={(e) => setSelectedInput(e.target.value)}
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
                  <Form.Item name="task_hour_range" label="Date Range">
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
                <Form.Item name="task_hour_range" label="Time Range">
                  <TimePicker.RangePicker
                    minuteStep={30}
                    format={format}
                    // disabledTime={disabledDateTime}
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
