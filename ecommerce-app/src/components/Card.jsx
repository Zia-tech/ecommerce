import { Link } from "react-router-dom";

export default function Card({ product }) {
  return (
    <div className="bg-white shadow rounded p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-blue-600 font-bold mt-2">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        View Details
      </Link>
    </div>
  );
}
