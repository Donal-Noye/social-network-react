import {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import Preloader from "../common/Preloader";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {compose} from "redux";

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

function ProfileContainer(props) {
	let navigate = useNavigate();

	useEffect(() => {
		let userId = props.router.params.userId;
		if (!userId) {
			userId = props.authorizedUserId;

			if (!userId) {
				navigate('/login')
			}
		}

		props.getUserProfile(userId)
		props.getStatus(userId)
	})

	return <>
		{!props.profile
			? <Preloader/>
			: <Profile {...props}
			           profile={props.profile}
			           status={props.status}
			           updateStatus={props.updateStatus}/>}
	</>
}

const mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	authorizedUserId: state.auth.userId,
	status: state.profilePage.status
});

export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withRouter
)(ProfileContainer)