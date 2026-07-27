import React from "react";
import CartCard from "../components/CartCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <div className="flex h-[80vh] items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-500">
          Your Cart is Empty 🛒
        </h1>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8 p-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-6">
        {cartItems.map((item) => (
          <CartCard key={item.id} product={item} />
        ))}
      </div>

      {/* Summary */}
      <div className="sticky top-20 h-fit rounded-xl border bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

        <div className="flex justify-between mb-4">
          <span>Total Items</span>
          <span>{cartItems.length}</span>
        </div>

        <div className="border-t pt-4 flex justify-between text-2xl font-bold">
          <span>Total</span>

          <span className="text-lime-600">${total.toFixed(2)}</span>
        </div>

        <button className="mt-6 w-full rounded-xl bg-lime-500 py-3 font-semibold text-black hover:bg-lime-600 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
