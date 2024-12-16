import Image from "next/image";
import React from "react";
import { SiNike } from "react-icons/si";

export default function joinus() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-center items-center">
        <SiNike className="w-16 h-16 sm:w-20 sm:h-20 mb-8" />
      </div>

      <div className="flex justify-center items-center">
        <h1 className="font-bold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Become a Nike Member
        </h1>
      </div>

      <div className="flex justify-center items-center mt-10">
        <p className="text-center leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
          Create your Nike Member profile and get <br />
          first access to the very best of Nike <br />
          products, inspiration, and community.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {/* Email */}
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-96 md:w-96 px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            required
          />
        </div>

        {/* Password */}
        <div className="flex justify-center">
          <input
            type="password"
            placeholder="Password"
            className="w-full sm:w-96 md:w-96 px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            required
          />
        </div>

        {/* Full Name */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full sm:w-96 md:w-96 px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full sm:w-96 md:w-96 px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="flex justify-center">
          <input
            type="number"
            placeholder="Date of Birth"
            className="w-full sm:w-96 md:w-96 px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
            required
          />
        </div>

        <div className="flex justify-center items-center mt-2">
          <p className="text-center text-sm sm:text-base">
            Get a Nike Member Reward year on your birthday.
          </p>
        </div>

        {/* Country Select */}
        <div className="flex justify-center">
          <select
            id="country"
            name="Enter your country"
            className="mt-1 block w-full sm:w-96 md:w-96 px-4 py-3 border border-gray-300 rounded-md focus:ring-black focus:border-black"
          >
            <option value="in">India</option>
            <option value="pak">Pakistan</option>
            <option value="ch">China</option>
            <option value="Ban">Bangladesh</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>

        {/* Gender Inputs */}
        <div className="flex justify-center space-x-4 mt-4">
          <input
            type="text"
            placeholder="Male"
            className="w-40 sm:w-48 md:w-48 px-4 py-3 text-center border border-gray-300 rounded-md focus:ring-black focus:border-black"
          />
          <input
            type="text"
            placeholder="Female"
            className="w-40 sm:w-48 md:w-48 px-4 py-3 text-center border border-gray-300 rounded-md focus:ring-black focus:border-black"
          />
        </div>

        {/* Email Signup Checkbox */}
        <div className="flex justify-center items-center mt-4">
          <input
            type="checkbox"
            className="form-checkbox focus:ring-black focus:border-black w-7 h-7"
          />
          <p className="ml-2 text-gray-600 text-sm sm:text-base">
            Sign up for emails to get updates from Nike on <br />
            products, offers, and your Member benefits
          </p>
        </div>

        {/* Terms and Privacy */}
        <div className="flex justify-center items-center mt-6">
          <p className="text-center text-sm sm:text-base text-gray-600">
            By creating an account, you agree to Nike's{" "}
            <a href="#" className="underline font-bold">
              Privacy <br />
              Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline font-bold">
              Terms of Use.
            </a>
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-6">
          <button
            type="submit"
            className="w-full sm:w-96 md:w-96 bg-black text-white text-sm font-semibold py-3 mt-6 uppercase hover:bg-gray-800"
          >
            Join in
          </button>
        </div>

        {/* Already a Member Link */}
        <div className="flex justify-center items-center mt-6 mb-10">
          <p className="text-center text-sm text-gray-600">
            Already a Member?{" "}
            <a href="/Sign-in" className="underline font-bold">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
