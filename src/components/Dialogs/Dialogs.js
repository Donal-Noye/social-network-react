import DialogsItem from "./DialogsItem";
import DialogsMessage from "./DialogsMessage";
import MyTextarea from "../UI/MyTextarea";
import MyButton from "../UI/MyButton";
import {AiOutlineSend} from "react-icons/ai";
import {Field, Form, Formik} from "formik";

export default function Dialogs(props) {
	const state = props.dialogsPage;

	return (
		<div className="dialogs h-[80vh] grid grid-cols-[4fr_10fr] bg-black rounded-2xl">
			<div className="flex flex-col gap-2 p-5 border-r-[3px] border-dark-blue">
				{state.dialogs.map(user => {
					return (
						<DialogsItem
							key={user.id}
							id={user.id}
							name={user.name}
							avatar={user.avatar}
						/>
					)
				})}
			</div>
			<div className="messages flex flex-col justify-end">
				<div className="p-10">
					{state.messages.map((message, idx) => {
						return (
							<DialogsMessage key={idx} message={message.message}/>
						)
					})}
				</div>
				<Formik
					initialValues={{newMessageBody: ""}}
	        onSubmit={(values, { resetForm }) => {
		        props.sendMessage(values.newMessageBody)
		        resetForm();
	        }}
				>
					{({ values, handleSubmit }) => (
						<Form className="relative p-2">
							<Field
								name="newMessageBody"
								component={MyTextarea}
								className="rounded-b-none bg-black pr-20"
								value={values.newMessageBody}
							/>
							<MyButton className="absolute bottom-4 right-4">
								<AiOutlineSend/>
							</MyButton>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}