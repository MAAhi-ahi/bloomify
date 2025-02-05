import { FaPizzaSlice } from "react-icons/fa"; // Pizza Icon 🍕
import { FaLeaf } from "react-icons/fa"; // Leaf Icon 🌿
import { BsFlower1 } from "react-icons/bs"; // Flower Icon 🌸



function PIzzaHeader() {
    return (
        
   <div className="text-center">
      <h1 className="text-3xl md:text-5xl font-anton font-normal not-italic text-stone-800 uppercase tracking-wide shadow-inner inline-block">
        Slice of Heaven{" "}
        <FaPizzaSlice className="inline-block text-yellow-500 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        <span className="text-stone-800">The Pizza You Crave</span>
        {/* Underline with React Icons */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          <FaLeaf className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
          <BsFlower1 className="text-pink-500 w-5 h-5 md:w-6 md:h-6" />
          <FaLeaf className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
        </div>
      </h1>
    </div>
        
    )
}

export default PIzzaHeader


