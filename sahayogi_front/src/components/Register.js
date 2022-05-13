import React from 'react'
import './Register.css'
import Navbar from './navbar'
import sahayogi from '../images/logo.jpg'
import googles from '../images/google.jpg'
import { useState } from "react";
import axios from "axios";
import {useNavigate, Link} from 'react-router-dom'
import emailjs from 'emailjs-com'
import {Toaster, toast} from 'react-hot-toast'

export default function Register() {




  
  let navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  

  

  const registerUser = (e) => {
   
    const userData = {
      firstname,
      lastname,
      password,
      username,
      email,
    };
    
   if(!firstname || ! lastname || !password || !username || !email){
    toast.error('Field Required');
    

   }else{
    axios.post("http://localhost:180/customer/register", userData);
    toast.success('Registration Success');
    
    navigate('/login')
    .then(result=>{
      if(result.data.success){

      }
      else{
        //not registered
       
      }
    })
    .catch();
   }

   emailjs.send("service_aicg1fz","template_150cxet",{
    email: "banjarabasanta123@gmail.com",
    });
  };

  return (
    <div>
        <Navbar></Navbar>
        <Toaster/>
        <div class="wrapper " >
			<div class="inner">
				<div>
				<form action="" id="registerForm">
					<h3>Registration Form</h3>
					<div class="form-group">
						<div class="form-wrapper">
							<label for="">First Name</label>

							<input type="text" class="form-control"
                                     name="fname"
                                    id="fname"
                                    placeholder="firstName"
                                    value={firstname}
                                    required
                                     onChange={(e) => setFirstname(e.target.value)}
                                    
                            />
						</div>
						<div class="form-wrapper">
							<label for="">Last Name</label>
							<input type="text" class="form-control"
                            name="lname"
                                    id="lname"
                                    placeholder="lastName"
                                    value={lastname}
                                    required
                                     onChange={(e) => setLastname(e.target.value)}

                            />
						</div>
                        
						
					</div>

                    <div class="form-wrapper">
						<label for="">Username</label>
						<input type="text" class="form-control"
                                     name="username"
                                    id="username"
                                    placeholder="username"
                                    value={username}
                                    required
                                     onChange={(e) => setUsername(e.target.value)}
                        />
					</div>

					<div class="form-wrapper">
						<label for="">Email</label>
						<input type="text" class="form-control"
                                     name="email"
                                    id="email"
                                    placeholder="email"
                                    value={email}
                                    required
                                     onChange={(e) => setEmail(e.target.value)}
                        />
					</div>
					<div class="form-wrapper">
						<label for="">Password</label>
						<input type="password" class="form-control"

                                    name="password"
                                    id="password"
                                    placeholder="password"
                                    value={password}
                                    required
                                     onChange={(e) => setPassword(e.target.value)}
                        />
					</div>
					
					<div class="checkbox">
						<label>
							<input type="checkbox"/> I accept the Terms of Use & Privacy Policy.
							<span class="checkmark"></span>
						</label>
					</div>
					
					<button 
                    
                     type="submit"
                     id="signup"
                     onClick={(e) => {
                    registerUser(e);
                  }}
                  >Register Now</button>
                 
				</form></div>
     
				<div class="classa">

					<img src= {sahayogi} alt="#" height="300"/>
					
      
					<div class='classb'  >

						<img src={googles} height="40px" width="40px" class="imagee"/>
						<h4 class=' classc'>Sign in with google</h4>

					</div>
					
				</div>

				

			



				



				

				

				
			</div>
			
		</div>

    </div>
  )
}
