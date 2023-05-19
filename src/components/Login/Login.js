import MyInput from "../UI/MyInput";
import MyButton from "../UI/MyButton";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

function Login({ isAuth, login }) {
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
					rememberMe: false
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
					login(values.email, values.password, values.rememberMe, setSubmitting, setFieldError, setStatus)
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
							<div className="flex items-center gap-3">
								<Field
									className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
									type={'checkbox'}
									name={'rememberMe'}
									id='rememberMe'/>
								<label className="cursor-pointer text-sm font-medium text-white/75" htmlFor={'rememberMe'}>Remember Me</label>
							</div>
						</div>
						<p className="text-red-500">{status}</p>
						<MyButton className="cursor-pointer justify-center" disabled={isSubmitting}>Login</MyButton>
					</Form>
				)}
			</Formik>
		</div>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login)