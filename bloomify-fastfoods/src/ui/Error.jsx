import { useNavigate, useRouteError } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';

function NotFound() {
  const navigate = useNavigate();
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 text-gray-800 px-4 md:px-8 w-full max-w-screen-lg mx-auto text-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center gap-2 text-red-500 text-3xl sm:text-4xl md:text-5xl"
      >
        <FaExclamationTriangle />
        <h1 className="font-bold">Oops! Something went wrong 😢</h1>
      </motion.div>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 text-center w-full max-w-md">
        {error.data || error.message}
      </p>
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate(-1)}
        className="px-3 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition duration-300 text-xs sm:text-sm md:text-base flex items-center gap-2"
      >
        &larr; Go back
      </motion.button>
    </div>
  );
}

export default NotFound;
