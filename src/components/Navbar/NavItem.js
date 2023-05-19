import {NavLink} from "react-router-dom";

export default function NavItem(props) {
	return (
		<NavLink
			className={`flex items-center text-[18px] gap-4 py-4 px-8 w-full font-medium hover:bg-light-blue active:bg-light-blue/75 transition-colors`}
			to={props.path}
		>
			{props.icon}
			{props.title}
		</NavLink>
	)
}