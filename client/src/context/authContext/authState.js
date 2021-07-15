import React, { useReducer } from 'react';
import axios from 'axios';
import authReducer from './authReducer';
import authContext from './authContext';
import {
	USER_LOADING,
	LOGIN_SUCCESS,
	AUTH_ERROR,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from '../types';

const AuthState = (props) => {
	const initialState = {
		isAuthenticated: false,
		isLoading: false,
		user: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	// Functions to change the state

	// POST USER LOGIN AND DISPATCH TO REDUCER
	const userLogin = async (userCredentials) => {
		try {
			dispatch(userLoading());
			const option = {
				method: 'POST',
				header: {
					'Content-Type': 'application/json',
				},
				url: '/auth/login',
				data: userCredentials,
				timeout: '4000',
			};
			const user = await axios(option);
			dispatch({ type: LOGIN_SUCCESS, payload: user.data.data });
		} catch (error) {
			dispatch({ type: LOGIN_FAIL });
			return Promise.reject(error);
		}
	};

	const userRegister = async (userDetails) => {
		try {
			dispatch(userLoading);
			const option = {
				method: 'POST',
				header: {
					'Content-Type': 'application/json',
				},
				url: '/auth/register',
				data: userDetails,
				timeout: '4000',
			};
			const user = await axios(option);
			dispatch({ type: REGISTER_SUCCESS, payload: user.data.data });
		} catch (error) {
			dispatch({ type: REGISTER_FAIL });
			return Promise.reject(error);
		}
	};

	const userLogout = async () => {
		dispatch(userLoading);
		const option = {
			method: 'GET',
			url: '/auth/logout',
			timeout: '4000',
		};
		await axios(option);
		dispatch({ type: LOGOUT_SUCCESS });
	};

	const userGet = async () => {
		try {
			dispatch(userLoading());
			const option = {
				method: 'GET',
				url: '/auth/getme',
				timeout: '4000',
			};
			const user = await axios(option);
			dispatch({ type: LOGIN_SUCCESS, payload: user.data.data });
		} catch (error) {
			dispatch({ type: AUTH_ERROR });
		}
	};

	const userLoading = () => {
		return {
			type: USER_LOADING,
		};
	};

	return (
		<authContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				isLoading: state.isLoading,
				user: state.user,
				userLogin,
				userRegister,
				userLogout,
				userGet,
			}}
		>
			{props.children}
		</authContext.Provider>
	);
};

export default AuthState;
