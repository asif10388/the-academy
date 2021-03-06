import { useContext } from "react";

import { CartContext } from "../state/contexts/cartContext";

const CartItem = ({ cartItem }) => {
  const { removeItemsFromCart } = useContext(CartContext);
  return (
    <div className="p-2 flex cursor-pointer border-2 border-gray-100">
      <div className="p-2 w-12">
        <img src={cartItem.imageUrl || ""} alt="img product" />
      </div>
      <div className="flex-auto text-sm w-32">
        <div className="font-bold">{cartItem.title || ""}</div>
        <div className="text-gray-400">
          Qt: {cartItem.quantity} x ${cartItem.price}
        </div>
      </div>
      <div className="flex flex-col w-18 font-medium items-end">
        <button onClick={() => removeItemsFromCart(cartItem)} className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 ">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
        ${cartItem.quantity * cartItem.price}
      </div>
    </div>
  );
};

export default CartItem;
