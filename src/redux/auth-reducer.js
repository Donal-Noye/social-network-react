import {authAPI, securityAPI} from "../api/api";
import * as actions from "./auth-reducer";

const SET_USER_DATA = 'social-network/auth/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET-CAPTCHA-URL-SUCCESS'

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
		case GET_CAPTCHA_URL_SUCCESS:
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: {userId, email, login, isAuth}
})
export const getCaptchaUrlSuccess = (captchaUrl) => ({
	type: GET_CAPTCHA_URL_SUCCESS,
	payload: {captchaUrl}
})

export const getAuthUserData = () => async (dispatch) => {
	try {
		let data = await authAPI.me()

		if (data.resultCode === 0) {
			let {id, login, email} = data.data
			dispatch(actions.setAuthUserData(id, email, login, true))
		}

	} catch (error) {
		console.log(error.message)
	}
}

export const login = (email, password, rememberMe, captcha, setSubmitting, setFieldError, setStatus) => {
	return async (dispatch) => {
		let data = await authAPI.login(email, password, rememberMe, captcha)

		if (data.resultCode === 0) {
			dispatch(actions.getAuthUserData())
		} else {
			if (data.resultCode === 10) {
				dispatch(getCaptchaUrl())
			}

			setStatus(data.messages)
		}
	}
}

export const getCaptchaUrl = () => {
	return async (dispatch) => {
		let data = await securityAPI.getCaptchaUrl();
		const captchaUrl = data.url;

		dispatch(getCaptchaUrlSuccess(captchaUrl))
	}
}

export const logout = () => {
	return async (dispatch) => {
		let data = await authAPI.logout()
		if (data.resultCode === 0) {
			dispatch(actions.setAuthUserData(null, null, null, false))
		}
	}
}

export default authReducer