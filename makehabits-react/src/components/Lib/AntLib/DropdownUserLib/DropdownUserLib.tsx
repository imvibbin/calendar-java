import React from "react";
import { Dropdown, Space, MenuProps } from "antd";
import userPhoto from "../../../../assets/logo-user.png";
import "./DropdownUserLib.scss";
import { useNavigate } from "react-router-dom";

const DropdownUserLib: React.FC = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("USER_DATA");
    console.log("logout");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="dropdown-card">
          <svg
            className="card--icon"
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
          </svg>
          <span>Profile</span>
        </div>
      ),
    },
    {
      key: "2",
      danger: true,
      label: (
        <div className="dropdown-card" onClick={handleLogOut}>
          <svg
            className="card--icon"
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 -960 960 960"
            width="48"
          >
            <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z" />
          </svg>
          <span>Log Out</span>
        </div>
      ),
    },
  ];

  const retrievedUserName = "Captain";

  return (
    <Dropdown menu={{ items }} placement="bottomLeft" arrow>
      <a className="dropdown--user" onClick={(e) => e.preventDefault()}>
        <Space>
          <div className="user--image">
            <img src={userPhoto} alt="User" />
          </div>
          <div className="user--name">{retrievedUserName}</div>
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownUserLib;
