import { Link } from 'react-router-dom';
import { clearCart, getCart } from './cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from "./EmptyCart";
import CartItem from './CartItem';

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <Link to="/menuhighlight" className="text-sm text-blue-600 hover:text-blue-800">
        &larr; Back To Menu Showcase
      </Link>
      
      <h2 className="text-3xl font-semibold text-gray-800 mt-6">Your Cart</h2>

      {/* Cart Items */}
      <ul className="mt-6 divide-y divide-gray-300 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.itemId} />
        ))}
      </ul>

      {/* Total Price */}
      <div className="flex justify-between items-center mt-6 py-3 bg-gray-100 rounded-lg shadow-md">
        <span className="text-xl font-medium text-gray-800">Total</span>
        <span className="text-2xl font-bold text-orange-600">
          BDT {cart.reduce((total, item) => total + item.totalPrice, 0).toFixed(2)}
        </span>
      </div>

      {/* Actions */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          to="/order/new"
          className='bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 active:bg-orange-700 sm:text-lg md:text-xl'
        >
          Place Order
        </Link>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 active:bg-red-700 sm:text-lg md:text-xl"
        >
          Clear Cart
        </button>
      </div>
      <div className="border-b-2 border-gray-300 mt-8 w-full"></div>
    </div>
  );
}

export default Cart;
