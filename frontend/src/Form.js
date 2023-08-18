import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import './form.css';
import Logo from './logo.png'

const Form = () => {
  const { state } = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bloodgroup, setBloodgroup] = useState('');
  const [gender, setGender] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  function apiCall(docid, name, email, bloodgroup, gender, phonenumber, address, date, time) {
    axios
      .post('http://localhost:3001/appoinment', {
        id: docid,
        Name: name,
        Email: email,
        blood_Group: bloodgroup,
        gender: gender,
        phone_number: phonenumber,
        address: address,
        Date: date,
        time: time,
      })
      .then((resp) => {
        console.log(resp.data);
        alert('Check your mail');
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    apiCall(state, name, email, bloodgroup, gender, phonenumber, address, date, time);
  };

  return (
    

    
    <div className="form-container">
      <div className='logo'>
        <img src={Logo}/>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Enter your Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Enter your Email Id:</label>
          <input
            type="email"
            id="email"
            placeholder="Your email id"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="bloodgroup">Enter your Blood Group:</label>
          <input
            type="text"
            id="bloodgroup"
            placeholder="Type your blood group type"
            value={bloodgroup}
            onChange={(event) => setBloodgroup(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="gender">Enter your Gender:</label>
          <input
            type="text"
            id="gender"
            placeholder="Gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="phonenumber">Enter your Phone number:</label>
          <input
            type="tel"
            id="phonenumber"
            placeholder="91+ your number"
            value={phonenumber}
            onChange={(event) => setPhonenumber(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="address">Enter your Address:</label>
          <input
            type="text"
            id="address"
            placeholder="Your address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="date">Enter your Appointment Date:</label>
          <input
            type="date"
            id="date"
            placeholder=""
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="time">Enter your Appointment Time:</label>
          <input
            type="time"
            id="time"
            placeholder=""
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>

        <div className="form-field">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
    </div>

  );
};

export default Form;
