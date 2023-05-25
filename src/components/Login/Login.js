import MyInput from "../UI/MyInput";
import MyButton from "../UI/MyButton";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

function Login({ isAuth, login, captchaUrl }) {
	if (isAuth) {
		return <Navigate to={"/profile"} />
	}

	return (
		<div className="bg-black p-7 pb-11 rounded-2xl">
			<h2 className="text-xl text-center font-medium mb-5">Sign Up</h2>
			<Formik
				initialValues={{
					email: "",
					password: "",
					rememberMe: false,
					captcha: ""
				}}
				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address';
					}
					return errors;
				}}
				validateOnBlur={false}
				validationSchema={Yup.object().shape({
					password: Yup.string()
						.min(8, "Must be longer than 8 characters")
						.required("Required")
				})}
				onSubmit={(values, {setSubmitting, setFieldError, setStatus}) => {
					login(values.email, values.password, values.rememberMe, values.captcha, setSubmitting, setFieldError, setStatus)
					setSubmitting(false);
				}}
			>
				{({
					  isSubmitting,
					  isValid,
						status
				  }) => (
					<Form className="my-0 mx-auto w-1/3 grid gap-4">
						{/*Email*/}
						<div>
							<Field
								className={`px-4 py-2 w-full`}
								name={'email'}
								component={MyInput}
								isValid={isValid}
								placeholder={'e-mail'}/>
						</div>

						{/*Password*/}
						<div>
							<Field
								className={"px-4 py-2 w-full"}
								name={'password'}
								type="password"
								component={MyInput}
								isValid={isValid}
								placeholder={'Password'}/>
						</div>

						{/*Checkbox*/}
						<div>
							<div className="checkbox">
								<Field
									type={'checkbox'}
									name={'rememberMe'}
									id='rememberMe'/>
								<label className={"text-white/75"} htmlFor={'rememberMe'}>Remember Me</label>
							</div>
						</div>
						{status && <p className="text-red-500">{status}</p>}
						{captchaUrl &&
							<div className={"w-[80%] my-0 mx-auto border-t-4 border-light-blue"}>
								<div className={"mb-2"}>
									<img className={"object-cover w-full h-[90px]"} src={captchaUrl} alt={status} />
								</div>

								<div>
									<Field
										className={"w-full"}
										name={'captcha'}
										isValid={isValid}
										component={MyInput}
									/>
								</div>

							</div>
						}
						<MyButton className="cursor-pointer justify-center" disabled={isSubmitting}>Login</MyButton>
					</Form>
				)}
			</Formik>
		</div>
	)
}

const mapStateToProps = (state) => ({
	captchaUrl: state.auth.captchaUrl,
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login)