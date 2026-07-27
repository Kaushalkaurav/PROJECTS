import React from "react";
import { Minus, Plus, Star, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../features/cart/cartSlice";

const CartCard = ({ product }) => {


  const dispatch = useDispatch();

  return (
    <div className="bg-gray-50 border border-gray-800 rounded-3xl p-5 hover:border-lime-400 transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Product Image */}

        <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-4 shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Product Info */}

        <div className="flex-1 w-full">
          <span className="inline-block bg-lime-400/20 text-lime-400 text-xs px-3 py-1 rounded-full capitalize">
            {product.category}
          </span>

          <h2 className="text-xl font-semibold mt-3 line-clamp-2">
            {product.title}
          </h2>

          <div className="flex items-center gap-2 mt-2">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />

            <span className="text-gray-400">{product.rating.rate}</span>

            <span className="text-gray-500 text-sm">
              ({product.rating.count} Reviews)
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-5">
            {/* Price */}

            <div>
              <p className="text-sm text-gray-500">Price</p>

              <h3 className="text-3xl font-bold text-lime-400">
                ${product.price}
              </h3>
            </div>

            {/* Quantity */}

            <div className="flex items-center gap-3">
              <button onClick={()=>dispatch(decrementQuantity(product.id))} className="w-10 h-10 text-white rounded-xl bg-gray-800 hover:bg-lime-400 hover:text-black transition flex justify-center items-center">
                <Minus size={18} />
              </button>

              <span className="text-xl font-semibold w-8 text-center">
                {product.quantity}
              </span>

              <button onClick={()=>dispatch(incrementQuantity(product.id))} className="w-10 h-10 rounded-xl bg-lime-600 text-black hover:scale-105 transition flex justify-center items-center">
                <Plus size={18} />
              </button>
            </div>

            {/* Remove */}

            <button onClick={()=>dispatch(removeFromCart(product.id))} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/15 border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition">
              <Trash2 size={18} />
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;