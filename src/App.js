import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {
	HashRouter,
	Navigate,
	Route,
	Routes,
	useLocation,
	useNavigate,
	useParams
} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {lazy, Suspense, useEffect} from "react";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));


function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				router={{location, navigate, params}}
			/>
		);
	}

	return ComponentWithRouterProp;
}

function App(props) {
	const catchAllUnhandledErrors = (promiseRejectionEvent) => {
		console.log("Some error occured")
	}

	useEffect(() => {
		props.initializeApp();
		window.addEventListener("unhandledrejection", catchAllUnhandledErrors)
	})

	useEffect(() => {
		window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
	}, [])

	if (!props.initialized) return <Preloader />

	return (
		<div className="mx-6 md:max-w-6xl md:mx-auto wrapper pb-10 grid grid-cols-[3fr_10fr] gap-6 grid-rows-[auto_1fr]">
			<HeaderContainer/>
			<Navbar/>
			<main className="content">
				<Suspense fallback={<Preloader />}>
					<Routes>
						<Route path="/" element={<Navigate to="/profile" />} />
						<Route path='/profile/:userId?' element={<ProfileContainer />}/>
						<Route path="/dialogs/*" element={<DialogsContainer />}/>
						<Route path="/users" element={<UsersContainer />}/>
						<Route path="/login" element={<Login />}/>
						<Route path="*" element={<div>404 NOT FOUND</div>}/>
					</Routes>
				</Suspense>
			</main>
		</div>
	);
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App)

const SocialNetworkApp = () => {
	return <HashRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</HashRouter>
}

export default SocialNetworkApp