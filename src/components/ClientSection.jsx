import ClientCard from "./ClientCard";
import client1 from "../assets/client card/1.avif";
import client2 from "../assets/client card/2.avif";
import client3 from "../assets/client card/3.avif";
import client4 from "../assets/client card/4.avif";
import client5 from "../assets/client card/5.avif";
import client6 from "../assets/client card/6.avif";
import client7 from "../assets/client card/7.avif";
import client8 from "../assets/client card/8.avif";

const clients = [
  { image: client1, name: "Client One" },
  { image: client2, name: "Client Two" },
  { image: client3, name: "Client Three" },
  { image: client4, name: "Client Four" },
  { image: client5, name: "Client Five" },
  { image: client6, name: "Client Six" },
  { image: client7, name: "Client Seven" },
  { image: client8, name: "Client Eight" },
];

const ratings = [
  {
    name: "Anjali from Delhi",
    stars: 5,
    text: "Amazing experience! These guys made our campaign go viral within a week!"
  },
  {
    name: "Ravi P., Ecomm Owner",
    stars: 5,
    text: "Sales boosted like crazy. Their influencer strategy is next-level."
  },
  {
    name: "Zoya M., Branding Lead",
    stars: 5,
    text: "Our brand visibility increased 3x. Super creative and super fast!"
  },
  {
    name: "Vikram K., Founder @YuvaBiz",
    stars: 5,
    text: "Affordable, reliable, and insanely good at what they do. Highly recommended."
  }
];

export default function ClientSection() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Our Clients
      </h2>

      {/* Client Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
        {clients.map((client, index) => (
          <ClientCard key={index} image={client.image} name={client.name} />
        ))}
      </div>

      {/* Main Testimonial */}
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="text-lg text-gray-700 dark:text-gray-300 italic">
          “Working with this team has been a game-changer. Their dedication and
          creativity helped us grow our online presence and connect with real
          audiences.”
        </p>
        <p className="mt-4 font-semibold text-gray-900 dark:text-white">
          — Ramesh T., Marketing Head @ BrandXYZ
        </p>
      </div>

      {/* ⭐ Ratings with Text */}
      <div className="max-w-5xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
        {ratings.map((client, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <p className="text-gray-900 dark:text-white font-medium mb-2">
              {client.name}
            </p>

            <div className="flex space-x-1 text-yellow-400 mb-2">
              {Array.from({ length: client.stars }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.955L10 0l2.949 5.955 6.561.955-4.755 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
              {client.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
