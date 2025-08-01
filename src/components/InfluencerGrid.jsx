import guruImg from "../assets/guru_veer8.jpg.avif";
import tharaImg from "../assets/dolly_tapri.jpg.avif";
import dollyImg from "../assets/screenshot-2025-03-31-004325-Aq2WZyDBrgiDg5xJ.avif";

const influencerData = [
  {
    image: guruImg,
    username: "guru_veer8",
    link: "https://instagram.com/guru_veer8",
  },
  {
    image: tharaImg,
    username: "thara.bhai.jogindar",
    link: "https://instagram.com/thara.bhai.jogindar",
  },
  {
    image: dollyImg,
    username: "dolly_ki_tapri_nagpur",
    link: "https://instagram.com/dolly_ki_tapri_nagpur",
  },
];

export default function InfluencerGrid() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white font-heading">
        🚀 Trending Influencers
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {influencerData.map((data, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition duration-300"
          >
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <img
                src={data.image}
                alt={data.username}
                className="w-full  object-cover"
              />
              <div className="p-5 text-center">
                <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 font-body">
                  @{data.username}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 font-body">
                  Follow this influencer to level up your brand!
                </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
