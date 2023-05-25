import PostsItem from "./PostsItem";
import MyButton from "../../UI/MyButton";
import MyTextarea from "../../UI/MyTextarea";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {memo} from "react";

const MyPosts = memo(props => {
	const validationSchema = Yup.object().shape({
		newPostText: Yup.string()
			.min(2, 'Must be longer than 2 characters !')
			.max(100, 'Must be shorter than 100 characters !')
			.required('Required !')
	})

	return (
		<div className="p-10 pt-7 bg-black rounded-2xl overflow-hidden">
			<h3 className="text-xl mb-4">My Posts</h3>
			<Formik
				initialValues={{newPostText: ""}}
				validationSchema={validationSchema}
				onSubmit={(values, { resetForm }) => {
					props.addPost(values.newPostText)
					resetForm();
				}}
			>
				{() => (
					<Form>
						<Field
							component={MyTextarea}
							name={"newPostText"}
							placeholder={"Write your thoughts here..."}
						/>
						<MyButton className="mt-4">Publish post</MyButton>
					</Form>
			)}
			</Formik>
			<div className="grid gap-4 mt-5">
				{[...props.posts].reverse().map((post, idx) => {
					return (
						<PostsItem text={post.text} key={idx} />
					)
				})}
			</div>
		</div>
	)
})

export default MyPosts