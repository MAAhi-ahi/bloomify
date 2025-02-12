import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utitlis/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "./DeleteItem";

/* eslint-disable react/prop-types */

function BurgerItem({ burger }) {
  const {id, name, unitPrice, ingredients, soldOut, imageUrl } = burger;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;
  

  
  function handleAddCart() {
    console.log(id);
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
        {isInCart &&  <DeleteItem itemId={id}/>}
        {!soldOut && !isInCart && (
          <button onClick={handleAddCart} className="mt-4 w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-300">
            Add to Cart
          </button> 
      )} 


      </div>
    </li>
  );
}

export default BurgerItem;
