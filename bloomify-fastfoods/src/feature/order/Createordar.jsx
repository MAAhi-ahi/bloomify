import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createOrder, updateOrderStatus } from "../../services/apiOrder";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
    boss: "maahi"
  },
];

function CreateOrder() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [orderDetails, setOrderDetails] = useState('');

  const cart = fakeCart;

  const handleStatusUpdate = async () => {
    try {
      const response = await updateOrderStatus(
        orderId,
        status,
        customerEmail,
        customerName,
        phone,
        address,
        orderDetails
      );
      console.log('Order Updated:', response);
    } catch (error) {
      console.error('Failed to update order:', error);
    }
  };

  return (
    <div>
      <h2>Ready to order? Let&apos;s go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="customer"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label>Email</label>
          <div>
            <input
              type="email"
              name="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button type="submit">Order now</button>
        </div>
      </Form>

      <h3>Update Order Status</h3>
      <input
        type="text"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        placeholder="Order ID"
      />
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Order Status (confirmed, pending)"
      />
      <input
        type="text"
        value={customerEmail}
        onChange={(e) => setCustomerEmail(e.target.value)}
        placeholder="Customer Email"
      />
      <input
        type="text"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        placeholder="Customer Name"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Customer Phone"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Delivery Address"
      />
      <textarea
        value={orderDetails}
        onChange={(e) => setOrderDetails(e.target.value)}
        placeholder="Order Details"
      />
      <button onClick={handleStatusUpdate}>Update Order Status</button>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  const updateResponse = await updateOrderStatus(
    newOrder.id,
    "Pending",
    order.email,
    order.customer,
    order.phone,
    order.address,
    order.cart
  );

  if (updateResponse.success) {
    return redirect(`/order/${newOrder.id}`);
  } else {
    return { error: updateResponse.message };
  }
}

export default CreateOrder;


