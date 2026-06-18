import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ProductDetails() {
     const [product, setProduct] = useState(null);
     const { id } = useParams();
    
      useEffect(() => {
        fetchProduct();
      }, []);
    
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
          const data = response.data;

          // ✅ Only set the product
          setProduct(data);
        } catch (error) {
          console.log("Error:", error);
        }
      };
    return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white shadow rounded p-6 flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-64 object-contain"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-blue-600 font-bold text-xl mb-6">${product.price}</p>
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
