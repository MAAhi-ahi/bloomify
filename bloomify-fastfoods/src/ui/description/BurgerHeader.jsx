import { FaHamburger } from "react-icons/fa"; 
import {  FaFireAlt  } from "react-icons/fa"; 


function BurgerHeader() {
    return (
     <div className="text-center">
     <h1 className="text-3xl md:text-5xl font-anton font-normal not-italic text-stone-800 uppercase tracking-wide shadow-inner">
      Slice of Flavor{" "}<br/>
      <span className="text-stone-800">
       The Burger You Didn&apos;t Know <FaFireAlt className="text-red-500 inline w-5 h-5 md:w-6 md:h-6" />
       <FaHamburger className="inline-block text-yellow-500 w-6 h-6 md:w-8 md:h-8 " />
      </span>
     </h1>
</div>
      );
}

export default BurgerHeader
