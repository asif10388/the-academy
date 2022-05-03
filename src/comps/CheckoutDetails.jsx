import { useContext } from "react";

import { CartContext } from "../state/contexts/cartContext";

const CheckoutDetails = () => {
  const { total } = useContext(CartContext);
  return (
    <div className="md:px-2 md:w-1/2">
      <div className="p-4 bg-gray-100 rounded-full">
        <h1 className="ml-2 font-bold uppercase">Order Details</h1>
      </div>
      <div className="p-4">
        <div className="flex justify-between border-b">
          <div className="md:px-4 md:py-2 m-2 text-md md:text-xl font-bold text-center text-gray-800">Subtotal</div>
          <div className="md:px-4 md:py-2 m-2 md:text-md font-bold text-center text-gray-900">${total}</div>
        </div>
        <div className="flex justify-between pt-4 border-b">
          <div className="flex items-center md:px-4 md:py-2 m-2 text-md md:text-xl font-bold text-gray-800">
            Coupon "90off"
            <button type="submit" className="ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
          <div className="md:px-4 md:py-2 m-2 md:text-md font-bold text-center text-green-700">0</div>
        </div>
        <div className="flex justify-between pt-4 border-b">
          <div className="md:px-4 md:py-2 m-2 text-md md:text-xl font-bold text-center text-gray-800">Total</div>
          <div className="md:px-4 md:py-2 m-2 md:text-md font-bold text-center text-gray-900">${total}</div>
        </div>
        <button className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <span className="ml-2 mt-5px">Procceed to checkout</span>
        </button>
      </div>
    </div>
  );
};

export default CheckoutDetails;
