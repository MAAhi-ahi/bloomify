import { formatCurrency } from "../../utitlis/helpers";
/* eslint-disable react/prop-types */

function TacobarItem({ taco }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = taco;

  return (
    <li className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div>
        <p className="text-xl font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500 mb-2">{ingredients.join(", ")}</p>
        <div className="flex items-center justify-between">
          {!soldOut ? (
            <p className="text-lg font-bold text-green-600">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-lg font-bold text-red-600">Sold out</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default TacobarItem;
