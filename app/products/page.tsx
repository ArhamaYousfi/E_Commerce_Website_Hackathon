import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import pic1 from "../(public)/Rectangle.png"
import pic2 from "../(public)/Rectangle (1).png"
import pic3 from "../(public)/Rectangle (2).png"
import pic4 from "../(public)/Rectangle (4).png"
import pic5 from "../(public)/Rectangle (5).png"
import pic6 from "../(public)/Rectangle (6).png"
import pic7 from "../(public)/p7.png"
import pic8 from "../(public)/pic8.png"
import pic9 from "../(public)/pic9.png"
import pic10 from "../(public)/pic10.png"
import pic11 from "../(public)/pic11.png"
import pic12 from "../(public)/pic12.png"
import pic13 from "../(public)/pic13.png"
import pic14 from "../(public)/pic14.png"
import pic15 from "../(public)/pic15.png"
import pic16 from "../(public)/pic16.png"
import pic17 from "../(public)/pic17.png"
import pic18 from "../(public)/pic18.png"
import pic19 from "../(public)/pic19.png"
import pic20 from "../(public)/pic20.png"
import pic21 from "../(public)/pic21.png"
import pic22 from "../(public)/pic22.png"
import pic23 from "../(public)/pic23.png"
import pic24 from "../(public)/pic24.png"
import pic25 from "../(public)/pic25.png"
import pic26 from "../(public)/pic26.png"
import pic28 from "../(public)/pic28.png"
import pic29 from "../(public)/pic29.png"
import pic30 from "../(public)/pic30.png"
import pic31 from "../(public)/pic31.png"

