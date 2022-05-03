import { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../state/contexts/cartContext";

import CartItem from "./CartItem";
import Button from "./Button";

const CartDropdown = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="absolute top-[80%] right-[21%] flex h-64 justify-center">
      <div className="absolute w-full rounded-b z-10">
        <div className="bg-white shadow-xl w-64">
          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item} />
              ))}
            </>
          ) : (
            <div className="px-8"> No Items in Cart!</div>
          )}
          <div className="p-4 justify-center flex">
            <Button buttonType="base">
              <Link to="checkout">Checkout ${total.toFixed(2)}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
