import { Button } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { BiSolidCartAdd } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [list, setList] = useState("INTERNATIONAL BURGER FEST");
  const navigate=useNavigate()
  console.log(products)
  async function fetchProducts() {
    try {
      let res = await fetch("https://fascinated-half-parent.glitch.me/Data");
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

  function handleClick(e) {
    setList(e.target.innerText);
  }

  const filteredProducts = products.filter((product) => product.Category === list);
  function handlecart(id,e){
      navigate(`/cart/${id}`)
  }

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
              <div className=" bg-[#f8f7f5] grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="border p-4 rounded">
                    <img src={product.Image} alt={product.Name} className="w-full h-50 object-cover rounded-md"/>
                    <h3 className="text-lg font-bold mt-2">{product.Name}</h3>
                    <p className='text-red'>{product.Type}</p>
                    <p className="text-red-500 font-bold">₹{product.Price}</p>
                    <p>{product.Description}</p>
                    <Button onClick={(e)=>handlecart(product.id,e)} textAlign='end' w='40%' borderRadius='20px' mt='4' colorScheme='red'>Add to Cart <BiSolidCartAdd size={26} /></Button>
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
