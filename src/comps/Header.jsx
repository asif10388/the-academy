import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../state/contexts/userContext";
import { CartContext } from "../state/contexts/cartContext";

import { signOutUser } from "../utils/firebase";

import CartDropdown from "./CartDropdown";
import CartIcon from "./CartIcon";

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center relative">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">The Academy</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/courses" className="mr-5 hover:text-gray-900">
            Courses
          </Link>
          {currentUser ? (
            <Link to="/auth" className="mr-5 hover:text-gray-900" onClick={signOutUser}>
              Sign Out
            </Link>
          ) : (
            <Link to="/auth" className="mr-5 hover:text-gray-900">
              Auth
            </Link>
          )}
          <CartIcon onClick={toggleCart} />
        </nav>
        {isCartOpen && <CartDropdown />}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
