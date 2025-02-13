import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center space-x-4 py-4">
      <Link to="/" className="flex items-center space-x-2">
        <img 
          src="/images/logo.png" 
          alt="Bloom food" 
          className="h-12 w-12 object-cover rounded-full shadow-lg bg-slate-50"
        />
        <span className="text-2xl font-bold text-slate-100 hover:text-black transition">
          Bloomify
        </span>
      </Link>
    </div>
  );
}

export default Header;
