/* eslint-disable react-refresh/only-export-components */
//import { useState } from "react";

import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiOrder";

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
  // const [withPriority, setWithPriority] = useState(false);
  
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let&aposs go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input type="tel" name="email" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button>Order now</button>
        </div>
      </Form>
    </div>
  );
}


export async function action({request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === "true",
      };
      console.log(order);
      const errors = {};
      if (!isValidPhone(order.phone))
        errors.phone =
          "Please give us your correct phone number. We might need it to contact you.";
      if (Object.keys(errors).length > 0) return errors;

     const newOrder = await createOrder(order);

    return redirect(`/order/${newOrder.id}`);
    
}

export default CreateOrder;


/*export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority === "true",
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
      errors.phone = "Please give us your correct phone number. We might need it to contact you.";
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
  console.log(updateResponse);

  if (updateResponse.success) {
      return redirect(`/order/${newOrder.id}`);
  } else {
      return { error: updateResponse.message };
  }
} 
export default CreateOrder; */