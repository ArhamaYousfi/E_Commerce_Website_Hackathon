import Image from "next/image";
import main from "../(public)/main.png";
import shoe from "../(public)/shoe.png";
import image from "../(public)/Image.png";
import { FaIndianRupeeSign } from "react-icons/fa6";
import featured from "../(public)/Image (1).png";
import men from "../(public)/Frame (8).png";
import women from "../(public)/Frame (7).png";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import flight from "../(public)/Image (4).png";
import frame from "../(public)/Frame (6).png";

export default function Home() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-center text-2xl bg-gray-200 py-2 sm:text-3xl lg:text-4xl">
          Hello Nike App
        </h1>
        <p className="text-center bg-gray-200 sm:text-lg lg:text-xl px-5 py-2">
          Download the app to access everything Nike. <strong>Get Your Great</strong>
        </p>
      </div>

      <div className="mx-5 sm:mx-10 mb-10 sm:mb-5">
        <Image
          src={main}
          alt="Nike air max pulse"
          width={1344}
          height={300}
          className="w-full h-auto"
        />
      </div>

      <div>
        <h3 className="text-center font-bold mt-14 text-xl sm:text-2xl">First Look</h3>
        <h1 className="text-center font-bold mt-2 text-5xl sm:text-6xl lg:text-7xl">
          Nike Air Max Pulse
        </h1>
        <p className="text-center mt-6 sm:text-lg lg:text-xl px-5">
          Extreme comfort. Hyper durable. Max Volume. Introducing the Air Max Pulse
          <br />
          -designed to push you past your limits and help you to go to the max.
        </p>
        <div className="flex justify-center mt-5 mb-32 space-x-4 flex-wrap">
          <button className="px-6 py-2 bg-black text-white rounded-full text-sm sm:text-base">
            Notify Me
          </button>
          <button className="px-6 py-2 bg-black text-white rounded-full text-sm sm:text-base">
            Shop Air Max
          </button>
        </div>

        <div>
          <h3 className="ml-10 mb-10 font-bold text-xl sm:text-2xl">Best Of Air Max</h3>
          <div className="ml-10 flex flex-wrap sm:flex-nowrap justify-start gap-5">
            <div className="w-full sm:w-1/3">
              <Image src={shoe} alt="best" width={380} height={100} className="w-full" />
              <h3 className="mt-5 font-bold flex justify-between sm:justify-start">
                <span className="mr-16">Nike Air Max Pulse</span>
                <FaIndianRupeeSign />
                13,995
              </h3>
              <p>Women's Shoes</p>
            </div>

            <div className="w-full sm:w-1/3">
              <Image src={shoe} alt="best" width={380} height={100} className="w-full" />
              <h3 className="mt-5 flex font-bold justify-between sm:justify-start">
                <span className="mr-16">Nike Air Max Pulse</span>
                <FaIndianRupeeSign />
                13,995
              </h3>
              <p>Men's Shoes</p>
            </div>

            <div className="w-full sm:w-1/3 mb-10">
              <Image src={image} alt="best" width={350} height={100} className="w-full" />
              <h3 className="mt-5 font-bold flex justify-between sm:justify-start">
                <span className="mr-16">Nike Air Max 97 SE</span>
                <FaIndianRupeeSign />
                16,995
              </h3>
              <p>Men's Shoes</p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 mt-20 ml-10 font-bold text-xl sm:text-2xl">Featured</h3>
            <div className="ml-10 mr-10 mb-20">
              <Image src={featured} alt="featured" height={80} width={1300} />
            </div>

            <div>
              <h1 className="font-bold text-center text-4xl sm:text-5xl lg:text-6xl uppercase">
                Step Into What Feels Good
              </h1>
              <p className="text-center mt-5 sm:text-lg lg:text-xl px-5">
                Cause everyone should know the feeling of running in that perfect pair.
              </p>
            </div>
            <div className="flex justify-center mt-5 mb-32 space-x-4">
              <button className="px-6 py-2 bg-black text-white rounded-full">
                <a href="/products">Find Your Shoe</a>
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold ml-10 mb-5 text-xl sm:text-2xl">Gear Up</h3>
            <div>
              <h3 className="font-bold ml-56 flex items-center mx-2 sm:text-xl">
                <span className="flex items-center">
                  Shop Men's <IoIosArrowDropleft className="mx-2" />
                  <IoIosArrowDroprightCircle />
                </span>{" "}
                <span className="mx-4 flex items-center ml-96">
                  Shop Women's
                  <IoIosArrowDropleft className="mx-2" />
                  <IoIosArrowDroprightCircle />
                </span>
              </h3>
              <div className="flex flex-wrap justify-between gap-4">
                <Image src={men} alt="men" width={600} height={600} className="w-full sm:w-[48%]" />
                <Image src={women} alt="women" width={600} height={600} className="w-full sm:w-[48%]" />
              </div>

              <div>
                <h3 className="font-bold ml-10 mb-5 mt-20 text-xl sm:text-2xl">Don't Miss</h3>
                <div className="ml-10 mr-10">
                  <Image src={flight} alt="flight" width={1300} height={100} />
                  <h1 className="font-bold text-center text-3xl sm:text-4xl uppercase mt-10">
                    Flight Essentials
                  </h1>
                  <p className="text-center mt-5 sm:text-lg lg:text-xl">
                    You built-to-last, all-week wears--but with style only Jordan Brand can deliver.
                  </p>
                </div>
                <div className="flex justify-center mt-5 mb-32 space-x-4">
                  <button className="px-6 py-2 bg-black text-white rounded-full">shop</button>
                </div>
              </div>

              <div>
                <h3 className="font-bold ml-10 mb-5 mt-20 text-xl sm:text-2xl">The Essentials</h3>
                <Image
                  src={frame}
                  alt="frame"
                  width={1300}
                  height={100}
                  className="ml-10 mr-10"
                />
              </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24 ml-5">
              <div>
                <ul className="space-y-2 ml-56 whitespace-nowrap mt-20 mb-20">
                  <li className="text-black font-semibold mb-8">Icons</li>
                  <li>Air Force 1</li>
                  <li>Huarache</li>
                  <li>Air Max 90</li>
                  <li>Air Max 95</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 ml-36 whitespace-nowrap mt-20 mb-20">
                  <li className="text-black font-semibold mb-8">Shoes</li>
                  <li>All Shoes</li>
                  <li>Custom Shoes</li>
                  <li>Jordan Shoes</li>
                  <li>Running Shoes</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 ml-14 whitespace-nowrap mt-20 mb-20">
                  <li className="text-black font-semibold mb-8">All Clothing</li>
                  <li>Modest Wear</li>
                  <li>Hoodies & Pullovers</li>
                  <li>Shirts & Tops</li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 mr-28 whitespace-nowrap mt-20 mb-20">
                  <li className="text-black font-semibold mb-8">Kids'</li>
                  <li>Infant & Toddler Shoes</li>
                  <li>Kids' Shoes</li>
                  <li>Kids' Jordan Shoes</li>
                  <li>Kids' Basketball Shoes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}