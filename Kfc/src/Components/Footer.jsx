import React from 'react'


const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10 ">
        <div className="container w-[98%] ml-[100px] ">
          <div className="flex flex-col md:flex-row gap-8">
            <div>
                <img className='mr-10' src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" alt="" />
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">Legal</a>
              <a href="#" className="hover:text-gray-400">Terms and Conditions</a>
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Disclaimer</a>
              <a href="#" className="hover:text-gray-400">Caution Notice</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">KFC India</a>
              <a href="#" className="hover:text-gray-400">About KFC</a>
              <a href="#" className="hover:text-gray-400">KFC Care</a>
              <a href="#" className="hover:text-gray-400">Careers</a>
              <a href="#" className="hover:text-gray-400">Our Golden Past</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">KFC Food</a>
              <a href="#" className="hover:text-gray-400">Menu</a>
              <a href="#" className="hover:text-gray-400">Order Lookup</a>
              <a href="#" className="hover:text-gray-400">Gift Card</a>
              <a href="#" className="hover:text-gray-400">Nutrition & Allergen</a>
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#" className="hover:text-gray-400">Support</a>
              <a href="#" className="hover:text-gray-400">Get Help</a>
              <a href="#" className="hover:text-gray-400">Contact Us</a>
              <a href="#" className="hover:text-gray-400">KFC Feedback</a>
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            </div>
            <div className="flex flex-col items-start md:flex-row md:items-center md:justify-center space-y-2 gap-10">
              <a href="#" className="hover:text-gray-400 flex justify-center gap-2"> <span><img src="//images.ctfassets.net/wtodlh47qxpt/6qgKpWUOIsrIiazhk3cdmF/d60b4c20be69bab1f939bf33348b67e9/Find_KFC.svg" alt=""/></span><span>Find a KFC</span></a>
              <img className='w-[25%]' src="//images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" alt="Google Play"/>
            
              <img src="//images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" alt="Apple Store"/>
            </div>
          </div>
          
            
            <div className="text-center text-sm mt-[50px] ">
              <p>© KFC Corporation 2024 All rights reserved</p>
            </div>
          </div>
        
      </footer>
    );
  };
  
  export default Footer;