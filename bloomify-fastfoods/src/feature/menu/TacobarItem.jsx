import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utitlis/helpers";
import { addItem } from "../cart/cartSlice";
/* eslint-disable react/prop-types */

function TacobarItem({ taco }) {
  const {id, name, unitPrice, ingredients, soldOut, imageUrl } = taco;
  const dispatch = useDispatch();

  function handleAddCart() {
    const newItme = {
      itemId: id,
      imageUrl,
      name,
      quantity: 1, 
      unitPrice,
      totalPrice: unitPrice * 1,  
    };
    dispatch(addItem(newItme));
  }

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
        {!soldOut && (
          <button onClick={handleAddCart} className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300">
            Add to Cart
          </button>
        )}
      </div>
    </li>
  );
}

export default TacobarItem;




