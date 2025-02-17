// Test ID: IIDSAT

import { getOrderById } from "../../services/apiOrder";
import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
  } from "../../utitlis/helpers";
  
  const order = {
    id: "ABCDEF",
    customer: "Mahi",
    phone: "123456789",
    address: "Dhanbari, Dhaka , Bangladesh",
    priority: true,
    estimatedDelivery: "2025-02-17T07:00:00",
    cart: [
      {
        pizzaId: 7,
        name: "Napoli",
        quantity: 3,
        unitPrice: 16,
        totalPrice: 48,
      },
      {
        pizzaId: 5,
        name: "Diavola",
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
      },
      {
        pizzaId: 3,
        name: "Romana",
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
      },
    ],
    position: "-9.000,38.000",
    orderPrice: 95,
    priorityPrice: 19,
  };
  
  function Order() {
    // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
    const {
      //id,
      status,
      priority,
      priorityPrice,
      orderPrice,
      estimatedDelivery,
      //cart,
    } = order;
    const deliveryIn = calcMinutesLeft(estimatedDelivery);
  
    return (
      <div>
        <div>
          <h2>Status</h2>
  
          <div>
            {priority && <span>Priority</span>}
            <span>{status} order</span>
          </div>
        </div>
  
        <div>
          <p>
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
              : "Order should have arrived"}
          </p>
          <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
        </div>
  
        <div>
          <p>Price pizza: {formatCurrency(orderPrice)}</p>
          {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
          <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
        </div>
      </div>
    );
  }

  // eslint-disable-next-line react-refresh/only-export-components
  export async function loader({params}) {
    const order = await getOrderById(params.orderId);
    return order
    
  }
  
  export default Order;
  