import { Button, useToast } from '@chakra-ui/react'; // Import useToast
import React, { useState, useEffect, useContext } from 'react';
import { BiSolidCartAdd } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios
import { AuthContext } from '../Components/AuthContextProvider';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [list, setList] = useState("INTERNATIONAL BURGER FEST");
  const [cartMessage, setCartMessage] = useState('');  // For user feedback
  const navigate = useNavigate();
  const toast = useToast(); // Initialize toast
  const { cartItemlength, setCartItemslength, isAuth } = useContext(AuthContext); // Check authentication
console.log(isAuth)
  // Fetch products
  async function fetchProducts() {
    try {
      let res = await fetch("https://carbonated-florentine-collard.glitch.me/Data");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      let data = await res.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
      console.error("There was an error fetching the products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle category selection
  function handleClick(e) {
    setList(e.target.innerText);
  }

  // Handle Add to Cart functionality
  async function handleCart(id) {
    // Check if the user is authenticated before adding to cart
    if (!isAuth) {
      toast({
        title: "Please log in.",
        description: "You need to log in to add items to the cart.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');  // Redirect to login page
      return;
    }

    try {
      const productToAdd = products.find(product => product.id === id);
      if (productToAdd) {
        // Check if the item already exists in the cart
        const cartResponse = await axios.get("https://carbonated-florentine-collard.glitch.me/Cart");
        const cartItems = cartResponse.data;
        const itemInCart = cartItems.find(item => item.id === productToAdd.id);

        if (itemInCart) {
          // If the item is already in the cart
          toast({
            title: "Item already in cart.",
            description: `${productToAdd.Name} is already in your cart.`,
            status: "info",
            duration: 3000,
            isClosable: true,
          });
        } else {
          // Add the item to the cart if it doesn't exist
          const res = await axios.post("https://carbonated-florentine-collard.glitch.me/Cart", {
            id: productToAdd.id,
            Name: productToAdd.Name,
            Price: productToAdd.Price,
            Quantity: 1, // Adding 1 item by default,
            Image: productToAdd.Image,
          });

          if (res.status === 201 || res.status === 200) {
            setCartMessage(`${productToAdd.Name} added to cart!`);
            toast({
              title: "Item added.",
              description: `${productToAdd.Name} has been added to your cart.`,
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }
        }
      }
    } catch (error) {
      console.error("There was an error adding the product to the cart:", error);
      setCartMessage('Failed to add product to cart.');
      toast({
        title: "Error.",
        description: "Failed to add product to cart.",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    } finally {
      setTimeout(() => setCartMessage(''), 3000); // Reset message after 3 seconds
    }
  }

  const filteredProducts = products.filter((product) => product.Category === list);

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/4 fixed">
          <h1 className="text-2xl font-bold mb-4">KFC MENU</h1>
          <ul className="space-y-2">
            <li onClick={handleClick} className="hover:text-red-500 cursor-pointer">INTERNATIONAL BURGER FEST</li>
            <li onClick={handleClick} className="hover:text-red-500 cursor-pointer">MATCH DAY COMBOS</li>
            <li onClick={handleClick} className="hover:text-red-500 cursor-pointer">VALUE LUNCH SPECIALS</li>
            <li onClick={handleClick} className="hover:text-red-500 cursor-pointer">BOX MEALS</li>
            <li onClick={handleClick} className="hover:text-red-500 cursor-pointer">BURGERS</li>
            <li onClick={handleClick} className="hover:text-red-500 cursor-pointer">CHICKEN BUCKETS</li>
            <li onClick={handleClick} className="hover:text-red-500 cursor-pointer">RICE BOWLZ</li>
            <li onClick={handleClick} className="hover:text-red-500 cursor-pointer">VALUE SNACKERS</li>
            <li onClick={handleClick} className="hover:text-red-500 cursor-pointer">CHICKEN ROLLS</li>
          </ul>
        </div>

        <div className="w-3/4 m-auto mr-11">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-500"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 font-bold">Error: {error}</div>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4">{list}</h2>
              {cartMessage && <div className="text-green-500 mb-4">{cartMessage}</div>} {/* Display feedback message */}
              <div className="bg-[#f8f7f5] grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="border p-4 rounded">
                    <img src={product.Image} alt={product.Name} className="w-full h-50 object-cover rounded-md" />
                    <h3 className="text-lg font-bold mt-2">{product.Name}</h3>
                    <p className="text-red">{product.Type}</p>
                    <p className="text-red-500 font-bold">₹{product.Price}</p>
                    <p>{product.Description}</p>

                    <Button
                      onClick={() => handleCart(product.id)} // Simplified onClick
                      textAlign="end" w="40%" borderRadius="20px" mt="4" colorScheme="red"
                    >
                      Add to Cart
                    </Button>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
