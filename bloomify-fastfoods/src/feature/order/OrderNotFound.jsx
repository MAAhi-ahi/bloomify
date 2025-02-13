import { useNavigate } from 'react-router-dom';
import { FaSadTear } from 'react-icons/fa';
import { motion } from 'framer-motion';

function OrderNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 text-gray-800 px-4 md:px-8 w-full max-w-screen-lg mx-auto text-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-3 text-red-500 text-4xl sm:text-5xl md:text-6xl"
      >
        <FaSadTear />
        <h1 className="font-bold">Oops! Order Not Found 😞</h1>
      </motion.div>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 text-center w-full max-w-md">
        Sorry! We couldn&apos;t find your order. Please check your order ID or try again later.
      </p>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate('/menuhighlight')}
        className="px-4 py-2 sm:px-6 sm:py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300 text-sm sm:text-base flex items-center gap-2"
      >
       &larr; Back To Menu Showcase
      </motion.button>
    </div>
  );
}

export default OrderNotFound;
