// components/ServicesPage.tsx
import {
  FaBullhorn,
  FaChartLine,
  FaUsers,
  FaPenNib,
  FaRocket,
  FaVideo,
} from "react-icons/fa";


import gameImg from '../assets/2309-w026-n002-3812B-p1-3812.jpg'
import songImg from '../assets/SL_123119_26540_03.jpg'
import brandingImg from '../assets/diverse-people-thinking-planning-marketing-brand-concept.jpg'

const services = [
  {
    title: "Influencer Marketing",
    description:
      "Connect your brand with top influencers, vloggers, and creators to boost visibility and build authentic trust.",
    icon: <FaBullhorn className="text-orange-500 text-2xl" />,
  },
  {
    title: "Social Media Management",
    description:
      "We handle your complete social media presence — strategy, content, posting, and engagement.",
    icon: <FaUsers className="text-orange-500 text-2xl" />,
  },
  {
    title: "Performance Marketing",
    description:
      "Drive results through paid campaigns optimized for conversions, ROI, and customer acquisition.",
    icon: <FaChartLine className="text-orange-500 text-2xl" />,
  },
  {
    title: "Content Creation",
    description:
      "High-quality, scroll-stopping content for reels, YouTube, banners, and product ads across all platforms.",
    icon: <FaPenNib className="text-orange-500 text-2xl" />,
  },
  {
    title: "Brand Strategy",
    description:
      "Define your voice, messaging, and positioning to ensure every campaign aligns with your core goals.",
    icon: <FaRocket className="text-orange-500 text-2xl" />,
  },
  {
    title: "Video Production",
    description:
      "Complete video solutions — script, shoot, edit — crafted for digital platforms & brand stories.",
    icon: <FaVideo className="text-orange-500 text-2xl" />,
  },
];

const About = () => {
  return (
    <>
     <section className="container mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        Influencer Marketing Services
      </h1>
      <p className="mt-4 text-gray-700 dark:text-gray-300">
        We specialize in brand, song, and game promotion through effective influencer marketing strategies tailored for you.
      </p>

      <div className="mt-10 grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
          <img src={brandingImg} alt="Brand Promotion" className="w-full h-48 object-cover" />
          <div className="p-6 text-left">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Brand Promotion
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Elevate your brand visibility with our targeted influencer marketing strategies that engage your audience effectively.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
          <img src={songImg} alt="Song Promotion" className="w-full h-48 object-cover" />
          <div className="p-6 text-left">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Song Promotion
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Boost your musics reach with our influencer partnerships, ensuring your songs resonate with the right listeners.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
          <img src={gameImg} alt="Game Promotion" className="w-full h-48 object-cover" />
          <div className="p-6 text-left">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Game Promotion
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Engage gamers with our tailored promotions that connect your game to the right audience effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white dark:bg-[#0f172a] text-black dark:text-white px-6 md:px-16 py-16 transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What We <span className="text-orange-500">Offer</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From strategy to execution — Ommediagency delivers complete digital
          marketing solutions to help brands grow in the influencer era.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default About;
