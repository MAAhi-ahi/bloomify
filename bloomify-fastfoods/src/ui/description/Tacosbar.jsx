import { GiTacos } from "react-icons/gi"; 
import {  FaFireAlt  } from "react-icons/fa"; 


export default function Tacosbar() {
  return (
    <div className="flex flex-col items-center text-center">
    <h1 className="text-3xl md:text-5xl font-anton font-normal not-italic text-stone-800 uppercase tracking-wide shadow-inner ">
     Crunchy & Tasty
      <span className="text-stone-800">The Tacos You Love</span>
    </h1>


    <div className="flex gap-2 justify-center mt-3">
     <FaFireAlt className="inline-block text-red-500  w-5 h-5 md:w-6 md:h-6" />
     <GiTacos className="inline-block text-yellow-500 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
    </div>
  </div>
  
  );
}


// <FaLeaf className="text-green-500 w-5 h-5 md:w-6 md:h-6 animate-spin-slow" />
//<BsFlower1 className="text-pink-500 w-5 h-5 md:w-6 md:h-6 animate-pulse" />
//<FaLeaf className="text-green-500 w-5 h-5 md:w-6 md:h-6 animate-spin-slow" />
//import { FaLeaf } from "react-icons/fa"; // Leaf Icon 🌿
//import { BsFlower1 } from "react-icons/bs"; // Flower Icon 🌸









