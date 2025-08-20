import Link from "next/link";

export default function Sidebar() {
  return (
   <div>
<nav className="flex-1">
        <ul className="space-y-4">
          <li>
            <Link href="/" className="block px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/profile" className="block px-4 py-2 rounded-lg hover:bg-gray-700">
              My Profile
            </Link>
          </li>
          <li>
            <Link href="" className="block px-4 py-2 rounded-lg hover:bg-gray-700">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}