import { motion } from "framer-motion";

function Buttons() {
    return (
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }} 
          className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full text-lg"
        >
           Add to Order
        </motion.button>
      );
}

export default Buttons

