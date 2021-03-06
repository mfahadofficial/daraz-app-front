import React, { useEffect, useState } from 'react';
import { getToken } from './authCheck';
import {useNavigate } from 'react-router-dom';

export default function Register() {
	let navigate = useNavigate();

	const tokenObj = getToken();
	const curUrl = window.location.pathname
	const userType = tokenObj.userType;
	const token = tokenObj.userToken;


	useEffect(() => {
		console.log(token);
		if(token){
		navigate('/');
		}
		  
			}, [])

    return (
        <React.Fragment>

<section  className="blog-banner-area" id="category">
		<div  className="container h-100">
			<div  className="blog-banner">
				<div  className="text-center">
					<h1>Register</h1>
					<nav aria-label="breadcrumb"  className="banner-breadcrumb">
            <ol  className="breadcrumb">
              <li  className="breadcrumb-item"><a href="#">Home</a></li>
              <li  className="breadcrumb-item active" aria-current="page">Register</li>
            </ol>
          </nav>
				</div>
			</div>
    </div>
	</section>

    <section  className="login_box_area section-margin">
		<div  className="container">
			<div  className="row">
				<div  className="col-lg-6">
					<div  className="login_box_img">
						<div  className="hover">
							<h4>Already have an account?</h4>
							<p>There are advances being made in science and technology everyday, and a good example of this is the</p>
							<a  className="button button-account" href="login.html">Login Now</a>
						</div>
					</div>
				</div>
				<div  className="col-lg-6">
					<div  className="login_form_inner register_form_inner">
						<h3>Create an account</h3>
						<form  className="row login_form" action="#/" id="register_form" >
							<div  className="col-md-12 form-group">
								<input type="text"  className="form-control" id="name" name="name" placeholder="Username" />
							</div>
							<div  className="col-md-12 form-group">
								<input type="text"  className="form-control" id="email" name="email" placeholder="Email Address" />
              </div>
              <div  className="col-md-12 form-group">
								<input type="text"  className="form-control" id="password" name="password" placeholder="Password" />
              </div>
              <div  className="col-md-12 form-group">
								<input type="text"  className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
							</div>
							<div  className="col-md-12 form-group">
								<div  className="creat_account">
									<input type="checkbox" id="f-option2" name="selector"/>
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div>
							<div  className="col-md-12 form-group">
								<button type="submit" value="submit"  className="button button-register w-100">Register</button>
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