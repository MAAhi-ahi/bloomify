import { FaPizzaSlice, FaFireAlt } from "react-icons/fa"; 

function PIzzaHeader() {
    return ( 
   <div className="text-center">
      <h1 className="text-3xl md:text-5xl font-anton font-normal not-italic text-stone-800 uppercase tracking-wide shadow-inner">
        Indulge in the Art 
        <span className="text-stone-800">of Authentic Pizza Making!</span>
        <div className="flex gap-2 justify-center mt-3">
        <FaFireAlt className="text-red-500  w-5 h-5 md:w-6 md:h-6 inline-block" />
        <FaPizzaSlice className="inline-block text-yellow-500 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
         
        </div>
      </h1>
    </div>
        
    )
}

export default PIzzaHeader


