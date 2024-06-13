// BurgerCart.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
    console.log(product)
  async function fetchProduct() {
    try {
      let res = await fetch(`https://fascinated-half-parent.glitch.me/Data/${id}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      let data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("There was an error fetching the product:", error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const { Name, Price,Type,Description,Image,Category } = product;
  const GST = (Price * 0.05).toFixed(2); // Assuming 5% GST
  const addHopeDonation = 5.0;
  const subtotal = Price * quantity;
  const total = subtotal + parseFloat(GST) + addHopeDonation;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
      <div className="flex-1 mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">{Name}</h2>
        <img className="w-[30%]" src={Image} />
        <div className="flex items-center mb-4 mt-4">
          <button
            onClick={decrementQuantity}
            className="px-3 py-1 bg-gray-200 rounded-lg"
          >
            -
          </button>
          <span className="mx-4">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="px-3 py-1 bg-gray-200 rounded-lg"
          >
            +
          </button>
        </div>
        <div className="text-xl font-semibold">₹{Price.toFixed(2)}</div>
        <button className="text-red-500 mt-4">Remove</button>
      </div>
      <div className="md:w-1/3 w-full p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl font-bold mb-4">1 ITEM</h2>
        <button className="text-red-500 mb-4">Apply</button>
        <div className="mb-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>GST</span>
            <span>₹{GST}</span>
          </div>
          <div className="flex justify-between">
            <span>Add Hope</span>
            <span>₹{addHopeDonation.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="addHope" className="mr-2" checked readOnly />
          <label htmlFor="addHope">
            Donate ₹{addHopeDonation.toFixed(2)} to Add Hope.
          </label>
        </div>
        <button className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold">
          Checkout ₹{total.toFixed(2)}
        </button>
      </div>
    </div>
  );
}

export default Cart;
