import Link from 'next/link';
import React from 'react'; 
import { SiNike } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

export default function Navbar() {
   return (
     <header className="bg-white">
        <div className="flex flex-wrap justify-between items-center p-3 md:p-4 lg:p-6 font-sans">
        
        
         <SiNike className="text-2xl font-bold drop-shadow-lg ml-4 sm:ml-8 h-10 md:h-14" />

        
         <nav className="hidden md:flex gap-4 lg:gap-8">
         
           <ul className="flex gap-6 lg:gap-10 font-medium text-sm lg:text-base">
             <li><Link href="#" className="text-gray-700 hover:text-gray-900 font-bold">New & Featured</Link></li>
             <li><Link href="#" className="text-gray-700 hover:text-gray-900 font-bold">Men</Link></li>
             <li><Link href="#" className="text-gray-700 hover:text-gray-900 font-bold">Women</Link></li>
             <li><Link href="#" className="text-gray-700 hover:text-gray-900 font-bold">Kids</Link></li>
             <li><Link href="#" className="text-gray-700 hover:text-gray-900 font-bold">Sale</Link></li>
             <li><Link href="#" className="text-gray-700 hover:text-gray-900 font-bold">SNKRS</Link></li>
          </ul>

      </nav>

         {/* Search Bar */}
          <div className="relative flex items-center mx-4 flex-1 max-w-xs sm:max-w-md lg:max-w-sm">
          <input
            type="text"
             className="border border-gray-300 rounded-full pl-10 pr-3 px-3 py-2 w-full bg-gray-100"
             placeholder="Search"
          />
          <button className="absolute left-3 text-gray-500">
            <IoSearch />
           </button>
        </div>

         {/* Icons: Heart and Cart */}
         <div className="flex space-x-4 items-center">
           {/* Heart Icon */}
           <button className="text-gray-700 hover:text-gray-900">
             <IoMdHeartEmpty size="24px" className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
           </button>

          {/* Cart Icon */}
            <Link href="/cart">
             <button className="text-gray-700 hover:text-gray-900">
              <IoBagOutline size="24px" className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
             </button>
           </Link>
         </div>
       </div>
     </header>
   );
}
