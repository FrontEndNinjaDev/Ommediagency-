export default function InfluencerCard({ image, username, link }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg dark:shadow-md hover:shadow-2xl transition-shadow duration-300">
      <img src={image} alt={username} className="w-full h-90 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          @{username}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          View Profile →
        </a>
      </div>
    </div>
  );
}
