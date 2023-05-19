import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
	posts: [
		{
			id: 1,
			text: "Hello, how are you?"
		},
		{
			id: 2,
			text: "lol"
		},
		{
			id: 3,
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, temporibus!"
		},
	],
	profile: null,
	status: "",
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				posts: [...state.posts, {id: 4, text: action.newPostText}],
			}
		}
		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.postId)
			}
		default:
			return state
	}
}

export const addPostActionCreator = (newPostText) => {
	return {
		type: ADD_POST,
		newPostText
	}
}
export const setUserProfile = (profile) => {
	return {
		type: SET_USER_PROFILE,
		profile
	}
}
export const setStatus = (status) => {
	return {
		type: SET_STATUS,
		status
	}
}
export const deletePost = (postId) => {
	return {
		type: DELETE_POST,
		postId
	}
}

export const getUserProfile = userId => async dispatch => {
	let data = await profileAPI.getProfile(userId)

	dispatch(setUserProfile(data));
}
export const getStatus = (userId) => async dispatch => {
	let data = await profileAPI.getStatus(userId)

	dispatch(setStatus(data));
}
export const updateStatus = (status) => async dispatch => {
	let data = await profileAPI.updateStatus(status)

	if (data.resultCode === 0) {
		dispatch(setStatus(status));
	}
}

export default profileReducer;