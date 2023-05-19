import defaultAvatar from "../../../img/defaultAvatar.jpeg"

export default function PostsItem(props) {
	return (
		<div className="flex items-center gap-3 border-b-2 border-dark-blue p-5">
			<div className="rounded-full w-[40px] h-[40px] overflow-hidden">
				<img className="w-full h-full object-cover" src={defaultAvatar} alt=""/>
			</div>
			<p>{props.text}</p>
		</div>
	)
}