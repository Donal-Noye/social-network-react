import defaultAvatar from "../../../img/defaultAvatar.jpeg";
import ProfileStatus from "./ProfileStatus";

export default function ProfileInfo({ profile, status, updateStatus }) {
	return (
		<div className="pb-10 mb-4 bg-black rounded-2xl overflow-hidden">
			<div className="h-[200px] overflow-hidden">
				<img className="w-full h-full object-cover" src={require('../../../img/wallpaper_cliff_1920x1080.jpg')} alt=""/>
			</div>
			<div className="ml-16 -mt-16">
				<div className="rounded-full w-[120px] h-[120px] overflow-hidden mb-3">
					<img className="w-full h-full object-cover"
					     src={profile.photos.large ? profile.photos.large : defaultAvatar} alt=""/>
				</div>
				<h2 className="text-2xl mb-1">{profile.fullName}</h2>
				<ProfileStatus status={status} updateStatus={updateStatus}/>
			</div>
		</div>
	)
}