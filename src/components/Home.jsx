import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaClock,
  FaHandHoldingUsd,
  FaLightbulb,
} from "react-icons/fa";

import { FaPlay } from "react-icons/fa";
import Logo from "../assets/IMG_0930.JPEG-removebg-preview.png";
import Women from "../assets/heroImage.jpg";
import ChatBox from "./ChatBox";
import SocialMedia from "./SocialMedia";
import Projects from "./Projects";
import About from "./About";
import InfluencerGrid from "./InfluencerGrid";

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-white dark:bg-[#0f172a] mb-10 mt-10 rounded-lg shadow-md">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 p-6">
          <div className="inline-block bg-yellow-300 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold dark:bg-yellow-400 dark:text-yellow-900">
            Welcome To ommediagency
          </div>

          <div className="border bg-gray-50 dark:bg-gray-900 px-4 py-6 md:p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-snug text-center md:text-left">
              Best <span className="text-indigo-500">DIGITAL</span> Marketing{" "}
              <span className="text-pink-500">AGENCY</span>
              <div>in India</div>
            </h1>
          </div>

          <div className="flex items-center  mt-2 border bg-gray-50 dark:bg-gray-900 rounded-md ">
            <img src={Logo} alt="Influencers" width={80} height={40} />

            <p className="text-md font-medium text-gray-800 dark:text-gray-300 logop ">
              5658+ Top Influencers Connected With Us
            </p>
          </div>

          <a
            href="#"
            className="bg-yellow-300 font-semibold text-sm  text-yellow-800 inline-block rounded-full px-4 no-underline  dark:bg-yellow-400 dark:text-yellow-900"
          >
            PROMOTE YOUR BUSINESS THROUGH CELEBRITY
          </a>

          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed p-4 rounded-md logop" >
            Ommediagency is the best influencer marketing agency in India which
            provides the top influencer marketing platform to help brands /
            visionary marketers leverage social media influencers’ content in
            marketing the product/service. Our influencer marketing experts
            unite brands with top content creators, social media influencers,
            artists, celebrities, vloggers and bloggers with interested viewers
            (brand’s potential customers) for executing award winning influencer
            marketing campaigns.
          </p>

          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 transition"
            >
              Contact Us
            </a>
            <button className="flex items-center text-gray-900 dark:text-white font-medium">
              <FaPlay className="w-5 h-5 mr-2 text-yellow-400" />
              Watch Latest Works
            </button>
          </div>
        </div>

        {/* Right Section - Image + Icons */}
        <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center items-center">
          <img
            src={Women}
            alt="Team"
            width={400}
            height={400}
            className="relative z-10 w-[400px] h-[400px] object-cover rounded-full"
          />

          {/* Social Icons */}
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -top-6 -left-6 z-10"
          >
            <FaFacebookF className="w-10 h-10 text-blue-600 bg-white dark:bg-gray-800 rounded-full p-2 shadow cursor-pointer" />
          </a>

          <a
            href="https://www.youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 -left-4 z-10"
          >
            <FaYoutube className="w-10 h-10 text-red-600 bg-white dark:bg-gray-800 rounded-full p-2 shadow cursor-pointer" />
          </a>

          <a
            href="https://www.instagram.com/ommediagency.in/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/3 right-0 z-10"
          >
            <FaInstagram className="w-10 h-10 text-pink-600 bg-white dark:bg-gray-800 rounded-full p-2 shadow cursor-pointer" />
          </a>

          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-1/4 right-8 z-10"
          >
            <FaTwitter className="w-10 h-10 text-blue-400 bg-white dark:bg-gray-800 rounded-full p-2 shadow cursor-pointer" />
          </a>

          <a
            href="https://www.tiktok.com/@yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20"
          >
            <FaTiktok className="w-10 h-10 text-black dark:text-white bg-white dark:bg-gray-800 rounded-full p-2 shadow cursor-pointer" />
          </a>

          <div className="absolute top-0 right-0 bg-yellow-300 text-yellow-900 dark:bg-yellow-400 dark:text-yellow-800 px-4 py-2 rounded-xl shadow text-sm z-20">
            180+
            <br />
            Brands Joined
          </div>
          <div className="absolute bottom-4 left-0 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-xl shadow text-sm z-20">
            <span className="font-bold">85%</span> Sales Growth
          </div>
        </div>
      </div>

      <InfluencerGrid />

      {/* Why Choose Us */}
      <section className="bg-indigo-900 text-white px-6 py-12 rounded-3xl mx-auto max-w-7xl mb-10">
        <div className="grid md:grid-cols-4 gap-6 items-stretch text-left">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Why Choose Us</h2>
            <p className="mb-3">
              → Unparalleled expertise: Our team brings a wealth of experience
              and industry know-how to ensure your digital success.
            </p>
            <p>
              → Tailored solutions: We understand that every business is unique
              – our strategies are crafted to meet your specific goals and
              challenges.
            </p>
          </div>

          <div className="md:col-span-1 pl-6">
            <div className="flex items-center gap-2 mb-2">
              <FaClock className="text-yellow-300" size={20} />
              <h3 className="text-lg font-semibold">Save Your Time</h3>
            </div>
            <p className="text-sm">
              We’ve automated ad creation, influencer selection, and delivery.
              Focus on growth — we handle the backend.
            </p>
          </div>

          <div className="md:col-span-1 bg-green-500 text-white p-6 rounded-xl flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <FaHandHoldingUsd size={24} />
              <h3 className="text-xl font-semibold">Budget Savvy</h3>
            </div>
            <p>
              Get higher reach and impact without burning your marketing budget.
            </p>
          </div>

          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <FaLightbulb className="text-yellow-300" size={20} />
              <h3 className="text-lg font-semibold">Best Strategy</h3>
            </div>
            <p className="text-sm">
              Connecting brands & influencers with strategies that convert.
              Build real impact, not just clicks.
            </p>
          </div>
        </div>
      </section>

      <Projects />
      <About />
      <ChatBox />
      <SocialMedia />
    </div>
  );
}
