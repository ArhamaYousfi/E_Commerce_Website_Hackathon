import Image from "next/image";
import vector from "../(public)/Vector.png"

export default function Header() {
  return (
    <header className="bg-gray-200 flex items-center py-2 px-4 sm:px-8 md:h-14">
      {/* Vector Image */}
      <Image src={vector} alt="vector" width={20} height={20} className="ml-4 sm:ml-10" />

      {/* Navigation Menu */}
      <ul className="flex gap-4 ml-auto font-bold items-center text-xs sm:text-sm md:text-base">
        <li className="px-4 py-2 border-r border-gray-950">
          <a href="#">Find a Store</a>
        </li>
        <li className="px-4 py-2 border-r border-gray-950">
          <a href="/help">Help</a>
        </li>
        <li className="px-4 py-2 border-r border-gray-950">
          <a href="/join-us">Join Us</a>
        </li>
        <li className="px-4 py-2 border-r border-gray-950">
          <a href="/sign-in">Sign In</a>
        </li>
      </ul>
    </header>
  );
}