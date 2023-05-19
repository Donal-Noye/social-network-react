import {NavLink} from "react-router-dom";
import {MdOutlineLogout} from "react-icons/md";

export default function Header(props) {
	return <header className="header p-8 bg-black flex items-center justify-between rounded-b-2xl">
		<h2 className="text-2xl">Social Network</h2>
    <div>
	    {props.isAuth
				? <div className="flex items-center gap-4">
			      <p>{props.login}</p>
				    <button onClick={props.logout} className="p-2 text-red-500 hover:text-red-500/70 transition-colors">
				      <MdOutlineLogout size={22} />
				    </button>
		      </div>
		    : <NavLink to='/login'>
				    Login
			    </NavLink>
			}
    </div>
	</header>
}