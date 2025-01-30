import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utitlis/helpers";

function Order() {
  const order = useLoaderData();
  console.log("Fetched Order Data:", order);

  if (!order)
    return (
      <p className="text-center text-xl text-red-500 font-medium">
        Order not found.
      </p>
    );

  const {
    id,
    status,
    priority = false,
    priorityPrice = 0,
    orderPrice = 0,
    estimatedDelivery,
    // eslint-disable-next-line no-unused-vars
    cart = [],
  } = order;

  const deliveryIn = estimatedDelivery
    ? calcMinutesLeft(estimatedDelivery)
    : null;

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 shadow-lg rounded-2xl mt-14">
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600">
          Order #{id}
        </h2>
        <p className="text-lg sm:text-xl font-semibold text-gray-600 mt-2">
          Tracking your order
        </p>
      </div>

      <div className="mb-6">
        <div className="flex justify-center items-center space-x-3">
          {priority && (
            <span className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-medium">
              Priority
            </span>
          )}
          <span className="text-lg sm:text-xl text-gray-700">
            {status} Order
          </span>
        </div>
      </div>

      {estimatedDelivery && (
        <div className="mb-6">
          <p className="text-lg sm:text-xl font-semibold text-indigo-600">
            {deliveryIn !== null && deliveryIn >= 0
              ? `Only ${deliveryIn} minutes left 😃`
              : "Order should have arrived"}
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            (Estimated delivery: {formatDate(estimatedDelivery)})
          </p>
        </div>
      )}

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center text-lg sm:text-xl text-gray-800">
          <span>Pizza Price:</span>
          <span className="font-semibold">{formatCurrency(orderPrice)}</span>
        </div>

        {priority && (
          <div className="flex justify-between items-center text-lg sm:text-xl text-gray-800">
            <span>Priority Price:</span>
            <span className="font-semibold">
              {formatCurrency(priorityPrice)}
            </span>
          </div>
        )}

        <div className="flex justify-between items-center text-xl sm:text-2xl font-semibold text-gray-800">
          <span>Total To Pay on Delivery:</span>
          <span className="font-bold">
            {formatCurrency(orderPrice + priorityPrice)}
          </span>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={() => alert("You can track your order!")}
          className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg font-medium text-lg sm:text-xl hover:bg-indigo-700 transition duration-300"
        >
          Track Order
        </button>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  try {
    const order = await getOrder(params.orderId);
    return order || null;
  } catch (error) {
    console.error("Failed to load order:", error);
    return null;
  }
}

export default Order;
