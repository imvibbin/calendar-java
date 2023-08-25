import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import userPhoto from "../../../../assets/logo-user.png"
import './DropdownUserLib.scss'
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];
/* const valueFromLocalStorage = localStorage.getItem('keyName'); */
/* const retrievedUserName = JSON.parse(valueFromLocalStorage); */
const retrievedUserName = "Captain"; 


const DropdownUserLib: React.FC = () => (


  <Dropdown menu={{ items }}>
    <a className='dropdown--user' onClick={(e) => e.preventDefault()}>
      <Space>
        <div className='user--image'>
          <img src={userPhoto} alt="User" />

        </div>
        <div>{retrievedUserName}</div>
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropdownUserLib;