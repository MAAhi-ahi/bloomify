import { useDispatch } from "react-redux"
import { deleteItem } from "../cart/cartSlice";

// eslint-disable-next-line react/prop-types
function DeleteItem({itemId}) {
    const dispatch = useDispatch();
    return (
        <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300" onClick={() => dispatch(deleteItem(itemId ))}>
            Remove from cart
        </button>
    )
}

export default DeleteItem
