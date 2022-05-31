import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
const GET_MESSAGES = 'GET_MESSAGES';


const initialState = {
	greeting: 'hi'
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {

	case GET_MESSAGES:
		console.log('123');
		return { ...state }

	default:
		return state
	}
}

export default function configureStore() {
	const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
	return store;
}

export const getMessagesAction = () => ({
	type: GET_MESSAGES,
})
