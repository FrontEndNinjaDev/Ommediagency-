// components/ProjectPage.tsx
import {
  FaCheckCircle,
  FaBullhorn,
  FaChartLine,
  FaUsers,
} from "react-icons/fa";


import ProjectsBanner from "../assets/banner.jpg";

const Projects = () => {
  return (
    <section className="bg-white dark:bg-[#0f172a] text-black dark:text-white px-6 md:px-16 py-16 transition-colors duration-300">
      {/* Hero / Banner */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Project Spotlight:{" "}
          <span className="text-orange-500">#DiwaliWithCelebs</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A strategic influencer campaign for a leading e-commerce brand during
          Diwali 2023. We brought together top creators, celebrities, and a
          data-driven approach to achieve stunning results.
        </p>
        <img
          src={ProjectsBanner}
          alt="Project Banner"
          className="rounded-xl mt-8 w-full max-h-[400px] object-cover shadow-lg"
        />
      </div>

      {/* Overview */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300">
            The client approached Ommediagency to promote their festive
            collection across Tier 1 and Tier 2 cities. Our challenge was to
            craft a culturally relevant yet trend-driven campaign that resonates
            with diverse Indian audiences during the festival of lights.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-4">Key Results</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> 5.2M+ Total
              Impressions
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> 120K+ Website Visits
              in 5 Days
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> 40+ Influencers
              Engaged
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" /> 200% ROI Achieved
            </li>
          </ul>
        </div>
      </div>

      {/* What We Did */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">What We Did</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div className="bg-orange-50 dark:bg-orange-200/10 p-4 rounded-lg">
            <FaBullhorn className="text-orange-500 mb-2" />
            <h4 className="font-bold mb-2">Influencer Strategy</h4>
            <p>
              Selected top micro & macro influencers across fashion, lifestyle,
              and tech niches aligned with festive mood.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-200/10 p-4 rounded-lg">
            <FaUsers className="text-orange-500 mb-2" />
            <h4 className="font-bold mb-2">Creator Collaboration</h4>
            <p>
              Managed contracts, briefs, timelines and content approvals with
              over 40 creators seamlessly.
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-200/10 p-4 rounded-lg">
            <FaChartLine className="text-orange-500 mb-2" />
            <h4 className="font-bold mb-2">Performance Analytics</h4>
            <p>
              Monitored real-time metrics and optimized campaign mid-way to
              double engagement & conversion rate.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-xl shadow-md text-center max-w-3xl mx-auto">
        <p className="italic text-gray-700 dark:text-gray-300">
          “Ommediagency truly elevated our Diwali campaign. Their attention to
          detail, influencer connections, and execution helped us exceed all
          targets. We’ll be collaborating again, for sure.”
        </p>
        <p className="font-semibold mt-4 text-purple-700 dark:text-purple-300">
          – E-Commerce Brand Manager
        </p>
      </div>
    </section>
  );
};

export default Projects;
