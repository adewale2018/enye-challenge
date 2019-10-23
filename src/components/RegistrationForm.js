import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

const USERS_DATA_KEY = "UsersData";
const initialState = {
  firstname: "",
  lastname: "",
  dob: "",
  age: "",
  hobby: ""
};

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    let UsersDataLS = JSON.parse(localStorage.getItem(USERS_DATA_KEY));
    if (UsersDataLS == null) {
      UsersDataLS = [];
    }

    UsersDataLS.push({ ...this.state });

    localStorage.setItem(USERS_DATA_KEY, JSON.stringify(UsersDataLS));
    alert("Data successfully saved to database");
    this.setState({ ...initialState });
  };

  render() {
    return (
      <div className='RegForm'>
        <h1>Registration Form</h1>
        <Form
          style={{
            width: "50%",
            margin: "5px auto",
            textAlign: "left",
            fontSize: "1.5rem"
          }}
          onSubmit={this.handleSubmit}
        >
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your first name'
              name='firstname'
              value={this.state.firstname}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your last name'
              name='lastname'
              value={this.state.lastname}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type='date'
              min='1990/01/01'
              max='2019/01/01'
              placeholder='Enter your birthday'
              name='dob'
              value={this.state.dob}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Age</Form.Label>
            <Form.Control
              type='number'
              placeholder='Enter your Age'
              name='age'
              value={this.state.age}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Hobby</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter your hobby'
              name='hobby'
              value={this.state.hobby}
              onChange={this.handleChange}
              required
            />
          </Form.Group>
          <Button variant='info' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default RegistrationForm;
