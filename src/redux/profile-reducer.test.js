import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

const state = {
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
}

test('length of posts should be incremented', () => {
	let action = addPostActionCreator('it kamasutra')


	let newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(4);
});

test('message of new posts should be correct', () => {
	let action = addPostActionCreator('it kamasutra')

	let newState = profileReducer(state, action)

	expect(newState.posts[3].text).toBe('it kamasutra');
});

test('after deleting length of messages should be decrement', () => {
	let action = deletePost(1)

	let newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(2);
});

test('after deleting length shouldn`t be decrement if id is incorrect', () => {
	let action = deletePost(100)

	let newState = profileReducer(state, action)

	expect(newState.posts.length).toBe(3);
});
