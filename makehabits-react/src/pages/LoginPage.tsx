import React, { Component } from 'react';


import './LoginPage.css';
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage">
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
