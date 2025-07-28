import InfluencerCard from './InfluencerCard';
import guruImg from '../assets/guru_veer8.jpg.avif';
import tharaImg from '../assets/dolly_tapri.jpg.avif';
import dollyImg from   '../assets/screenshot-2025-03-31-004325-Aq2WZyDBrgiDg5xJ.avif';

const influencerData = [
  {
    image: guruImg,
    username: 'guru_veer8',
    link: 'https://instagram.com/guru_veer8'
  },
  {
    image: tharaImg,
    username: 'thara.bhai.jogindar',
    link: 'https://instagram.com/thara.bhai.jogindar'
  },
  {
    image: dollyImg,
    username: 'dolly_ki_tapri_nagpur',
    link: 'https://instagram.com/dolly_ki_tapri_nagpur'
  }
];

export default function InfluencerGrid() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Trending Influencers
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {influencerData.map((data, index) => (
          <InfluencerCard
            key={index}
            image={data.image}
            username={data.username}
            link={data.link}
          />
        ))}
      </div>
    </section>
  );
}
