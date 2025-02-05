import { FaHamburger } from "react-icons/fa"; // Burger Icon
import { FaLeaf } from "react-icons/fa"; // Leaf Icon (🌿)
import { BsFlower1 } from "react-icons/bs"; // Flower Icon (🌸)

function BurgerHeader() {
    return (
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-anton font-normal not-italic text-stone-800 uppercase tracking-wide shadow-inner inline-block relative ">
            Slice of Flavor{" "}
            <FaHamburger className="inline-block text-yellow-500 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            <span className="text-stone-800">The Burger You Didn&apos;t Know</span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <FaLeaf className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
              <BsFlower1 className="text-pink-500 w-5 h-5 md:w-6 md:h-6" />
              <FaLeaf className="text-green-500 w-5 h-5 md:w-6 md:h-6" />
            </div>
          </h1>
        </div>
      );
}

export default BurgerHeader
