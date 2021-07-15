import React, { useState, useContext } from 'react';
import authContext from '../context/authContext/authContext';

import M from '../../node_modules/materialize-css/dist/js/materialize.min';

const SignIn = () => {
	const { userLogin } = useContext(authContext);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submit = (e) => {
		e.preventDefault();
		const formBtn = document.getElementById('loginForm-btn');
		formBtn.classList.add('button--loading');
		let error = '';

		if (email === '' || password === '')
			error = 'Please Enter User Credentials';
		else if (/^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/.test(email) === false)
			error = 'Please Enter Proper Email Id';

		if (error === '') {
			userLogin({ email, password })
				.then((res) => {
					M.toast({
						html: 'Login Success...',
					});
					setTimeout(() => {
						setEmail('');
						setPassword('');
						formBtn.classList.remove('button--loading');
						M.Modal.getInstance(
							document.getElementById('signin-modal'),
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

	return (
		<div id='signin-modal' className='modal modal-fixed-footer'>
			<div
				className='modal-content center-align'
				style={{ padding: '2rem 2.5rem 1rem 2.5rem' }}
			>
				<i className=' fas fa-times modal-close close-btn'></i>
				<h3>Sign In</h3>
				<div style={{ paddingTop: '2rem' }}>
					<form id='signin'>
						<div className='input-field'>
							<i className='fas fa-paper-plane prefix'></i>
							<input
								id='login_email'
								type='email'
								placeholder='Email'
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</div>
						<div className='input-field'>
							<i className='fas fa-key prefix'></i>
							<input
								id='login_password'
								type='password'
								placeholder='Password'
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>
						</div>
						<div className='input-feild' style={{ marginTop: '2rem' }}>
							<button
								id='loginForm-btn'
								className='btn waves-effect light-blue sign-btn'
								type='submit'
								form='signin'
								name='action'
								onClick={submit}
							>
								Sign In
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className='modal-footer'>
				<p className='center w-100'>
					Don't have a account?{' '}
					<a
						href='#signup-modal'
						className='modal-trigger light-blue-text modal-close'
					>
						Create One
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignIn;
