import React, { useState, useContext } from 'react';
import authContext from '../context/authContext/authContext';

import M from '../../node_modules/materialize-css/dist/js/materialize.min';

const SignUp = () => {
	const { userRegister } = useContext(authContext);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cnf, setCnf] = useState('');

	const submit = (e) => {
		e.preventDefault();
		const formBtn = document.getElementById('registerForm-btn');
		formBtn.classList.add('button--loading');
		let error = '';

		if (name === '' || email === '' || password === '') {
			error = 'Please Enter All Details';
		} else if (/^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/.test(email) === false) {
			error = 'Please Enter Proper Email Id';
		} else if (/^\S{5,}\S$/.test(password) === false) {
			error = 'Password must be atleast 6 character Long without spaces';
		} else if (password !== cnf) {
			error = 'Password and Confirm Password do not match';
			setCnf('');
		}

		if (error === '') {
			userRegister({ name, email, password })
				.then((res) => {
					M.toast({
						html: 'User Registered Successfully...',
					});
					setTimeout(() => {
						setName('');
						setEmail('');
						setPassword('');
						setCnf('');
						formBtn.classList.remove('button--loading');
						M.Modal.getInstance(
							document.getElementById('signup-modal'),
						).close();
					}, 500);
				})
				.catch((err) => {
					M.toast({
						html: `${err.response.status}! ${
							err.response.data.error || 'Internal Server Error'
						}`,
					});
					formBtn.classList.remove('button--loading');
				});
		} else {
			M.toast({
				html: `${error}`,
			});
			formBtn.classList.remove('button--loading');
		}
	};

	const comparePassword = (e) => {
		setCnf(e.target.value);
		if (e.target.value !== password) {
			e.target.style.color = 'red';
		} else {
			e.target.style.color = 'green';
		}
	};

	return (
		<div id='signup-modal' className='modal'>
			<div
				className='modal-content center-align'
				style={{ padding: '2rem 2.5rem 1rem 2.5rem' }}
			>
				<i className=' fas fa-times modal-close close-btn'></i>
				<h3>Create Account</h3>
				<p className='grey-text'>It's a free and fast process</p>
				<div>
					<div className='input-field'>
						<i className='fas fa-user prefix'></i>
						<input
							id='register_name'
							type='text'
							placeholder='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='input-field'>
						<i className='fas fa-paper-plane prefix'></i>
						<input
							id='register_email'
							type='email'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className='input-field'>
						<i className='fas fa-key prefix'></i>
						<input
							id='register_password'
							type='password'
							placeholder='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className='input-field'>
						<i className='fas fa-check-double prefix'></i>
						<input
							id='password_confirm'
							type='password'
							placeholder='Confirm Password'
							value={cnf}
							onChange={comparePassword}
						/>
					</div>

					<div className='input-feild' style={{ marginTop: '2rem' }}>
						<button
							id='registerForm-btn'
							className='btn waves-effect light-blue sign-btn'
							type='submit'
							name='action'
							onClick={submit}
						>
							Sign Up
						</button>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<p className='center-align grey-text'>
					* You can shorten maximum of ten url at a time for free
				</p>
			</div>
		</div>
	);
};

export default SignUp;
