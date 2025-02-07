import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utitlis/helpers";
//import { useState } from "react";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  //const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  //const priorityPrice = withPriority ? totalCartPrice * 0.1 : 0;
  //const totalPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST" className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="customer"
            required
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-indigo-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            required
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-indigo-300"
          />
          {formErrors?.phone && (
            <p className="text-red-700">{formErrors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            required
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-indigo-300"
          />
        </div>

       {/* <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
           // checked={withPriority}
            //onChange={(e) => setWithPriority(e.target.checked)} // Fix this line
            className="h-4 w-4 text-indigo-600"
          />
          <label htmlFor="priority" className="text-sm text-gray-700">
            Want to give your order priority?
          </label>
        </div> */}

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 transition"
          >
            {isSubmitting
              ? "Placing order..."
              : `Order now from ${formatCurrency(totalCartPrice)}`}
          </button>
        </div>
      </Form>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
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
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
