
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
  },
  {
    id: 2,
    name: "Headphones",
    price: 2000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 3000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Total cart items
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      {/* Navbar */}
      <nav className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-blue-600">
          MyStore
        </h1>

        <div className="text-lg font-semibold">
          🛒 Cart ({totalItems})
        </div>
      </nav>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Products Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-6">
            Products
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg"
                />

                <h3 className="text-xl font-semibold mt-4">
                  {product.name}
                </h3>

                <p className="text-gray-600 my-2">
                  ₹{product.price}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white w-full py-2 rounded-lg hover:bg-blue-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="bg-white rounded-xl shadow p-5 h-fit">
          <h2 className="text-2xl font-bold mb-5">
            Your Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="border-b py-4"
              >
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-gray-600">
                  ₹{item.price} × {item.quantity}
                </p>

                <div className="flex items-center gap-3 mt-3">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 ml-auto"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Total */}
          <div className="mt-6">
            <div className="flex justify-between font-bold text-xl">
              <span>Total:</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>

            <button
              disabled={cart.length === 0}
              className="bg-green-600 text-white w-full py-3 rounded-lg mt-5 hover:bg-green-700 disabled:bg-gray-400"
            >
              Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
