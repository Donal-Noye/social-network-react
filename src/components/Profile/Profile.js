import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default function Profile(props) {
	return (
		<div className="profile">
			<ProfileInfo profile={props.profile}
			             status={props.status}
			             updateStatus={props.updateStatus}
			             isOwner={props.isOwner}
			             saveProfile={props.saveProfile}
			             savePhoto={props.savePhoto} />
			<MyPostsContainer/>
		</div>
	)
}