import {NavLink} from "react-router-dom";

export default function DialogsItem(props) {
	return (
		<NavLink to={`/dialogs/${props.id}`} className="flex items-center gap-3 cursor-pointer rounded-2xl p-3 hover:bg-light-blue active:bg-light-blue/75 transition-colors">
			<div className="rounded-full w-[30px] h-[30px] overflow-hidden">
				<img className="w-full h-full object-cover" src={props.avatar} alt=""/>
			</div>
			<p>{props.name}</p>
		</NavLink>
	)
}