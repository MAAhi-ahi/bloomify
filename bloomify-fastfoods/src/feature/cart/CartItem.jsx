/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utitlis/helpers";
import { useDispatch } from "react-redux";
import { deleteItem, increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";

function CartItem({ item }) {
  const { itemId, name, quantity, totalPrice, imageUrl } = item;
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteItem(itemId)); // Dispatch the delete action
  };

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(itemId)); // Dispatch the increase action
  };

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(itemId)); // Dispatch the decrease action
  };

  return (
    <li className="flex items-center justify-between py-4 border-b border-gray-200">
      {/* Item Image */}
      <img
        src={imageUrl || 'fallback_image_url.jpg'}
        alt={name}
        className="w-16 h-16 object-cover rounded-md mr-4"
      />

      {/* Item Info */}
      <div className="flex-1">
        <p className="text-gray-800 text-lg font-medium">{name}</p>
        <p className="text-gray-600 text-sm">
          {quantity} × {formatCurrency(totalPrice)}
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-2 sm:space-x-4">
  {/* Increase Button */}
  <button
    onClick={handleIncrease}
    className="px-3 py-1 sm:px-4 sm:py-2 text-base sm:text-lg font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition duration-200"
  >
    +
  </button>

  {/* Decrease Button */}
  <button
    onClick={handleDecrease}
    className="px-3 py-1 sm:px-4 sm:py-2 text-base sm:text-lg font-semibold text-white bg-yellow-500 rounded-md shadow-md hover:bg-yellow-600 transition duration-200"
  >
    -
  </button>

  {/* Remove Button */}
  <button
    onClick={handleRemove}
    className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-red-500 rounded-md shadow-md hover:bg-red-600 transition duration-200"
  >
    Remove
  </button>
</div>


    </li>
  );
}

export default CartItem;
