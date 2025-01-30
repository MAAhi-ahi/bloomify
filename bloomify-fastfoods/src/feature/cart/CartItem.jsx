/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utitlis/helpers";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
