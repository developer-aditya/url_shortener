import React, { useReducer } from 'react';
import axios from 'axios';
import urlReducer from './urlReducer';
import urlContext from './urlContext';
import {
	URLS_LOADING,
	GET_ERROR,
	GET_URLS,
	ADD_URL,
	UPDATE_URL,
	DELETE_URL,
} from '../types';

const AuthState = (props) => {
	const initialState = {
		loading: false,
		urls: [],
	};

	const [state, dispatch] = useReducer(urlReducer, initialState);

	// Functions to change the state

	// Post New Url
	const addUrl = async (long) => {
		try {
			const option = {
				method: 'POST',
				header: {
					'Content-Type': 'application/json',
				},
				url: '/url/add',
				data: long,
				timeout: '4000',
			};
			const url = await axios(option);
			setTimeout(async () => {
				let urlRecord = await getUrlById(url.data.data);
				dispatch({ type: ADD_URL, payload: urlRecord });
			}, 500);
		} catch (error) {
			return Promise.reject(error);
		}
	};

	// PUT update Url
	const updateUrl = async (urls, id) => {
		try {
			const option = {
				method: 'PUT',
				header: {
					'Content-Type': 'application/json',
				},
				url: '/url/update',
				data: urls,
				timeout: '4000',
			};
			const url = await axios(option);
			let urlRecord = await getUrlById(url.data.data);
			dispatch({ type: UPDATE_URL, payload: { urlRecord, id } });
		} catch (error) {
			return Promise.reject(error);
		}
	};

	// DELETE  Url
	const deleteUrl = async (id) => {
		try {
			const option = {
				method: 'DELETE',
				url: `/url/delete/${id}`,
				timeout: '4000',
			};
			await axios(option);
			dispatch({ type: DELETE_URL, payload: id });
		} catch (error) {
			return Promise.reject(error);
		}
	};

	// Get User Urls
	const getUrls = async () => {
		try {
			dispatch(userLoading());
			const option = {
				method: 'GET',
				url: '/url/getall',
				timeout: '4000',
			};
			let urlRes = await axios(option);
			urlRes = urlRes.data.data;
			for (let i = 0; i < urlRes.length; i++) urlRes[i] = urlRes[i].url;
			dispatch({ type: GET_URLS, payload: urlRes });
		} catch (error) {
			dispatch({ type: GET_ERROR });
			return Promise.reject(error);
		}
	};

	// Get URL By Id
	const getUrlById = async (id) => {
		try {
			const option = {
				method: 'GET',
				url: `/url/${id}`,
				timeout: '4000',
			};
			const url = await axios(option);
			return url.data.data;
		} catch (error) {
			return Promise.reject(error);
		}
	};

	const userLoading = () => {
		return {
			type: URLS_LOADING,
		};
	};

	return (
		<urlContext.Provider
			value={{
				urls: state.urls,
				loading: state.loading,
				getUrls,
				addUrl,
				updateUrl,
				deleteUrl,
			}}
		>
			{props.children}
		</urlContext.Provider>
	);
};

export default AuthState;
