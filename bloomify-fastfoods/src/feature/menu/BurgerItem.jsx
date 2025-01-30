import { formatCurrency } from "../../utitlis/helpers";
/* eslint-disable react/prop-types */

function BurgerItem({ burger }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = burger;

  return (
    <li  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        src={imageUrl}
        alt={name}
         className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 truncate">
          {name}
        </h2>
        <p className="text-sm text-gray-600 mt-1 truncate">
          {ingredients.join(", ")}
        </p>
        <div className="mt-3 flex items-center justify-between">
          {!soldOut ? (
            <p className="text-green-600 font-bold text-lg">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-red-500 font-bold text-lg">Sold Out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default BurgerItem;
