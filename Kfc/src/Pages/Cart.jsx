import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [donation, setDonation] = useState(5.0);
  const navigate = useNavigate();

  // Fetch the cart items from the server
  async function fetchCart() {
    try {
      let res = await fetch("https://carbonated-florentine-collard.glitch.me/Cart");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      let data = await res.json();
      setCartItems(
        data.map(item => ({
          ...item,
          quantity: item.quantity || 1, // Ensure quantity is initialized to 1 if missing
        }))
      );
      setIsLoading(false);
    } catch (error) {
      console.error("There was an error fetching the cart:", error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  // Increment item quantity
  const incrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
  };

  // Decrement item quantity
  const decrementQuantity = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity -= 1;
      setCartItems(updatedCartItems);
    }
  };

  // Handle item removal
  const handleRemove = async (id) => {
    try {
      await axios.delete(`https://carbonated-florentine-collard.glitch.me/Cart/${id}`);
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Toggle donation on checkbox change
  const toggleDonation = () => {
    setDonation(donation === 0 ? 5.0 : 0);
  };

  // GST calculation function
  const GST = (price) => (price * 0.05).toFixed(2);

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => {
    const itemPrice = parseFloat(item.Price) || 0; // Ensure price is a valid number
    const subtotal = itemPrice * item.quantity;
    return total + subtotal + parseFloat(GST(itemPrice)) + donation;
  }, 0);

  // Display loading or empty cart message
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
      <div className="flex-1 mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.map((item, index) => (
          <div key={item.id} className="mb-6">
            <h2 className="text-2xl font-bold mb-4">{item.Name}</h2>
            <img className="w-[30%]" src={item.Image} alt={item.Name} />
            <div className="flex items-center mb-4 mt-4">
              <button
                onClick={() => decrementQuantity(index)}
                disabled={item.quantity === 1}
                className={`px-3 py-1 bg-gray-200 rounded-lg ${
                  item.quantity === 1 ? "opacity-50" : ""
                }`}
              >
                -
              </button>
              <span className="mx-4">{item.quantity}</span>
              <button
                onClick={() => incrementQuantity(index)}
                className="px-3 py-1 bg-gray-200 rounded-lg"
              >
                +
              </button>
            </div>
            <div className="text-xl font-semibold">
              ₹{parseFloat(item.Price).toFixed(2)}
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="text-red-500 mt-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="md:w-1/3 w-full p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl font-bold mb-4">{cartItems.length} ITEM(S)</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="mb-2">
            <div className="flex justify-between">
              <span>{item.Name}</span>
              <span>
                ₹{(parseFloat(item.Price) * item.quantity).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>GST</span>
              <span>₹{GST(parseFloat(item.Price))}</span>
            </div>
          </div>
        ))}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="addHope"
            className="mr-2"
            checked={donation !== 0}
            onChange={toggleDonation}
          />
          <label htmlFor="addHope">
            Donate ₹{donation.toFixed(2)} to Add Hope.
          </label>
        </div>
        <button
          className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold"
          onClick={() => alert(`Checkout Total: ₹${totalAmount.toFixed(2)}`)}
        >
          Checkout ₹{totalAmount.toFixed(2)}
        </button>
      </div>
    </div>
  );
}

export default Cart;
