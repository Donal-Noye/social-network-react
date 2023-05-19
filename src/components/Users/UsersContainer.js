import {connect} from "react-redux";
import {
	follow,
	setCurrentPage,
	unfollow, toggleFollowingProgress, requestUsers
} from "../../redux/users-reducer";
import {Component} from "react";
import Users from "./Users";
import {compose} from "redux";
import {
	getUsers,
	getCurrentPage,
	getFollowingInProgress,
	getIsFetching,
	getPageSize,
	getTotalUsersCount
} from "../../redux/users-selectors";

class UsersContainer extends Component {
	componentDidMount() {
		const {currentPage, pageSize} = this.props;
		this.props.requestUsers(currentPage, pageSize);
	}
	onPageChanged = (page) => {
		const {pageSize} = this.props;
		this.props.requestUsers(page, pageSize);
	}
	render() {
		return <>
			<Users
					totalUsersCount={this.props.totalUsersCount}
					onPageChanged={this.onPageChanged}
					pageSize={this.props.pageSize}
					unfollow={this.props.unfollow}
					follow={this.props.follow}
					users={this.props.users}
					currentPage={this.props.currentPage}
					followingInProgress={this.props.followingInProgress}
					isFetching={this.props.isFetching}
				/>
		</>
	}
}
const mapStateToProps = (state) => ({
	users: getUsers(state),
	pageSize: getPageSize(state),
	totalUsersCount: getTotalUsersCount(state),
	currentPage: getCurrentPage(state),
	isFetching: getIsFetching(state),
	followingInProgress: getFollowingInProgress(state)
})
export default compose(
	connect(mapStateToProps, {
	follow,
	unfollow,
	setCurrentPage,
	toggleFollowingProgress,
	requestUsers})
)(UsersContainer)