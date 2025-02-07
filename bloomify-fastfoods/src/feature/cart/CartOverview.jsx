import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utitlis/helpers";
import { FaShoppingCart } from "react-icons/fa"; // React icons import

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-stone-200 p-2 flex items-center justify-between rounded-tl-lg shadow-lg mb-0 overflow-x-auto z-10">
      <div className="flex items-center space-x-4">
        <FaShoppingCart className="text-2xl" />
        <div className="flex space-x-3">
          <span className="font-bold text-lg">{totalCartQuantity} items</span>
          <span className="font-bold text-lg">{formatCurrency(totalCartPrice)}</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          to="/cart"
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full text-sm md:text-base transition-all ease-in-out duration-200"
        >
          Open cart &rarr;
        </Link>
      </div>
    </div>
  );
}

export default CartOverview;
