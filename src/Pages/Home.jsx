import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { axiosInstance } from "../config/axiosinstance";
import {
  RiArrowRightLine,
  RiPriceTag3Line,
  RiShieldCheckLine,
  RiStarLine,
} from "react-icons/ri";
import { FiBox, FiTrendingUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setProducts } from "../features/product/productSlice";

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { loggedInUsers } = useSelector((state) => state.auth);

  const { products, isLoading } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const getProducts = async () => {
    try {
      const res = await axiosInstance.get("/products");
      dispatch(setProducts(res.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center text-3xl font-bold">
        Loading...
      </div>
    );
  }

  const firstName = loggedInUsers?.name?.split(" ")[0] || "User";

  const totalProducts = products.length;

  const categories = [...new Set(products.map((item) => item.category))];

  const categoryData = categories.map((category) => ({
    name: category,
    count: products.filter((item) => item.category === category).length,
  }));

  const topRated = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 5);

  const newArrivals = [...products].sort((a, b) => b.id - a.id).slice(0, 5);

  const stats = [
    {
      title: "Cart Items",
      value: cartItems.length,
      subtitle: "In your bag",
      icon: <FiBox />,
      color: "bg-lime-900/30 text-lime-400",
    },
    {
      title: "Cart Value",
      value: `${total.toFixed(2)}`,
      subtitle: "Ready to checkout",
      icon: <FiTrendingUp />,
      color: "bg-blue-900/30 text-blue-400",
    },
    {
      title: "Top Products",
      value: topRated.length,
      subtitle: "Highly rated",
      icon: <RiStarLine />,
      color: "bg-yellow-900/30 text-yellow-400",
    },
    {
      title: "Categories",
      value: categories.length,
      subtitle: "To explore",
      icon: <RiPriceTag3Line />,
      color: "bg-purple-900/30 text-purple-400",
    },
  ];

  const categoryIcons = {
    electronics: "💻",
    jewelery: "💍",
    "men's clothing": "👔",
    "women's clothing": "👗",
  };

  return (
    <div className="min-h-screen px-6 py-8">
      {/* ================= HERO ================= */}

      <section className="border border-gray-700 rounded-3xl overflow-hidden">
        <div className="bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px]">
          <div className="flex flex-col lg:flex-row justify-between p-12">
            {/* Left */}

            <div>
              <p className="uppercase tracking-[4px] text-lime-400 text-sm font-semibold">
                Good Afternoon 👋
              </p>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mt-6">
                Welcome back,
                <br />
                <span className="text-lime-400">{firstName}!</span>
              </h1>

              <p className="text-gray-400 max-w-xl mt-8 text-lg leading-8">
                Discover today's picks — hand-crafted products across
                electronics, fashion and more.
              </p>

              <div className="flex gap-5 mt-10">
                <button
                  onClick={() => navigate("/main/products")}
                  className="bg-lime-400 text-black font-semibold px-8 py-4 rounded-2xl flex items-center gap-2 hover:scale-105 transition"
                >
                  Shop Now
                  <RiArrowRightLine />
                </button>

                <button
                  onClick={() => navigate("/main/products")}
                  className="border border-gray-700 px-8 py-4 rounded-2xl hover:border-lime-400 transition"
                >
                  View All Products
                </button>
              </div>
            </div>

            {/* Right */}

            <div className="flex lg:flex-col gap-5 mt-10 lg:mt-0">
              <div className="bg-lime-400 border border-lime-700 rounded-3xl w-44 h-32 flex flex-col justify-center items-center">
                <h2 className="text-5xl font-bold">{totalProducts}+</h2>

                <p className=" mt-2">Products Available</p>
              </div>

              <div className="border border-gray-500 rounded-3xl w-44 h-28 flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold">Free</h2>

                <p className="text-gray-400 text-sm mt-1">Delivery on $999+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-10">
        {stats.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-3xl p-6 flex items-center gap-5 hover:border-lime-400 transition"
          >
            <div
              className={`w-16 h-16 rounded-2xl flex justify-center items-center text-3xl ${item.color}`}
            >
              {item.icon}
            </div>

            <div>
              <h2 className="text-3xl font-bold">{item.value}</h2>

              <p className="text-gray-400">{item.title}</p>

              <span className="text-gray-800 text-sm">{item.subtitle}</span>
            </div>
          </div>
        ))}
      </section>

      {/* ================= CATEGORY SECTION STARTS HERE ================= */}

      {/* ================= SHOP BY CATEGORY ================= */}

      <section className="mt-14">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Shop by Category</h2>

          <button
            onClick={() => navigate("/main/products")}
            className="text-lime-400 flex items-center gap-2 hover:gap-3 transition-all"
          >
            View All
            <RiArrowRightLine />
          </button>
        </div>

        <div className="grid lg:grid-cols-4  md:grid-cols-2 gap-6">
          {categoryData.map((cat) => (
            <div
              key={cat.name}
              onClick={() => navigate("/main/products")}
              className="bg-white text-black border rounded-3xl p-8 flex flex-col items-center justify-center hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <div className="text-5xl">{categoryIcons[cat.name] || "📦"}</div>

              <h3 className="text-xl font-semibold mt-5 capitalize text-center">
                {cat.name}
              </h3>

              <p className="text-gray-500 mt-2">{cat.count} items</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TOP RATED & NEW ARRIVALS ================= */}

      <section className="grid lg:grid-cols-2 gap-8 mt-16">
        {/* Top Rated */}

        <div className="bg-white rounded-3xl border border-gray-500 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-2">
              ⭐ Top Rated
            </h2>

            <button
              onClick={() => navigate("/main/products")}
              className="text-lime-500"
            >
              See all →
            </button>
          </div>

          <div className="space-y-4">
            {topRated.map((product) => (
              <div
                key={product.id}
                className="border rounded-2xl p-4 flex justify-between items-center hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-14 h-14 object-contain"
                  />

                  <div>
                    <h3 className="font-semibold text-black text-sm">
                      {product.title.length > 30
                        ? product.title.substring(0, 30) + "..."
                        : product.title}
                    </h3>

                    <p className="text-lime-500 font-bold mt-1">
                      ${product.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/main/products/")}
                  className="w-10 h-10 rounded-xl bg-lime-100 text-lime-500 hover:bg-lime-400 hover:text-black transition"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* New Arrivals */}

        <div className="bg-white rounded-3xl p-8 border border-gray-500">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-black">⚡ New Arrivals</h2>

            <button
              onClick={() => navigate("/main/products")}
              className="text-lime-500"
            >
              See all →
            </button>
          </div>

          <div className="space-y-4">
            {newArrivals.map((product) => (
              <div
                key={product.id}
                className="border rounded-2xl p-4 flex justify-between items-center hover:shadow-md transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-14 h-14 object-contain"
                  />

                  <div>
                    <h3 className="font-semibold text-black text-sm">
                      {product.title.length > 30
                        ? product.title.substring(0, 30) + "..."
                        : product.title}
                    </h3>

                    <p className="text-lime-500 font-bold mt-1">
                      ${product.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate("/main/products")}
                  className="w-10 h-10 rounded-xl bg-lime-100 text-lime-500 hover:bg-lime-400 hover:text-black transition"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="grid lg:grid-cols-3 gap-6 mt-12 mb-8">
        <div className="border border-gray-700 rounded-2xl p-6 flex items-center gap-4">
          <div className="text-3xl text-lime-400">⚡</div>

          <div>
            <h3 className="text-xl font-semibold">Fast Delivery</h3>

            <p className="text-gray-500">Same-day on select items</p>
          </div>
        </div>

        <div className="border border-gray-700 rounded-2xl p-6 flex items-center gap-4">
          <div className="text-3xl text-blue-400">
            <RiShieldCheckLine />
          </div>

          <div>
            <h3 className="text-xl font-semibold">Secure Payments</h3>

            <p className="text-gray-500">100% encrypted checkout</p>
          </div>
        </div>

        <div className="border border-gray-700 rounded-2xl p-6 flex items-center gap-4">
          <div className="text-3xl text-green-400">🏷️</div>

          <div>
            <h3 className="text-xl font-semibold">Best Prices</h3>

            <p className="text-gray-500">Price-match guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
