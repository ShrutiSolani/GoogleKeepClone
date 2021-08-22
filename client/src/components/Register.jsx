import React, {useState} from 'react';
import axios from 'axios';
import cors from 'cors';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reactData = {email: email, password: password};
  const url = 'http://localhost:3001/register';

  let sendData = () => {
    axios.post(url, reactData)
      .then(res => console.log('Data send'))
      .catch(err => console.log(err.data))
  }


  function emailChange(event){
    const val = event.target.value;
    setEmail(val);
  }

  function passwordChange(event){
    const val = event.target.value;
    setPassword(val);
  }

  return <div >
      <input type = "text" placeholder = "email" name = "email" value = {email} onChange = {emailChange} />
      <input type = "password" placeholder = "placeholder" name = "password" value={password} onChange = {passwordChange}/>
      <button onClick = {sendData}>Submit</button>
    </div>
}

export default Register;
