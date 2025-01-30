import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-center bg-white shadow-lg rounded-full overflow-hidden max-w-lg mx-auto border border-gray-300 transition-all duration-300 focus-within:ring-2 focus-within:ring-red-500"
    >
      <input
        type="text"
        placeholder="Check order status..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 py-3 text-gray-700 focus:outline-none text-sm md:text-base"
      />
      <button 
        type="submit" 
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-full flex items-center transition-all duration-300"
      >
        <Search className="w-5 h-5" />
      </button>
    </form>
  );
}

export default SearchOrder;
