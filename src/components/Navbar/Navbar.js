import NavLink from "./NavItem";
import {CgProfile} from "react-icons/cg";
import {TbMessages} from "react-icons/tb";
import {FiUsers} from "react-icons/fi";

export default function Navbar() {
  const navList = [
    {
      title: "Profile",
      path: "/profile",
      icon: <CgProfile size={24} />
    },
    {
      title: "Messages",
      path: "/dialogs",
      icon: <TbMessages size={24} />
    },
    {
      title: "Users",
      path: "/users",
      icon: <FiUsers size={24} />
    },
  ]

  return (
    <aside className="nav">
      <ul className="bg-black rounded-2xl overflow-hidden">
        {navList.map((item, idx) => {
          return (
            <li className="flex items-center" key={idx}>
              <NavLink title={item.title} path={item.path} icon={item.icon} />
            </li>
          )
        })}
      </ul>
    </aside>
  )
}