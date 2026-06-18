export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Men’s Clothing Store</h1>
      <p className="text-gray-600 mb-8">
        Discover stylish and affordable men’s clothing. Browse our products and find your perfect fit.
      </p>
      <a
        href="/products"
        className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
      >
        Shop Now
      </a>
    </div>
  );
}
