/* eslint-disable react-refresh/only-export-components */
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiOrder";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utitlis/helpers";
import { fetchAddress } from "../user/userSlice";


const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function CreateOrder() {
  const {
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === 'loading';
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();
 
 

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
            Email address
          </label>
          <input
            type="text"
            name="email"
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
           disabled={isLoadingAddress}
           defaultValue={address}
            type="text"
            name="address"
            required
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-indigo-300"
          />
            {addressStatus === 'error' && (
              <p className="text-red-700 text-sm mt-1">
                {errorAddress}
              </p>
            )}
        </div>
        {!position.latitude && !position.longitude && (
            <span className="mt-2 text-blue-500 hover:text-blue-700">
              <button
                disabled={isLoadingAddress}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                className="mt-2 p-2 w-full border rounded-lg text-blue-500 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Get position
              </button>
            </span>
          )}
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
   store.dispatch(clearCart());
   return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder; 

