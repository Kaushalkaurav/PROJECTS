import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router";
import { Search, Plus } from "lucide-react";
import { axiosInstance } from "../config/axiosinstance";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setProducts } from "../features/product/productSlice";

const ProductPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  let getProductData = async () => {
    try {
      let res = await axiosInstance.get("/products");

      dispatch(setProducts(res.data));
      dispatch(setLoading(false));
    } catch (error) {
      console.log("error in api call", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <h1 className="text-4xl font-bold animate-pulse">
        Loading Products...
      </h1>
    </div>
  );
}

return (
  <div className="max-w-7xl mx-auto py-8 px-4">

    {/* Header */}
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-5xl font-bold text-gray-900">
          All Products
        </h1>

        <p className="text-gray-500 mt-2">
          {filteredProducts.length} Products Found
        </p>
      </div>

      <button
        onClick={() => navigate("/main/products/add")}
        className="flex items-center gap-2 bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-xl font-semibold shadow-lg transition"
      >
        <Plus size={20} />
        Add Product
      </button>
    </div>

    {/* Search & Filter */}
    <div className="flex flex-col md:flex-row gap-4 mb-10">

      <div className="relative flex-1">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-lime-500"
        />
      </div>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="w-60 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-lime-500"
      >
        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>

    </div>

    {/* Products */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>

  </div>
);
};

export default ProductPage;