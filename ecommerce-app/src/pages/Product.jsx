import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
export default function Product() {
     const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetchProducts();
      }, []);
    
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          const data = response.data;

          // ✅ Only set the array of results
          setProducts(data);
        } catch (error) {
          console.log("Error:", error);
        }
      };
    return (
        
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Men’s Clothing</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
