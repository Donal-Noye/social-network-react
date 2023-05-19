import defaultAvatar from "../img/defaultAvatar.jpeg";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const initialState = {
	dialogs: [
		{
			id: 1,
			name: "John",
			avatar: defaultAvatar
		},
		{
			id: 2,
			name: "Sasha",
			avatar: defaultAvatar
		},
		{
			id: 3,
			name: "Vacya",
			avatar: defaultAvatar
		},
	],
	messages: [
		{
			id: 1,
			message: "Hi"
		},
		{
			id: 2,
			message: "How are you"
		},
		{
			id: 3,
			message: "Shut up bitch"
		},
		{
			id: 4,
			message: ":("
		},
	],
	newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body
			};
		case SEND_MESSAGE:
			let body = action.newMessageBody;

			return {
				...state,
				messages: [...state.messages, { id: 7, message: body }],
			};
		default:
			return state
	}
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;