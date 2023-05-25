import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

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
		case SAVE_PHOTO_SUCCESS:
			return {
				...state,
				profile: {...state.profile, photos: action.photos}
			}
		default:
			return state
	}
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = userId => async dispatch => {
	const data = await profileAPI.getProfile(userId)

	dispatch(setUserProfile(data));
}
export const getStatus = (userId) => async dispatch => {
	const data = await profileAPI.getStatus(userId)

	dispatch(setStatus(data));
}
export const updateStatus = (status) => async dispatch => {
	try {
		const data = await profileAPI.updateStatus(status)

		if (data.resultCode === 0) {
			dispatch(setStatus(status));
		}
	} catch (e) {
		console.log(e)
	}
}
export const savePhoto = (file) => async dispatch => {
	const data = await profileAPI.savePhoto(file)

	if (data.resultCode === 0) {
		dispatch(savePhotoSuccess(data.data.photos));
	}
}
export const saveProfile = (profile, setStatus, setSubmitting, goToViewMode) => async (dispatch, getState) => {
	const data = await profileAPI.saveProfile(profile)

	if (data.resultCode === 0) {
		const userId = getState().auth.userId;
		goToViewMode()

		if (userId) {
			await dispatch(getUserProfile(userId))
		} else {
			throw new Error('userId can\'t be null')
		}
	} else {
		console.log(data.messages)
		let textError = `${data.messages.join(', ')}`
		setStatus(textError)
		setSubmitting(false)
	}
}

export default profileReducer;