import {
  FaChartBar,
  FaBullseye,
  FaUserCheck,
  FaThumbsUp,
} from "react-icons/fa";

import AboutImage from "../assets/heroImage.jpg";

export default function ChatBox() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-16 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      {/* Left Image Section */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        {/* Background Circle */}
        <div className="absolute bg-orange-200 dark:bg-orange-300 rounded-full w-[350px] h-[350px] md:w-[450px] md:h-[450px] z-0" />

        {/* Main People Image */}
        <img
          src={AboutImage}
          alt="Team"
          width={400}
          height={400}
          className="relative z-10 w-[400px] h-[400px] object-cover rounded-full"
        />

        {/* Engagement Label */}
        <div className="absolute left-4 top-8 flex items-center gap-2 bg-white dark:bg-gray-800 shadow px-3 py-1 rounded-full z-20">
          <FaChartBar className="text-orange-500" />
          <div>
            <p className="font-semibold text-sm text-black dark:text-white">
              120%
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-300 -mt-1">
              Engagement
            </p>
          </div>
        </div>

        {/* Sales Graph Label */}
        <div className="absolute right-4 top-10 bg-white dark:bg-gray-800 shadow-lg rounded-lg px-4 py-2 z-20">
          <p className="text-xs text-gray-500 dark:text-gray-300">
            Increase Sales
          </p>
          <p className="text-sm font-bold text-green-500 dark:text-green-400">
            +65.4%
          </p>
          <div className="mt-1 w-24 h-12 bg-gradient-to-r from-green-300 to-green-500 dark:from-green-400 dark:to-green-600 rounded" />
        </div>

        {/* Lead Growth Label */}
        <div className="absolute bottom-4 right-6 flex items-center gap-2 bg-white dark:bg-gray-800 shadow px-3 py-1 rounded-full z-20">
          <FaChartBar className="text-purple-500" />
          <div>
            <p className="font-semibold text-sm text-black dark:text-white">
              85%
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-300 -mt-1">
              Lead Growth
            </p>
          </div>
        </div>
      </div>

      {/* Right Text Content */}
      <div className="w-full lg:w-1/2 text-black dark:text-white">
        <button className="bg-orange-100 dark:bg-orange-300 text-orange-500 dark:text-orange-800 px-4 py-1 rounded-full mb-4 text-sm font-semibold">
          About ommediagency
        </button>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          7 Years Of Experiences In <br />
          Social Media Marketing
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-6">
          “Meet the minds behind our success – a skilled digital marketing team
          committed to translating experience into dynamic campaigns that drive
          your business forward.”
        </p>

        {/* Features */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <FaBullseye className="text-purple-400 mt-1 text-lg" />
            <div>
              <h4 className="font-semibold text-lg">Set Clear Goals</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Define specific and measurable goals for your campaign. Whether
                its increased website traffic, lead generation, or brand
                awareness, having clear objectives will guide your monitoring
                efforts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-purple-100 dark:bg-purple-800 p-4 rounded-xl">
            <FaUserCheck className="text-purple-700 dark:text-purple-300 mt-1 text-lg" />
            <div>
              <h4 className="font-semibold text-lg">
                Be Sure In The Performer
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Meet the bloggers before creating the advertisement. Open
                statistics of their accounts is a key for your assurance.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaThumbsUp className="text-purple-400 mt-1 text-lg" />
            <div>
              <h4 className="font-semibold text-lg">
                Higher Customer Satisfaction & No Risk
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We guarantee that you will pay for correctly placed
                advertisement only. Everything in time and accordingly to your
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
