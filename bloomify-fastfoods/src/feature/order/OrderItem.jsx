/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utitlis/helpers";

function OrderItem({ item }) {
  const { quantity, name, totalPrice, toppings = [], size = "Regular" } = item;

  return (
    <li className="flex justify-between items-center p-4 bg-orange-100 rounded-lg shadow-md">
      <div>
        <p className="text-lg font-medium text-gray-800">
          <span className="font-semibold">{quantity}&times;</span> {name} ({size})
        </p>

        {/* Dynamically show toppings if available */}
        {toppings.length > 0 && (
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Toppings:</span> {toppings.join(", ")}
          </p>
        )}
      </div>

      <p className="text-lg font-semibold text-gray-900">
        {formatCurrency(totalPrice)}
      </p>
    </li>
  );
}

export default OrderItem;
