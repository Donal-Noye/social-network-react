import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': 'a810ed35-ed4a-49c7-89fe-52f54dd2d7ab'
	}
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 27) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(res => {
				return res.data;
			})
	},
	follow(id) {
		return instance.post(`follow/${id}`)
			.then(res => {
				return res.data;
			})
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`)
			.then(res => {
				return res.data;
			})
	},
}

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
			.then(res => res.data)
	},
	getStatus(userId) {
		return instance.get(`profile/status/${userId}`)
			.then(res => res.data)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, { status: status })
			.then(res => res.data)
	},
}

export const authAPI = {
	me() {
		return instance.get(`auth/me`)
			.then(res => {
				return res.data;
			})
	},
	login(email, password, rememberMe = false) {
		return instance.post('auth/login', { email, password, rememberMe })
			.then(res => {
				return res.data;
			})
	},
	logout() {
		return instance.delete('auth/login')
			.then(res => {
				return res.data;
			})
	}
}