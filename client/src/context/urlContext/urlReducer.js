import {
	URLS_LOADING,
	GET_ERROR,
	GET_URLS,
	ADD_URL,
	UPDATE_URL,
	DELETE_URL,
} from '../types';

const urlReducer = (state, action) => {
	switch (action.type) {
		case URLS_LOADING:
			return {
				...state,
				loading: true,
			};
		case ADD_URL:
			return {
				...state,
				urls: [...state.urls, action.payload],
			};
		case UPDATE_URL:
			return {
				...state,
				urls: state.urls.map((url) =>
					url._id === action.payload.id ? action.payload.urlRecord : url,
				),
			};
		case DELETE_URL:
			return {
				...state,
				urls: state.urls.filter((url) => url._id !== action.payload),
			};
		case GET_URLS:
			return {
				...state,
				loading: false,
				urls: action.payload,
			};
		case GET_ERROR:
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
};

export default urlReducer;
