import React, { useEffect, useState } from 'react';

import {useNavigate } from 'react-router-dom';
import { getToken } from './authCheck';


// function handleClick() {
//   navigate('/')
// }
async function loginUser(credentials) {
	
	
	return fetch('https://b0a8-124-29-208-249.ngrok.io/api/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	})

	  .then(data => data.json()
	  
	  )


   }




  export default function Login({ setToken }) {
	  
	  let navigate = useNavigate();

	const tokenObj = getToken();
	const curUrl = window.location.pathname
	const userType = tokenObj.userType;
	const token = tokenObj.userToken;
	console.log(userType);
	console.log(token);

	useEffect(() => {
		console.log(token);
		if(token){
		navigate('/');
		}
		  
			}, [])



	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = async e => {
		e.preventDefault();
		const token = await loginUser({
		  email,
		  password
		});
		setToken(token);
		

	  }





    return (
        <React.Fragment>

	   
		<div  className="container h-100">
			<div  className="blog-banner">
				<div  className="text-center">
					<h1>Login </h1>
					<nav aria-label="breadcrumb"  className="banner-breadcrumb">
            <ol  className="breadcrumb">
              <li  className="breadcrumb-item"><a href="#">Home</a></li>
              <li  className="breadcrumb-item active" aria-current="page">Login/Register</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>


    <section  className="login_box_area section-margin">
		<div  className="container">
			<div  className="row">
				<div  className="col-lg-6">
					<div  className="login_box_img">
						<div  className="hover">
							<h4>New to our website?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<a  className="button button-account" href="register.html">Create an Account</a>
						</div>
					</div>
				</div>
				<div  className="col-lg-6">
					<div  className="login_form_inner">
						<h3>Log in to enter</h3>
						<form  onSubmit={handleSubmit} className="row login_form"  id="contactForm" >
							<div  className="col-md-12 form-group">
								<input type="text"  className="form-control" placeholder="email" onChange={e => setEmail(e.target.value)}  />
							</div>
							<div  className="col-md-12 form-group">
								<input type="password"  className="form-control" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
							</div>
							<div  className="col-md-12 form-group">
								<div  className="creat_account">
									<input type="checkbox" id="f-option2" name="selector"/>
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div>
							<div  className="col-md-12 form-group">
								<button type="submit" value="submit"  className="button button-login w-100">Log In</button>
								<a href="#">Forgot Password?</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>

       

        </React.Fragment>
)
}