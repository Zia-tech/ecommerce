import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Men’s Clothing Store</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-green-400">Home</Link>
        <Link to="/products" className="hover:text-green-400">Products</Link>
        <Link to="/cart" className="hover:text-green-400">Cart</Link>
      </div>
    </nav>
  );
}
