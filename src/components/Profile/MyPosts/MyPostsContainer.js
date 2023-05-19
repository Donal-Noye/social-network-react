import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = state => ({
		posts: state.profilePage.posts,
})

const mapDispatchToProps = (dispatch) => ({
	addPost: (newPostText) => {
		dispatch(addPostActionCreator(newPostText))
	},
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;