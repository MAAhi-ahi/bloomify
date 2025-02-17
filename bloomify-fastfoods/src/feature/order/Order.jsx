// eslint-disable react-hooks/rules-of-hooks 
import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react"; 
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utitlis/helpers";
import OrderNotFound from "./OrderNotFound";
import OrderItem from "./OrderItem";


function Order() {
  const order = useLoaderData();

  console.log("Fetched Order Data:", order);

  if (!order)
    return (
     <OrderNotFound/>
    );

  const  {customer, address,phone, id, status, estimatedDelivery, orderPrice, priority: priorityData, cart,} = order;
  console.log(customer, address, phone);


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [priority, setPriority] = useState(priorityData ?? true); 

  const deliveryIn = estimatedDelivery
    ? calcMinutesLeft(estimatedDelivery)
    : null;

  const priorityPrice = priority ? orderPrice * 0.1 : 0; 


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (priorityData !== undefined && priority !== priorityData) {
      setPriority(priorityData);
    }
  }, [priorityData, priority]); 

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 shadow-lg rounded-2xl mt-14">
      <div className="text-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-orange-600">
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
          <p className="text-lg sm:text-xl font-semibold text-orange-600">
            {deliveryIn !== null && deliveryIn >= 0
              ? `Only ${deliveryIn} minutes left 😃`
              : "Order should have arrived"}
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            (Estimated delivery: {formatDate(estimatedDelivery)})
          </p>
        </div>
      )}
      <div className="mb-6 p-4 bg-red-100 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">Customer Details</h3>
           <p className="text-lg text-gray-700"><strong>Name:</strong> {customer}</p>
           <p className="text-lg text-gray-700"><strong>Address:</strong> {address || "Not provided"}</p>
           <p className="text-lg text-gray-700"><strong>Phone:</strong> {phone || "Not provided"}</p>
      </div>
       <ul className="space-y-4 mb-4">
         {cart.map((item) => (
          <OrderItem item={item} key={item.id} />
        ))}
       </ul>
      <div className="space-y-4 mb-6 p-4 bg-yellow-50 rounded-lg shadow-md">
        <div className="flex justify-between items-center text-lg sm:text-xl text-gray-800">
          <span>Your Price:</span>
          <span className="font-semibold">{formatCurrency(orderPrice)}</span>
        </div>

        {priority && (
          <div className="flex justify-between items-center text-lg sm:text-xl text-gray-800">
            <span>Delivery charge:</span>
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
          className="w-full py-3 px-6 bg-orange-600 text-white rounded-lg font-medium text-lg sm:text-xl hover:bg-orange-700 transition duration-300"
        >
          Track Order
        </button>
      </div>
      <div className="border-b-2 border-gray-300 mt-6 w-full"></div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
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

