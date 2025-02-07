import { Link } from 'react-router-dom';
import { clearCart, getCart } from './cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from "./EmptyCart";




function Cart() {
  const cart = useSelector(getCart)
  const dispatch = useDispatch()

  if (!cart.length) return <EmptyCart/>

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-8">
     
     <Link to="/menuhighlight" className="text-sm text-blue-600 hover:text-red-800">
      &larr; Back to menu showcase!  <br/> </Link>
      
      <h2 className="text-2xl font-semibold text-gray-800 my-4">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.itemId} className="flex justify-between items-center border-b pb-2">
            <div>
              <h3 className="text-md font-medium text-gray-800">{item.name}</h3>
              <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
            </div>
            <div className="text-md font-semibold text-gray-700">
              {`$${item.totalPrice.toFixed(2)}`}
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="flex justify-between items-center mt-4">
        <span className="text-md font-medium text-gray-800">Total</span>
        <span className="text-lg font-bold text-indigo-600">
          ${cart.reduce((total, item) => total + item.totalPrice, 0).toFixed(2)}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-4 flex space-x-2">
        <Link
          to="/order/new"
          className="w-full py-2 text-center bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition duration-300"
        >
          Order Pizzas
        </Link>
        <button
         onClick={() => dispatch(clearCart())}
          className="w-full py-2 bg-gray-400 text-white text-sm rounded-md hover:bg-gray-500 transition duration-300"
        >
          Clear Cart
        </button>
      </div>
      <div className="border-b-2 border-gray-300 mt-6 w-full"></div>
    </div>
  );
}

export default Cart;
