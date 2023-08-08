import React, { Component } from 'react';
import { Card, Form, FormGroup, FormControl, Button } from 'react-bootstrap';


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {

  handleFormSubmit() {
    preventDefault();

    console.log("FORM SUBMIT!");

  }

  render() {
    return (
      <div style={divStyle}>
        <Card style={panelStyle}>
          <Form className="LoginForm" id="loginForm">
            <FormGroup controlId="formEmail">
              <FormControl type="email" placeholder="Email Address" />
            </FormGroup>
            <FormGroup controlId="formPassword">
              <FormControl type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup style={buttonStyle} controlId="formSubmit">
              <Button className="btn btn-primary" type="submit" onClick={this.handleFormSubmit}>
                Login
              </Button>
            </FormGroup>
          </Form>
        </Card>
      </div>
    )
  }
}

export default LoginForm;
function preventDefault() {
  throw new Error('Function not implemented.');
}

