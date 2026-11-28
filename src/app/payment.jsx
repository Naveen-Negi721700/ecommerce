
import React, { useState } from "react";
import {
  CreditCard,
  Smartphone,
  Wallet,
  Lock,
  ShieldCheck,
  ArrowLeft,
  CheckCircle,
  ShoppingBag,
} from "lucide-react";

const Payment = () => {
  const [method, setMethod] = useState("card");
  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const [upiId, setUpiId] = useState("");

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Demo only: Payment gateway is not connected.");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 md:py-16">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <nav className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Pay<span className="text-violet-600">Ease.</span>
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Lock size={16} className="text-green-600" />
            Secure Payment
          </div>
        </nav>

        {/* Heading */}
        <div className="mb-10">
          <p className="text-violet-600 font-semibold text-sm uppercase tracking-widest">
            Checkout
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Complete Your Payment
          </h2>
          <p className="text-gray-500 mt-2">
            Choose your preferred payment method and complete your order.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Payment Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-9">

            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Select Payment Method
            </h3>

            {/* Payment Methods */}
            <div className="grid grid-cols-3 gap-3 mb-8">

              {[
                { id: "card", name: "Card", icon: CreditCard },
                { id: "upi", name: "UPI", icon: Smartphone },
                { id: "wallet", name: "Wallet", icon: Wallet },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setMethod(item.id)}
                    className={`rounded-xl border p-4 flex flex-col items-center gap-3 transition ${
                      method === item.id
                        ? "border-violet-600 bg-violet-50 text-violet-700"
                        : "border-gray-200 text-gray-500 hover:border-violet-300"
                    }`}
                  >
                    <Icon size={25} />
                    <span className="font-semibold text-sm">
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <form onSubmit={handlePayment}>

              {/* Card Payment */}
              {method === "card" && (
                <div className="space-y-5">

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={card.name}
                      onChange={handleChange}
                      placeholder="Enter cardholder name"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={card.number}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        value={card.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="password"
                        name="cvv"
                        value={card.cvv}
                        onChange={handleChange}
                        placeholder="***"
                        maxLength={4}
                        required
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                      />
                    </div>

                  </div>
                </div>
              )}

              {/* UPI Payment */}
              {method === "upi" && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Enter UPI ID
                  </label>

                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@upi"
                    required
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />

                  <p className="text-sm text-gray-400 mt-3">
                    Example: username@okaxis
                  </p>
                </div>
              )}

              {/* Wallet Payment */}
              {method === "wallet" && (
                <div className="bg-violet-50 rounded-2xl p-8 text-center">
                  <Wallet size={40} className="mx-auto text-violet-600 mb-4" />
                  <h3 className="font-bold text-gray-900 text-lg">
                    Wallet Payment
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">
                    You will be redirected to your supported wallet provider.
                  </p>
                </div>
              )}

              {/* Security Info */}
              <div className="flex items-center gap-3 bg-green-50 rounded-xl p-4 mt-8">
                <ShieldCheck className="text-green-600 shrink-0" size={24} />
                <p className="text-sm text-green-700">
                  Your payment is protected by secure payment processing.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-7 bg-violet-600 hover:bg-violet-700 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2 transition shadow-lg shadow-violet-100"
              >
                <Lock size={18} />
                Pay ₹4,999
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2 text-gray-500 hover:text-violet-600 mx-auto mt-5 transition"
              >
                <ArrowLeft size={17} />
                Back to Shopping
              </button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 h-fit">

            <div className="flex items-center gap-3 mb-7">
              <div className="bg-violet-100 p-3 rounded-xl">
                <ShoppingBag className="text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Order Summary
              </h3>
            </div>

            {/* Product */}
            <div className="flex gap-4 mb-7">
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-4xl">
                🎧
              </div>

              <div>
                <h4 className="font-bold text-gray-900">
                  Premium Headphones
                </h4>
                <p className="text-sm text-gray-400 mt-1">
                  Black / Wireless
                </p>
                <p className="font-bold text-violet-600 mt-2">
                  ₹4,999
                </p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-5 space-y-4">

              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>₹4,999</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Discount</span>
                <span className="text-green-600">- ₹0</span>
              </div>

              <div className="border-t border-gray-100 pt-5 flex justify-between items-center">
                <span className="font-bold text-gray-900 text-lg">
                  Total Amount
                </span>
                <span className="font-extrabold text-2xl text-violet-600">
                  ₹4,999
                </span>
              </div>

            </div>

            <div className="bg-green-50 p-4 rounded-xl mt-7">
              <div className="flex items-center gap-2 text-green-700 font-semibold text-sm">
                <CheckCircle size={18} />
                Free Delivery
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Expected delivery within 3-5 business days.
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm mt-12">
          © 2026 PayEase. All rights reserved.
        </footer>

      </div>
    </div>
  );
};

export default Payment;
