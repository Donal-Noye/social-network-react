import {Field, FieldArray, Form, Formik} from "formik";
import MyInput from "../../UI/MyInput";
import {FiSave} from "react-icons/fi";
import MyButton from "../../UI/MyButton";
import MyTextarea from "../../UI/MyTextarea";
import {AiOutlineClockCircle} from "react-icons/ai";

const contactsJsx = (name, isValid) => {
	return (
		<div key={name}>
			<p className={"block mb-1.5 capitalize"}>{name}:</p>
			<div>
				<Field
					name={`contacts.${name}`}
					type={'text'}
					id={name}
					component={MyInput}
					isValid={isValid}
					className={"px-4 py-2"}
					placeholder={name}
				/>
			</div>
		</div>
	)
}

export default function ProfileDataForm({profile, handleSubmit, goToViewMode}) {
	let objectFromApiCopy = JSON.parse(JSON.stringify(profile))

	const arrayWithNames = Object.keys(profile.contacts)

	arrayWithNames.forEach((item) => {
		let value = objectFromApiCopy.contacts[item]
		if (value === null) {
			objectFromApiCopy.contacts[item] = ''
		}
	})

	return (
		<>
			<div className="grid justify-items-start pt-5">
				<Formik
					initialValues={objectFromApiCopy}
					onSubmit={(values, bagWithMethods) => {
						let {setStatus, setSubmitting} = bagWithMethods

						handleSubmit(values, setStatus, setSubmitting, goToViewMode)
					}}
				>
					{({isValid, status, isSubmitting}) => {
						return (
							<Form className={"grid gap-4 w-1/2 my-0 mx-auto"}>
								{status &&
									<p className="text-red-500">{status}</p>
								}

								<MyButton className="px-2 gap-2 justify-center">
									{isSubmitting
										? <>
												<AiOutlineClockCircle size={17} />
												Please wait...
											</>
										: <>
											<FiSave size={17} />
											Save
										</>
									}
								</MyButton>
								<button className="py-2" onClick={goToViewMode}>Cancel</button>

								<div>
									<label className={"block mb-1.5"} htmlFor="fullName">Full Name</label>
									<Field
										className={"px-4 py-2"}
										name={"fullName"}
										placeholder={"e.g Donal Noye"}
										component={MyInput}
										id={"fullName"}
										isValid={isValid}
									/>
								</div>
								<div className={"checkbox"}>
									<Field
										name={'lookingForAJob'}
										type={'checkbox'}
										id='lookingForAJob' />
									<label htmlFor={'lookingForAJob'}>Looking for a job</label>
								</div>
								<div>
									<label className={"block mb-1.5"} htmlFor="skills">Professional skills</label>
									<Field
										name={'lookingForAJobDescription'}
										placeholder={'e.g HTML, CSS, Javascript...'}
										component={MyTextarea}
										id={"skills"}
									/>
								</div>
								<div>
									<label className={"block mb-1.5"} htmlFor="aboutMe">About Me</label>
									<Field
										className={"px-4 py-2"}
										name={"aboutMe"}
										placeholder={"e.g I love pancakes!"}
										component={MyInput}
										isValid={isValid}
										id={"aboutMe"}
									/>
								</div>
								<FieldArray
									name="friends"
									render={() => (
										<>
											{arrayWithNames.map(name => contactsJsx(name, isValid))}
										</>
									)}
								/>


							</Form>
						)
					}}
				</Formik>
				{/*<div className="grid justify-items-start -mt-16">*/}
				{/*	<div className="mb-3 flex items-end gap-2">*/}
				{/*		<div className="rounded-full w-[120px] h-[120px] overflow-hidden">*/}
				{/*			<img className="w-full h-full object-cover"*/}
				{/*			     src={profile.photos.large || defaultAvatar} alt=""/>*/}
				{/*		</div>*/}
				{/*		<label className="cursor-pointer inline-block">*/}
				{/*			<input className="hidden" type="file" onChange={onMainPhotoSelected}/>*/}
				{/*			<AiOutlineUpload size={25}/>*/}
				{/*		</label>*/}
				{/*	</div>*/}
				{/*	<h2 className="text-2xl mb-1">{profile.fullName}</h2>*/}
				{/*	<ProfileStatus status={status} updateStatus={updateStatus} />*/}
				{/*	<ul className="grid gap-1 mt-4">*/}
				{/*		<li className="flex items-center gap-2">*/}
				{/*			<p className="text-sm text-gray-400">Looking for a job:</p>*/}
				{/*			{profile.lookingForAJob ? "Yes" : "No"}*/}
				{/*		</li>*/}
				{/*		{profile.lookingForAJob &&*/}
				{/*			<li className="flex items-center gap-2">*/}
				{/*				<p className="text-sm text-gray-400">My Professional skills:</p>*/}
				{/*				{profile.lookingForAJobDescription}*/}
				{/*			</li>*/}
				{/*		}*/}
				{/*		{profile.aboutMe &&*/}
				{/*			<li className="flex items-center gap-2">*/}
				{/*				<p className="text-sm text-gray-400">About me:</p>*/}
				{/*				{profile.aboutMe}*/}
				{/*			</li>*/}
				{/*		}*/}
				{/*	</ul>*/}
				{/*</div>*/}
			</div>
		</>
	)
}