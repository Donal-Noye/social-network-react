import defaultAvatar from "../../../img/defaultAvatar.jpeg";
import ProfileStatus from "./ProfileStatus";
import {AiOutlineEdit, AiOutlineUpload} from "react-icons/ai";
import {useState} from "react";
import MyButton from "../../UI/MyButton";
import ProfileDataForm from "./ProfileDataForm";

export default function ProfileInfo({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) {
	const [editMode, setEditMode] = useState(false);

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length) {
			savePhoto(e.target.files[0])
		}
	}

	const handleSubmit = (formData, setStatus, setSubmitting, goToViewMode) => {
	  saveProfile(formData, setStatus, setSubmitting, goToViewMode)
	}

	return (
		<div className="pb-10 mb-4 bg-black rounded-2xl overflow-hidden">
			<div className="h-[200px] overflow-hidden">
				<img className="w-full h-full object-cover" src={require('../../../img/wallpaper_cliff_1920x1080.jpg')} alt=""/>
			</div>
			{editMode
				? <ProfileDataForm
						profile={profile}
						handleSubmit={handleSubmit}
						goToViewMode={() => setEditMode(false)}
				/>
				: <>
					<ProfileData
						goToEditMode={() => {setEditMode(true)}}
						profile={profile}
						status={status}
						isOwner={isOwner}
						updateStatus={updateStatus}
						onMainPhotoSelected={onMainPhotoSelected}
						editMode={editMode}
					/>
				</>
			}
		</div>
	)
}

const ProfileData = ({profile, status, updateStatus, isOwner, goToEditMode, editMode, onMainPhotoSelected}) => {
	return (
		<div className="px-16 grid grid-cols-[50%_auto] justify-between items-start">
			<div className="grid justify-items-start -mt-16">
				<div className="mb-3 flex items-end gap-2">
					<div className="rounded-full w-[120px] h-[120px] overflow-hidden">
						<img className="w-full h-full object-cover"
						     src={profile.photos.large || defaultAvatar} alt=""/>
					</div>
					{isOwner && <label className="cursor-pointer inline-block">
						<input className="hidden" type="file" onChange={onMainPhotoSelected}/>
						<AiOutlineUpload size={25}/>
					</label>}
				</div>
				<h2 className="text-2xl mb-1">{profile.fullName}</h2>
				<ProfileStatus status={status} updateStatus={updateStatus} isOwner={isOwner} />
				<ul className="grid gap-1 mt-4">
					<li className="flex items-center gap-2">
						<p className="text-sm text-gray-400">Looking for a job:</p>
						{profile.lookingForAJob ? "Yes" : "No"}
					</li>
					{profile.lookingForAJob &&
						<li className="flex items-center gap-2">
							<p className="text-sm text-gray-400">My Professional skills:</p>
							{profile.lookingForAJobDescription}
						</li>
					}
					{profile.aboutMe &&
						<li className="flex items-center gap-2">
							<p className="text-sm text-gray-400">About me:</p>
							{profile.aboutMe}
						</li>
					}
					<>
						<p className="text-sm text-gray-400">Contacts:</p>
						<ul className="pl-3">
							{Object.keys(profile.contacts).map(key => {
								return (
									<li key={key}>
										{profile.contacts[key] &&
											<Contact title={key} value={profile.contacts[key]}/>
										}
									</li>
								)
							})}
						</ul>
					</>
				</ul>
			</div>
			{isOwner &&
				<MyButton className="mt-5 px-2 gap-2" handleClick={goToEditMode}>
					<AiOutlineEdit size={20}/>
					Edit
				</MyButton>
			}
		</div>
	)
}


const Contact = ({title, value}) => {
	return (
		<div className="flex items-center gap-2">
			<p className="text-sm text-white">{title}:</p>
			<a href={value} target="_blank" className={"hover:underline"}>{value}</a>
		</div>
	)
}