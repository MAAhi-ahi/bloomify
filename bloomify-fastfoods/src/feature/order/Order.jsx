// eslint-disable react-hooks/rules-of-hooks 
/*import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react"; // Import hooks directly here
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

  // Ensure `return` happens only after hooks are called
  if (!order)
    return (
     <OrderNotFound/>
    );

  const  {customer, address,phone, id, status, estimatedDelivery, orderPrice, priority: priorityData, cart,} = order;
  console.log(customer, address, phone);

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

export default Order;  */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { formatCurrency, formatDate } from "../../utitlis/helpers"; // import helper functions
import { getOrder } from "../../services/apiRestaurant";

const socket = io("http://localhost:5006"); // Connect to the backend server

function Order() {
  const { orderId } = useParams(); // Extract the orderId from URL
  const [order, setOrder] = useState(null); // State to store order data
  const [status, setStatus] = useState(""); // Order status
  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // Error state

  useEffect(() => {
    // Fetch order details when component mounts
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`/api/order/${orderId}`);
        
        // Check if the response is ok (status 200)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
  
        // Check if the response content is JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          setOrder(data.order);
          setStatus(data.order.status);
        } else {
          throw new Error("Expected JSON, but got something else.");
        }
      } catch (error) {
        console.error("Error fetching order details:", error);
        // Optionally, set an error state here to show an error message to the user
      }
    };
  
    fetchOrderDetails();

      // Listen for status updates from backend (Socket.io)
      socket.on("order-status-update", (data) => {
        // If the orderId matches, update the status
        if (data.orderId === orderId) {
          setStatus(data.status);
        }
      });
  
      // Cleanup the socket connection when the component unmounts
      return () => {
        socket.off("order-status-update");
      };
  }, [orderId]);
  
  const handleStatusUpdate = async (newStatus) => {
    try {
      const response = await fetch("/update-order-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderId,
          status: newStatus,
          customerName: order.customer,
          customerEmail: order.email,
          orderDetails: order.cart.map((item) => item.name).join(", "),
        }),
      });

      const data = await response.json();
      if (data.success) {
        console.log("Order status updated successfully!");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  // Function to send the order notification
  const sendOrderNotification = async () => {
    setLoading(true); // Set loading state
    setErrorMessage(""); // Reset any previous error

    try {
      const response = await fetch('http://localhost:5006/send-order-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: order.customer,
          customerEmail: order.email,
          orderDetails: order.cart.map((item) => item.name).join(", "),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send order notification');
      }

      const data = await response.json();
      console.log('Order notification sent:', data);
    } catch (error) {
      setErrorMessage(error.message);
      console.error('Error fetching order details:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <div className="order-container">
      <h2>Order #{order.id}</h2>
      <p>Status: {status}</p>
      <div>
        <button onClick={() => handleStatusUpdate("Shipped")}>Mark as Shipped</button>
        <button onClick={() => handleStatusUpdate("Delivered")}>Mark as Delivered</button>
        <button onClick={sendOrderNotification} disabled={loading}>
          {loading ? 'Sending...' : 'Send Order Notification'}
        </button>
      </div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <div>
        <h3>Order Details:</h3>
        <p>Customer: {order.customer}</p>
        <p>Address: {order.address}</p>
        <p>Phone: {order.phone}</p>
        <p>Total Price: {formatCurrency(order.orderPrice)}</p>
        <p>Estimated Delivery: {formatDate(order.estimatedDelivery)}</p>
      </div>
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
