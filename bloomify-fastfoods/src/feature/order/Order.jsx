/* eslint-disable react-hooks/rules-of-hooks */
/*import { useLoaderData } from "react-router-dom";
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
    priority = true,
    estimatedDelivery,
    orderPrice,
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
              {formatCurrency(priority)}
            </span>
          </div>
        )}

        <div className="flex justify-between items-center text-xl sm:text-2xl font-semibold text-gray-800">
          <span>Total To Pay on Delivery:</span>
          <span className="font-bold">
            {formatCurrency(priority + orderPrice)}
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

import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react"; // Import hooks directly here
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utitlis/helpers";

function Order() {
  const order = useLoaderData();
  console.log("Fetched Order Data:", order);

  // Ensure `return` happens only after hooks are called
  if (!order)
    return (
      <p className="text-center text-xl text-red-500 font-medium">
        Order not found.
      </p>
    );

  const { id, status, estimatedDelivery, orderPrice, priority: priorityData } = order;

  // Initialize state unconditionally
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [priority, setPriority] = useState(priorityData ?? true); // Default to priority if it's undefined

  const deliveryIn = estimatedDelivery
    ? calcMinutesLeft(estimatedDelivery)
    : null;

  const priorityPrice = priority ? orderPrice * 0.1 : 0; // Calculate priority price if priority is true

  // Add priority to dependency array of `useEffect` to trigger when it changes
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    // If priorityData is updated, set it in state
    if (priorityData !== undefined && priority !== priorityData) {
      setPriority(priorityData);
    }
  }, [priorityData, priority]); // Add both priorityData and priority to dependencies

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

export default Order;*/


import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react"; // Import hooks directly here
import { getOrder } from "../../services/apiRestaurant";
import { getUserLocation, getAddress } from "../../services/apiGeocoding"; // apiGeoLocation থেকে ফাংশনগুলো ইম্পোর্ট করো
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utitlis/helpers";

function Order() {
  const order = useLoaderData();
  console.log("Fetched Order Data:", order);

  // Ensure `return` happens only after hooks are called
  if (!order)
    return (
      <p className="text-center text-xl text-red-500 font-medium">
        Order not found.
      </p>
    );

  const { id, status, estimatedDelivery, orderPrice, priority: priorityData } = order;

  // Initialize state unconditionally
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [priority, setPriority] = useState(priorityData ?? true); // Default to priority if it's undefined
  const [location, setLocation] = useState(null); // Location state
  const [address, setAddress] = useState(null); // Address state
  const [error, setError] = useState(null); // Error state

  const deliveryIn = estimatedDelivery ? calcMinutesLeft(estimatedDelivery) : null;

  const priorityPrice = priority ? orderPrice * 0.1 : 0; // Calculate priority price if priority is true

  // Fetch location and address when the component mounts
  useEffect(() => {
    // Function to get location and address
    const fetchLocationAndAddress = async () => {
      try {
        const loc = await getUserLocation(); // Get user's location (latitude, longitude)
        setLocation(loc); // Set location state
        const addressData = await getAddress(loc); // Get address based on location
        setAddress(addressData); // Set address state
      } catch (err) {
        setError(err.message); // Set error state if there's an issue
      }
    };

    fetchLocationAndAddress(); // Call the function when component mounts
  }, []); // Empty dependency array, so it runs only once

  // Add priority to dependency array of `useEffect` to trigger when it changes
  useEffect(() => {
    if (priorityData !== undefined && priority !== priorityData) {
      setPriority(priorityData);
    }
  }, [priorityData, priority]); // Add both priorityData and priority to dependencies

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

      {/* Display location and address */}
      {location && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-indigo-600">Your Location:</h3>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}

      {address && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-indigo-600">Your Address:</h3>
          <p>City: {address.city}</p>
          <p>Country: {address.countryName}</p>
          <p>Postal Code: {address.postcode}</p>
        </div>
      )}

      {error && (
        <div className="text-center text-xl text-red-500 font-medium">
          <p>{error}</p>
        </div>
      )}

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

