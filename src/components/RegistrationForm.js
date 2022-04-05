import React, {useState} from 'react';
import {database} from '../firebase';
import {ref,push,child,update} from "firebase/database";

function RegistrationForm() {
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
    }

    const handleSubmit = () =>{
        let obj = {
            email: email,
            password: password,
        }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/users/' + newPostKey] = obj
        return update(ref(database), updates);
    }

    return(
      <div className="form">
          <div className="form-body">
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" value={email} onChange = {(e) => handleInputChange(e)} className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder="Password"/>
              </div>
          </div>
          <div class="footer">
              <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;