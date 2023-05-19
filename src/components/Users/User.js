import defaultAvatar from "../../img/defaultAvatar.jpeg";
import {NavLink} from "react-router-dom";

export default function User(
	{
		user,
		followingInProgress,
		follow,
		unfollow,
	}) {
	return (
		<div className="bg-black p-6 rounded-2xl">
			<NavLink to={`/profile/${user.id}`} className="grid grid-cols-[60px_1fr] items-center gap-5 mb-6">
				<div className="rounded-full w-[60px] h-[60px] overflow-hidden">
					<img className="w-full h-full object-cover"
					     src={user.photos.small ? user.photos.small : defaultAvatar} alt=""/>
				</div>
				<div className="overflow-hidden">
					<h4 className="text-[18px] text-ellipsis overflow-hidden">{user.name}</h4>
					<p className="text-sm mt-1 text-white/75 overflow-hidden overflow-ellipsis whitespace-nowrap">{user.status}</p>
				</div>
			</NavLink>
			<div className="grid">
				{user.followed
					? <button
						disabled={followingInProgress.some(id => id === user.id)}
						onClick={() => {
							unfollow(user.id)
						}}
						className="disabled:text-white/60 disabled:border-light-blue/60 disabled:hover:bg-transparent inline-flex justify-center border-2 border-light-blue hover:bg-light-blue active:bg-light-blue/75 px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-gray-200 transition-colors"
					>
						Unfollow
					</button>
					: <button
						disabled={followingInProgress.some(id => id === user.id)}
						onClick={() => {
							follow(user.id)
						}}
						className="disabled:text-white/60 disabled:border-light-blue/60 disabled:hover:bg-transparent inline-flex justify-center border-2 border-light-blue hover:bg-light-blue active:bg-light-blue/75 px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-gray-200 transition-colors"
					>
						Follow
					</button>
				}
			</div>
		</div>
	)
}