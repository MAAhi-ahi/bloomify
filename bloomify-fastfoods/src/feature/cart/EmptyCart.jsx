import { Link } from 'react-router-dom';
import { FaHamburger } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-5 bg-gradient-to-r from-yellow-100 to-red-100 fixed top-0 left-0 w-full h-full z-50 overflow-hidden">
      <FaHamburger className="text-7xl text-red-500 mb-4 animate-bounce" />
      <h2 className="text-3xl font-bold text-red-600 drop-shadow-lg">Your Food Cart is Empty</h2>
      <p className="text-gray-700 mt-2 max-w-md text-lg font-medium">
        Craving something delicious? Add some mouth-watering fast food to your cart now and enjoy a feast!
      </p>
      <button className="mt-5 px-6 py-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105">
      <Link to="/menuhighlight"> Explore  Our Menu Showcase!</Link>
      </button>
    </div>
  );
};

export default EmptyCart;
