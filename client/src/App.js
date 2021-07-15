import React, { useEffect, useContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from '../node_modules/materialize-css/dist/js/materialize.min';

import UrlState from './context/urlContext/urlState';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';

import './webfonts-with-css/css/all.min.css';
import authContext from './context/authContext/authContext';

const UserPage = lazy(() => import('./components/UserPage'));

const App = () => {
	const { userGet } = useContext(authContext);
	useEffect(() => {
		M.AutoInit();
		userGet();
		// eslint-disable-next-line
	}, []);
	return (
		<div className='App'>
			<Router>
				<SignIn />
				<SignUp />
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home}></Route>
					<UrlState>
						<Suspense
							fallback={
								<div
									className='progress'
									style={{
										position: 'absolute',
										top: '50%',
										left: '25%',
										width: '50%',
										backgroundColor: '#c0e7fa',
									}}
								>
									<div
										className='indeterminate'
										style={{ backgroundColor: '#1c9fe0' }}
									></div>
								</div>
							}
						>
							<Route path='/user' component={UserPage}></Route>
						</Suspense>
					</UrlState>
				</Switch>
			</Router>
		</div>
	);
};

export default App;
