// ClientCard.jsx
export default function ClientCard({ image, name }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition duration-300 flex items-center justify-center">
      <img src={image} alt={name} className="w-50 h-50 object-contain" />
    </div>
  );
}
