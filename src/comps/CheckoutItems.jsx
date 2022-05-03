import { useContext } from "react";

import { CartContext } from "../state/contexts/cartContext";

const CheckoutItems = () => {
  const { cartItems, increaseItemQuantity, decreaseItemQuantity, removeItemsFromCart } = useContext(CartContext);
  return (
    <table className="w-full text-sm md:text-base" cellSpacing="0">
      <thead>
        <tr className="h-12 uppercase">
          <th className="hidden md:table-cell"></th>
          <th className="text-left">Product</th>
          <th className="md:text-right text-left pl-5 md:pl-0">
            <span className="md:hidden" title="Quantity">
              Qtd
            </span>
            <span className="hidden md:inline">Quantity</span>
          </th>
          <th className="hidden text-right md:table-cell">Unit price</th>
          <th className="text-right">Total price</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => {
          return (
            <tr key={item.id}>
              <td className="hidden pb-4 md:table-cell">
                <img src={item.imageUrl} className="w-20 rounded" alt="Thumbnail" />
              </td>
              <td>
                <p className="mb-2 md:ml-4">{item.title}</p>
                <button onClick={() => removeItemsFromCart(item)} className="text-gray-700 md:ml-4">
                  <small>(Remove item)</small>
                </button>
              </td>
              <td className="justify-end flex mt-6">
                <svg onClick={() => decreaseItemQuantity(item)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div className="w-20 h-10">
                  <div className="relative flex justify-center w-full h-8">{item.quantity}</div>
                </div>
                <svg onClick={() => increaseItemQuantity(item)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </td>
              <td className="hidden text-right md:table-cell">
                <span className="text-sm md:text-base font-medium">{item.price}</span>
              </td>
              <td className="text-right">
                <span className="text-sm md:text-base font-medium">{item.price * item.quantity}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CheckoutItems;
