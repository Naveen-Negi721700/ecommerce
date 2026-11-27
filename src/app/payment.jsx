
import React, { useState } from "react";
import {
  CreditCard,
  Wallet,
  Smartphone,
  Lock,
  ShieldCheck,
  ShoppingBag,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    alert("Payment submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-bold text-gray-900">
            Shop<span className="text-indigo-600">Now.</span>
          </h1>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Lock size={16} />
            Secure Checkout
          </div>
        </div>

        {/* Page Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Checkout
          </h2>
          <p className="text-gray-500 mt-2">
            Complete your payment to place your order.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Payment Section */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 md:p-8">

            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Payment Method
            </h3>

            {/* Payment Options */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">

              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`p-4 border rounded-xl flex flex-col items-center gap-2 transition ${
                  paymentMethod === "card"
                    ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                    : "border-gray-200 text-gray-600 hover:border-indigo-400"
                }`}
              >
                <CreditCard size={25} />
                <span className="font-medium text-sm">Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("upi")}
                className={`p-4 border rounded-xl flex flex-col items-center gap-2 transition ${
                  paymentMethod === "upi"
                    ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                    : "border-gray-200 text-gray-600 hover:border-indigo-400"
                }`}
              >
                <Smartphone size={25} />
                <span className="font-medium text-sm">UPI</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("wallet")}
                className={`p-4 border rounded-xl flex flex-col items-center gap-2 transition ${
                  paymentMethod === "wallet"
                    ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                    : "border-gray-200 text-gray-600 hover:border-indigo-400"
                }`}
              >
                <Wallet size={25} />
                <span className="font-medium text-sm">Wallet</span>
              </button>

            </div>

            {/* Form */}
            <form onSubmit={handlePayment}>

              {paymentMethod === "card" && (
                <div className="space-y-5">

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      placeholder="Name on card"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        maxLength="5"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="password"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        maxLength="4"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                      />
                    </div>

                  </div>
                </div>
              )}

              {paymentMethod === "upi" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    name="upiId"
                    value={formData.upiId}
                    onChange={handleChange}
                    placeholder="example@upi"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-600"
                  />
                  <p className="text-sm text-gray-400 mt-2">
                    Enter your UPI ID to continue.
                  </p>
                </div>
              )}

              {paymentMethod === "wallet" && (
                <div className="bg-indigo-50 rounded-xl p-6 text-center">
                  <Wallet className="mx-auto text-indigo-600 mb-3" size={35} />
                  <h4 className="font-semibold text-gray-800">
                    Wallet Payment
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Continue to your supported wallet provider.
                  </p>
                </div>
              )}

              {/* Security */}
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-xl mt-8">
                <ShieldCheck className="text-green-600" size={25} />
                <p className="text-sm text-green-700">
                  Your payment information is protected by secure payment processing.
                </p>
              </div>

              {/* Pay Button */}
              <button
                type="submit"
                className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition flex justify-center items-center gap-2"
              >
                <Lock size={18} />
                Pay ₹2,499
              </button>

              <button
                type="button"
                className="w-full mt-4 text-gray-500 hover:text-indigo-600 flex justify-center items-center gap-2"
              >
                <ArrowLeft size={17} />
                Back to Shopping
              </button>

            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">

            <div className="flex items-center gap-2 mb-6">
              <ShoppingBag className="text-indigo-600" />
              <h3 className="text-xl font-bold text-gray-900">
                Order Summary
              </h3>
            </div>

            {/* Product */}
            <div className="flex gap-4 mb-6">
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-3xl">
                🎧
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">
                  Wireless Headphones
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Black / Premium
                </p>
                <p className="font-semibold mt-2">
                  ₹2,499
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-5 space-y-4">

              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>₹2,499</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Tax</span>
                <span>₹0</span>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <span className="font-bold text-lg text-gray-900">
                  Total
                </span>
                <span className="font-bold text-2xl text-indigo-600">
                  ₹2,499
                </span>
              </div>

            </div>

            <div className="mt-8 bg-gray-50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-green-600 mb-2">
                <CheckCircle size={18} />
                <span className="font-semibold text-sm">
                  Free Shipping
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Your order will be delivered within 3-5 business days.
              </p>
            </div>

          </div>

        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          © 2026 ShopNow. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Payment;
