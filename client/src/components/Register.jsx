import React, {useState} from 'react';
import axios from 'axios';
import cors from 'cors';

function Register() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const sendData = async (event) => {
    event.preventDefault();
    const {email, password} = userData;
    console.log(email, password);
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,password
      })
    });
    console.log("After fetch");
    const res1 = await res.json();
    console.log("res.json()");
    window.alert("Registered");
  }

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserData({...userData, [name]: value});
  }


  return <div >
  <form method="POST">
      <input type = "text"
      placeholder = "email"
      name = "email"
      value = {userData.email}
      onChange = {handleChange} />
      <input type = "password"
      placeholder = "placeholder"
      name = "password"
      value={userData.password}
      onChange = {handleChange}/>
      <button onClick = {sendData}>Submit</button>
    </form>
  </div>
}

export default Register;
