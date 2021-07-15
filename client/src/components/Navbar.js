import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import authContext from '../context/authContext/authContext';
import { Link } from 'react-router-dom';

import M from '../../node_modules/materialize-css/dist/js/materialize.min';

const Navbar = () => {
	const { isAuthenticated, userLogout } = useContext(authContext);
	const history = useHistory();

	const logout = (e) => {
		e.preventDefault();
		userLogout()
			.then((res) => {
				M.toast({
					html: 'Logout Success...',
				});
				history.push('/');
			})
			.catch((err) => {
				M.toast({
					html: `${err.response.status} ${
						err.response.data.error || 'Internal Server Error'
					}`,
				});
			});
	};

	return (
		<nav
			style={{
				backgroundColor: '#0c374b',
				height: '70px',
				boxShadow: 'none',
			}}
		>
			<div className='container'>
				<div className='nav-wrapper'>
					<span className='brand-logo left'>
						<Link to='/'>urlShred</Link>
					</span>
					<ul className='right'>
						{isAuthenticated ? (
							<React.Fragment>
								<li className='valign-wrapper'>
									<Link to='/user'>
										<i
											className='far fa-user'
											style={{ marginRight: '0.5rem' }}
										></i>
										User Page
									</Link>
								</li>
								<li className='valign-wrapper'>
									{/* eslint-disable-next-line */}
									<a href='' onClick={logout}>
										<i
											className='fas fa-door-open'
											style={{ marginRight: '0.5rem' }}
										></i>
										Log Out
									</a>
								</li>
							</React.Fragment>
						) : (
							<React.Fragment>
								<li>
									<a
										href='#signin-modal'
										className='modal-trigger'
										onClick={(e) => e.preventDefault()}
									>
										Login
									</a>
								</li>
								<li>
									<a
										href='#signup-modal'
										className='modal-trigger'
										onClick={(e) => e.preventDefault()}
									>
										Register
									</a>
								</li>
							</React.Fragment>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
