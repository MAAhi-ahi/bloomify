import { Link } from 'react-router-dom';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-8">
      {/* Back to Menu Link */}
      <Link to="/pizzamenu" className="text-sm text-indigo-600 hover:text-indigo-800">
        &larr; Back to menu
      </Link>

      <h2 className="text-2xl font-semibold text-gray-800 my-4">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.pizzaId} className="flex justify-between items-center border-b pb-2">
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
          className="w-full py-2 text-center bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Order Pizzas
        </Link>
        <button
          className="w-full py-2 bg-gray-400 text-white text-sm rounded-md hover:bg-gray-500 transition duration-300"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
