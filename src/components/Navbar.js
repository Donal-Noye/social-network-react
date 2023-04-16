export default function Navbar() {
  return (
    <aside className="nav h-full">
      <ul className="text-xl bg-brown rounded-2xl overflow-hidden">
        <li className="flex items-center">
          <a className="py-4 px-8 w-full hover:bg-white hover:text-brown transition-colors" href="#">Profile</a>
        </li>
        <li className="flex items-center">
          <a className="py-4 px-8 w-full hover:bg-white hover:text-brown transition-colors" href="#">Messages</a>
        </li>
      </ul>
    </aside>
  )
}