export default function Product() {
  return (
    <div className="flex sm:min-h-screen lg:ml-8 flex-wrap">
      <aside className="w-full sm:w-1/4 p-4">
        <h2 className="font-semibold text-2xl mb-4">New (500)</h2>
        <div className="mb-4 w-full sm:w-72 h-96 overflow-scroll">
          <ul>
            <li className="mb-2">Shoes</li>
            <li className="mb-2">Sports Bars</li>
            <li className="mb-2">Tops & T-Shirts</li>
            <li className="mb-2">Hoodies & Sweatshirts</li>
            <li className="mb-2">Jackets</li>
            <li className="mb-2">Trousers & Tights</li>
            <li className="mb-2">Shorts</li>
            <li className="mb-2">Tracksuits</li>
            <li className="mb-2">Jumpsuits & Rompers</li>
            <li className="mb-2">Skirts & Dresses</li>
            <li className="mb-2">Socks</li>
            <li className="mb-10">Accessories & Equipment</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-medium flex justify-between items-center border-t-2 pt-6">Gender <span><IoIosArrowUp /></span></h3>
          <ul>
            <li className="mt-2">
              <label>
                <input type="checkbox" className="mr-2" />
                Men
              </label>
            </li>
            <li className="mt-2">
              <label>
                <input type="checkbox" className="mr-2" />
                Women
              </label>
            </li>
            <li className="mt-2">
              <label>
                <input type="checkbox" className="mr-2" />
                Unisex
              </label>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-medium flex justify-between items-center border-t-2 pt-6">Kids <span><IoIosArrowUp /></span></h3>
          <ul>
            <li className="mt-2">
              <label>
                <input type="checkbox" className="mr-2" />
                Boys
              </label>
            </li>
            <li className="mt-2">
              <label>
                <input type="checkbox" className="mr-2" />
                Girls
              </label>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-medium flex justify-between items-center border-t-2 pt-6">Shop By Price <span><IoIosArrowUp /></span></h3>
          <ul>
            <li className="mt-2">
              <label>
                <input type="checkbox" className="mr-2" />
                Under ₹ 2,500.00
              </label>
            </li>
            <li className="mt-2">
              <label>
                <input type="checkbox" className="mr-2" />
                ₹ 2,501.00 - ₹
              </label>
            </li>
          </ul>
        </div>
      </aside>

      <main className="w-full sm:w-3/4 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div>
            <Image src={pic1} alt="pic1" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Force 1 Mid '07</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 10,795.00</h5>
          </div>

          <div>
            <Image src={pic2} alt="pic2" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Court Vission Low Next Nature</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 4,995.00</h5>
          </div>

          <div>
            <a href="/shoe">
              <Image src={pic3} alt="pic3" />
              <h5 className="text-red-700">Just In</h5>
              <h3 className="font-bold">Nike Air Force 1PLT.AF.ORM</h3>
              <p>Men's Shoes</p>
              <p>1 Colour</p>
              <h5 className="font-bold mt-5">MRP: ₹ 4,995.00</h5>
            </a>
          </div>

          <div>
            <Image src={pic4} alt="pic4" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Force 1 React</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 13,295.00</h5>
          </div>

          <div>
            <Image src={pic5} alt="pic5" />
            <h5 className="text-red-700">Promo Exlusion</h5>
            <h3 className="font-bold">Air Jordan 1 Elevate Low</h3>
            <p>Women's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 11,895.00</h5>
          </div>

          <div>
            <Image src={pic6} alt="pic6" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Standard Issue</h3>
            <p>Women's Basketball Jersey</p>
            <p>1 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 2,895.00</h5>
          </div>

          <div>
            <Image src={pic7} alt="pic7" />
            <h5 className="text-red-700">Promo Exlusion</h5>
            <h3 className="font-bold">Nike Dunk Low Retro SE</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 9,695.00</h5>
          </div>

          <div>
            <Image src={pic8} alt="pic8" />
            <h5 className="text-red-700">Sustainable Materials</h5>
            <h3 className="font-bold">Nike Dri-FIT UV Hyverse</h3>
            <p>Men's Short-Sleeve Graphic Fitness Top</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 2,495.00</h5>
          </div>

          <div>
            <Image src={pic9} alt="pic9" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Court Vision Low</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 5,695.00</h5>
          </div>

          <div>
            <Image src={pic10} alt="pic10" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Dri-FIT Ready</h3>
            <p>Men's Short-Sleeve Fitness Top</p>
            <p>3 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 2,495.00</h5>
          </div>

          <div>
            <Image src={pic11} alt="pic11" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike One LeakProtection: Period</h3>
            <p>Women's Mid-Rise 18cm (approx.) Biker Shorts</p>
            <p>2 Colour</p>
            <h5 className="font-bold">MRP: ₹ 3,395.00</h5>
          </div>

          <div>
            <Image src={pic12} alt="pic12" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Force 1 LV8 3</h3>
            <p>Older Kids' Shoe</p>
            <p>1 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 7,495.00</h5>
          </div>

          <div>
            <Image src={pic13} alt="pic13" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Force 1</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 10,295.00</h5>
          </div>

          <div>
            <Image src={pic14} alt="pic14" />
            <h5 className="text-red-700">Promo Exlusion</h5>
            <h3 className="font-bold">Nike Free Run 5.0</h3>
            <p>Men's Running Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 8,495.00</h5>
          </div>

          <div>
            <Image src={pic15} alt="pic15" />
            <h5 className="text-red-700">Promo Exlusion</h5>
            <h3 className="font-bold">Nike Air Zoom Structure 24</h3>
            <p>Men's Running Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 12,295.00</h5>
          </div>

          <div>
            <Image src={pic16} alt="pic16" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike ZoomX Vaporfly NEXT% 2</h3>
            <p>Men's Running Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 20,295.00</h5>
          </div>

          <div>
            <Image src={pic17} alt="pic17" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Zoom Winflo 9</h3>
            <p>Women's Running Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 7,495.00</h5>
          </div>

          <div>
            <Image src={pic18} alt="pic18" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Flex Experience Run 11</h3>
            <p>Men's Running Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 4,995.00</h5>
          </div>

          <div>
            <Image src={pic19} alt="pic19" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Max 270</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold mt-5">MRP: ₹ 13,495.00</h5>
          </div>

          <div>
            <Image src={pic20} alt="pic20" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Max 90</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 9,695.00</h5>
          </div>

          <div>
            <Image src={pic21} alt="pic21" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Pegasus 39</h3>
            <p>Women's Running Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 11,295.00</h5>
          </div>

          <div>
            <Image src={pic22} alt="pic22" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Max 97</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 14,495.00</h5>
          </div>

          <div>
            <Image src={pic23} alt="pic23" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Max 1</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 11,295.00</h5>
          </div>

          <div>
            <Image src={pic24} alt="pic24" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Max 2021</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 13,295.00</h5>
          </div>

          <div>
            <Image src={pic25} alt="pic25" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Zoom Winflo 9</h3>
            <p>Men's Running Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 8,495.00</h5>
          </div>

          <div>
            <Image src={pic26} alt="pic26" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Zoom Pegasus 39</h3>
            <p>Women's Running Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 10,495.00</h5>
          </div>

          <div>
            <Image src={pic28} alt="pic28" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike React Infinity Run Flyknit 3</h3>
            <p>Men's Running Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 14,495.00</h5>
          </div>

          <div>
            <Image src={pic29} alt="pic29" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Max 720</h3>
            <p>Men's Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 15,695.00</h5>
          </div>

          <div>
            <Image src={pic30} alt="pic30" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike Air Zoom Turbo 2</h3>
            <p>Men's Running Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 12,295.00</h5>
          </div>

          <div>
            <Image src={pic31} alt="pic31" />
            <h5 className="text-red-700">Just In</h5>
            <h3 className="font-bold">Nike React Vision</h3>
            <p>Women's Running Shoes</p>
            <p>1 Colour</p>
            <h5 className="font-bold">MRP: ₹ 9,495.00</h5>
          </div>
        </div>
      </main>
    </div>
  );
}
