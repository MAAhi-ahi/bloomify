import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utitlis/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (! totalCartQuantity) return null;
  return (
    <div className="fixed bottom-0 right-0 bg-gray-800 text-white p-4 flex items-center space-x-4 rounded-tl-lg shadow-lg">
      <p className="flex items-center space-x-2">
        <span className="font-bold">{totalCartQuantity}</span>
        <span className="text-gray-400">|</span>
        <span className="font-bold">{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-full text-sm">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;